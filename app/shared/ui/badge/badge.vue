<script setup lang="ts">

export type BadgeColor = 'green' | 'red'

export type BadgeProps = {
  color: BadgeColor,
  label: string
}

const props = defineProps<BadgeProps>()

const colorClass = computed(() => {
  switch (props.color) {
    case 'green':
      return 'text-add-4-green-dark bg-add-4-green/15'
    case 'red':
      return 'text-add-3-red-dark bg-add-3-red/15'
  }
})

</script>

<template>
  <div class="rounded-2xl inline-grid justify-center items-center h-5 px-2.5 text-caption-1 font-medium" :class="colorClass">
    {{ props.label }}
  </div>
</template>