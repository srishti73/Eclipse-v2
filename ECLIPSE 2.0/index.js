(function ($) {
	$(function () {
  
  
	  $(window).on('scroll', function () {
		fnOnScroll();
	  });
  
	  $(window).on('resize', function () {
		fnOnResize();
	  });
  
  
	  var agTimeline = $('.js-timeline'),
		agTimelineLine = $('.js-timeline_line'),
		agTimelineLineProgress = $('.js-timeline_line-progress'),
		agTimelinePoint = $('.js-timeline-card_point-box'),
		agTimelineItem = $('.js-timeline_item'),
		agOuterHeight = $(window).outerHeight(),
		agHeight = $(window).height(),
		f = -1,
		agFlag = false;
  
	  function fnOnScroll() {
		agPosY = $(window).scrollTop();
  
		fnUpdateFrame();
	  }
  
	  function fnOnResize() {
		agPosY = $(window).scrollTop();
		agHeight = $(window).height();
  
		fnUpdateFrame();
	  }
  
	  function fnUpdateWindow() {
		agFlag = false;
  
		agTimelineLine.css({
		  top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
		  bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
		});
  
		f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
	  }
  
	  function fnUpdateProgress() {
		var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
		i = agTop + agPosY - $(window).scrollTop();
		a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
		n = agPosY - a + agOuterHeight / 2;
		i <= agPosY + agOuterHeight / 2 && (n = i - a);
		agTimelineLineProgress.css({height: n + "px"});
  
		agTimelineItem.each(function () {
		  var agTop = $(this).find(agTimelinePoint).offset().top;
  
		  (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
		})
	  }
  
	  function fnUpdateFrame() {
		agFlag || requestAnimationFrame(fnUpdateWindow);
		agFlag = true;
	  }
  
  
	});
  })(jQuery);
  
  
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++){
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.visibility = "hidden";
      content.style.margin = "0 2%";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.visibility = "visible";
      content.style.margin = "12px 2%";
    }
  });
}
