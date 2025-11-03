import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 关键优化配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console.log
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 Laya 相关库单独打包
          laya: ['laya.core', 'laya.webgl'],
          vendor: ['vue', 'react'] // 如果有的话
        }
      }
    }
  },
  base: './', // 确保是相对路径
  server: {
    host: true
  }
})
