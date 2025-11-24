import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

const form = document.querySelector("form")!;
// const addressInput = document.getElementById("address") as HTMLInputElement;

function searchAddressHandler(event: Event) {
	event.preventDefault();

	// Placeholder coordinates
	const coordinates = { lat: 40.41, lng: -73.99 };

	// Clear the map div
	document.getElementById("map")!.innerHTML = "";

	// Create OpenLayers map using ES modules
	new Map({
		target: "map",
		layers: [
			new TileLayer({
				source: new OSM(),
			}),
		],
		view: new View({
			center: fromLonLat([coordinates.lng, coordinates.lat]),
			zoom: 16,
		}),
	});
}

form.addEventListener("submit", searchAddressHandler);
