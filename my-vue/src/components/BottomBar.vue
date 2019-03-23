<template>
	
	<div class="bottom-bar flex">
		
		<div class="icon-btn">
			<i class="fa fa-shopping-cart"></i>
			<div class="title">购物车</div>
		</div>
		<div class="icon-btn">
			<i class="fa fa-shopping-basket"></i>
			<div class="title">进店</div>
		</div>
		
		<div class="flex flex-item">
			
			<div class="btn flex-item orange"><span>加入购物车</span></div>
			<div class="btn flex-item"><span>立即购买</span></div>
			
		</div>
		
	</div>
	
</template>

<script>
</script>

<style>
	.bottom-bar {
		position: fixed;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    height: 1rem;
	    margin: 0 auto;
	    background-color: #fff;
	    color: #999;
	    font-size: 0.24rem;
	}
	
	
	.btn{
		position: relative;
	    z-index: 10;
	    line-height: 1rem;
	    text-align: center;
	    background: #e4393c;
	    color: #fff;
	    font-size: .28rem;
	    cursor: pointer;
	    -webkit-user-select: none;
	}
	
	.btn.orange {
		background: #ff8c42;
	}
	
	.bottom-bar .icon-btn{
		text-align: center;
		width: 14%;
		padding-top: 0.15rem;
	}
	
	.bottom-bar .icon-btn i{
		font-size: 0.4rem;
	}
	
	.bottom-bar .icon-btn .title{
		line-height: 0.4rem;
	}
</style>