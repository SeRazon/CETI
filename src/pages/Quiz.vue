<template>
  <div class="quiz-page">
    <!-- Nav -->
    <nav class="nav">
      <div class="container nav-inner">
        <RouterLink to="/" class="nav-logo">CETI</RouterLink>
        <button class="btn btn-ghost btn-sm" @click="confirmReset">重新开始</button>
      </div>
    </nav>

    <div class="container quiz-container">
      <!-- Progress -->
      <ProgressBar
        :answered="store.answeredCount"
        :total="store.totalQuestions"
        :percent="store.progress"
        :current-page="store.currentPage"
      />

      <!-- Page title -->
      <div class="page-header">
        <div class="page-title-wrap">
          <span class="page-num">第 {{ store.currentPage + 1 }} / 4 页</span>
          <h2 class="page-title">{{ pageTitle }}</h2>
        </div>
        <div class="page-complete" v-if="store.isCurrentPageComplete">
          <span class="complete-icon">✓</span> 本页已完成
        </div>
      </div>

      <!-- Questions -->
      <TransitionGroup name="list" tag="div" class="questions-list">
        <QuestionCard
          v-for="question in currentQuestions"
          :key="question.id"
          :question="question"
          :selected-answer="store.answers[question.id]"
          @select="store.setAnswer"
        />
      </TransitionGroup>

      <!-- Navigation -->
      <div class="quiz-nav">
        <button
          class="btn btn-ghost"
          @click="store.prevPage()"
          :disabled="store.currentPage === 0"
        >
          ← 上一页
        </button>

        <div class="nav-page-info">
          <span v-if="!store.isCurrentPageComplete" class="incomplete-hint">
            还有 {{ unansweredCount }} 题未答
          </span>
        </div>

        <button
          v-if="store.currentPage < 3"
          class="btn btn-primary"
          @click="nextPage"
          :class="{ 'btn-disabled': !store.isCurrentPageComplete }"
        >
          下一页 →
        </button>

        <button
          v-else
          class="btn btn-primary"
          @click="finish"
          :disabled="!store.answeredCount === store.totalQuestions"
          :class="{ 'btn-finish': allDone }"
        >
          {{ allDone ? '🎉 查看结果' : `还剩 ${store.totalQuestions - store.answeredCount} 题` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/store'
import { questions } from '@/data/questions'
import ProgressBar from '@/components/ProgressBar.vue'
import QuestionCard from '@/components/QuestionCard.vue'

const store = useQuizStore()
const router = useRouter()

const pageTitles = [
  '构建者 vs 策略家 (C/S)',
  '理论派 vs 实用派 (T/U)',
  '独立者 vs 协作者 (I/E)',
  '严谨者 vs 灵活者 (R/F)'
]

const pageTitle = computed(() => pageTitles[store.currentPage])

const currentQuestions = computed(() => {
  const start = store.currentPage * 10
  return questions.slice(start, start + 10)
})

const unansweredCount = computed(() => {
  return currentQuestions.value.filter(q => !store.answers[q.id]).length
})

const allDone = computed(() => store.answeredCount === store.totalQuestions)

function nextPage() {
  if (!store.isCurrentPageComplete) {
    // Scroll to first unanswered
    const firstUnanswered = currentQuestions.value.find(q => !store.answers[q.id])
    if (firstUnanswered) {
      const el = document.getElementById(`q-${firstUnanswered.id}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    return
  }
  store.nextPage()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function finish() {
  if (allDone.value) {
    store.finish()
    router.push('/result')
  } else {
    // Go to first incomplete page
    for (let p = 0; p < 4; p++) {
      const pageQs = questions.slice(p * 10, p * 10 + 10)
      if (pageQs.some(q => !store.answers[q.id])) {
        store.currentPage = p
        window.scrollTo({ top: 0, behavior: 'smooth' })
        break
      }
    }
  }
}

function confirmReset() {
  if (confirm('确定要重新开始吗？所有答题记录将被清除。')) {
    store.reset()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.quiz-page {
  min-height: 100vh;
  background: var(--bg);
}

.quiz-container {
  padding-top: 32px;
  padding-bottom: 60px;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}

.page-num {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 4px;
}

.page-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text);
}

.page-complete {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(16,185,129,0.1);
  color: #059669;
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 600;
}

.complete-icon {
  font-weight: 900;
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.list-enter-active, .list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.quiz-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 0;
  border-top: 1px solid var(--border);
}

.nav-page-info {
  flex: 1;
  text-align: center;
}

.incomplete-hint {
  font-size: 0.85rem;
  color: var(--text-light);
}

.btn-disabled {
  opacity: 0.6;
}

.btn-finish {
  background: linear-gradient(135deg, #059669, #10b981) !important;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4) !important;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .quiz-container { padding-top: 20px; }
  .page-title { font-size: 1rem; }
}
</style>
