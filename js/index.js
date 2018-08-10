
window.onload=function(){
index=0;
let t=setInterval(move,2000);
function move(){
	index++
	if(index>=3){
		index=0
	}
	$(".tupian").children().removeClass("active")
	.eq(index)
	.addClass("active")
}
	$(".hh").mouseenter(function(){
		$(".men").css({
			display:"block",
			height:"200px"
				})


	})
	$(".hh").mouseleave(function(){
		$(".men").css({display:"none",
			height:"0px"
	})


	})
	$(".mm").mouseenter(function(){
		$(".men").css({
			display:"block",
			height:"200px"
				})
	})

}








