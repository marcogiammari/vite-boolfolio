<script>
import axios from "axios";
export default {
    name: "AppMain",
    data() {
        return {
            apiUrl: "http://localhost:8000/api/",
            projectsApiPath: "projects",
            loading: false,
            loadingError: false,
            projects: [],
            projectsCurrentPage: 0,
            projectsPages: 0,
        };
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
        getProjects() {
            this.loading = true;
            axios
                .get(this.apiUrl + this.projectsApiPath)
                .then((response) => {
                    this.projects = response.data.results;
                    console.log(this.projects);
                    this.loading = false;
                    this.projectsCurrentPage =
                        response.data.results.current_page;
                    this.projectsPages = response.data.results.last_page;
                })
                .catch((error) => {
                    this.loading = false;
                    this.loadingError = error.message;
                });
        },

    },
    mounted() {
        this.getProjects();
    },
};
</script>

<template>
    <main class="flex justify-center items-center flex-col gap-8 bg-inherit">
        <div>
            <h2 class="text-xl">My Projects</h2>
            <hr />
            <h3 v-if="loading">Loading......</h3>
            <h3 v-if="loadingError">{{ loadingError }}</h3>
            <hr />
            <h4 v-if="projectsPages > 0">
                Page {{ projectsCurrentPage }} of {{ projectsPages }}
            </h4>
        </div>



        <div class="container flex flex-wrap justify-center gap-8 items-stretch">
            <div class="w-1/5 border flex flex-col items-center justify-between gap-6 bg-white h-100 text-black rounded"
                v-for="project in projects">
                <div>
                    <h4 class="text-xl p-3">{{ project.name }}</h4>
                    <img class="w-100 h-80 object-cover" :src="'http://localhost:8000/storage/' + project.image" alt="" />
                    <p v-if="project.type">{{ project.type.name }}</p>
                </div>
                <div class="flex justify-center items-center">
                    <a :href="project.link"><button @click="" type="button"
                            class="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 my-3 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                            Visit Website
                        </button></a>
                </div>

            </div>

        </div>

    </main>
</template>

<style scoped></style>
