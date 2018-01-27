import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/todoItem.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    TodoInput,
    TodoItem
  },
  data() {
    return {
      todos: [
      { id: 0, text: 'Make dinner'},
      { id: 1, text: 'Fold the laundry'},
      { id: 2, text: 'Learn to make a Vue app'}
    ],
    nextId: 3
    };
  },
  methods: {
    addTodo(text){
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
      console.log(this.todos);
    },
    removeTodo(id){
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id != id);
    }
  }
}
