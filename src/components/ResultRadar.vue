<template>
  <div class="radar-wrap">
    <v-chart class="radar-chart" :option="option" autoresize />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { RadarChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent } from 'echarts/components'

use([CanvasRenderer, RadarChart, TooltipComponent, LegendComponent])

const props = defineProps({
  scores: {
    type: Object,
    required: true
    // { C, S, T, U, I, E, R, F }
  }
})

const option = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    formatter: (params) => {
      const dims = ['构建者', '理论派', '独立性', '严谨性']
      const vals = params.value
      return dims.map((d, i) => `${d}: ${vals[i]}%`).join('<br/>')
    }
  },
  radar: {
    indicator: [
      { name: 'Constructor\n构建者', max: 100, color: '#0071e3' },
      { name: 'Theoretical\n理论派', max: 100, color: '#ff9500' },
      { name: 'Independent\n独立性', max: 100, color: '#34c759' },
      { name: 'Rigorous\n严谨性', max: 100, color: '#32ade6' }
    ],
    center: ['50%', '50%'],
    radius: '68%',
    shape: 'polygon',
    splitNumber: 5,
    axisName: {
      color: '#6e6e73',
      fontSize: 11,
      fontFamily: 'PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(210,210,215,0.8)'
      }
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(248,250,252,0.8)', 'rgba(241,245,249,0.8)']
      }
    },
    axisLine: {
      lineStyle: { color: 'rgba(226,232,240,0.6)' }
    }
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [
            props.scores.C ?? 50,
            props.scores.T ?? 50,
            props.scores.I ?? 50,
            props.scores.R ?? 50
          ],
          name: '你的维度',
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            color: '#0071e3',
            width: 2.5
          },
          areaStyle: {
            color: {
              type: 'radial',
              x: 0.5, y: 0.5, r: 0.5,
              colorStops: [
                { offset: 0, color: 'rgba(0,113,227,0.4)' },
                { offset: 1, color: 'rgba(50,173,230,0.15)' }
              ]
            }
          },
          itemStyle: {
            color: '#0071e3',
            borderColor: '#fff',
            borderWidth: 2
          }
        }
      ],
      animation: true,
      animationDuration: 1000,
      animationEasing: 'elasticOut'
    }
  ]
}))
</script>

<style scoped>
.radar-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.radar-chart {
  width: 100%;
  height: 320px;
  max-width: 400px;
}

@media (max-width: 640px) {
  .radar-chart {
    height: 260px;
  }
}
</style>
