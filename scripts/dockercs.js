var allCollapsibles = document.querySelectorAll('.outercollapsible,.innercollapsible');

allCollapsibles.forEach(item => {
	item.addEventListener("click", function () {
		this.classList.toggle("dcs-active");
		if (this.nextElementSibling.classList.contains('show')) {
			this.nextElementSibling.classList.remove('show')
		} else {
			this.nextElementSibling.classList.add('show')
		}
	});
});

function expandAll() {
	allCollapsibles.forEach(item => {
		item.classList.add("dcs-active");
		if (!item.nextElementSibling.classList.contains('show')) {
			item.nextElementSibling.classList.add('show')
		}
	});
}

function collapseAll() {
	allCollapsibles.forEach(item => {
		item.classList.remove("dcs-active");
		if (item.nextElementSibling.classList.contains('show')) {
			item.nextElementSibling.classList.remove('show')
		}
	});
}

function invertAll() {
	allCollapsibles.forEach(item => {
		item.classList.toggle("dcs-active");
		if (item.nextElementSibling.classList.contains('show')) {
			item.nextElementSibling.classList.remove('show')
		}
		else {
			item.nextElementSibling.classList.add('show')
		}
	});
}
