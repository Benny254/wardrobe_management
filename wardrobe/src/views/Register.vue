import axios from 'axios'

<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="email" placeholder="Email" required />
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
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
  
  const register = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/auth/users/', {
        email: email.value,
        username: username.value,
        password: password.value
      })
      alert('Registration successful!')
    } catch (err) {
      alert('Registration failed.')
      console.error(err)
    }
  }
  </script>
  