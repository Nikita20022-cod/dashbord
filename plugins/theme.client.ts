export default defineNuxtPlugin(() => {
  const STORAGE_KEY = 'app-settings'

  if (process.client) {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (saved) {
      try {
        const settings = JSON.parse(saved)
        if (settings.preferences?.theme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } catch (e) {
        console.warn('Invalid theme settings')
      }
    }
  }
})