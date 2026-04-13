<template>
  <div class="question-card" :class="{ 'has-answer': selectedAnswer }">
    <div class="question-header">
      <div class="question-meta">
        <span class="question-num">Q{{ question.id }}</span>
        <span class="badge" :class="badgeClass">{{ question.dimension }}</span>
        <span class="difficulty" :title="`难度 ${question.difficulty}`">
          <span v-for="i in 3" :key="i" class="star" :class="{ filled: i <= question.difficulty }">★</span>
        </span>
      </div>
    </div>

    <p class="question-text">{{ question.text }}</p>

    <div class="options">
      <button
        v-for="(opt, key) in question.options"
        :key="key"
        class="option-btn"
        :class="{ selected: selectedAnswer === key }"
        @click="select(key)"
      >
        <span class="option-key">{{ key }}</span>
        <span class="option-text">{{ opt.text }}</span>
        <span class="option-check">✓</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  question: { type: Object, required: true },
  selectedAnswer: { type: String, default: null }
})

const emit = defineEmits(['select'])

const badgeClass = computed(() => {
  const map = { CS: 'badge-cs', TU: 'badge-tu', IE: 'badge-ie', RF: 'badge-rf' }
  return map[props.question.dimension] || ''
})

function select(key) {
  emit('select', props.question.id, key)
}
</script>

<style scoped>
.question-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  animation: cardIn 0.3s ease both;
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.question-card.has-answer {
  border-color: rgba(99, 102, 241, 0.15);
  background: linear-gradient(135deg, #fff, rgba(99, 102, 241, 0.02));
}

.question-header {
  margin-bottom: 14px;
}

.question-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.question-num {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--text-light);
  letter-spacing: 0.05em;
}

.difficulty {
  display: flex;
  gap: 1px;
  margin-left: auto;
}

.star {
  font-size: 0.7rem;
  color: var(--border);
}
.star.filled {
  color: #f59e0b;
}

.question-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 16px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-btn {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius);
  border: 2px solid var(--border);
  background: var(--bg);
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  font-family: var(--font);
  position: relative;
  overflow: hidden;
}

.option-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99,102,241,0.05), transparent);
  opacity: 0;
  transition: opacity 0.2s;
}

.option-btn:hover {
  border-color: var(--primary-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.option-btn:hover::before {
  opacity: 1;
}

.option-btn.selected {
  border-color: var(--primary);
  background: linear-gradient(135deg, rgba(99,102,241,0.08), rgba(99,102,241,0.03));
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.option-key {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--border);
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s;
}

.option-btn.selected .option-key {
  background: var(--primary);
  color: #fff;
}

.option-text {
  font-size: 0.9rem;
  color: var(--text);
  line-height: 1.5;
  flex: 1;
  padding-top: 4px;
}

.option-check {
  color: var(--primary);
  font-size: 1rem;
  font-weight: 700;
  opacity: 0;
  transition: opacity 0.2s;
  flex-shrink: 0;
  padding-top: 4px;
}

.option-btn.selected .option-check {
  opacity: 1;
}

@media (max-width: 640px) {
  .question-card { padding: 18px; }
  .question-text { font-size: 0.95rem; }
  .option-text { font-size: 0.85rem; }
}
</style>
