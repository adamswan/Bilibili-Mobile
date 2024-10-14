<template>
  <!-- 相当于router-link -->
  <NuxtLink to="/">首页</NuxtLink>
  <NuxtLink to="/video">视频</NuxtLink>

  <!-- 相当于是router-view -->
  <NuxtPage />
</template>

<script setup lang="ts">
// 设置seo信息
useSeoMeta({
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  description: '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。. 大家可以在这里找到许多欢乐。.',
  keywords: '哔哩哔哩,哔哩哔哩官网,哔哩哔哩动画,哔哩哔哩番剧,哔哩哔哩动画官网,哔哩哔哩番剧官网,哔哩哔哩动画官网,哔哩哔哩番剧官网,哔哩哔哩动画官网,哔哩哔哩番剧官网'
})

</script>