<template>
	<div v-if="totalPages() > 0" class="pagination-wrapper">
		<span v-if="showPreviousLink()" v-on:click="updatePage(currentPage -1)" class="pagination-btn"> < </span>
		{{ currentPage + 1}} of {{totalPages() }}
		<span v-if="showNextLink()" v-on:click="updatePage(currentPage + 1)" class="pagination-btn"> > </span>
	</div>
</template>

<script>
	export default {
		name:'pagination',
		props:['todos','currentPage','pageSize'],
		methods:{
			updatePage(pageNumber){
				this.$emit('page:update',pageNumber);
			},
			totalPages(){
				return Math.ceil(this.todos.length / this.pageSize);
			},
			showPreviousLink(){
				return this.currentPage == 0 ? false: true;
			},
			showNextLink(){
				return this.currentPage == (this.totalPages() - 1) ? false : true;
			}
		}
	}
</script>

<style>
	.pagination-btn{
		cursor: pointer;
		
	}
</style>
