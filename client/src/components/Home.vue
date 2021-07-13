<template>
  <div>
    <h1>To Do App</h1>
    <input 
      type="text"
      name="todo"
      v-model="todo"
      placeholder="Work For Exam">
      <button
        @click="add"
      >Add</button>
  </div>
</template>

<script>
import Auth from "@/services/Auth"
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      todo: ""
    }
  },
  methods: {
    async add(){
      const res = await Auth.add({
        todo: this.todo
      })
      console.log(res)
      this.todo = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
