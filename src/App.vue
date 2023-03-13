<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">MyVideo</RouterLink>
    </div>
  </nav>
  <main class="min-vh-100 py-3">
    <RouterView />    
  </main>
  <div class="footer text-center bg-light">
    <div>
      <span>Вход для админа: </span>
      <a href="/admin" class="link me-1">Wagtail</a>
      <a href="/django-admin" class="link">Django</a>      
    </div>
    <div>
      <a href="https://github.com/denis-gr/MyVideo" class="link me-1">GitHub</a>    
    </div>
  </div>
</template>

<style>

</style>
