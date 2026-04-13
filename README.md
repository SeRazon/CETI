# CETI — Computer Engineering Type Indicator

> 发现你的程序员人格类型 | Discover Your Developer Personality Type

CETI is a personality assessment tool for software engineers, inspired by MBTI but grounded in real engineering scenarios. Answer 40 questions across 4 dimensions to find your unique type from 16 possible profiles.

## ✨ Features

- **40 scenario-based questions** across 4 engineering dimensions
- **16 unique personality types** with detailed descriptions, traits, and career suggestions
- **ECharts radar chart** for visualizing dimension scores
- **Animated UI** with smooth transitions
- **Mobile-first responsive** design
- Pure CSS — no UI library

## 🧭 The 4 Dimensions

| Dimension | Left Pole | Right Pole | Question |
|-----------|-----------|------------|----------|
| **C/S** | Constructor | Strategist | Do you code first or plan first? |
| **T/U** | Theoretical | Utilitarian | Do you pursue principles or pragmatism? |
| **I/E** | Independent | Ensemble | Do you work solo or thrive in teams? |
| **R/F** | Rigorous | Flexible | Do you enforce standards or iterate fast? |

## 🚀 Tech Stack

- **Vue 3** + Composition API
- **Vite 5** (build tool)
- **Vue Router 4** (client-side routing)
- **Pinia** (state management)
- **ECharts 5** + **vue-echarts** (radar chart)
- Pure CSS (no UI library)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── main.js              # App entry
├── App.vue              # Root component
├── router/index.js      # Route definitions
├── assets/main.css      # Global styles
├── components/
│   ├── QuestionCard.vue # Individual question with A/B options
│   ├── ProgressBar.vue  # Multi-step progress indicator
│   ├── ResultRadar.vue  # ECharts radar chart
│   └── TypeCard.vue     # Expandable type card
├── pages/
│   ├── Home.vue         # Landing page
│   ├── Quiz.vue         # 4-page quiz (10 questions each)
│   ├── Result.vue       # Result reveal with radar chart
│   └── Types.vue        # All 16 types grid with filter/search
├── data/
│   ├── questions.js     # 40 questions with dimension mapping
│   └── typesInfo.js     # 16 type descriptions
└── store/index.js       # Pinia store (answers, scoring, result)
```

## 🎨 Design

- Primary: `#6366f1` (Indigo)
- Accent: `#06b6d4` (Cyan)
- Background: `#f8fafc` (Light gray)
- Clean cards, smooth animations, mobile-first

---

*仅供娱乐，结果不代表任何专业评估。*
