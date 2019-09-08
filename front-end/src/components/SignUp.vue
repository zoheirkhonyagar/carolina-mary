<template>
    <div>
        <div class="main">
            <div class="content">
                <h1>Sign up</h1>
                <form @submit.prevent="onSubmit">
                    <div class="form__section input" :class="{invalid: $v.firstName.$error}">
                        <label for="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            @blur="$v.firstName.$touch()"
                            v-model="firstName"
                        />
                        <p
                            class="invalid"
                            v-if="!$v.firstName.required && $v.firstName.$dirty"
                        >This field must not be empty.</p>
                    </div>
                    <div class="form__section input" :class="{invalid: $v.lastName.$error}">
                        <label for="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            @blur="$v.lastName.$touch()"
                            v-model="lastName"
                        />
                        <p
                            class="invalid"
                            v-if="!$v.lastName.required && $v.lastName.$dirty"
                        >This field must not be empty.</p>
                    </div>
                    <div class="form__section input" :class="{invalid: $v.username.$error}">
                        <label for="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            @blur="$v.username.$touch()"
                            v-model="username"
                        />
                        <p
                            v-if="!$v.username.minLen"
                        >username must have at least {{$v.username.$params.minLen.min}} letters.</p>
                        <p
                            v-if="!$v.username.required && $v.username.$dirty"
                        >This field must not be empty.</p>
                    </div>
                    <div class="form__section input" :class="{invalid: $v.email.$error}">
                        <label for="email">Mail</label>
                        <input
                            prepend-icon="email"
                            type="email"
                            id="email"
                            placeholder="example@test.com"
                            @blur="$v.email.$touch()"
                            v-model="email"
                        />
                        <p v-if="!$v.email.email">Please provide a valid email address.</p>
                        <p
                            v-if="!$v.email.required && $v.email.$dirty"
                        >This field must not be empty.</p>
                    </div>
                    <div class="form__section input" :class="{invalid: $v.age.$error}">
                        <label for="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            placeholder="20"
                            @blur="$v.age.$touch()"
                            v-model.number="age"
                        />
                        <p
                            v-if="!$v.age.minVal"
                        >You have to be at least {{ $v.age.$params.minVal.min }} years old.</p>
                        <p v-if="!$v.age.required && $v.age.$dirty">This field must not be empty.</p>
                    </div>
                    <div class="form__section input" :class="{invalid: $v.password.$error}">
                        <label for="password">Password</label>
                        <input
                            prepend-icon="lock"
                            type="password"
                            id="password"
                            placeholder="**********"
                            @blur="$v.password.$touch()"
                            v-model="password"
                        />
                        <p
                            class="invalid"
                            v-if="!$v.password.required && $v.password.$dirty"
                        >Password is required.</p>
                        <p
                            class="invalid"
                            v-if="!$v.password.minLen"
                        >Password must have at least {{ $v.password.$params.minLen.min }} letters.</p>
                    </div>
                    <div class="form__section input" :class="{invalid: $v.confirmPassword.$error}">
                        <label for="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="**********"
                            @blur="$v.confirmPassword.$touch()"
                            v-model="confirmPassword"
                        />
                        <p v-if="!$v.confirmPassword.sameAs">Passwords must be identical.</p>
                    </div>
                    <div class="form__section input">
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
                        <div class="gender">
                            <div class="gender__item">
                                <input type="radio" id="male" value="Male" v-model="gender" />
                                <label for="male">Male</label>
                            </div>
                            <div class="gender__item">
                                <input type="radio" id="female" value="Female" v-model="gender" />
                                <label for="female">Female</label>
                            </div>
                        </div>
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
                            type="submit"
                            class="signUp"
                            href="#"
                            :disabled="$v.$invalid"
                        >Sign up</button>
                    </div>
                    <div class="submit log">
                        <h5>Already have an account?</h5>
                        <router-link to="./Login">
                            <button class="log__item">Log in</button>
                        </router-link>
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

<style lang="scss" scoped>
.input.inline.term {
    margin: 0;
    display: flex;
}

.input.invalid {
    $alertColor: red;
    color: $alertColor;
    label {
        color: $alertColor;
    }
    input {
        border-style: none;
        border-bottom: 1px solid $alertColor;
        color: $alertColor;
    }
}

.submit button {
    cursor: pointer;
    &:hover,
    :active {
        background-color: #521751;
        color: white;
    }
    &[disabled],
    [disabled]:hover,
    [disabled]:active {
        border: 1px solid #ccc;
        background-color: transparent;
        color: #ccc;
        cursor: not-allowed;
    }
}

.gender {
    display: flex;
    &__item {
        display: flex;
        margin-right: 6px;
    }
}
</style>