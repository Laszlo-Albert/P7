<template>
  <div>
      <h1>Register</h1>
      <input type="email" name="email" v-model="email" placeholder="email">
      <input type="password" name="password" v-model="password" placeholder="password">
      <br>
      <button @click="register">Sign Up</button>
  </div>
</template>

<script>
export default {
  data () {
      return {
        email:'',
        password:''
      }  
  },
  methods:{
    register () {
      console.log('register button was clicked', this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
