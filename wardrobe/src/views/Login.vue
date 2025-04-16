<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  const login = async () => {
    try {
      const { data } = await axios.post('http://127.0.0.1:8000/auth/token/login/', {
        email: email.value,
        password: password.value
      })
      alert('Login successful! Token: ' + data.auth_token)
    } catch (err) {
      alert('Login failed.')
      console.error(err)
    }
  }
  </script>
  