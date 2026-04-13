<template>
  <div
    class="type-card"
    :class="{ expanded: isExpanded, 'is-highlight': highlight }"
    @click="toggle"
    role="button"
    tabindex="0"
    @keydown.enter="toggle"
    @keydown.space.prevent="toggle"
  >
    <div class="type-card-inner">
      <div class="type-emoji">{{ typeInfo.emoji }}</div>
      <div class="type-code">{{ typeInfo.name }}</div>
      <div class="type-title">{{ typeInfo.title }}</div>
      <p class="type-desc">{{ typeInfo.description }}</p>

      <Transition name="expand">
        <div v-if="isExpanded" class="type-detail">
          <div class="divider"></div>
          <p class="type-detail-text">{{ typeInfo.detail }}</p>

          <div class="type-traits">
            <span v-for="trait in typeInfo.traits" :key="trait" class="trait-tag">{{ trait }}</span>
          </div>

          <div class="type-careers">
            <h4>推荐方向</h4>
            <div class="career-list">
              <span v-for="career in typeInfo.careers" :key="career" class="career-item">
                <span class="career-dot"></span>{{ career }}
              </span>
            </div>
          </div>
        </div>
      </Transition>

      <div class="expand-hint">{{ isExpanded ? '收起 ↑' : '查看详情 ↓' }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  typeInfo: { type: Object, required: true },
  highlight: { type: Boolean, default: false }
})

const isExpanded = ref(false)

function toggle() {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.type-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 24px 20px;
  box-shadow: var(--shadow-sm);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: center;
}

.type-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.type-card.is-highlight {
  border-color: var(--primary);
  background: linear-gradient(135deg, #fff, rgba(99,102,241,0.04));
  box-shadow: 0 0 0 4px rgba(99,102,241,0.15), var(--shadow-md);
}

.type-card.expanded {
  border-color: var(--primary-light);
  background: linear-gradient(135deg, #fff, rgba(99,102,241,0.02));
}

.type-emoji {
  font-size: 2.2rem;
  margin-bottom: 8px;
  display: block;
  line-height: 1;
}

.type-code {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: 0.15em;
  margin-bottom: 4px;
  font-family: 'Courier New', monospace;
}

.type-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}

.type-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

.divider {
  height: 1px;
  background: var(--border);
  margin: 16px 0;
}

.type-detail {
  text-align: left;
  overflow: hidden;
}

.type-detail-text {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 14px;
}

.type-traits {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.trait-tag {
  background: rgba(99,102,241,0.08);
  color: var(--primary);
  padding: 3px 10px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 600;
}

.type-careers h4 {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
}

.career-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.career-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--text);
}

.career-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

.expand-hint {
  font-size: 0.75rem;
  color: var(--text-light);
  margin-top: 14px;
  transition: color 0.2s;
}

.type-card:hover .expand-hint {
  color: var(--primary);
}

/* expand transition */
.expand-enter-active {
  transition: opacity 0.3s ease, max-height 0.4s ease;
  max-height: 600px;
}
.expand-leave-active {
  transition: opacity 0.2s ease, max-height 0.3s ease;
  max-height: 600px;
}
.expand-enter-from {
  opacity: 0;
  max-height: 0;
}
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
