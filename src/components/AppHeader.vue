<script>
export default {
    name: "AppHeader",
    data() {
        return {
            menuLinks: [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'Projects',
                    path: '/projects'
                }
            ]
        };
    },

}
</script>

<template>
    <header>
        <nav class="px-8 h-[5rem] border-b flex justify-between items-center">
            <h1 class="text-center text-3xl">Boolfolio</h1>

            <ul class="flex gap-4">
                <li v-for="link in menuLinks">
                    <router-link :to="link.path">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>