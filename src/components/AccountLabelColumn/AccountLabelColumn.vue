<template>
  <div :class="['account-list__column', `account-list__column--${columnKey}`]">
    <a-tooltip placement="top" :title="tooltip">
      <span class="account-list__column-title">{{ title }}</span>
    </a-tooltip>
  </div>
</template>

<script setup lang="ts">
defineProps({
  columnKey: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tooltip: {
    type: String,
    required: true
  }
})
</script>