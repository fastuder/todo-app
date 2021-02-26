<template>
    <v-card class="add-todo">
        <v-card-title>
            <h2>New Todo</h2>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-text-field v-model="todoTitle" @keydown.enter="_addTodo"></v-text-field>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="_addTodo">Add</v-btn>
            <v-btn @click="toggleNewTodoDialog">Close</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script src="./new-todo.component.ts" lang="ts"></script>
<style src="./new-todo.component.scss" scoped lang="scss"></style>