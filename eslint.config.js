import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  stylistic: true,
  ignores: [
    // 忽略 Nuxt 自动生成的文件
    '.nuxt',
    '.output',
    'dist',
    'node_modules',
  ],
  rules: {
    // Nuxt 页面组件通常是单个词，关闭此规则
    'vue/multi-word-component-names': 'off',
    // 允许 console.log 在开发环境中使用
    'no-console': 'warn',
  },
})
