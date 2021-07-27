<template>
  <div>
    <h1>To Do App</h1>
    <v-text-field
            type="text"
            name="todo"
            v-model="todo"
            label="To Do"
            filled
    ></v-text-field>
    <v-btn
      elevation="2">
      <button
        @click="add"
      >Add</button>
    </v-btn>
    <v-list three-line>
      <template v-for="(item) in items">
        <v-list-item
          :key="item.context">
          <v-list-item-content>
            <div>
              <v-list-item-title v-html="item.context"></v-list-item-title>
              <v-btn id=item._id v-on:click="deleteItem(item)" elevation="2" small color="error">Delete</v-btn>
              <v-btn id=item._id v-on:click="update(item)" elevation="2" small color="primary">Update</v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
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
      todo: "",
      items: []
    }
  },
  mounted(){
    this.getTodo()
  },
  methods: {
    async add(){
      const res = await Auth.add({
        todo: this.todo
      })
      console.log(res)
      this.items.push({
        _id: 0,
        context: this.todo
      })
      this.todo = ""
    },
    async getTodo(){
      const res = await Auth.getTodo()
      console.log(res)
      this.items = res.data.items
    },
    async deleteItem(item){
      console.log(item._id)
      const res = await Auth.delete({
        _id: item._id
      })
      console.log(res)
      this.items.splice(this.items.indexOf(item) ,1)
    },
    async update(item){
      const res = await Auth.update({
        _id: item._id
      })
      console.log(res)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
