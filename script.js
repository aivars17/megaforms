cb_sriubos = document.getElementById('sriubos');
div_sriubos = document.getElementById('div_sriubos');
veg_food = document.getElementById('cb_veg');

div_salotos = document.getElementById("div_salotos");
cb_salotos = document.getElementById("cb_salotos");

cb_sriubos.addEventListener('change', function(){
	if (cb_sriubos.checked) {
		div_sriubos.style.display = 'block';
	} else {
		div_sriubos.style.display = 'none';
	}
});
veg_food.addEventListener('change', function(){
	var sriubu_sarasas = document.getElementById("sriubu_sarasas").options;
	if (veg_food.checked) {
		for (var i = 0; i < sriubu_sarasas.length; i++) {
			
				if (sriubu_sarasas[i].getAttribute("veg") == "false") {
					if (sriubu_sarasas.selectedIndex == i) {
						alert("mesa");
					}
					sriubu_sarasas[i].style.display = "none";
				} else {
					var selected = false;
					if (!selected) {
						sriubu_sarasas[i].setAttribute("selected", "true");
						selected = true;
					}
				}
		}
		
	} else {
		for (var i = 0; i < sriubu_sarasas.length; i++) {
			sriubu_sarasas[i].style.display = "block";
		}
	}
});


cb_salotos.addEventListener('change', function(){
	if(cb_salotos.checked) {
		div_salotos.style.display = "block";
	}	else {
		div_salotos.style.display = "none";
	}
});

cb_laktoze = document.getElementById('cb_laktoze');
cb_cukrus = document.getElementById('cb_cukrus');
cb_glitenas = document.getElementById('cb_gliutenas');

antri_sarasas = document.getElementById('antri_sarasas');

cb_laktoze.addEventListener('change', function(){
	if (cb_laktoze.checked) {
		for (var i = 0; i < antri_sarasas.length; i++) {
			if (antri_sarasas[i].getAttribute('lakt') == "false") {
				antri_sarasas[i].style.display = "none";
			} 
				
			
		}

	} else {
		for (var i = 0; i < antri_sarasas.length; i++) {
			antri_sarasas[i].style.display = "block";
		}
	}

});

cb_cukrus.addEventListener('change', function(){
	if (cb_cukrus.checked) {
		for (var i = 0; i < antri_sarasas.length; i++) {
			if (antri_sarasas[i].getAttribute('cu') == "false") {
				antri_sarasas[i].style.display = "none";
			} 
				
			
		}

	} else {
		for (var i = 0; i < antri_sarasas.length; i++) {
			antri_sarasas[i].style.display = "block";
		}
	}

});

cb_gliutenas.addEventListener('change', function(){
	if (cb_gliutenas.checked) {
		for (var i = 0; i < antri_sarasas.length; i++) {
			if (antri_sarasas[i].getAttribute('gliu') == "false") {
				antri_sarasas[i].style.display = "none";
			} 
				
			
		}

	} else {
		for (var i = 0; i < antri_sarasas.length; i++) {
			antri_sarasas[i].style.display = "block";

		}

}
});

var checkbox = document.getElementsByTagName("input[name=checkbox]");
checkbox.addEventListener( 'change', function() {
    console.log(checkbox);});
    /*if(this.checked) {
        alert('bam');
    } else {
        for (var i = 0; i < antri_sarasas.length; i++) {
			if (antri_sarasas[i].getAttribute('gliu') == "false") {
				antri_sarasas[i].style.display = "none";
			} 
    }
}
});*/

