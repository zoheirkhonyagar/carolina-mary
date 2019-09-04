<template>
    <div>
        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
        <div>
            <router-link v-if="authenticated" to="/login" @click.native="logout()" replace>Log Out</router-link>
        </div>
        <!-- <router-view @authenticated="setAuthenticated"></router-view> -->
    </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    name: "App",
    data() {
        return {
            authenticated: false,
            mochAccount: {
                username: "123456789",
                password: "123456789"
            }
        };
    },
    mounted() {
        if (!this.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status;
        },
        logout() {
            this.authenticated = false;
        }
    }
};
</script>

<style>
.slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
}

.slide-leave {
    opacity: 1;
    transform: translateX(0);
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-30px);
    }
}

@keyframes slide-in {
    0% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
