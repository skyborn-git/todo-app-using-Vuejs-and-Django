<template>
    <modal :name="modalData.name" width="50%" height="40%">
        <div v-if="modalData.loading" class="v-spinner-loader">
            <clip-loader></clip-loader>
        </div>
        <div v-else>
            <div  class="row">
                <h3 class="text-center text-primary add-todo-header">{{ modalData.mode }} todo</h3>
                <div class="col-md-10 col-md-offset-1">
                <div class="form-group align-add-todo-input">
                    <input type="text" class="form-control" 
                      v-model="todoName"
                      placeholder="add new todo" id="addTodoContainer">
                </div>
                <div class="form-group align-add-todo-input">
                    <textarea v-model="todoDesc" class="form-control"
                     placeholder="add description"></textarea>
                </div>
                </div>
                <div class="col-sm-1"></div>
            </div>
            <div class="pull-right custom-pull-buttons">
                <button class="btn btn-primary" @click="addOrEditTodo(modalData.mode, modalData.id)">{{ modalData.mode !== 'Edit' ? 'Submit' :  modalData.mode }}</button>
                <button class="btn btn-default" @click="hideModal">Cancel</button>
            </div>
        </div>
    </modal> 
</template>
<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
export default {
  components: {
    ClipLoader
  },
  props: {
    popup: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      modalData: this.popup,
      todoName: '',
      todoDesc: ''
    }
  },
  methods: {
    hideModal () {
      this.$modal.hide(this.popup.name)
    },
    updateTodo (operation) {
      this.$store.dispatch(operation, {
        name: this.todoName,
        description: this.todoDesc
      }).then(() => {
        this.hideModal()
      })
    },
    addOrEditTodo (mode) {
      if (mode !== 'Edit') {
        this.updateTodo('addTodo')
      } else {
        this.updateTodo('editTodo')
      }
    }
  },
  created: function () {
    setInterval(() => {
      this.popup.loading = false
    }, 1000)
  },
  watch: {
    popup: function (data) {
      this.modalData = this.popup
    }
  }
}
</script>
