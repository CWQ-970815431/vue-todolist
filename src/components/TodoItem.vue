<template>
	<div class="todoWrapper">
		<button class="removeTodo" v-on:click="removeTodo">remove</button>{{todo.text}}
		
	</div>
</template>

<script>
	export default {
		name:'todo-item',
		props:['todo'],
		methods:{
			removeTodo(){
				this.$emit('todo:remove',this.todo.id);
			}
		}
	}
</script>

<style>
.todoWrapper {
	border-bottom: 1px solid #efefef;
	text-align: left;
	margin-bottom: 10px;
	margin-top: 20px;
}
.removeTodo {
	margin-right: 20px;
	margin-bottom: 10px;
	border-width: 2px;
	border-radius: 3px;
	border-style: solid;
	padding: 8px;
	color: rgba(203,20,32,0.4);
	border-color: rgba(203,20,32,0.4);
	background-color: transparent;
}
</style>
