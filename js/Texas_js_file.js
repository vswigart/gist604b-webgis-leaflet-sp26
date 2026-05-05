// Initialize map (center on Texas)
let map = L.map('map').setView([31.0, -99.0], 6);

// Basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Scale bar
L.control.scale().addTo(map);

// --- Create custom panes so popups attach correctly ---
map.createPane('airportsPane');
map.getPane('airportsPane').style.zIndex = 650;

map.createPane('educationPane');
map.getPane('educationPane').style.zIndex = 600;

map.createPane('tollPane');
map.getPane('tollPane').style.zIndex = 620;

// Layer groups
let airportsLayer = L.layerGroup();
let educationLayer = L.layerGroup();
let tollRoadsLayer = L.layerGroup();

// --- Load Airports ---
fetch('data/Texas_Airports.geojson')
    .then(res => res.json())
    .then(data => {
        L.geoJSON(data, {
            pane: 'airportsPane',
            pointToLayer: (feature, latlng) => {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: 'red',
                    color: 'black',
                    weight: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: (feature, layer) => {
                layer.bindPopup(`<b>Airport:</b> ${feature.properties.ARPRT_NM}`);
            }
        }).addTo(airportsLayer);
    });

// --- Load Education Boundaries ---
fetch('data/Texas_Education_Boundaries.geojson')
    .then(res => res.json())
    .then(data => {
        L.geoJSON(data, {
            pane: 'educationPane',
            style: {
                color: 'green',
                weight: 2,
                fillOpacity: 0.3
            },
            onEachFeature: (feature, layer) => {
                layer.bindPopup(`<b>School:</b> ${feature.properties.SCHOOL_NM}`);
            }
        }).addTo(educationLayer);
    });

// --- Load Toll Roads ---
fetch('data/TxDOT_Texas_Toll_Roads.geojson')
    .then(res => res.json())
    .then(data => {
        L.geoJSON(data, {
            pane: 'tollPane',
            style: {
                color: 'blue',
                weight: 3
            },
            onEachFeature: (feature, layer) => {
                layer.bindPopup(`<b>Toll Road:</b> ${feature.properties.TOLL_NM}`);
            }
        }).addTo(tollRoadsLayer);
    });

// Add layers to map
airportsLayer.addTo(map);
educationLayer.addTo(map);
tollRoadsLayer.addTo(map);

// Layer control
L.control.layers(null, {
    "Airports": airportsLayer,
    "Education Boundaries": educationLayer,
    "Toll Roads": tollRoadsLayer
}).addTo(map);