<template>
    <div>
        <div class="container">
            <div class="row">
                <h1>Sign up</h1>
                <form>
                    <h2>User Form</h2>
                    <div class="form-group">
                        <label>First Name</label>
                        <br />
                        <input
                            type="text"
                            class="form-control"
                            id="fname"
                            placeholder="First Name"
                            @blur="validateFirstName"
                            :class="{'correct': !alertForFirstName, 'error': alertForFirstName}"
                        />
                        <div
                            class="invalid-feedback"
                            v-if="alertForFirstName"
                        >Fisrt Name must beetween 2 and 15 characters</div>
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <br />
                        <input
                            type="text"
                            class="form-control"
                            id="lname"
                            placeholder="Last Name"
                            @blur="validateLastName"
                        />
                        <div
                            class="invalid-feedback"
                            v-if="alertForLastName"
                        >Last Name must beetween 2 and 20 characters</div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <br />
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="example@test.com"
                            @blur="validateEmail"
                        />
                        <div class="invalid-feedback" v-if="alertForMail">Enter a valid email</div>
                    </div>
                    <div class="form-group">
                        <label>Username</label>
                        <br />
                        <input
                            type="username"
                            class="form-control"
                            id="username"
                            placeholder="Username"
                            @blur="validateUser"
                        />
                        <div
                            class="invalid-feedback"
                            v-if="alertForUser"
                        >Choose a username beetween 8 and 15 characters</div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <br />
                        <input
                            type="Password"
                            class="form-control"
                            id="password"
                            placeholder="********"
                            @blur="validatePassword"
                        />
                        <div
                            class="invalid-feedback"
                            v-if="alertForPassword"
                        >Password must beetween 8 and 15 characters</div>
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <br />
                        <input
                            type="Password"
                            class="form-control"
                            id="cpassword"
                            placeholder="********"
                            @blur="validateConfirmPassword"
                        />
                        <div
                            class="invalid-feedback"
                            v-if="alertForConfirmPassword"
                        >Password does not match</div>
                    </div>

                    <div class="form-group">
                        <label>Age</label>
                        <br />
                        <input
                            type="number"
                            class="form-control"
                            id="age"
                            placeholder="Age"
                            @blur="validateAge"
                        />
                        <div class="invalid-feedback" v-if="alertForAge">Please fill this field</div>
                    </div>
                    <div class="row">
                        <label>Gender</label>
                        <br />
                        <label for="male">
                            <input type="radio" id="male" value="Male" v-model="gender" /> Male
                        </label>
                        <label for="female">
                            <input type="radio" id="female" value="Female" v-model="gender" /> Female
                        </label>
                    </div>
                    <div class="row">
                        <input type="checkbox" name="terms" />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                    <a value="SignUp" class="signUp" href="#">Sign Up</a>
                    <div class="login">
                        <h5>Already have an account?</h5>
                        <a class="login__item" href="home">Log In</a>
                    </div>
                    <div class="row">
                        We already have that email registered. Have you
                        <a
                            href="#"
                        >forgotten your password?</a>
                    </div>
                </form>
            </div>
        </div>
        <!-- <hr /> -->
        <!-- <button class="btn btn-primary" @click="navigateToHome">Go To Home</button> -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                fname: "",
                lname: "",
                email: "",
                username: "",
                password: "",
                age: ""
            },
            gender: "",
            alertForFirstName: false,
            fillFirstName: false,
            alertForLastName: false,
            alertForMail: false,
            alertForUser: false,
            alertForPassword: false,
            alertForConfirmPassword: false,
            alertForAge: false,
            attachCorrect: false,
            attachError: false
        };
    },
    methods: {
        // navigateToHome() {
        //     this.$router.push({ name: "home" });
        // },
        validateFirstName() {
            const fname = document.getElementById("fname");
            const re = /^[a-zA-Z]{2,15}$/;

            if (!re.test(fname.value)) {
                this.alertForFirstName = true;
            } else {
                this.alertForFirstName = false;
            }
        },
        validateLastName() {
            const lname = document.getElementById("lname");
            const re = /^[a-zA-Z]{2,20}$/;

            if (!re.test(lname.value)) {
                this.alertForLastName = true;
                lname.classList.remove("correct");
                lname.classList.add("error");
            } else {
                this.alertForLastName = false;
                lname.classList.remove("error");
                lname.classList.add("correct");
            }
        },
        validateEmail() {
            const email = document.getElementById("email");
            const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

            if (!re.test(email.value)) {
                this.alertForMail = true;
                email.classList.remove("correct");
                email.classList.add("error");
            } else {
                this.alertForMail = false;
                email.classList.remove("error");
                email.classList.add("correct");
            }
        },
        validateUser() {
            const user = document.getElementById("username");
            const re = /^[a-zA-Z0-9]{8,15}$/;

            if (!re.test(user.value)) {
                this.alertForUser = true;
                user.classList.remove("correct");
                user.classList.add("error");
            } else {
                this.alertForUser = false;
                user.classList.remove("error");
                user.classList.add("correct");
            }
        },
        validatePassword() {
            const password = document.getElementById("password");
            const re = /^[a-zA-Z0-9]{8,15}$/;

            if (!re.test(password.value)) {
                this.alertForPassword = true;
                password.classList.remove("correct");
                password.classList.add("error");
            } else {
                this.alertForPassword = false;
                password.classList.remove("error");
                password.classList.add("correct");
            }
        },
        validateConfirmPassword() {
            const password = document.getElementById("password");
            const cpassword = document.getElementById("cpassword");

            if (password.value !== cpassword.value || cpassword.value === "") {
                this.alertForConfirmPassword = true;
                cpassword.classList.remove("correct");
                cpassword.classList.add("error");
            } else {
                this.alertForConfirmPassword = false;
                cpassword.classList.remove("error");
                cpassword.classList.add("correct");
            }
        },
        validateAge() {
            const age = document.getElementById("age");

            if (age.value === "") {
                this.alertForAge = true;
                age.classList.remove("correct");
                age.classList.add("error");
            } else {
                this.alertForAge = false;
                age.classList.remove("error");
                age.classList.add("correct");
            }
        }
    }
};
</script>

<style>
</style>
