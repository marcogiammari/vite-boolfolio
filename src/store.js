import { reactive } from "vue";

const store = reactive({
    apiUrl: "http://localhost:8000/api/"
}) 

export { store };