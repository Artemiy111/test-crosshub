<script setup lang="ts">
import { IconChart, IconLungs, IconNoise, IconPressure, IconPulseActive, IconSleep, IconTemperature } from '~/shared/ui/icons'
import { ChartCard, Intro } from './ui';
import type { ChartCardProps } from './ui/chart-card'
import { SegmentedControl, type SegmentItem } from './ui/segmented-control'

const segments: SegmentItem[] = [
  {
    key: '0',
    label: 'Показатели'
  },
  {
    key: '1',
    label: 'Отчёт'
  }
]

const activeSegment = ref('0')

const cardsDateTime = new Date(2026, 6, 28, 11, 49);

const cards: ChartCardProps[] = [
  {
    dateTime: cardsDateTime,
    label: 'Температура',
    value: 23.6,
    state: 'normal',
    icon: IconTemperature,
    chartColor: 'var(--color-add-4-green-dark)',
  },
  {
    dateTime: cardsDateTime,
    label: 'Влажность',
    value: 75,
    unit: '%',
    state: 'above',
    icon: IconPressure,
    chartColor: 'var(--color-add-3-red-dark)'
  },
  {
    dateTime: cardsDateTime,
    label: 'Уровень CO₂',
    value: 720,
    unit: 'ppm',
    state: 'normal',
    icon: IconSleep,
    chartColor: 'var(--color-add-5-yellow-dark)'
  },
  {
    dateTime: cardsDateTime,
    label: 'Освещённость',
    value: 320,
    unit: 'лк',
    state: 'normal',
    icon: IconPulseActive,
    chartColor: 'var(--color-accent-2-blue)'
  },
  {
    dateTime: cardsDateTime,
    label: 'Качество воздуха',
    value: 95,
    state: 'normal',
    icon: IconLungs,
    chartColor: 'var(--color-main-1-dark-gray)'
  },
  {
    dateTime: cardsDateTime,
    label: 'Уровень шума',
    value: 40,
    unit: 'дБ',
    state: 'normal',
    icon: IconNoise,
    chartColor: 'var(--color-chart-pink)'
  },
  {
    dateTime: cardsDateTime,
    label: 'Энергопотребление',
    value: 4.2,
    unit: 'кВт·ч',
    state: 'normal',
    icon: IconChart,
    chartColor: 'var(--color-chart-aqua)'
  },
];

</script>

<template>
  <main class="container flex w-full flex-col gap-y-6 h-fit mb-10">
    <Intro class="mt-7"/>
    <SegmentedControl :items="segments" v-model="activeSegment" />

    <div class="grid grid-cols-2 gap-4 max-[1000px]:grid-cols-1">
      <ChartCard v-for="card in cards" :key="card.label" v-bind="card" />
    </div>
  </main>

</template>