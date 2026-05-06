# Assignment 6: WebGIS with Leaflet
- **Student:** Victoria Swigart
- **Course:** GIST 604B – Open Source GIS
- **Module:** Module 6 – WebGIS with Leaflet
- **University of Arizona**

Project Description
This project introduces client‑side WebGIS development using HTML, CSS, JavaScript, and the Leaflet library. The assignment includes preparing GeoJSON datasets, building an interactive web map, loading spatial data, adding popups and styling, and running the project in a local development environment. The final deliverable is a published Leaflet web map hosted through GitHub Pages.

## Tools and Technologies

- HTML, CSS, JavaScript
- Leaflet.js
- Node.js + npm local development server
- Visual Studio Code
- Git & GitHub Pages

## What I Did

- Forked and cloned the starter WebGIS repository into a local VS Code environment
- Prepared point, line, and polygon GeoJSON datasets in WGS84
- Installed project dependencies and ran a local development server
- Built a Leaflet web map with basemaps, layers, styling, popups, and interaction
- Updated HTML, CSS, and JavaScript files to complete the application
- Published the final map using GitHub Pages

## How to View / Run

- Run locally:
Open a terminal in VS Code
    - Install dependencies: npm install
    - Start the server: npm start
    - View the map at: http://localhost:8080
- View published map:
Open the GitHub Pages URL generated in your repository settings

## Repository Structure

```
/
├── data/
│   ├── .gitkeep
│   ├── Texas_Airports.geojson
│   ├── Texas_Education_Boundaries.geojson
│   └── TxDOT_Texas_Toll_Roads.geojson
├── js/
│   ├── .gitkeep
│   └── Texas_js_file.js
├── css/
│   ├── .gitkeep
│   └── Texas_css_file.css
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```
