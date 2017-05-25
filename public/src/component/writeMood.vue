<template id="writeMood">
	<div class="writeMood_box">
			<img class="img1" src="../images/list_mood_01.png" alt=""/>
			<img class="img2" src="../images/list_mood_02.png" alt=""/>
			<img class="img3" src="../images/list_mood_03.png" alt=""/>
			<img class="img4" src="../images/list_mood_04.png" alt=""/>
			<img class="img5" src="../images/list_mood_05.png" alt=""/>
			<img class="img6" src="../images/list_mood_06.png" alt=""/>
			<img class="img7" src="../images/list_mood_07.png" alt=""/>
			<img class="img8" src="../images/list_mood_08.png" alt=""/>
			<img class="img9" src="../images/list_mood_09.png" alt=""/>
	</div>
</template>

<script type="text/javascript">
	var writeMood={
		template:'#writeMood'
	}
	module.exports=writeMood
</script>

<style>
	.writeMood_box{
		height:100%;

		position: relative;
	}


	@keyframes scal{
		from{transform: scale(1);}
		to{transform: scale(1.5);}
	}
	@-webkit-keyframes scal{
		from{transform: scale(1);}
		to{transform: scale(1.5);}
	}


	.writeMood_box img{
		width:50px;
		height:50px;
		display: block;
		position: absolute;
		animation: scal 1.5s linear infinite alternate;
	}

	.img1{
		top:70px;
		left:30px;
		animation-delay: 0.4s;
	}
	.img2{
		top:110px;
		left:170px;
	}
	.img3{
		top:50px;
		right:30px;
		animation-delay: 0.5s;
	}
	.img4{
		top:260px;
		left:30px;
		animation-delay: 0.3s;
	}
	.img5{
		top:220px;
		left:170px;
		animation-delay: 0.5s;
	}
	.img6{
		top:190px;
		right:30px;
	}
	.img7{
		top:440px;
		left:30px;
	}
	.img8{
		top:350px;
		left:170px;
		animation-delay: 0.5s;
	}
	.img9{
		top:400px;
		right:30px;
	}
</style>