$('dl dd').hide();
$('dl dt').click(function() {
	if ($(this).hasClass('activo')) {
		$(this).removeClass('activo');
		$(this).next().slideUp();
	} else {
		$('dl dt').removeClass('activo');
		$(this).addClass('activo');
		$('dl dd').slideUp();
		$(this).next().slideDown();
	}
});

/**
 * 
 */
function cambiarcont() {
	$('dl dt').removeClass('activo');
	$(this).addClass('activo');
	$('dl dd').slideUp();
	$(this).next().slideDown();
}

/**
 * Carga los Términos de Uso
 */
function loadTerminos() {
	var output = document.getElementById('terminosDeUso');
	var html = '';
	html += '<h2>Términos de Uso</h2>';
	html += '<p>';
	html += 'MetroMobile es una app que entrega información de los servicios disponibles del Metro de Santiago.';
	html += '</p>';
	html += '<br />';
	html += '<p>';
	html += 'La información de apertura y cierre de estaciones es información pública del <a href="http://www.metro.cl/" target="_blank">Metro de Santiago</a>.';
	html += '</p>';
	html += '<br />';
	html += '<p>';
	html += 'El servicio de consulta de saldo Bip permite a los usuarios del Transantiago que cuenten con tarjeta Bip! (monedero electrónico del Transporte Público de Santiago de Chile) consultar su saldo en línea. Este un cliente que utiliza el servicio de que provee <a href="http://www.tarjetabip.cl/" target="_blank">TarjetaBip.cl</a>.';
	html += '</p>';
	html += '<br />';
	html += '<p>';
	html += 'La información brindada por este cliente (SaldoBip!) es de plena responsabilidad de <a href="http://www.tarjetabip.cl/" target="_blank">TarjetaBip.cl</a>, medio de pago oficial del <a href="http://www.transantiago.cl/" target="_blank">Transantiago.cl</a>, por lo que nuestro cliente no puede garantizar ni la precisión ni actualización adecuada de estos datos, ya que son responsabilidad de la fuente, en este caso Tarjeta Bip! y Transantiago.';
	html += '</p>';
	html += '<br />';
	html += '<p>';
	html += 'Dicho lo anterior, nuestro cliente no se hace responsable de eventuales daños y/o perjuicios directos y/o indirectos que pudiera afectar a los usuarios de esta aplicación.';
	html += '</p>';
	html += '<br />';
	html += '<p>';
	html += 'La aplicación no almacena ningún tipo de información.';
	html += '</p>';
	html += '<br />';
	html += '<p>';
	html += 'Recuerda, esta app es Software Libre bajo <a href="https://github.com/Psep/metromobile" target="_blank">Licencia GPLv3</a>.';
	html += '</p>';
	html += '<br />';
	html += '<br />';
	html += '<br />';
	html += '<br />';
	output.innerHTML = html;
}

/**
 * Limpia div de términos de uso
 */
function clearTerminos() {
	document.getElementById('terminosDeUso').innerHTML = '';
}
