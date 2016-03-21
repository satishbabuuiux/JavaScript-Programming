function list(names) {
	var result = '';

	for(var i = 0; i < names.length; i++) {

		if(i != names.length -1) {
			result += names[i].name + ', ';
		} else {
			if(names.length === 1) {
				result = names[i].name;
			} else {
				result = result.slice(0, -2)
				result += ' & ' + names[i].name;	
			}
		}
	}

	console.log(result);
}

function caller() {
	var names = [{name: 'Bart'}];
	list(names);
}

window.addEventListener('load', caller, false);