import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions, mapGetters } from 'vuex';

@Component({
    computed: mapGetters([
        "todos",
        "showNewTodoDialog"
    ]),
    methods: mapActions([
        "addTodo",
        "toggleNewTodoDialog"
    ])
})
export default class NewTodo extends Vue {
    todos!: [];
    showNewTodoDialog!: boolean;
    private todoTitle = "";

    addTodo!: (title: string) => void;

    toggleNewTodoDialog!: () => void;

    _addTodo() {
        this.addTodo(this.todoTitle);
        this.todoTitle = "";
        this.toggleNewTodoDialog();
    }
}

