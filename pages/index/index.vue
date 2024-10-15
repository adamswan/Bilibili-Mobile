<template>
  <van-sticky>
    <!-- 公共头部 -->
    <AppHeader />

    <!-- 频道模块 -->
    <van-tabs>
      <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
    </van-tabs>
  </van-sticky>

  <!-- 视频列表 -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="去 bilibili App 看更多"
    @load="onLoad"
  >
    <div class="video-list">
      <AppVideo v-for="item in list" :key="item.bvid" :item="item"></AppVideo>
    </div>
  </van-list>
</template>

<script setup lang="ts">
import type { VideoItem } from "@/types/video";
// 频道列表
const { data: channelList } = await useFetch("/api/channel");
// console.log(`频道列表`, channelList);

// 视频列表
const { data: videoList } = await useFetch("/api/video");
// console.log(`视频列表`, videoList);

// 页面显示的视频列表
const list = ref<VideoItem[]>([]);

// 加载状态
const loading = ref(false);

// 是否加载完整
const finished = ref(false);

// 页码
let page = 1;
// 页面容量
let pageSize = 10;

// 滚动触底
const onLoad = () => {
  console.log(`onLoad`);

  loading.value = false;

  // 提取部分数据
  const data = videoList.value?.slice(
    (page - 1) * pageSize,
    page * pageSize
  ) as VideoItem[];

  list.value.push(...data);

  page++;

  if (videoList.value?.length === list.value.length) {
    finished.value = true;
  }
};
// 首次加载，让搜索引擎抓取数据
onLoad();
</script>

<style lang="scss" scoped>
// 视频列表
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>
