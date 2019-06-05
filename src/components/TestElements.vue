<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app>
    <v-container id="app">
      <TodoList :todos="todos" @delete-todo="deleteTodo"/>
      <v-btn v-on:click="refreshTodo">Refresh todo list</v-btn>

      <h1>Current value = {{ counter }}</h1>
      <v-btn v-on:click="increaseOne">Increase</v-btn>
      <v-btn @click="decreaseOne">Decrease</v-btn>

      <h1>
        <h1 v-on:mouseover="setRandomColor">Text for change color on HOVER</h1>
      </h1>

      <v-flex xs12 sm6 md3>
        <v-text-field v-model="inputValue"
                      label="Enter some text"></v-text-field>
      </v-flex>
      <h1>{{ inputValue }}</h1>

      <v-flex xs12 sm6 d-flex>
        <v-select :items="itemsForSelect"
                  v-model="selectValue"
                  label="Items to select"></v-select>
      </v-flex>
      <h1>{{ selectValue }}</h1>

      <v-btn @click="showLoader = !showLoader">
        <v-icon>fingerprint</v-icon>
      </v-btn>
      <v-progress-circular v-if="showLoader"
                           indeterminate
                           color="primary"></v-progress-circular>
      <v-btn color="primary"
             dark
             @click="snackbar = true">
        Show Snackbar
      </v-btn>
      <template>
        <v-data-table
                :headers="headers"
                :items="tableData"
                :loading="loading"
                class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.param1 }}</td>
            <td class="text-xs-right">{{ props.item.param2 }}</td>
            <td class="text-xs-right">{{ props.item.param3 }}</td>
          </template>
        </v-data-table>
      </template>
      <v-snackbar color="cyan darken-2"
                  v-model="snackbar"
                  :right="true"
                  :top="true"
                  :timeout=0>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium animi asperiores at consectetur, consequatur deleniti dolorem eligendi
        enim eveniet excepturi inventore iste neque odit optio quae quibusdam quidem sint
        vitae?
        <v-btn flat
               @click="snackbar = false">
          <v-icon>power_settings_new</v-icon>
        </v-btn>
      </v-snackbar>
    </v-container>

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
  import TodoList from './TodoList'

  export default {
    name: 'App',
    data() {
      return {
        todos: ['1. First', '2. Second'],
        itemsForSelect: ['One', 'Two', 'Three', 'Four'],
        counter: 1,
        inputValue: '',
        selectValue: '',
        snackbar: false,
        loading: true,
        headers: [
          {
            text: 'Header 1',
            align: 'left',
            sortable: false,
            value: 'param1'
          },
          {text: 'Header 2', value: 'param2'},
          {text: 'Header 3', value: 'param3'}
        ],
        tableData: [
          {param1: 1, param2: "1", param3: {value1: 1, value2: 2, value3: 3}},
          {param1: 2, param2: "2", param3: {value1: 1, value2: 2, value3: 3}},
          {param1: 3, param2: "3", param3: {value1: 1, value2: 2, value3: 3}},
          {param1: 4, param2: "4", param3: {value1: 1, value2: 2, value3: 3}},
          {param1: 5, param2: "5", param3: {value1: 1, value2: 2, value3: 3}},
          {param1: 6, param2: "6", param3: {value1: 1, value2: 2, value3: 3}},
          {param1: 7, param2: "7", param3: {value1: 1, value2: 2, value3: 3}},
        ],
        showLoader: false
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
      },
      showAlert() {
        alert("Pressed v-btn component")
      }
    }
  }
</script>
<style scoped>
  .v-snack__wrapper {
    max-width: 100% !important;
    width: 100% !important;
  }
</style>