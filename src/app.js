import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/todoItem.vue';
import Pagination from './components/pagination.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    TodoInput,
    TodoItem,
    Pagination
  },
  data() {
    return {
      todos: [
      { id: 0, text: 'Make dinner'},
      { id: 1, text: 'Fold the laundry'},
      { id: 2, text: 'Learn to make a Vue app'},
      { id: 3, text: 'Learn to make a Vue app'},
      { id: 4, text: 'Learn to make a Vue app'},
      { id: 5, text: 'Learn to make a Vue app'},
      { id: 6, text: 'Learn to make a Vue app'},
      { id: 7, text: 'Learn to make a Vue app'},
      { id: 8, text: 'Learn to make a Vue app'},
      { id: 9, text: 'Learn to make a Vue app'},
      { id: 10, text: 'Learn to make a Vue app'},
      { id: 11, text: 'Learn to make a Vue app'},
      { id: 12, text: 'Learn to make a Vue app'}
    ],
    nextId: 13,
    currentPage: 0,
    pageSize: 3,
    visibleTodos: []
    }
  },
  beforeMount: function() {
    this.updateVisibleTodos();
  },
  methods: {
    addTodo(text){
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
      this.updateVisibleTodos();
    },
    removeTodo(id){
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id != id);
      this.updateVisibleTodos();
    },
    updatePage(pageNumber){
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
    },
    updateVisibleTodos(){
      this.visibleTodos = this.todos.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

      if(this.visibleTodos.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      } else {

      }
    }
  }
}
