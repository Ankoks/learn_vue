<template>
  <ul>
    <li v-for="(todo, index) in todos"
        :key="index"
        v-on:click="deleteTodo(index)">{{ todo }}
    </li>
  </ul>

</template>

<script>
  export default {
    props: ['todos', 'counter'],
    methods: {
      deleteTodo(index) {
        this.$emit('delete-todo', index)
      }
    }
  }
</script>