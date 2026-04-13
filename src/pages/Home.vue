<template>
  <div class="home">
    <!-- Nav -->
    <nav class="nav">
      <div class="container nav-inner">
        <span class="nav-logo">CETI</span>
        <div class="nav-links">
          <RouterLink to="/" class="nav-link active">首页</RouterLink>
          <RouterLink to="/types" class="nav-link">全部类型</RouterLink>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="grid-lines"></div>
      </div>

      <div class="container hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          40 题 · 4 维度 · 16 种类型
        </div>

        <h1 class="hero-title">
          <span class="title-line">发现你的</span>
          <span class="title-ceti">
            <span class="title-letter" style="--i:0">C</span><span class="title-letter" style="--i:1">E</span><span class="title-letter" style="--i:2">T</span><span class="title-letter" style="--i:3">I</span>
          </span>
          <span class="title-line">程序员人格</span>
        </h1>

        <p class="hero-subtitle">
          Computer Engineering Type Indicator<br/>
          <span>基于 4 个核心维度，精准定位你在工程世界中的位置</span>
        </p>

        <div class="hero-actions">
          <RouterLink to="/quiz" class="btn btn-primary btn-lg">
            🚀 开始测试
          </RouterLink>
          <RouterLink to="/types" class="btn btn-ghost btn-lg">
            查看全部类型
          </RouterLink>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">40</span>
            <span class="stat-label">道题目</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">4</span>
            <span class="stat-label">个维度</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">16</span>
            <span class="stat-label">种类型</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">~8min</span>
            <span class="stat-label">完成时间</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Dimensions -->
    <section class="dims-section">
      <div class="container">
        <h2 class="section-title">四大核心维度</h2>
        <p class="section-sub">每个维度对应工程师在关键场景下的倾向性选择</p>

        <div class="dims-grid">
          <div class="dim-card" v-for="dim in dimensions" :key="dim.code">
            <div class="dim-icon" :style="{ background: dim.bg }">{{ dim.icon }}</div>
            <div class="dim-meta">
              <div class="dim-code">{{ dim.code }}</div>
              <div class="dim-vs">
                <span class="dim-left" :style="{ color: dim.leftColor }">{{ dim.left }}</span>
                <span class="dim-arrow">vs</span>
                <span class="dim-right" :style="{ color: dim.rightColor }">{{ dim.right }}</span>
              </div>
              <p class="dim-desc">{{ dim.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Types Preview -->
    <section class="types-preview">
      <div class="container">
        <h2 class="section-title">部分类型预览</h2>
        <p class="section-sub">你是哪种程序员？完成测试后揭晓</p>

        <div class="preview-grid">
          <div class="preview-card" v-for="t in previewTypes" :key="t.name">
            <span class="preview-emoji">{{ t.emoji }}</span>
            <div>
              <div class="preview-code">{{ t.name }}</div>
              <div class="preview-title">{{ t.title }}</div>
            </div>
          </div>
        </div>

        <div class="cta-center">
          <RouterLink to="/quiz" class="btn btn-primary btn-lg">
            立即开始测试 →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>CETI — Computer Engineering Type Indicator</p><br>
         <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer"
     style="display:inline-flex;align-items:center;color:inherit;text-decoration:none;">
    赣ICP备2025074193号
  </a><br>
        <p>作者B站：<a href="https://space.bilibili.com/472170134" target="_blank">@星鸿SeRazon</a></p><br>
        <p class="footer-sub">仅供娱乐，结果不代表任何专业评估</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const dimensions = [
  {
    code: 'C / S',
    icon: '⚙️',
    bg: 'linear-gradient(135deg, #e3f2ff, #cce4ff)',
    left: 'Constructor',
    leftColor: '#0071e3',
    arrow: 'vs',
    right: 'Strategist',
    rightColor: '#0062c5',
    desc: '你是先动手写代码，还是先规划架构蓝图？'
  },
  {
    code: 'T / U',
    icon: '📚',
    bg: 'linear-gradient(135deg, #fff5e6, #ffeabb)',
    left: 'Theoretical',
    leftColor: '#c06800',
    arrow: 'vs',
    right: 'Utilitarian',
    rightColor: '#ff9500',
    desc: '你追求深层原理，还是偏爱实用主义？'
  },
  {
    code: 'I / E',
    icon: '👥',
    bg: 'linear-gradient(135deg, #edfff3, #d3f9e2)',
    left: 'Independent',
    leftColor: '#1f8c3e',
    arrow: 'vs',
    right: 'Ensemble',
    rightColor: '#34c759',
    desc: '你倾向独立深潜，还是团队协作共创？'
  },
  {
    code: 'R / F',
    icon: '🛡️',
    bg: 'linear-gradient(135deg, #e3f5fd, #c3eafc)',
    left: 'Rigorous',
    leftColor: '#007aad',
    arrow: 'vs',
    right: 'Flexible',
    rightColor: '#32ade6',
    desc: '你严格执行规范，还是灵活快速迭代？'
  }
]

const previewTypes = [
  { name: 'CTIR', emoji: '🧙', title: '算法大魔导师' },
  { name: 'CUIF', emoji: '🚀', title: '极速原型机' },
  { name: 'STER', emoji: '📊', title: '技术总监型' },
  { name: 'SUEF', emoji: '🎉', title: '创业合伙人' },
  { name: 'CTEF', emoji: '🎓', title: '开源布道者' },
  { name: 'STIF', emoji: '💡', title: '创意架构师' },
]
</script>

<style scoped>
.home { overflow-x: hidden; }

/* ---- Hero ---- */
.hero {
  position: relative;
  padding: 80px 0 100px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
}

.blob-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #99c9ff, transparent 70%);
  top: -200px; left: -100px;
  animation: float 8s ease-in-out infinite;
}

.blob-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, #5ac8fa, transparent 70%);
  top: -100px; right: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

.blob-3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, #a8d8ff, transparent 70%);
  bottom: 0; left: 50%;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -20px) scale(1.05); }
  66% { transform: translate(-10px, 10px) scale(0.95); }
}

.grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,113,227,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,113,227,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0,113,227,0.07);
  border: 1px solid rgba(0,113,227,0.18);
  color: var(--primary);
  padding: 6px 16px;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 28px;
  backdrop-filter: blur(8px);
}

.badge-dot {
  width: 8px; height: 8px;
  background: var(--primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.7; }
}

.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.title-line {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}

.title-ceti {
  display: flex;
  gap: 6px;
}

.title-letter {
  font-size: clamp(3rem, 10vw, 5.5rem);
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  animation: letterIn 0.5s ease both;
  animation-delay: calc(var(--i) * 0.1s);
}

@keyframes letterIn {
  from { opacity: 0; transform: translateY(20px) scale(0.8); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 36px;
}

.hero-subtitle span {
  font-size: 0.9rem;
  color: var(--text-light);
}

.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 16px 32px;
  display: inline-flex;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
}

.stat-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 4px;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: var(--border);
}

/* ---- Sections ---- */
.dims-section {
  padding: 80px 0;
  background: var(--bg-card);
}

.section-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--text);
  text-align: center;
  margin-bottom: 8px;
}

.section-sub {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 48px;
  font-size: 0.95rem;
}

.dims-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.dim-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  transition: all 0.2s;
}

.dim-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.dim-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.dim-meta { flex: 1; }

.dim-code {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 4px;
}

.dim-vs {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.dim-arrow {
  font-size: 0.7rem;
  color: var(--text-light);
  font-weight: 400;
}

.dim-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

/* ---- Types Preview ---- */
.types-preview {
  padding: 80px 0;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}

.preview-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s;
}

.preview-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: var(--primary-light);
}

.preview-emoji { font-size: 1.8rem; }

.preview-code {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: 0.1em;
  font-family: 'Courier New', monospace;
}

.preview-title {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.cta-center { text-align: center; }

/* ---- Footer ---- */
.footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 32px 0;
  text-align: center;
}

.footer p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-sub {
  font-size: 0.8rem !important;
  color: var(--text-light) !important;
  margin-top: 4px;
}

@media (max-width: 640px) {
  .hero { padding: 60px 0 80px; }
  .hero-stats { padding: 12px 16px; }
  .stat { padding: 0 12px; }
  .stat-num { font-size: 1.2rem; }
  .dims-section, .types-preview { padding: 60px 0; }
}
</style>
