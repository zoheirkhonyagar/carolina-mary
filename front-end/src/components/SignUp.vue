<template>
    <div>
        <div class="main">
            <div class="content">
                <h1>Sign up</h1>
                <form @submit.prevent="onSubmit">
                    <div class="input" :class="{invalid: $v.firstName.$error}">
                        <label for="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            @blur="$v.firstName.$touch()"
                            v-model.trim="$v.firstName.$model"
                        />
                        <p
                            class="invalid"
                            v-if="!$v.firstName.required"
                        >This field must not be empty.</p>
                    </div>
                    <div class="input" :class="{invalid: $v.lastName.$error}">
                        <label for="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            @blur="$v.lastName.$touch()"
                            v-model="lastName"
                        />
                        <p
                            class="invalid"
                            v-if="!$v.lastName.required"
                        >This field must not be empty.</p>
                    </div>
                    <div class="input" :class="{invalid: $v.username.$error}">
                        <label for="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            @blur="$v.username.$touch()"
                            v-model="username"
                        />
                        <p
                            v-if="!$v.username.minLen"
                        >username must have at least {{$v.username.$params.minLen.min}} letters</p>
                        <p v-if="!$v.username.required">This field must not be empty.</p>
                    </div>
                    <div class="input" :class="{invalid: $v.email.$error}">
                        <label for="email">Mail</label>
                        <input type="email" id="email" @blur="$v.email.$touch()" v-model="email" />
                        <p v-if="!$v.email.email">Please provide a valid email address.</p>
                        <p v-if="!$v.email.required">This field must not be empty.</p>
                    </div>
                    <div class="input" :class="{invalid: $v.age.$error}">
                        <label for="age">Your Age</label>
                        <input type="number" id="age" @blur="$v.age.$touch()" v-model.number="age" />
                        <p
                            v-if="!$v.age.minVal"
                        >You have to be at least {{ $v.age.$params.minVal.min }} years old.</p>
                    </div>
                    <div class="input" :class="{invalid: $v.password.$error}">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            @blur="$v.password.$touch()"
                            v-model="password"
                        />
                        <p class="invalid" v-if="!$v.password.required">Password is required.</p>
                        <p
                            class="invalid"
                            v-if="!$v.password.minLen"
                        >Password must have at least {{ $v.password.$params.minLen.min }} letters.</p>
                    </div>
                    <div class="input" :class="{invalid: $v.confirmPassword.$error}">
                        <label for="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            @blur="$v.confirmPassword.$touch()"
                            v-model="confirmPassword"
                        />
                        <p v-if="!$v.confirmPassword.sameAs">Passwords must be identical.</p>
                    </div>
                    <div class="input">
                        <label for="country">Country</label>
                        <select id="country" v-model="country">
                            <option value="usa">USA</option>
                            <option value="india">India</option>
                            <option value="uk">UK</option>
                            <option value="germany">Germany</option>
                        </select>
                    </div>
                    <div class="content">
                        <label>Gender</label>
                        <br />
                        <label for="male">
                            <input type="radio" id="male" value="Male" v-model="gender" /> Male
                        </label>
                        <label for="female">
                            <input type="radio" id="female" value="Female" v-model="gender" /> Female
                        </label>
                    </div>
                    <div class="content">
                        <div class="input inline term" :class="{invalid: $v.terms.$invalid}">
                            <input
                                type="checkbox"
                                id="terms"
                                @change="$v.terms.$touch()"
                                v-model="terms"
                            />
                            <label for="terms">I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <div class="submit">
                        <button
                            value="SignUp"
                            type="submit"
                            class="signUp"
                            href="#"
                            :disabled="$v.$invalid"
                        >Sign Up</button>
                    </div>
                    <div class="login">
                        <h5>Already have an account?</h5>
                        <a class="login__item" href="home">Log In</a>
                    </div>
                    <div class="content">
                        We already have that email registered. Have you
                        <a
                            href="#"
                        >forgotten your password?</a>
                    </div>
                </form>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import {
    required,
    email,
    numeric,
    minValue,
    minLength,
    between,
    sameAs
} from "vuelidate/lib/validators";
export default {
    name: "SignUp",
    data() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            age: null,
            password: "",
            confirmPassword: "",
            gender: [],
            country: "usa",
            terms: false
        };
    },
    validations: {
        firstName: {
            required
        },
        lastName: {
            required
        },
        username: {
            required,
            minLen: minLength(6)
        },
        email: {
            required,
            email
        },
        age: {
            required,
            numeric,
            minVal: minValue(18)
        },
        password: {
            required,
            minLen: minLength(8)
        },
        confirmPassword: {
            // sameAs: sameAs('password')
            sameAs: sameAs(vm => {
                return vm.password;
            })
        },
        gender: {
            required
        },
        terms: {
            required
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                email: this.email,
                age: this.age,
                password: this.password,
                confirmPassword: this.confirmPassword,
                country: this.country,
                gender: this.gender,
                terms: this.terms
            };
            alert("SUCCESS! :-)\n\n" + JSON.stringify(formData));
        }
    }
};
</script>

<style scoped>
.input {
    margin: 10px 20px;
}

.input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
}

.input.inline label {
    display: inline;
}

.input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
}

.input.inline input {
    width: auto;
}

.input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
}

.input.inline.term {
    margin: 0;
}

.input.invalid {
    color: red;
}

.input.invalid label {
    color: red;
}

.input.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
}

.input select {
    border: 1px solid #ccc;
    font: inherit;
}

.submit button {
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
}

.submit button:hover,
.submit button:active {
    background-color: #521751;
    color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
}
</style>