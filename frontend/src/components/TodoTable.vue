<template>
  <div class="container">
        <!-- todo table -->
        <div class="row">
            <div class="col-md-10">
                <vuetable 
                    ref="vuetable"
                    :api-mode="false"
                    :data="elements"
                    :fields="fields"
                ></vuetable>
            </div>
            <div class="col-md-2">
                <button class="btn btn-primary" @click="showModal">Add todo</button>
            </div>
        </div>
        <!-- add todo popup -->
        <todo-form :popup="popupContent"></todo-form>    
  </div>  
</template>
<script>
import Vue from 'vue'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import moment from 'moment'
import CustomAction from '@/components/CustomAction'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import fields from '@/components/fields.js'
import { mapGetters } from 'vuex'
import TodoForm from '@/components/TodoForm'

Vue.component('custom-action', CustomAction)
export default {
  components: {
    Vuetable,
    ClipLoader,
    TodoForm
  },
  data () {
    return {
      fields: fields,
      popupContent: {
        loading: false,
        mode: 'Add',
        name: 'add-todo',
        id: ''
      }
    }
  },
  created: function () {
    this.$store.dispatch('fetchTodos')
  },
  methods: {
    formatDate (val, fmt = 'DD MM YYYY HH:mm a') {
      return val === null
       ? ''
       : moment(val).format(fmt)
    },
    showModal () {
      this.popupContent.loading = true
      this.$modal.show(this.popupContent.name)
    }
  },
  computed: {
    ...mapGetters({
      elements: 'getTodos'
    })
  },
  watch: {
    elements: function (data) {
      this.$refs.vuetable.setData(data)
    }
  }
}
</script>
<style>
    .v--modal-overlay[data-modal="add-todo"] {
        background-color: transparent !important;
    }
    .align-add-todo-input {
        margin-top: 20px;
    }
    .custom-pull-buttons {
        margin-right: 55px;
    }
    .add-todo-header {
        padding-top: 20px;
    }
    textarea {
        resize: none;
    }
    .v-spinner-loader {
        margin-top: 100px;
    }
</style>