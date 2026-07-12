<script setup lang="ts">
import type { Component } from 'vue'
import { IconAdd } from '~/shared/ui/icons'
import { Badge } from '~/shared/ui/badge'
import Chart from './chart.vue'

type State = 'below' | 'normal' | 'above'

export type ChartCardProps = {
  dateTime: Date,
  label: string
  value: number
  unit?: string
  state: State
  icon: Component
  chartColor: string
}

const props = defineProps<ChartCardProps>()

function formatDate(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')

  const day = pad(date.getDate())
  const month = pad(date.getMonth() + 1)
  const year = date.getFullYear()
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())

  return `${day}.${month}.${year} - ${hours}:${minutes}`
}

console.log(formatDate(new Date())) // 28.07.2026 - 11:49

function formatState(state: State) {
  switch (state) {
    case 'below':
      return 'Ниже нормы'
    case 'normal':
      return 'В норме'
    case 'above':
      return 'Выше нормы'
  }
}

</script>

<template>
  <div
    class="chart-card relative overflow-clip grid grid-cols-[auto_1fr_1fr_auto] items-center gap-x-4 rounded-2xl border border-add-2-gray/10 p-4">
    <div class="h-full absolute left-0 inset-y-0 w-1 bg-accent-1-digital-lime"></div>

    <div class="[grid-area:icon] rounded-xl w-fit bg-add-1-greish-white grid p-3">
      <props.icon />
    </div>

    <div class="[grid-area:content] flex w-full flex-col gap-y-1 text-nowrap">
      <span class="text-caption-1 font-semibold text-main-1-dark-gray">{{ formatDate(props.dateTime) }}</span>

      <div class="space-x-2">
        <span class="text-title-4 font-semibold">
          <span>{{ props.value }}</span> <span v-if="props.unit">{{ unit }}</span>
        </span>
        <Badge :color="props.state === 'normal' ? 'green' : 'red'" :label="formatState(props.state)" />
      </div>
      <span class="text-body-2 text-text-secondary">{{ props.label }}</span>
    </div>

    <Chart class="[grid-area:chart]" :points="[
      { x: 1, y: 22 },
      { x: 4, y: 20 },
      { x: 15, y: 24.5 },
      { x: 22, y: 23.6 },
    ]" :x-min="1" :x-max="22" :y-min="15" :y-max="30" :color="props.chartColor" />
   
   <button class="[grid-area:button] aspect-square p-2.5 cursor-pointer">
      <IconAdd />
    </button>

  </div>
</template>

<style scoped>

.chart-card {
  grid-template-areas: "icon content chart button";

  @media screen and (width <= 728px) {
      grid-template-areas:
      "icon content button"
      "chart chart chart";
      grid-template-columns: auto 1fr auto;
  }
}
</style>