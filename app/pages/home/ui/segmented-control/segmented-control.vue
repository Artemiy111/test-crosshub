<script setup lang="ts">
import Segment, { type SegmentItem } from './segment.vue'

const activeSegment = defineModel<string>({'required': false})

const props = defineProps<{
  items: SegmentItem[]
}>()

function handleSelect(key: string) {
  activeSegment.value = key
}

</script>

<template>
  <div class="rounded-[20px] flex w-full border p-2 border-add-2-gray/10 h-15">
    <Segment v-for="item in props.items"
      :key="item.key"
      :item="item"
      :active="activeSegment === item.key"
      @select="handleSelect"
    />
  </div>
</template>