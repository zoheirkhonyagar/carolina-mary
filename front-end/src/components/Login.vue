<template>
    <div>
        <div class="v-container">
            <div class="v-row">
                <h1>Log In</h1>
                <form>
                    <div class="v-form-group">
                        <label>Username</label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            v-model="input.username"
                            placeholder="Username"
                        />
                    </div>
                    <div class="v-form-group">
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            v-model="input.password"
                            placeholder="Password"
                        />
                    </div>
                    <a value="LogIn" class="logIn" href="#" @click="login()">Login</a>
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
        login() {
            if (this.input.username !== "" && this.input.password !== "") {
                if (
                    this.input.username == this.$parent.mockAccount.username &&
                    this.input.password == this.$parent.mockAccount.password
                ) {
                    this.input.$emit("authenticated", true);
                    this.$router.replace({ name: "secure" });
                } else {
                    console.log("The username and / or password is incorrect");
                    //     } else {
                    //         console.log("A username and password must be present");
                }
            }
        }
    }
};
</script>