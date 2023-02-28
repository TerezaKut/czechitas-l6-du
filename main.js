// tady je místo pro náš program
let reseni = document.querySelector('.vysledek');

function parseDate (datum) {
	let den = Number(datum.slice(0,2));
	let mesic = Number(datum.slice(3,5));
	let rok = Number(datum.slice(6,10));

	reseni.textContent += `${den}.${mesic}.${rok}`;

	let datumCasti = { day: den, month: mesic, year: rok};

	return(datumCasti);
}

parseDate('05.03.2015');

function formatDate (datum){
	let {day, month, year} = datum;
	let slozeneDatum = String(day).padStart(2, '0') + '.' + String(month).padStart(2,'0') + '.' + String(year);
	reseni.innerHTML += '<p>Formátování datumu: '+slozeneDatum+'</p>';
	return slozeneDatum;
}

formatDate({ day: 10, month: 4, year: 2021 });

function zaokrouhlovani (cislo) {
	let celeCislo = Math.trunc(cislo);
	let desetinna = cislo - celeCislo;
	// pokud je presne 0.5
	if (desetinna === 0.5){
		let zbytek = celeCislo/2;
		// pokud neni delitelny dvemi, tak je liche cislo a zaokrouhluji tedy k sudemu nahoru
		if (zbytek !== Math.trunc(zbytek)){
			celeCislo += 1;
			console.log('Zaokrouhluji k sudemu cislu nahoru:'+celeCislo);
		} else {
			console.log('Zaokrouhluji k sudemu cislu dolu:'+celeCislo);
		}
		return (celeCislo);
	}

	if (desetinna < 0.5){
		console.log('Zaokrouhleno dolu: '+celeCislo);
		return (celeCislo);
	} 
		
	if (desetinna > 0.5){
		celeCislo += 1;
		console.log('Zaokrouhleno nahoru: '+celeCislo);
		return(celeCislo)
	}
}

zaokrouhlovani('1.5847');