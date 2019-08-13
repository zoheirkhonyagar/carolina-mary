<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button" :to="link">Edit User</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: "userEdit",
                params: { id: this.$route.params.id },
                query: { j: "hehe", q: 100 },
                hash: "#data"
            }
        };
    }
};
</script>
