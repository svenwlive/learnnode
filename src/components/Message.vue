<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'placeholder title'
  },
  color: {
    type: String,
    validator(value, props) {
      return ['dark', 'primary', 'link', 'info', 'success', 'warning', 'danger'].includes(value);
    }
  },
  size: {
    type: String,
    validator(value, props) {
      return ['small', 'normal', 'medium', 'large'].includes(value);
    },
    default: 'normal'
  }
});
</script>
<template>
    <article class="message" :class="[color ? `is-${color}` : '', size ? `is-${size}` : '']">
        <div v-if="title" class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <slot></slot>
        </div>
    </article>
</template>