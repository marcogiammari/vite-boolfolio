<script>
export default {
    name: "AppCard",
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
    <div class="flex gap-2 font-mono italic">
        <div v-if="project.stacks.length > 0" v-for="stack in project.stacks">
            <span>{{ stack.name }}</span>
        </div>
        <p class="text-sm" v-else>Stack Not Available</p>
    </div>

    <div class="flex flex-col justify-center items-center">
        <router-link :to="{
            name: 'show-project', params: { id: project.id }
        }"><button type="button"
                class="inline-block w-48 rounded bg-blue-500 px-6 pb-2 pt-2.5 my-3 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                Show Project
            </button></router-link>

        <a :href="project.link"><button type="button"
                class="inline-block w-48 rounded bg-blue-500 px-6 pb-2 pt-2.5 mb-3 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                Visit Website
            </button></a>
    </div>
</template>