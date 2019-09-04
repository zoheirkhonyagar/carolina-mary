<template>
    <div>
        <ul class="nav">
            <div class="nav__section">
                <router-link to="/" tag="li" active-class="active" exact>
                    <a>Home</a>
                </router-link>
            </div>
            <div class="nav__section">
                <router-link to="/user" tag="li" active-class="active">
                    <a>User</a>
                </router-link>
                <router-link to="/signup" tag="li" active-class="active">
                    <a>Sign up</a>
                </router-link>
                <router-link to="/login" tag="li" active-class="active">
                    <a>Log In</a>
                </router-link>
            </div>
        </ul>
    </div>
</template>
