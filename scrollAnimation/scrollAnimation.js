$(function(){

	const getScrollAmount = () => {
		scrollAmount = $(window).scrollTop();
	};

	$(window).scroll(function(){
		getScrollAmount();
		const triggerMoveRight = $(".triggerMoveRight").offset().top;
		const triggerMoveLeft = $(".triggerMoveLeft").offset().top;
		const triggerMoveUp = $(".triggerMoveUp").offset().top;
		const triggerMoveDown = $(".triggerMoveDown").offset().top;
		console.log(triggerMoveRight);
			console.log(triggerMoveLeft);
			console.log(triggerMoveUp);
			console.log(triggerMoveDown);

		if(	scrollAmount < triggerMoveLeft) {
			$(".dotP span").removeClass();
			$(".dotP span").addClass("startMoveRight");
		} else if (	scrollAmount < triggerMoveUp) {
			$(".dotP span").removeClass();
			$(".dotP span").addClass("startMoveLeft");
		} else if (	scrollAmount < triggerMoveDown) {
			$(".dotP span").removeClass();
			$(".dotP span").addClass("startMoveUp");
		} else {
			$(".dotP span").removeClass();
			$(".dotP span").addClass("startMoveDown");
		}
	});
});