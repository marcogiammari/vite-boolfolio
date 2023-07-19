<script>
export default {
    name: "ErrorPage",
}
</script>

<template>
    <div class="text-center py-48">
        <h2 class="text-3xl">ERROR: {{ $route.params.code }}</h2>
        <h4>Something went wrong...</h4>
    </div>
</template>
