import { defineStore } from 'pinia'
import { questions } from '@/data/questions'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    answers: {},      // { questionId: 'A' | 'B' }
    currentPage: 0,   // 0-3 (4 pages of 10 questions each)
    completed: false
  }),

  getters: {
    totalQuestions: () => questions.length,

    answeredCount: (state) => Object.keys(state.answers).length,

    currentPageAnswers: (state) => {
      const start = state.currentPage * 10 + 1
      const end = start + 10
      return questions
        .filter(q => q.id >= start && q.id < end)
        .reduce((acc, q) => {
          acc[q.id] = state.answers[q.id]
          return acc
        }, {})
    },

    isCurrentPageComplete: (state) => {
      const start = state.currentPage * 10 + 1
      const end = start + 10
      return questions
        .filter(q => q.id >= start && q.id < end)
        .every(q => state.answers[q.id] !== undefined)
    },

    progress: (state) => {
      return Math.round((Object.keys(state.answers).length / questions.length) * 100)
    },

    // Compute result type
    result: (state) => {
      const dims = { CS: { C: 0, S: 0 }, TU: { T: 0, U: 0 }, IE: { I: 0, E: 0 }, RF: { R: 0, F: 0 } }

      questions.forEach(q => {
        const answer = state.answers[q.id]
        if (!answer) return
        const chosen = answer === 'A' ? q.options.A.value : q.options.B.value
        const dim = q.dimension
        dims[dim][chosen]++
      })

      const csTotal = dims.CS.C + dims.CS.S || 1
      const tuTotal = dims.TU.T + dims.TU.U || 1
      const ieTotal = dims.IE.I + dims.IE.E || 1
      const rfTotal = dims.RF.R + dims.RF.F || 1

      const scores = {
        C: Math.round((dims.CS.C / csTotal) * 100),
        S: Math.round((dims.CS.S / csTotal) * 100),
        T: Math.round((dims.TU.T / tuTotal) * 100),
        U: Math.round((dims.TU.U / tuTotal) * 100),
        I: Math.round((dims.IE.I / ieTotal) * 100),
        E: Math.round((dims.IE.E / ieTotal) * 100),
        R: Math.round((dims.RF.R / rfTotal) * 100),
        F: Math.round((dims.RF.F / rfTotal) * 100)
      }

      const cs = dims.CS.C >= 6 ? 'C' : 'S'
      const tu = dims.TU.T >= 6 ? 'T' : 'U'
      const ie = dims.IE.I >= 6 ? 'I' : 'E'
      const rf = dims.RF.R >= 6 ? 'R' : 'F'

      return {
        type: `${cs}${tu}${ie}${rf}`,
        scores,
        raw: dims
      }
    }
  },

  actions: {
    setAnswer(questionId, choice) {
      this.answers[questionId] = choice
    },

    nextPage() {
      if (this.currentPage < 3) {
        this.currentPage++
      }
    },

    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--
      }
    },

    finish() {
      this.completed = true
    },

    reset() {
      this.answers = {}
      this.currentPage = 0
      this.completed = false
    }
  }
})
