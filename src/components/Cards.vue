<script setup>

defineProps({
  title : String,
  cases: Number,
})

</script>

<template>
  <div class="bg-indigo-50 font-bold">
    <span> {{ title }}</span>
    <h1>
        {{ cases }}
    </h1>
  </div>
</template>
