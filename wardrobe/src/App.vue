<template>
  <div>
    <h1>Best Wardrobe</h1>
    <nav>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 20px;
}
</style>
