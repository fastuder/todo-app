import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

import Todo from "@/components/todo-list/todo/todo.component.vue";

@Component({
  components: {
    Todo
  },
  computed: mapGetters([
    "todos"
  ]),
})
export default class TodoList extends Vue {
  todos!: [];
}

