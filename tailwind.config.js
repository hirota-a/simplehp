module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',   // Next.js App Routerの場合
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rocksalt: ['var(--font-rock-salt)'], // カスタムフォント
      },
    },
  },
  plugins: [],
}