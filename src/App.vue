<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">MyVideo</RouterLink>
    </div>
  </nav>

  <RouterView />
  <div class="footer text-center bg-light">
    <span>Вход для админа: </span>
    <a href="/admin" class="link me-1">Wagtail</a>
    <a href="/django-admin" class="link">Django</a>
  </div>
</template>

<style>

</style>
