<template>
    <div>
        <h1 class="text-center">Home Page</h1>
        <ul class="p-5 list-unstyled d-flex gap-3">
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/contact">Contacts</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style lang="scss" scoped>

</style>