<template>
    <v-container class="todo-item">
        <v-list-item-action>
            <v-checkbox></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="deleteTodo(id)">
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
    </v-container>
</template>

<script src="./todo.component.ts" lang="ts"></script>
<style src="./todo.component.scss" scoped lang="scss"></style>