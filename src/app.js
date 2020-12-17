import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/Todoinput.vue';
import TodoItem from './components/TodoItem.vue'
import Pagination from './components/Pagination.vue'

export default {
  name: 'app',
  components: {
	AppHeader,
	TodoInput,
	TodoItem,
	Pagination
  },
  data(){
	  return{
		  todos : [
			  {id : 0,text : "2020-12-17"},
			  {id : 1,text : "2020-12-18"},
			  {id : 2,text : "2020-12-19"},
			  {id : 3,text : "TODO # 3"},
			  {id : 4,text : "TODO # 4"},
			  {id : 5,text : "TODO # 5"},
			  {id : 6,text : "TODO # 6"},
			  {id : 7,text : "TODO # 7"},
			  {id : 8,text : "TODO # 8"},
			  {id : 10,text : "TODO # 9"},
			  {id : 11,text : "TODO # 10"},
			  {id : 12,text : "TODO # 11"},
		  ],
		  nexId:13,
		  currentPage:0,
		  pageSize:3,
		  visibleTodos:[]
	  };
  },
  beforeMount:function(){
	  this.updateVisbleTodos();
  },
  methods:{
	  addTodo(text) {
		  this.todos.push({id:this.nexId,text:text});
		  this.nexId++;
		  this.updateVisbleTodos();
	  },
	  removeTodo(id){
		  let todos =this.todos;
		  this.todos = todos.filter((todo) => todo.id != id);
		    this.updateVisbleTodos();
	  },
	  updatePage(pageNumber){
		this.currentPage = pageNumber;
		  this.updateVisbleTodos();
	  },
	  updateVisbleTodos(){
		  this.visibleTodos = this.todos.slice(this.currentPage * this.pageSize,(this.currentPage * this.pageSize) + this.pageSize);
		// 如果没有则返回
		if (this.visibleTodos.length == 0 && this.currentPage > 0){
			this.updatePage(this.currentPage - 1);
		}
	  },
  }
}