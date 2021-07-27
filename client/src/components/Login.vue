<template>
  <div>
    <h1>Register</h1>
    <input 
      type="email" 
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input 
      type="password" 
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <v-btn
        elevation="2">
        <button
          @click="register"
        >Register</button>
    </v-btn>
  </div>
</template>

<script>
import Auth from "@/services/Auth"
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async register (){
      const res = await Auth.login({
        email: this.email,
        password: this.password
      })
      console.log(res.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>