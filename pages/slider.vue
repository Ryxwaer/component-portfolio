<template>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center">
        <!-- Header Section -->
        <header class="w-full py-12 text-center bg-gray-800 shadow-lg">
            <h1 class="text-5xl font-extrabold">Before/After slider</h1>
            <p class="text-2xl mt-4 font-light">Customizable Nuxt 3 component</p>
        </header>

        <!-- Before/After Component Section -->
        <main class="flex-grow w-full max-w-4xl my-12 px-6">
            <BeforeAfterSlider beforeSrc="/images/before.png" afterSrc="/images/after.png" />
        </main>

        <!-- Footer Section -->
        <footer class="w-full py-6 text-center bg-gray-800 shadow-lg">
            <a href="https://github.com/Ryxwaer/SIS_Improvements" target="_blank" rel="noopener noreferrer"
                class="text-blue-400 hover:text-blue-500 text-lg">
                GitHub Repository
            </a>
        </footer>
    </div>
</template>