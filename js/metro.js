/**
 * @author psep
 */
/*
 * Carga del plano del Metro de Santiago
 */
function loadPlano() {
	plano = new OpenLayers.Map("planoMetro");

	var options = {
		numZoomLevels : 2
	};

	var graphic = new OpenLayers.Layer.Image(
									'Plano Metro de Santiago', 
									'images/plano.gif', 
									new OpenLayers.Bounds(-180, -88.759, 180, 88.759), 
									new OpenLayers.Size(1000, 730), 
									options
											);

	plano.addLayers([graphic]);
	plano.addControl(new OpenLayers.Control.LayerSwitcher());
	plano.zoomToMaxExtent();
}
