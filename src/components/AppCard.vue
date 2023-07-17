<script>
export default {
    name: "AppMain",
    props: {
        project: Object
    },
    data() {
        return {
        };
    },

}
</script>

<template>
    <div>
        <h4 class="text-xl p-3">{{ project.name }}</h4>
        <img class="w-100 h-80 object-cover" :src="'http://localhost:8000/storage/' + project.image" alt="" />
    </div>
    <div class="flex gap-3">
        <div v-if="project.stacks.length > 0" v-for="stack in project.stacks">
            <span>{{ stack.name }}</span>
        </div>
        <p class="text-sm" v-else>Stack Not Available</p>
    </div>
    <div class="flex justify-center items-center">
        <a :href="project.link"><button @click="" type="button"
                class="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 my-3 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                Visit Website
            </button></a>
    </div>
</template>