
<template>
  <div class="md:flex min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- dekstop menu -->
    <LayoutSidebarMenu class="hidden md:block" />
    <!-- burger menu -->
    <LayoutBurgerMenu/>
    <!-- main content -->
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>