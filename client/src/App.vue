<template>
  <v-app>
    <v-app-bar
      app
      dark>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link>|
        <router-link to="/register">Register</router-link>
    </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
