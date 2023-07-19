<script>
export default {
    name: "AppHeader",
    data() {
        return {
            menuLinks: [
                {
                    label: 'Home',
                    name: 'home'
                },
                {
                    label: 'Projects',
                    name: 'projects'
                },
                {
                    label: 'Error',
                    name: 'error',
                    params: {
                        code: '404'
                    }
                }
            ]
        };
    },

}
</script>

<template>
    <header>
        <nav class="bg-slate-700 px-8 h-[5rem] border-b flex justify-between items-center">
            <h1 class="text-center text-3xl">Boolfolio</h1>

            <ul class="flex gap-4">
                <li v-for="link in menuLinks">
                    <router-link :to="{ name: link.name, params: link.params }">
                        {{ link.label }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
