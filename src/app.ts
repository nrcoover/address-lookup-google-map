import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

const form = document.querySelector("form")!;

let infoMessageEl: HTMLParagraphElement | null = null;

function searchAddressHandler(event: Event) {
	event.preventDefault();

	const coordinates = { lat: 40.41, lng: -73.99 };

	document.getElementById("map")!.innerHTML = "";

	showMockSearchMessage();

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

function showMockSearchMessage() {
	if (!infoMessageEl) {
		infoMessageEl = document.createElement("p");
		infoMessageEl.style.marginTop = "1rem";
		infoMessageEl.style.textAlign = "center";
		infoMessageEl.style.opacity = "0.8";

		form.insertAdjacentElement("afterend", infoMessageEl);
	}

	infoMessageEl.textContent =
		"Due to the lack of an API key, this is a mock search and returns default coordinates.";
}

form.addEventListener("submit", searchAddressHandler);
