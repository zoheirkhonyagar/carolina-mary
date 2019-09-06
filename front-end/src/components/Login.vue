<template>
    <div>
        <div class="main">
            <div class="content">
                <h1>Log In</h1>
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
                            placeholder="Password"
                        />
                    </div>
                    <div class="submit">
                        <a type="submit" value="LogIn" class="logIn" href="#">Login</a>
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