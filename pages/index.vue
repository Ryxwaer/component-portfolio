<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mb-8">Component Portfolio</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <nuxt-link v-for="component in components" :key="component.name" :to="component.link"
                class="p-4 border rounded-lg text-center hover:bg-gray-200">
                {{ component.name }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            components: [
                { name: 'Before/After slider', link: '/slider' },
                { name: 'Ripple effect', link: '/ripple' },
                // Add more components as needed
            ],
        };
    },
};
</script>