import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
    methods: mapActions([
        "deleteTodo"
    ])
})
export default class Todo extends Vue {
    @Prop() id!: string;
    @Prop() title!: string;

    deleteTodo!: (id: string) => void;
}

