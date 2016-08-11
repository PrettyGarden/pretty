$(function() {

	(function() {


		$('#fullpage').fullpage({

			anchors: ["fisrt","second","third","fourth", "fifth"],			
			menu: '#menu',
			scrollingSpeed: 1000,			
			easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',

			navigation: false,			
			controlArrowColor: '#666',
			slidesNavPosition: 'bottom',

			verticalCentered: true,

			responsiveHeight: 600,
			responsiveWidth: 900,

			//初始化
			afterRender: function(){		
				
				$.fn.fullpage.setAllowScrolling(false);

				$('#section1').find('.left').animate({'left': 0}, 500, function() {
					$('#section1').find('.section-bg').animate({'top': 100}, 500, function() {
						$('#one-word').animate({'right': 0}, 500);
					});
				});				
			}, 

			//当加载到某个板块,index从1开始
			afterLoad: function(anchorLink, index){

				$.fn.fullpage.setAllowScrolling(false);			
				
				if(index == 1){

					$('.section').eq(0).mousewheel(function(event, delta, deltaX, deltaY){

						switch (true) {

							case delta < 0:
								$.fn.fullpage.moveTo(2);
								break;

	                        default:
	                            return false;
						}
					});
				};

				if(index == 2){

					$('#section2 .part1 h2').fadeIn(200, function() {
						$('#section2 .part1 div').animate({'width': '200px'}, 800, function() {
							$('#section2 .part1 p').slideDown(600, function() {
								$('#section2').find('.top').slideDown(800, function() {
									$('#section2').find('.bottom').slideDown(800);
								});
							});
						});
					});

					$('.section').eq(1).mousewheel(function(event, delta, deltaX, deltaY){

						switch (true) {

							case delta > 0:
								$.fn.fullpage.moveTo(1);
								break;

							case delta < 0:
								$.fn.fullpage.moveTo(3);
								break;

	                        default:
	                            return false;
						}
					});
				};

				if(index == 3){

					$('#section3 .part1 h2').fadeIn(200, function() {
						$('#section3 .part1 div').animate({'width': '200px'}, 800, function() {
							$('#section3 .part1 p').slideDown(600, function() {
								$('#section3').find('.part2').slideDown(800);
							});
						});
					});	

					$('.section').eq(2).mousewheel(function(event, delta, deltaX, deltaY){

						switch (true) {

							case delta > 0:
								$.fn.fullpage.moveTo(2);
								break;

							case delta < 0:
								$.fn.fullpage.moveTo(4);
								break;

	                        default:
	                            return false;
						}
					});
				};

				if(index == 4){

					$('#section4 .part1 h2').fadeIn(200, function() {
						$('#section4 .part1 div').animate({'width': '200px'}, 800, function() {
							$('#section4 .part1 p').slideDown(600, function() {
								$('#section4').find('.skill-list').animate({'left': 0}, 400);
							});
						});
					});	

					var oSkill = $('.skill-1').is(':visible');
					
					$('.section').eq(3).mousewheel(function(event, delta, deltaX, deltaY){

						switch (true) {
	                        case delta < 0 && oSkill:
								$('.skill-1').slideUp();
								$('.skill-2').slideDown();

	                            //当文本出现的动画显示完全(1s后)才能进行下一步操作
	                            setTimeout(function(){
	                                oSkill = false;	                               
	                            },500);	                            
	                            break;

							case delta < 0 && !oSkill:
								
								$.fn.fullpage.moveTo(5);
				 				break;

				 			case delta > 0 && oSkill:

				 				$.fn.fullpage.moveTo(3);
				 				break;

	                        case delta > 0 && !oSkill:

	                            $('.skill-1').slideDown(800);
	                            $('.skill-2').slideUp(800);

	                            setTimeout(function(){
	                                oSkill = true;
	                            },500);	                            	                            
	                            break;

	                        default:
	                            return false;
						}
					});
				};

				if(index == 5){

					$('#section5 .part1 h2').fadeIn(200, function() {
						$('#section5 .part1 div').animate({'width': '200px'}, 800, function() {
							$('#section5 .part1 p').slideDown(600, function() {
								$('#section5').find('.part2').slideDown(800);
							});
						});
					});	

					$('.section').eq(4).mousewheel(function(event, delta, deltaX, deltaY){

						switch (true) {

							case delta > 0:
								$.fn.fullpage.moveTo(4);
								break;

							case delta < 0:
								break;

	                        default:
	                            return false;
						}
					});
				};
		    },

			
			//当离开某个板块
			onLeave:function(index , nextIndex, direction){
				
				if(index == 2) {

					$('#section2 .part1').find('p').slideUp(300, function() {
						$('#section2 .part1').find('div').animate({'width': 0}, 300);
					});	

				};	

				if(index == 3) {

					$('#section3 .part1').find('p').slideUp(300, function() {
						$('#section3 .part1').find('div').animate({'width': 0}, 300);
					});	

				};				
				if(index == 4) {

					$('#section4 .part1').find('p').slideUp(300, function() {
						$('#section4 .part1').find('div').animate({'width': 0}, 300);
					});	

				};				
				if(index == 5) {

					$('#section5 .part1').find('p').slideUp(300, function() {
						$('#section5 .part1').find('div').animate({'width': 0}, 300);
					});	

				};
			}
		});
	})();

	//工作经历
	(function() {

	    var num = 0;
	    var timer = null;

	    fnTab();

	    $('.time-menu').each(function(index) {

	    	$(this).hover(function() {

	    		clearInterval(timer);
		    	num = index;
		    	fn();

	    	}, function() {
	    		fnTab();
	    	})
	    })

    	function fn() {

	    	$('.time-menu').find('span').removeClass('active');
	    	$('.time-menu').eq(num).find('span').addClass('active');

	    	if (num == 0) {

		    	$('#work-1').animate({
		    		'left': 0,
		    		'top': 0,
		    		'z-index': 3
		    	});

		    	$('#work-2').animate({
		    		'left': '340px',
		    		'top': '-80px',
		    		'z-index': 2
		    	});

		    	$('#work-3').animate({
		    		'left': '-340px',
		    		'top': '-80px',
		    		'z-index': 2
		    	});

	    	} else if (num == 1) {

		    	$('#work-2').animate({
		    		'left': 0,
		    		'top': 0,
		    		'z-index': 3
		    	});

		    	$('#work-3').animate({
		    		'left': '340px',
		    		'top': '-80px',
		    		'z-index': 2
		    	});

		    	$('#work-1').animate({
		    		'left': '-340px',
		    		'top': '-80px',
		    		'z-index': 2
		    	});

	    	} else {

		    	$('#work-3').animate({
		    		'left': 0,
		    		'top': 0,
		    		'z-index': 3
		    	});

		    	$('#work-1').animate({
		    		'left': '340px',
		    		'top': '-80px',
		    		'z-index': 2
		    	});

		    	$('#work-2').animate({
		    		'left': '-340px',
		    		'top': '-80px',
		    		'z-index': 2
		    	});

	    	};
    	};

	    function fnTab() {

	    	timer = setInterval(function() {
	    		fn();
	    		num++;
	    		num %=  3;

	    	},4000);
    	};
	})();

	//菜单
	(function() {
		$('#menu').find('div').each(function(index) {
			$(this).hover(function() {

				$(this).css('background','#925310');

			}, function() {

				$(this).css('background','#b1783b');

			})
		})
	})();

});

