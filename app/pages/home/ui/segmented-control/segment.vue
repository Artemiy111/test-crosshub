<script setup lang="ts">
export type SegmentItem = {
  key: string
  label: string
}

const props = defineProps<{
  item: SegmentItem
  active?: boolean
}>()

const emits = defineEmits<{
  'select': [key: string]
}>()

</script>

<template>
  <button class="rounded-2xl cursor-pointer flex justify-center items-center w-full h-full" :class="[ props.active ? 'text-text-primary bg-add-2-gray/5': 'text-text-secondary' ]"
   @click="emits('select', props.item.key)"
  >
    {{ props.item.label }}
</button>
</template>
