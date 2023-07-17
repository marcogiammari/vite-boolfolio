<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
export default {
    name: "AppMain",
    components: {
        AppCard
    },
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
        getProjects() {
            this.loading = true;
            axios.get(this.apiUrl + this.projectsApiPath)
                .then((response) => {
                    this.projects = response.data.results.data;
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
        nextPage() {
            if (this.projectsCurrentPage < this.projectsPages) {
                let config = {
                    params: {
                        page: this.projectsCurrentPage + 1,
                    },
                };

                axios.get(this.apiUrl + this.projectsApiPath, config)
                    .then((response) => {
                        this.projects = response.data.results.data;
                        this.loading = false;
                        this.projectsCurrentPage =
                            response.data.results.current_page;
                        this.projectsPages = response.data.results.last_page;
                    }).catch((error) => {
                        this.loading = false;
                        this.loadingError = error.message;
                    });
            }
        },
        prevPage() {
            if (this.projectsCurrentPage > 0) {
                let config = {
                    params: {
                        page: this.projectsCurrentPage - 1,
                    },
                };

                axios.get(this.apiUrl + this.projectsApiPath, config)
                    .then((response) => {
                        this.projects = response.data.results.data;
                        this.loading = false;
                        this.projectsCurrentPage =
                            response.data.results.current_page;
                        this.projectsPages = response.data.results.last_page;
                    }).catch((error) => {
                        this.loading = false;
                        this.loadingError = error.message;
                    });
            }
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

                <AppCard :project="project" />
            </div>
        </div>
        <div class="flex gap-6">
            <button
                class="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 my-3 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                @click="prevPage(this.projectsCurrentPage - 1)" href="#">Previous Page</button>
            <button
                class="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 my-3 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                @click="nextPage(this.projectsCurrentPage + 1)" href="#">Next Page</button>
        </div>
    </main>
</template>

<style scoped></style>
