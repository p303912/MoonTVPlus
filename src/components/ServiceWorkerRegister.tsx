'use client';

import { useEffect } from 'react';

/**
 * 注册站点的 Service Worker（/push-sw.js），开启本地缓存：
 * 静态文件和页面壳子存到本地，下次打开直接读本地，不用再走慢网重新下载。
 * 同一个文件也负责 Web Push 和离线视频缓存，只注册一次即可。
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('/push-sw.js').catch(() => {
      // 注册失败不影响页面使用（比如隐私模式），静默忽略。
    });
  }, []);

  return null;
}
