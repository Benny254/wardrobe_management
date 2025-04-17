<template>
    <div>
      <h2>Reset Password</h2>
      <form @submit.prevent="resetPassword">
        <input v-model="email" placeholder="Enter your email" />
        <button type="submit">Reset</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  
  const email = ref('')
  
  const resetPassword = async () => {
    try {
      await axios.post('/auth/users/reset_password/', { email: email.value })
      alert('Check your email for password reset link.')
    } catch (err) {
      alert('Failed to send reset link.')
    }
  }
  </script>
  