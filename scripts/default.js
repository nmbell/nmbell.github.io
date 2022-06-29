var logoDivStyle = document.getElementById("pageheaderlogo").style
var logoStyle    = document.getElementById("pageheaderimg").style
var h1Style      = document.getElementById("page-name").style
var h2Style      = document.getElementById("page-name-sub").style
var mainStyle    = document.getElementById("content").style

// When the user scrolls, resize the header
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	var scrollThreshold = 50
	if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
		logoDivStyle.height    = "4rem";
		logoStyle.width        = "3rem";
		logoStyle.height       = "3rem";
		h1Style.fontSize       = "1.33rem";
		h2Style.fontSize       = "1rem";
	} else {
		logoDivStyle.height    = "6rem";
		logoStyle.width        = "5rem";
		logoStyle.height       = "5rem";
		h1Style.fontSize       = "2rem";
		h2Style.fontSize       = "1.2rem";
	}
}

// When the user resizes, resize the header
window.onresize = function() {resizeFunction()};
window.onload   = function() {resizeFunction()};
function resizeFunction() {
	var header  = document.getElementById("header")
	var main    = document.getElementById("content")
	var padLeft = parseFloat(window.getComputedStyle(main).getPropertyValue('padding-left'));
	mainStyle.paddingTop = (padLeft+header.offsetHeight)+"px";
}