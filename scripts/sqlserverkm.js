var toggler = document.getElementsByClassName("poscaret");
var i;

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("click", function () {
		this.parentElement.querySelector("ul.nested").classList.toggle("skm-active");
		this.classList.toggle("poscaret-down");
	});
}

function expandAll() {
	for (i = 0; i < toggler.length; i++) {
		toggler[i].parentElement.querySelector("ul.nested").classList.add("skm-active");
		toggler[i].classList.add("poscaret-down");
	}
};

function collapseAll() {
	for (i = 0; i < toggler.length; i++) {
		toggler[i].parentElement.querySelector("ul.nested").classList.remove("skm-active");
		toggler[i].classList.remove("poscaret-down");
	}
};

function invertAll() {
	for (i = 0; i < toggler.length; i++) {
		toggler[i].parentElement.querySelector("ul.nested").classList.toggle("skm-active");
		toggler[i].classList.toggle("poscaret-down");
	}
};
