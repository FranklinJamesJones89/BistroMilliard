const date = () => {
	let currentYear = new Date().getFullYear();
	document.querySelector('.date').innerHTML = 'Copyright ' + currentYear + ' Company Inc, All Rights Reserved.';
};

date();
