<template>
  <v-app>
  <v-main>
    <Header></Header>
    <v-container fluid>
      <TodoList></TodoList>
      <v-dialog
        v-model="showNewTodoDialog"
      >
        <NewTodo></NewTodo>
      </v-dialog>
    </v-container>
    <v-fab-transition>
      <v-btn
      fab
      absolute
      bottom
      right
      @click="toggleNewTodoDialog"
      class="add-todo-btn"
      >
      <v-icon color="primary">
          mdi-plus
      </v-icon>
    </v-btn>
    </v-fab-transition>
  </v-main>
</v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Components
import TodoList from "@/components/todo-list/todo-list.component.vue";
import Header from "@/components/header/header.component.vue";
import NewTodo from "@/components/new-todo/new-todo.component.vue";
import { mapGetters, mapActions } from "vuex";

@Component({
  computed: mapGetters([
    "showNewTodoDialog"
  ]),
  methods: mapActions([
    "toggleNewTodoDialog"
  ]),
  components: {
    TodoList,
    NewTodo,
    Header
  },
})
export default class App extends Vue {
  showNewTodoDialog!: boolean;

  toggleNewTodoDialog!: () => void;
}
</script>
