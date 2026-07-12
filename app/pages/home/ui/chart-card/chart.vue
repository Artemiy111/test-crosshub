<script setup lang="ts">
import { computed } from 'vue'
import { VisXYContainer, VisLine, VisArea, VisScatter } from '@unovis/vue'

export type Point = { x: number; y: number }

type Props = {
  points: Point[]
  xMin: number
  xMax: number
  yMin: number
  yMax: number
  height?: number
  color: string
}

const props = withDefaults(defineProps<Props>(), {
  height: 72,
})

const gradientId = `chart-gradient-${Math.random().toString(36).slice(2, 9)}`

const gradientDefs = computed(
  () => `
    <linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${props.color}" stop-opacity="0.10" />
      <stop offset="100%" stop-color="${props.color}" stop-opacity="0" />
    </linearGradient>
  `
)

</script>

<template>
  <VisXYContainer
    :data="points"
    width="100%"
    :height="height"
    :x-domain="[xMin, xMax]"
    :y-domain="[yMin, yMax]"
    :svg-defs="gradientDefs"
  >
    <VisArea
      :x="(d: Point) => d.x"
      :y="(d: Point) => d.y"
      :color="`url(#${gradientId})`"
    />
    <VisLine
      :x="(d: Point) => d.x"
      :y="(d: Point) => d.y"
      :line-width="2"
      :color="color"
    />
    <VisScatter
      :x="(d: Point) => d.x"
      :y="(d: Point) => d.y"
      :size="8"
      :color="color"
      stroke-color="#fff"
      :stroke-width="2"
    />
  </VisXYContainer>
</template>

