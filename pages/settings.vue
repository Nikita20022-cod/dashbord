<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

type Theme = 'light' | 'dark'

type PreferencesSettings = {
  theme: Theme
  notifications: boolean
}

type ProfileSettings = {
  name: string
  email: string
}

const STORAGE_KEY = 'app-settings'

const preferences = ref<PreferencesSettings>({
  theme: 'light',
  notifications: true
})

const profile = ref<ProfileSettings>({
  name: 'John Doe',
  email: 'john@example.com'
})

onMounted(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (parsed.preferences) preferences.value = parsed.preferences
      if (parsed.profile) profile.value = parsed.profile
    }
  } catch (e) {
    console.warn('Failed to load settings from localStorage', e)
  }

  document.documentElement.classList.toggle('dark', preferences.value.theme === 'dark')
})

function saveSettings() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        preferences: preferences.value,
        profile: profile.value
      })
    )
  } catch {}
}

watch(
  preferences,
  (newVal) => {
    document.documentElement.classList.toggle('dark', newVal.theme === 'dark')
    saveSettings()
  },
  { deep: true }
)

watch(profile, () => saveSettings(), { deep: true })
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold dark:text-white">Settings</h1>

    <ClientOnly>
      <SettingsProfileForm v-model="profile" />
      <SettingsPreferencesForm v-model="preferences" />
    </ClientOnly>
  </div>
</template>