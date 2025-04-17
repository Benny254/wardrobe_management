<template>
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You are logged in.</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const logout = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    router.push('/login')
  }
  </script>
  