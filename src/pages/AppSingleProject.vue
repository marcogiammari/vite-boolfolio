<script>
import { store } from '../store.js';
import axios from "axios";
export default {
    name: "AppProjects",
    components: {
    },
    data() {
        return {
            store,
            projectsApiPath: "projects/",
            loading: false,
            loadingError: false,
            project: {},
        };
    },
    methods: {
        getProject(id) {
            this.loading = true;
            axios.get(this.store.apiUrl + this.projectsApiPath + id)
                .then((response) => {
                    this.project = response.data.results;
                    this.loading = false;
                    console.log(this.project);
                })
                .catch((error) => {
                    this.loading = false;
                    this.loadingError = error.message;
                    console.log(error);
                    this.$router.push({ name: "error", params: { code: '404' } })
                });
        },
    },
    mounted() {
        this.getProject(this.$route.params.id);
    },
    beforeRouteUpdate(to, from) {
        console.log(to, from);
        if (from.name == to.name) {
            this.getProject(to.params.id)
        }
    }
};
</script>

<template>
    <main class="flex justify-center items-center flex-col gap-8 bg-inherit text-center mb-20">
        <div>
            <div class="h-12 flex justify-center">
                <h3 v-if="loading">

                    <div role="status">
                        <svg aria-hidden="true"
                            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>

                </h3>
                <h3 v-if="loadingError">{{ loadingError }}</h3>
            </div>
        </div>



        <div class="container flex justify-center gap-8 items-stretch">
            <div class="w-full border flex justify-center items-center bg-white text-black rounded">
                <div class="w-1/2">
                    <img :src="'http://127.0.0.1:8000/storage/' + project.image" :alt="project.name">
                </div>
                <div class="w-1/2 text-center flex flex-col gap-1">
                    <h3 class="text-2xl font-mono">{{ project.name }}</h3>
                    <p><span v-for="stack in project.stacks" class="mx-1 italic">{{ stack.name }}</span></p>
                    <p class="text-sm px-2">{{ project.description }}</p>
                </div>
            </div>
        </div>
        <div class="flex gap-2">
            <router-link v-if="project.id > 1" :to="{
                name: 'show-project', params: { id: project.id - 1 }
            }"><button type="button"
                    class="inline-block w-48 rounded bg-blue-500 px-6 pb-2 pt-2.5 my-3 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                    Previous
                </button></router-link>
            <router-link v-if="project.id < this.store.projectsTotal" :to="{
                name: 'show-project', params: { id: project.id + 1 }
            }"><button type="button"
                    class="inline-block w-48 rounded bg-blue-500 px-6 pb-2 pt-2.5 my-3 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                    Next
                </button></router-link>

        </div>
    </main>
</template>

<style scoped></style>
