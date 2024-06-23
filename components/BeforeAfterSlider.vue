<template>
  <div class="relative w-full mx-auto overflow-hidden" @mousedown="startDragging" @touchstart="startDragging">
    <div class="relative w-full">
      <img :src="afterSrc" class="w-full absolute top-0 left-0" :style="{ clipPath: clipPathValue }"
        draggable="false" />
      <img :src="beforeSrc" class="w-full" draggable="false" />
    </div>
    <div v-if="showLabels" class="absolute bottom-4 left-0 w-full flex items-center justify-between px-4">
      <span class="text-white font-bold text-lg bg-black bg-opacity-50 p-2 rounded">Before</span>
      <input type="range" min="0" max="100" v-model="sliderValue"
        class="w-3/4 mx-4 appearance-none bg-transparent slider" @mousedown.stop />
      <span class="text-white font-bold text-lg bg-black bg-opacity-50 p-2 rounded">After</span>
    </div>
    <input v-else type="range" min="0" max="100" v-model="sliderValue"
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 appearance-none bg-transparent slider"
      @mousedown.stop />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  beforeSrc: {
    type: String,
    required: true,
  },
  afterSrc: {
    type: String,
    required: true,
  },
  showLabels: {
    type: Boolean,
    default: false
  },
});

const sliderValue = ref(50);
const isDragging = ref(false);

const clipPathValue = computed(() => `inset(0 0 0 ${sliderValue.value}%)`);

const startDragging = (event) => {
  isDragging.value = true;
  updateSliderValue(event);
  event.preventDefault();  // Prevent default drag behavior
};

const stopDragging = () => {
  isDragging.value = false;
};

const drag = (event) => {
  if (isDragging.value) {
    updateSliderValue(event);
    event.preventDefault();  // Prevent default drag behavior
  }
};

const updateSliderValue = (event) => {
  const sliderElement = document.querySelector('.slider');
  const rect = sliderElement.parentElement.getBoundingClientRect();
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const newValue = ((clientX - rect.left) / rect.width) * 100;
  sliderValue.value = Math.min(100, Math.max(0, newValue));
};

const updateSliderValueGlobal = (event) => {
  if (isDragging.value) {
    const sliderElement = document.querySelector('.slider');
    const rect = sliderElement.parentElement.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const newValue = ((clientX - rect.left) / rect.width) * 100;
    sliderValue.value = Math.min(100, Math.max(0, newValue));
    event.preventDefault();
  }
};

onMounted(() => {
  window.addEventListener('mousemove', updateSliderValueGlobal);
  window.addEventListener('touchmove', updateSliderValueGlobal);
  window.addEventListener('mouseup', stopDragging);
  window.addEventListener('touchend', stopDragging);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateSliderValueGlobal);
  window.removeEventListener('touchmove', updateSliderValueGlobal);
  window.removeEventListener('mouseup', stopDragging);
  window.removeEventListener('touchend', stopDragging);
});
</script>

<style scoped>
.slider {
  @apply [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-50;
}
</style>
