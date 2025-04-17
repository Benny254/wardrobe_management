<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" placeholder="Email" />
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <input v-model="re_password" type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const email = ref('')
const username = ref('')
const password = ref('')
const re_password = ref('')

const register = async () => {
  try {
    await axios.post('/auth/users/', {
      email: email.value,
      username: username.value,
      password: password.value,
      re_password: re_password.value
    })
    alert('Registered successfully. Check your email.')
  } catch (err) {
    console.error(err)
    alert('Registration failed.')
  }
}
</script>
