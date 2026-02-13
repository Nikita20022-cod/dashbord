
<template>
  <div class="md:flex min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- dekstop menu -->
    <LayoutSidebarMenu class="hidden md:block" />
    <!-- burger menu -->
    <LayoutBurgerMenu/>
    <!-- main content -->
    <main class="flex-1 p-6">
      <p class="text-green-600 text-lg md:text-2xl font-bold mb-5">
        Source code <a class="text-blue-400" target="_blank" href="https://github.com/Nikita20022-cod/dashbord">https://github.com/Nikita20022-cod/dashbord</a>
      </p>
      <slot />
    </main>
  </div>
</template>