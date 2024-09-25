import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig as defineVitestConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 전역 테스트 함수 사용
    environment: 'jsdom', // DOM 테스트를 위한 jsdom 환경 사용
  },
});