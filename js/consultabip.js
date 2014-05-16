/**
 * Función que ejecuta la acción del botón click
 * ejecutando la validación y posterior llamado
 * ajax a la api con json, reescribiendo si la
 * data es correcta un div con la información
 * respectiva en relación a la tarjeta bip!
 */
function consultar() {
	var id = parsedId();

	if (id > 0) {
		var data = "numberBip=";
		data += id;

		try {
			$(document).ajaxStart($.blockUI({
				centerX : 1,
				centerY : 1,
				css : {
					border : 'none',
					padding : '15px',
					backgroundColor : '#000',
					opacity : .5,
					color : '#F9F9F9'
				},
				message : '<h1>Espere</h1>'
			})).ajaxStop($.unblockUI);

			$.ajax({
				type : 'GET',
				dataType : 'json',
				url : 'http://www.psep.cl/api/Bip.php?',
				data : data,
				success : successCallback,
				error : errorCallback

			});
		} catch(e) {
			alert(e.description);
			alert("error");
		}

	}
}

/**
 * Función que recibe la respuesta ajax
 * para luego procesarla y formatear el
 * div indicado.
 *
 * @param {Object} ajaxResponse
 */
function successCallback(ajaxResponse) {
	var dataProcess = processObject(ajaxResponse);

	if (!dataProcess) {
		alert("No existe información asociada");
		return;
	}

	var aux = 0;
	var html = "<article>";
	html += "<p>Saldo correspondiente a la fecha indicada.</p>";
	html += "<br />";
	html += '<table class="tablaBkn" border="1">';
	for (var i in dataProcess) {
		var obj = dataProcess[i];

		switch(aux) {
			case 0:
				html += "<tr><td>Número Tarjeta</td>";
				html += "<td>";
				html += obj;
				html += "</td></tr>";
				break;
			case 1:
				html += "<tr><td>Estado Contrato</td>";
				html += "<td>";
				html += obj;
				html += "</td></tr>";
				break;
			case 2:
				html += "<tr><td>Saldo Tarjeta</td>";
				html += "<td>";
				html += obj;
				html += "</td></tr>";
				break;
			case 3:
				html += "<tr><td>Fecha Saldo</td>";
				html += "<td>";
				html += obj;
				html += "</td></tr>";
				break;
		}
		aux++;
	}

	html += "</table>";
	html += "<br />";
	html += '<button id="inicio" onclick="inicio();">Ir a la Consulta</button></div>';
	html += "</article>";
	document.getElementById('divForm').innerHTML = html;
}

/**
 * Función que retorna al div original
 */
function inicio() {
	var html = "";
	html += '<article>';
	html += '<p>';
	html += '<input id="idTarjeta" class="inputText" type="number" maxlength="15" placeholder="N° Tarjeta Bip!" />';
	html += '</p>';
	html += '<p>';
	html += ' <button id="consultar" onclick="consultar()">';
	html += 'Consultar';
	html += '</button>';
	html += '</p>';
	html += '</article>';
	document.getElementById('divForm').innerHTML = html;
}

/**
 * Función que valida el objeto
 * json entregado como parámetro.
 *
 * @param {Object} ajaxResponse
 */
function processObject(ajaxResponse) {
	if ( typeof ajaxResponse == "string")
		ajaxResponse = $.parseJSON(ajaxResponse);
	return ajaxResponse;
}

/**
 * Función que es llamada para el
 * error de la transacción ajax.
 */
function errorCallback() {
	alert("No existe información asociada, revise");
}

/**
 * Función que valida el campo del ID
 * de la tarjeta, retornándolo como entero
 */
function parsedId() {
	var id = parseInt($("#idTarjeta").val());

	if (isNaN(id) || id == 0) {
		alert("Debe indicar Número de Tarjeta válido");
		$("#idTarjeta").val("");
		return 0;
	} else {
		return id;
	}
}

/**
 * Para efectos de entrada de datos de favoritos
 * @param {Object} idTarjeta
 */
function loadData(idTarjeta) {
	var id = parseInt(idTarjeta);

	if (!isNaN(id) && id > 0) {
		var data = "numberBip=";
		data += id;

		try {
			$(document).ajaxStart($.blockUI({
				centerX : 1,
				centerY : 1,
				css : {
					border : 'none',
					padding : '15px',
					backgroundColor : '#000',
					opacity : .5,
					color : '#F9F9F9'
				},
				message : '<h1>Espere</h1>'
			})).ajaxStop($.unblockUI);

			$.ajax({
				type : 'GET',
				dataType : 'json',
				url : 'http://www.psep.cl/api/Bip.php?',
				data : data,
				success : successCallback2,
				error : errorCallback

			});
		} catch(e) {
			alert(e.description);
		}

	}
}