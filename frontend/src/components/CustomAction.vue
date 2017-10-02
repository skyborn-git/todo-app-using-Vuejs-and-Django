<template>
    <div class="custom-actions">
      <button class="ui basic button" @click="editItem(rowData.id)"><i class="edit icon"></i></button>
      <button class="ui basic button" @click="deleteItem(rowData.id)"><i class="delete icon"></i></button>
      <todo-form :popup="popupContent"></todo-form>
    </div>
  </template> 
  <script>
  import TodoForm from '@/components/TodoForm'
  import * as types from '@/store/mutation-types.js'

  export default {
    components: {TodoForm},
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      }
    },
    data () {
      return {
        popupContent: {
          loading: false,
          mode: 'Edit',
          name: 'todo-edit',
          id: this.rowData.id
        }
      }
    },
    methods: {
      editItem (id) {
        this.popupContent.loading = true
        this.$store.commit(types.EDIT_TODO, id)
        this.$modal.show(this.popupContent.name)
      },
      deleteItem (index) {
        this.$store.dispatch('deleteTodo', index)
      }
    }
  }
  </script>

  <style>
    .custom-actions button.ui.button {
      padding: 8px 8px;
    }
    .custom-actions button.ui.button > i.icon {
      margin: auto !important;
    }
  </style>