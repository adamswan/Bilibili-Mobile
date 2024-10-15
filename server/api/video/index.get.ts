// get请求 /api/video

import video from "@/database/video";

export default defineEventHandler(() => {
  return video;
});
