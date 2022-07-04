
var logoDivStyle = document.getElementById("pageheaderlogo").style
var logoStyle    = document.getElementById("pageheaderimg").style
var h1Style      = document.getElementById("page-name").style
var h2Style      = document.getElementById("page-name-sub").style
var mainStyle    = document.getElementById("content").style

var scrollThreshold = 50
var smallFactor     = 0.5

// When the user scrolls, resize the header
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
		logoDivStyle.height  = "3rem";
		logoStyle.width      = "2.5rem";
		logoStyle.height     = "2.5rem";
		h1Style.fontSize     = "1.5rem";
		h2Style.fontSize     = "0.9rem";
	} else {
		logoDivStyle.height  = "6rem";
		logoStyle.width      = "5rem";
		logoStyle.height     = "5rem";
		h1Style.fontSize     = "2rem";
		h2Style.fontSize     = "1.2rem";
	}
}

// When the user resizes, resize the header
window.onload   = function() {resizeFunction()};
window.onresize = function() {resizeFunction()};
function resizeFunction() {
	var header  = document.getElementById("header")
	var main    = document.getElementById("content")
	var padLeft = parseFloat(window.getComputedStyle(main).getPropertyValue('padding-left'));
	mainStyle.paddingTop = (padLeft+header.offsetHeight)+"px";
}

// When the user prints, resize the header
window.onbeforeprint = function() {printFunction()};
function printFunction() {
	mainStyle.paddingTop = "2rem";
}
