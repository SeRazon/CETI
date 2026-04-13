<template>
  <div class="progress-wrap">
    <div class="progress-header">
      <span class="progress-label">答题进度</span>
      <span class="progress-count">{{ answered }} / {{ total }}</span>
    </div>
    <div class="progress-track" role="progressbar" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-fill" :style="{ width: percent + '%' }">
        <span class="progress-shine"></span>
      </div>
    </div>
    <div class="progress-steps">
      <div
        v-for="page in 4"
        :key="page"
        class="progress-step"
        :class="{ active: currentPage >= page - 1, current: currentPage === page - 1 }"
      >
        <span class="step-dot"></span>
        <span class="step-label">{{ pageLabels[page - 1] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  answered: { type: Number, required: true },
  total: { type: Number, required: true },
  percent: { type: Number, required: true },
  currentPage: { type: Number, required: true }
})

const pageLabels = ['C/S', 'T/U', 'I/E', 'R/F']
</script>

<style scoped>
.progress-wrap {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.progress-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

.progress-count {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary);
}

.progress-track {
  height: 8px;
  background: var(--border);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 16px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border-radius: 99px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.progress-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shine 2s ease-in-out infinite;
}

@keyframes shine {
  0% { left: -60%; }
  100% { left: 120%; }
}

.progress-steps {
  display: flex;
  gap: 0;
  justify-content: space-between;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
  position: relative;
}

.progress-step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 6px;
  left: calc(50% + 8px);
  right: calc(-50% + 8px);
  height: 2px;
  background: var(--border);
  transition: background 0.3s;
}

.progress-step.active:not(:last-child)::after {
  background: var(--primary-light);
}

.step-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--border);
  border: 2px solid var(--bg-card);
  transition: all 0.3s;
  z-index: 1;
}

.progress-step.active .step-dot {
  background: var(--primary-light);
}

.progress-step.current .step-dot {
  background: var(--primary);
  box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.18);
  transform: scale(1.2);
}

.step-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--text-light);
  letter-spacing: 0.05em;
  transition: color 0.3s;
}

.progress-step.active .step-label {
  color: var(--primary);
}
</style>
