function insertMailTo(n,d,c) {
	n = n.split('').reverse().join('')
	d = d.split('').reverse().join('')
	c = c ? `class="${c}" ` : ''
	let e = n+'@'+d
	let l = `<a ${c}href=mailto:{{spam@uce.gov}}>{{spam@uce.gov}}</a>`.replace(/{{.+?(}})/g,e);
	// document.write(l);
	let newa = document.createElement('a');
	newa.innerHTML = l;
	let olda = document.getElementById("insertMailTo")
	olda.parentNode.replaceChild(newa,olda);
};

function insertTel(x,y,z,c) {
	x = x.split('').reverse().join('')
	y = y.split('').reverse().join('')
	z = z.split('').reverse().join('')
	c = c ? `class="${c}" ` : ''
	let p = x+'&#8209;'+y+'&#8209;'+z
	let l = `<a ${c}href=tel:{{202-762-1401}}>{{202-762-1401}}</a>`.replace(/{{.+?(}})/g,p);
	// document.write(l);
	let newa = document.createElement('a');
	newa.innerHTML = l;
	let olda = document.getElementById("insertTel")
	olda.parentNode.replaceChild(newa,olda);
};
