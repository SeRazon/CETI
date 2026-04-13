<template>
  <div class="types-page">
    <!-- Nav -->
    <nav class="nav">
      <div class="container nav-inner">
        <RouterLink to="/" class="nav-logo">CETI</RouterLink>
        <div class="nav-links">
          <RouterLink to="/" class="nav-link">首页</RouterLink>
          <RouterLink to="/quiz" class="btn btn-primary btn-sm">开始测试</RouterLink>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <section class="types-header">
      <div class="container">
        <h1 class="types-title">全部 16 种类型</h1>
        <p class="types-sub">CETI 通过 4 个维度的组合，描绘出 16 种独特的程序员人格画像</p>

        <!-- Filter -->
        <div class="filter-bar">
          <button
            v-for="f in filters"
            :key="f.key"
            class="filter-btn"
            :class="{ active: activeFilter === f.key }"
            @click="activeFilter = f.key"
          >
            {{ f.label }}
          </button>

          <div class="search-wrap">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜索类型..."
              class="search-input"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Grid -->
    <div class="container types-body">
      <div class="types-grid">
        <TypeCard
          v-for="t in filteredTypes"
          :key="t.id"
          :type-info="t"
          :highlight="t.id === userResultType"
        />
      </div>

      <div v-if="filteredTypes.length === 0" class="empty-state">
        <span class="empty-icon">🔍</span>
        <p>没有找到匹配的类型</p>
        <button class="btn btn-ghost btn-sm" @click="searchQuery = ''; activeFilter = 'all'">清除筛选</button>
      </div>
    </div>

    <!-- Your result hint -->
    <div v-if="userResultType" class="result-hint container">
      <div class="hint-card">
        <span>🎯</span>
        <span>你的测试结果是 <strong>{{ userResultType }}</strong>，已在上方高亮显示</span>
        <RouterLink to="/result" class="btn btn-primary btn-sm">查看详情</RouterLink>
      </div>
    </div>

    <!-- Dimension reference -->
    <section class="dim-ref">
      <div class="container">
        <h2 class="section-title">维度说明</h2>
        <div class="dim-ref-grid">
          <div class="dim-ref-card" v-for="d in dimRef" :key="d.code">
            <div class="dim-ref-header">
              <span class="dim-ref-code">{{ d.left.code }}</span>
              <span class="dim-ref-sep">vs</span>
              <span class="dim-ref-code">{{ d.right.code }}</span>
            </div>
            <div class="dim-ref-names">
              <span>{{ d.left.name }}</span>
              <span>{{ d.right.name }}</span>
            </div>
            <p class="dim-ref-desc">{{ d.desc }}</p>
          </div>
        </div>
      </div>
    </section>

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
import { ref, computed } from 'vue'
import { typesInfo } from '@/data/typesInfo'
import { useQuizStore } from '@/store'
import TypeCard from '@/components/TypeCard.vue'

const store = useQuizStore()
const searchQuery = ref('')
const activeFilter = ref('all')

const userResultType = computed(() => {
  if (store.completed) return store.result?.type
  return null
})

const filters = [
  { key: 'all', label: '全部' },
  { key: 'C', label: '构建者 (C)' },
  { key: 'S', label: '策略家 (S)' },
  { key: 'T', label: '理论派 (T)' },
  { key: 'U', label: '实用派 (U)' },
  { key: 'I', label: '独立者 (I)' },
  { key: 'E', label: '协作者 (E)' },
  { key: 'R', label: '严谨者 (R)' },
  { key: 'F', label: '灵活者 (F)' },
]

const filteredTypes = computed(() => {
  let result = typesInfo

  if (activeFilter.value !== 'all') {
    result = result.filter(t => t.id.includes(activeFilter.value))
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(t =>
      t.id.toLowerCase().includes(q) ||
      t.title.includes(q) ||
      t.description.includes(q) ||
      t.traits?.some(tr => tr.includes(q))
    )
  }

  return result
})

const dimRef = [
  {
    left: { code: 'C', name: 'Constructor 构建者' },
    right: { code: 'S', name: 'Strategist 策略家' },
    desc: '先动手实现，还是先规划设计？代码优先 vs 架构优先。'
  },
  {
    left: { code: 'T', name: 'Theoretical 理论派' },
    right: { code: 'U', name: 'Utilitarian 实用派' },
    desc: '追求底层原理与算法之美，还是以解决问题为核心？'
  },
  {
    left: { code: 'I', name: 'Independent 独立者' },
    right: { code: 'E', name: 'Ensemble 协作者' },
    desc: '独自深潜高效工作，还是在团队协作中激发最大潜能？'
  },
  {
    left: { code: 'R', name: 'Rigorous 严谨者' },
    right: { code: 'F', name: 'Flexible 灵活者' },
    desc: '严格执行规范、测试和流程，还是灵活快速迭代交付？'
  }
]
</script>

<style scoped>
.types-page { min-height: 100vh; background: var(--bg); }

.types-header {
  padding: 48px 0 32px;
  background: linear-gradient(180deg, #f0f4ff 0%, var(--bg) 100%);
}

.types-title {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 8px;
}

.types-sub {
  color: var(--text-muted);
  margin-bottom: 28px;
  font-size: 0.95rem;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.filter-btn {
  padding: 6px 14px;
  border-radius: 99px;
  border: 1.5px solid var(--border);
  background: var(--bg-card);
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font);
}

.filter-btn:hover {
  border-color: var(--primary-light);
  color: var(--primary);
}

.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.search-wrap {
  margin-left: auto;
}

.search-input {
  padding: 7px 14px;
  border-radius: 99px;
  border: 1.5px solid var(--border);
  background: var(--bg-card);
  font-size: 0.85rem;
  color: var(--text);
  font-family: var(--font);
  transition: all 0.2s;
  width: 180px;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0,113,227,0.12);
}

.types-body {
  padding: 32px 20px;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 20px;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.empty-icon { font-size: 2.5rem; }

.result-hint {
  padding: 0 20px 32px;
}

.hint-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(0,113,227,0.05);
  border: 1px solid rgba(0,113,227,0.15);
  border-radius: var(--radius-lg);
  padding: 16px 20px;
  font-size: 0.9rem;
  color: var(--text);
  flex-wrap: wrap;
}

.hint-card strong { color: var(--primary); }

.hint-card .btn { margin-left: auto; }

/* Dim ref */
.dim-ref {
  padding: 60px 0;
  background: var(--bg-card);
}

.section-title {
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  font-weight: 800;
  color: var(--text);
  text-align: center;
  margin-bottom: 32px;
}

.dim-ref-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.dim-ref-card {
  padding: 20px;
  background: var(--bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.dim-ref-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
}

.dim-ref-code {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--primary);
  font-family: 'Courier New', monospace;
}

.dim-ref-sep {
  font-size: 0.75rem;
  color: var(--text-light);
}

.dim-ref-names {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.dim-ref-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.6;
  text-align: center;
  margin: 0;
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

@media (max-width: 640px) {
  .search-wrap { width: 100%; }
  .search-input { width: 100%; }
  .hint-card .btn { margin-left: 0; width: 100%; }
}
</style>
