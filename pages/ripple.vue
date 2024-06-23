<!-- pages/index.vue -->
<template>
  <div class="page-background min-h-screen flex items-center justify-center" ref="rippleBackground">
    <!-- blog page body-->
    <div class="bg-gray-600 rounded-lg p-8 md:p-16 lg:p-24 w-full max-w-3xl mx-4">
      <div class="content text-center text-white">
        <!-- blog page title-->
        <h1 class="text-3xl font-bold mb-4">Welcome to Nuxt 3 with jQuery Ripples</h1>
        <!-- blog page content-->
        <span />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const rippleBackground = ref(null);

onMounted(() => {
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  loadScript('/js/jquery.ripples.js')
    .then(() => {
      $(rippleBackground.value).ripples({
        resolution: 320,
        dropRadius: 32,
        perturbance: 0.1,
      });
    })
    .catch(error => console.error('Failed to load the ripples script:', error));
});
</script>

<style scoped>
.page-background {
  background-image: url('/bg.png');
  background-size: cover;
  background-position: center;
}
</style>
