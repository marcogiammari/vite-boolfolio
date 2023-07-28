<script>

import axios from 'axios';
import { store } from '../store';
export default {
    name: "Contact",
    data() {
        return {
            store,
            loading: false,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: []
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            let data = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            axios.post(store.apiUrl + 'contacts', data).then(res => {
                this.loading = false;
                console.log(res);

                if (res.data.success) {
                    this.success = true;
                } else {
                    this.success = false;
                    this.errors = res.data.errors;
                }

            }).catch(err => {
                console.error(err);
                this.loading = false;
                this.$router.push({ name: "error", params: { code: '404' } })
            })
        }
    }
}
</script>

<template>
    <div class="flex justify-center text-center py-16">
        <div v-if="loading" class="h-48 flex justify-center items-center">
            <div role="status">
                <svg aria-hidden="true" class="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
        </div>
        <div v-else class="container w-1/2 md:w-1/3">

            <h2 class="text-2xl mb-8">Contact Me</h2>
            <div v-show="success">
                Email sent successfully!
            </div>
            <form @submit.prevent="sendForm()" method="post">

                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm text-start font-medium">Your
                        name</label>
                    <input v-model="name" type="text" id="name" class="bg-white rounded block w-full p-2.5"
                        placeholder="Your name">
                    <div>
                        <p v-for="err in errors.name" class="mt-2 text-sm text-red-500">
                            {{ err }}
                        </p>
                    </div>
                </div>

                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm text-start font-medium">Your
                        email</label>
                    <input v-model="email" type="email" id="email" class="bg-white rounded block w-full p-2.5"
                        placeholder="Your email">
                    <div>
                        <p v-for="err in errors.email" class="mt-2 text-sm text-red-500">
                            {{ err }}
                        </p>
                    </div>
                </div>

                <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm text-start font-medium">Your
                        message</label>
                    <textarea v-model="message" type="email" id="email" class="bg-white rounded block w-full p-2.5"
                        placeholder="Your message">
                    </textarea>
                    <div>
                        <p v-for="err in errors.message" class="mt-2 text-sm text-red-500">
                            {{ err }}
                        </p>
                    </div>
                </div>

                <button @click="sendForm()" type="button"
                    class="inline-block w-48 rounded bg-blue-500 px-6 pb-2 pt-2.5 my-3 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                    Send Form
                </button>
            </form>
        </div>
    </div>
</template>