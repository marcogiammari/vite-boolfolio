<script>

export default {
    name: 'AppHome',
    data() {
        return {
            items: [
                {
                    src: 'https://picsum.photos/id/2/2000/1000',
                },
                {
                    src: 'https://picsum.photos/id/3/2000/1000',
                },
                {
                    src: 'https://picsum.photos/id/4/2000/1000',
                },
                {
                    src: 'https://picsum.photos/id/5/2000/1000',
                },
            ],
        }
    },
}

</script>

<template>
    <main class="flex justify-center items-center flex-col gap-8 bg-inherit text-center">
        <v-carousel cycle height="calc(100vh - 5rem)" :show-arrows="true" hide-delimiters>
            <template v-slot:prev="{ props }">
                <v-btn variant="tonal" color="light" @click="props.onClick"><i class="fa-solid fa-chevron-left"></i></v-btn>
            </template>
            <template v-slot:next="{ props }">
                <v-btn variant="tonal" color="light" @click="props.onClick"><i
                        class="fa-solid fa-chevron-right"></i></v-btn>
            </template>
            <v-carousel-item v-for="(item) in items" :src="item.src" cover></v-carousel-item>
        </v-carousel>
    </main>
</template>


