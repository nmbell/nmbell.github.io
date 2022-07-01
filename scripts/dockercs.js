var allCollapsibles = document.querySelectorAll('.outercollapsible,.innercollapsible');

allCollapsibles.forEach(item => {
	item.addEventListener("click", function () {
		this.classList.toggle("active");
		if (this.nextElementSibling.classList.contains('show')) {
			this.nextElementSibling.classList.remove('show')
		} else {
			this.nextElementSibling.classList.add('show')
		}
	});
});

function expandAll() {
	allCollapsibles.forEach(item => {
		item.classList.add("active");
		if (!item.nextElementSibling.classList.contains('show')) {
			item.nextElementSibling.classList.add('show')
		}
	});
}

function collapseAll() {
	allCollapsibles.forEach(item => {
		item.classList.remove("active");
		if (item.nextElementSibling.classList.contains('show')) {
			item.nextElementSibling.classList.remove('show')
		}
	});
}

function invertAll() {
	allCollapsibles.forEach(item => {
		item.classList.toggle("active");
		if (item.nextElementSibling.classList.contains('show')) {
			item.nextElementSibling.classList.remove('show')
		}
		else {
			item.nextElementSibling.classList.add('show')
		}
	});
}
