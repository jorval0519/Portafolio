function leer(){
	// Referencia por pseudoclase
			var nom=document.forms["formulario"].elements[0].value;
	// Referencia por Id
			var clave=document.getElementById("pass").value;
	// Referencia por TagName
			var car=document-getElementByTagName("select")[0].value;
				alert(car);

			document-getElementByTagName("select")[0].innerHTML=
			"\<br>Tu nombre: "+nom+
			"\<br>Tu password: "+clave;
			"\<br>Tu carrera: "+car;
}