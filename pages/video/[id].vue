<template>
  <p>视频:{{ videoId }}</p>
</template>
    
<script setup lang='ts'>
const route = useRoute()
const videoId = route.params.id
console.log('videoId', videoId)
    
</script>
    
<style>
    
</style>