window.onload = function () {
	
	//背景鼠标移动

	var oMe = document.getElementById('me');

	var pic1 = document.getElementById('bg-1');
	var pic2 = document.getElementById('bg-2');

	mouseMove( pic1, 'right', 150, 1 );
	mouseMove( pic2, 'right', 100, 1);
	mouseMove( oMe, 'right', 100 );

	function mouseMove( obj, direction, num, fnTab ) {				
		
		if ( document.attachEvent ) {
			document.attachEvent('onmousemove', fn, false);
		} else {
			document.addEventListener('mousemove', fn, false);
		};

		function fn(e) {

			var e = e || window.event;									

			var X = document.documentElement.clientWidth;   //屏幕宽度
			var mX = e.clientX;  //鼠标X坐标
			var scale1 = mX / X;  //鼠标X坐标与屏幕宽度的比例

			//fnTab
			var scale2 = scale1*2;  //鼠标X坐标与屏幕左半边宽度的比例
			var scale3 = 2*(mX-X/2)/X;  //鼠标X坐标在屏幕右半边宽度的比例

			if ( fnTab ) {
				if ( direction == 'left' && mX < X/2 ) {

					obj.style.left = num - num*scale2 + 'px'; 

				} else if ( direction == 'left' && mX > X/2 ) {

					obj.style.left = num*scale3 + 'px'; 
				}

				if ( direction == 'right' && mX < X/2 ) {

					obj.style.right = num - num*scale2 + 'px'; 

				} else if ( direction == 'right' && mX > X/2 ) {

					obj.style.right = num*scale3 + 'px'; 
				}

			} else {
				//left
				if ( direction == 'left' ) {
					obj.style.left = num - num*scale1 + 'px'; 
				};

				//right
				if ( direction == 'right' ) {
					obj.style.right = num - num*scale1 + 'px'; 
				};
			}
		};	
	};

}
