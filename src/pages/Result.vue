<template>
  <div class="result-page">
    <!-- Nav -->
    <nav class="nav">
      <div class="container nav-inner">
        <RouterLink to="/" class="nav-logo">CETI</RouterLink>
        <RouterLink to="/types" class="nav-link">全部类型</RouterLink>
      </div>
    </nav>

    <!-- Guard: redirect if no result -->
    <div v-if="!store.completed" class="no-result container">
      <p>你还没有完成测试。</p>
      <RouterLink to="/quiz" class="btn btn-primary">前往答题</RouterLink>
    </div>

    <template v-else>
      <!-- Hero Result -->
      <section class="result-hero">
        <div class="result-hero-bg">
          <div class="rblob rblob-1"></div>
          <div class="rblob rblob-2"></div>
        </div>

        <div class="container result-hero-content">
          <div class="result-label">你的 CETI 类型是</div>

          <div class="result-type-display" :class="{ revealed }">
            <span
              v-for="(letter, i) in typeLetters"
              :key="i"
              class="type-letter-big"
              :style="{ '--delay': i * 0.15 + 's' }"
            >{{ letter }}</span>
          </div>

          <div class="result-emoji-title" :class="{ revealed }">
            <span class="result-emoji">{{ typeInfo?.emoji }}</span>
            <span class="result-title-text">{{ typeInfo?.title }}</span>
          </div>

          <p class="result-desc-short">{{ typeInfo?.description }}</p>
        </div>
      </section>

      <!-- Main Content -->
      <div class="container result-body">
        <div class="result-grid">
          <!-- Radar -->
          <div class="card radar-card">
            <h3 class="card-title">维度分析</h3>
            <ResultRadar :scores="store.result.scores" />
            <div class="scores-list">
              <div class="score-row" v-for="s in scorePairs" :key="s.left.key">
                <div class="score-pair-label">
                  <span>{{ s.left.label }}</span>
                  <span>{{ s.right.label }}</span>
                </div>
                <div class="score-bar-wrap">
                  <div class="score-bar-fill left" :style="{ width: s.left.val + '%' }"></div>
                  <div class="score-bar-center"></div>
                  <div class="score-bar-fill right" :style="{ width: s.right.val + '%' }"></div>
                </div>
                <div class="score-pair-vals">
                  <span>{{ s.left.val }}%</span>
                  <span>{{ s.right.val }}%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Info -->
          <div class="result-info">
            <div class="card info-card">
              <h3 class="card-title">类型详解</h3>
              <p class="info-detail">{{ typeInfo?.detail }}</p>
            </div>

            <div class="card traits-card">
              <h3 class="card-title">性格特征</h3>
              <div class="traits-grid">
                <div class="trait-item" v-for="t in typeInfo?.traits" :key="t">
                  <span class="trait-icon">⚡</span>
                  <span>{{ t }}</span>
                </div>
              </div>
            </div>

            <div class="card careers-card">
              <h3 class="card-title">推荐发展方向</h3>
              <div class="careers-list">
                <div class="career-row" v-for="(c, i) in typeInfo?.careers" :key="c">
                  <span class="career-rank">{{ i + 1 }}</span>
                  <span class="career-name">{{ c }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Type comparison row -->
        <div class="card comparison-card">
          <h3 class="card-title">你的四维结果</h3>
          <div class="comparison-grid">
            <div
              v-for="dim in dimensionResults"
              :key="dim.code"
              class="comp-item"
              :class="{ winner: dim.isWinner }"
            >
              <div class="comp-letters">
                <span :class="{ active: dim.isWinner }">{{ dim.code[0] }}</span>
                <span class="comp-vs">vs</span>
                <span :class="{ active: !dim.isWinner }">{{ dim.code[2] }}</span>
              </div>
              <div class="comp-bar">
                <div class="comp-fill-a" :style="{ flex: dim.scoreA }"></div>
                <div class="comp-fill-b" :style="{ flex: dim.scoreB }"></div>
              </div>
              <div class="comp-name">{{ dim.isWinner ? dim.nameA : dim.nameB }}</div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="result-actions">
          <button class="btn btn-secondary" @click="retake">🔄 重新测试</button>
          <RouterLink to="/types" class="btn btn-ghost">📋 查看所有类型</RouterLink>
          <button class="btn btn-primary" @click="shareResult">🔗 分享结果</button>
        </div>
      </div>
    </template>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>CETI — Computer Engineering Type Indicator</p>
        <p class="footer-sub">仅供娱乐，结果不代表任何专业评估</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/store'
import { getTypeById } from '@/data/typesInfo'
import ResultRadar from '@/components/ResultRadar.vue'

const store = useQuizStore()
const router = useRouter()
const revealed = ref(false)

const typeInfo = computed(() => {
  if (!store.completed) return null
  return getTypeById(store.result.type)
})

const typeLetters = computed(() => store.result?.type?.split('') ?? [])

const scorePairs = computed(() => {
  const s = store.result?.scores || {}
  return [
    { left: { key: 'C', label: 'Constructor', val: s.C ?? 50 }, right: { key: 'S', label: 'Strategist', val: s.S ?? 50 } },
    { left: { key: 'T', label: 'Theoretical', val: s.T ?? 50 }, right: { key: 'U', label: 'Utilitarian', val: s.U ?? 50 } },
    { left: { key: 'I', label: 'Independent', val: s.I ?? 50 }, right: { key: 'E', label: 'Ensemble', val: s.E ?? 50 } },
    { left: { key: 'R', label: 'Rigorous', val: s.R ?? 50 }, right: { key: 'F', label: 'Flexible', val: s.F ?? 50 } },
  ]
})

const dimensionResults = computed(() => {
  const s = store.result?.scores || {}
  return [
    { code: 'C/S', scoreA: s.C, scoreB: s.S, nameA: 'Constructor', nameB: 'Strategist', isWinner: s.C >= s.S },
    { code: 'T/U', scoreA: s.T, scoreB: s.U, nameA: 'Theoretical', nameB: 'Utilitarian', isWinner: s.T >= s.U },
    { code: 'I/E', scoreA: s.I, scoreB: s.E, nameA: 'Independent', nameB: 'Ensemble', isWinner: s.I >= s.E },
    { code: 'R/F', scoreA: s.R, scoreB: s.F, nameA: 'Rigorous', nameB: 'Flexible', isWinner: s.R >= s.F },
  ]
})

onMounted(() => {
  setTimeout(() => { revealed.value = true }, 200)
})

function retake() {
  store.reset()
  router.push('/quiz')
}

function shareResult() {
  const text = `我在 CETI 测试中得到了 ${store.result.type} — ${typeInfo.value?.emoji} ${typeInfo.value?.title}！`
  if (navigator.share) {
    navigator.share({ title: 'CETI 测试结果', text })
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text + ' ' + window.location.href)
    alert('结果已复制到剪贴板！')
  }
}
</script>

