<template>
    <div>
        <div class="main">
            <div class="content">
                <h1>Log in</h1>
                <form @submit.prevent="onSubmit">
                    <div class="form__section">
                        <label>Username</label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            v-model="input.username"
                            placeholder="Username"
                        />
                    </div>
                    <div class="form__section">
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            v-model="input.password"
                            placeholder="**********"
                        />
                    </div>
                    <div class="submit">
                        <button type="submit" class="login" href="#">Log In</button>
                    </div>
                    <div class="log">
                        <h5>Don't have an account?</h5>
                        <router-link to="./SignUp">
                            <a class="log__item">Sign up</a>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        onSubmit() {
            const formData = {
                username: this.input.username,
                password: this.input.password
            };
            console.log(formData);
        }
    }
};
</script>