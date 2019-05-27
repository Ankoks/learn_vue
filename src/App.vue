<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat
             href="https://github.com/vuetifyjs/vuetify/releases/latest"
             target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <div id="app">
        <TodoList :todos="todos" @delete-todo="deleteTodo"/>
        <v-btn v-on:click="refreshTodo">Refresh todo list</v-btn>

        <h1>Current value = {{ counter }}</h1>
        <v-btn v-on:click="increaseOne">Increase</v-btn>
        <v-btn v-on:click="decreaseOne">Decrease</v-btn>

        <h1>
          <h1 v-on:mouseover="setRandomColor">Text for change color on HOVER</h1>
        </h1>
      </div>
    </v-content>
    <v-footer dark height="auto">
      <v-layout
              justify-center
              row
              wrap>
        <v-flex
                primary
                lighten-2
                py-3
                text-xs-center
                white--text
                xs12>
          &copy;2019 — <strong>Ankoks</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import TodoList from './components/TodoList'

  export default {
    name: 'App',
    data() {
      return {
        todos: ['1. First', '2. Second'],
        counter: 1
      }
    },
    components: {
      TodoList
    },
    methods: {
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      refreshTodo() {
        this.todos = ['1. First', '2. Second']
      },
      increaseOne() {
        this.counter++
      },
      decreaseOne() {
        this.counter--
      },
      setRandomColor(event) {
        event.target.style.color = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')'
      }
    }
  }
</script>