<style scoped>
.result-page { min-height: 100vh; background: var(--bg); }

.no-result {
  padding: 80px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: var(--text-muted);
}

/* ---- Hero ---- */
.result-hero {
  position: relative;
  padding: 64px 0 80px;
  overflow: hidden;
  background: linear-gradient(180deg, #f0f4ff 0%, var(--bg) 100%);
}

.result-hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.rblob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
}
.rblob-1 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, #a5b4fc, transparent 70%);
  top: -100px; right: -100px;
}
.rblob-2 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, #67e8f9, transparent 70%);
  bottom: -50px; left: 10%;
}

.result-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.result-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
}

.result-type-display {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}

.type-letter-big {
  font-size: clamp(3.5rem, 12vw, 6rem);
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: translateY(30px) scale(0.8);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--delay);
  font-family: 'Courier New', monospace;
  letter-spacing: -0.02em;
}

.result-type-display.revealed .type-letter-big {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.result-emoji-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease 0.7s;
}

.result-emoji-title.revealed {
  opacity: 1;
  transform: translateY(0);
}

.result-emoji { font-size: 2.5rem; }

.result-title-text {
  font-size: clamp(1.3rem, 4vw, 2rem);
  font-weight: 800;
  color: var(--text);
}

.result-desc-short {
  color: var(--text-muted);
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

/* ---- Body ---- */
.result-body {
  padding: 40px 20px 60px;
}

.result-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

/* Radar card */
.radar-card {
  display: flex;
  flex-direction: column;
}

.scores-list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.score-row {}

.score-pair-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 4px;
}

.score-bar-wrap {
  display: flex;
  height: 8px;
  border-radius: 99px;
  overflow: hidden;
  background: var(--border);
  gap: 2px;
}

.score-bar-fill {
  border-radius: 99px;
  transition: width 1s ease;
}

.score-bar-fill.left {
  background: linear-gradient(90deg, var(--primary), var(--primary-light));
}

.score-bar-fill.right {
  background: linear-gradient(90deg, var(--accent), #67e8f9);
}

.score-pair-vals {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: var(--text-light);
  margin-top: 3px;
}

/* Info cards */
.result-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-detail {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin: 0;
}

.traits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.trait-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text);
  background: rgba(99,102,241,0.06);
  padding: 8px 12px;
  border-radius: var(--radius);
}

.trait-icon { font-size: 0.9rem; }

.careers-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.career-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--bg);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.career-rank {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.career-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}

/* Comparison */
.comparison-card {
  margin-bottom: 24px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.comp-item {
  padding: 16px;
  background: var(--bg);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.2s;
}

.comp-item.winner {
  border-color: var(--primary-light);
  background: rgba(99,102,241,0.04);
}

.comp-letters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 10px;
  font-family: 'Courier New', monospace;
}

.comp-letters span { color: var(--text-light); }
.comp-letters span.active { color: var(--primary); }
.comp-vs { font-size: 0.65rem; color: var(--text-light); font-weight: 400; font-family: var(--font); }

.comp-bar {
  display: flex;
  height: 6px;
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 8px;
}

.comp-fill-a {
  background: var(--primary);
  transition: flex 0.5s ease;
}

.comp-fill-b {
  background: var(--border);
  transition: flex 0.5s ease;
}

.comp-name {
  font-size: 0.7rem;
  color: var(--primary);
  font-weight: 600;
}

/* Actions */
.result-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;
}

/* Footer */
.footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 32px 0;
  text-align: center;
}
.footer p { color: var(--text-muted); font-size: 0.9rem; }
.footer-sub { font-size: 0.8rem !important; color: var(--text-light) !important; margin-top: 4px; }

@media (max-width: 768px) {
  .result-grid {
    grid-template-columns: 1fr;
  }
  .comparison-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .traits-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .comparison-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
