<template>
  <div class="box">
    <h1>Login page</h1>
    <label>
      <input type="text" placeholder="Username" v-model="username" v-on:focus="clearError">
    </label>
    <label>
      <input type="password" placeholder="Password" v-model="password" v-on:keydown.enter="submit">
    </label>
    <button type="submit" v-on:click.stop.prevent="submit" class="sbm">Submit</button>
    <span style="color: red" v-if="!errorMessage.empty">{{ errorMessage }}</span>
  </div>
</template>

<script>
  export default {
    name: "LoginPage",
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      }
    },
    methods: {
      submit() {
        if (this.username !== 'ankoks' && this.password !== 'ankoks') {
          this.errorMessage = 'Wrong username or password'
        } else {
          this.$router.push({name: 'actions', params: {name: this.username}, query: {name: 'bbbb'}});
        }
      },
      clearError() {
        this.errorMessage = ''
        this.username = ''
        this.password = ''
      }
    }
  }
</script>

<style scoped>
  div {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #34495e;
  }

  .box {
    width: 400px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #191919;
    text-align: center;
  }

  .box h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }

  .box input[type="text"], .box input[type="password"] {
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498bd;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
  }

  .box input[type="text"]:focus, .box input[type="password"]:focus {
    width: 280px;
    border-color: #2ecc71;
  }

  .sbm {
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 4px;
    width: 150px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }

  .sbm:hover {
    background: #2ecc71;
  }
</style>