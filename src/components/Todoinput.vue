<template lang=html>
	<div class="todo-input">
		<input type="text" v-model="text" />
		<button class="btn btn-primary" v-on:click="addTodo">Submit</button>
	</div>
</template>

<script>
	export default {
		name:'todo-input',
		data(){
			return{
				text:""
			};
		},
		methods: {
			addTodo(){
				this.$emit('todo:add',this.text);
				this.text = '';
			}
		}
	}
</script>

<style >
	.todo-input-wrapper {
		margin-bottom: 20px;
	}
	.btn {
		outline: none;
		box-shadow: none;
		border-width: 2px;
		border-radius: 3px;
		border-style: solid;
		padding: 8px;
	}
	.btn-primary {
		color: rgba(73,204,249,1.0);
		border-color: rgba(73,204,249,1);
		background-color: transparent;
	}
	input{
		width: 80%;
		border: none;
		border-top:2px solid rgba(73,204,249,1);
		border-bottom:2px solid rgba(73,204,249,1);
		margin-right: 10px;
		padding: 5px;
		line-height: 17px;
	}
	
	input:focus {
		outline: none;
		border: none;
		border-top: 2px solidrgba(73,204,249,1);
		border-bottom: 2px solid rgba(73,204,249,1);
	}
	
</style>
