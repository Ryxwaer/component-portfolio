<template>
    <div class="bg-gray-800">
        <header class="bg-gray-800 text-white p-4">
            <div class="container mx-auto">
                <nuxt-link to="/" class="text-xl font-bold">Component Portfolio</nuxt-link>
            </div>
        </header>
        <slot />
        <footer class="bg-gray-800 text-white p-4 mt-8">
            <div class="container mx-auto text-center">
                © 2024 Component Portfolio
            </div>
        </footer>
    </div>
</template>