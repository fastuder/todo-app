<template>
    <v-list>
         <v-list-item v-for="todo in todos" :key="todo.id" class="todo-item">
            <Todo
                :title="todo.title"
                :id="todo.id"
            ></Todo>
        </v-list-item>
    </v-list>
</template>

<script src="./todo-list.component.ts" lang="ts"></script>
<style src="./todo-list.component.scss" scoped lang="scss"></style>