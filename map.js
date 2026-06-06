(function() {
const markers = [
["Chambre de simulation atmosphérique à irradiation naturelle d'Orléans (HELIOS)", "Atmospheric simulation chamber", 47.838, 1.944, "uy77", "https://nflabelling.actris.eu/facility/44", "France", "https://helios-cnrs.org/", "French National Centre for Scientific Research (CNRS)\nUniversity of Orléans", 7],
["Multiphase Atmospheric Simulation Chamber (CESAM)", "Atmospheric simulation chamber", 48.789, 2.444, "vkyl", "https://nflabelling.actris.eu/facility/43", "France", "https://cesam.cnrs.fr/", "French National Centre for Scientific Research (CNRS)\nParis-Est Créteil University (UPEC)", 8],
["Simulation of Atmospheric PHotochemistry In a large Reaction Chamber (SAPHIR)", "Atmospheric simulation chamber", 50.91, 6.41, "7r1t", "https://nflabelling.actris.eu/facility/62", "Germany", "https://www.fz-juelich.de/en/ice/ice-3/scientific-infrastructure/saphir", "Forschungszentrum Jülich (FZJ)", 9],
["Atmospheric Chemistry Department Chamber (ACD-C)", "Atmospheric simulation chamber", 51.35, 12.43, "0vtd", "https://nflabelling.actris.eu/facility/60", "Germany", "https://www.tropos.de/en/institute/departments/atmospheric-chemistry/lab-experiments/aerosol-chamber-experiments", "Leibniz Institute for Tropospheric Research (TROPOS)", 10],
["Quartz Glass Reactor (QUAREC)", "Atmospheric simulation chamber", 51.24, 7.15, "v20w", "https://nflabelling.actris.eu/facility/61", "Germany", "https://quarec.uni-wuppertal.de/en/quarec/infrastructure/quarec-asc/", "University of Wuppertal (BUW)", 11],
["ChAMBRe", "Atmospheric simulation chamber", 44.403, 8.972, "ngh4", "https://nflabelling.actris.eu/facility/87", "Italy", "https://actris.it/en/infn-genova-nf-chambre/", "National Institute for Nuclear Physics (INFN)", 12],
["CERNESIM", "Atmospheric simulation chamber", 47.166, 27.566, "dok7", "https://nflabelling.actris.eu/facility/103", "Romania", "https://cernesim.uaic.ro/index.php/language/en/l3-en/l3en/l3-a-en/l3-a-equipment/", "Alexandru Ioan Cuza University", 13],
["EUPHORE", "Atmospheric simulation chamber", 39.5, -0.5, "x0z5", "https://nflabelling.actris.eu/facility/112", "Spain", "https://www.ceam.es/research/atmospheric-chemistry/euphore/", "Mediterranean Center for Environmental Studies (CEAM)", 14],
["PACS", "Atmospheric simulation chamber", 47.539, 8.229, "qjoi", "https://nflabelling.actris.eu/facility/121", "Switzerland", "https://www.actris.ch/facilities/pacs/", "Paul Scherrer Institute (PSI)", 15],
["Aerosol, cluster and trace gas laboratory (Helsinki)", "Laboratory platform", 60.2, 24.967, "", "https://nflabelling.actris.eu/facility/31", "Finland", "", "University of Helsinki (UH)", 17],
["MARTISLAB-BE", "Mobile platform", 50.305, 5.998, "", "https://nflabelling.actris.eu/facility/8", "Belgium", "", "Royal Belgian Institute for Space Aeronomy (BIRA)", 18],
["Mobile Aerosol Laboratory", "Mobile platform", 61.449, 23.856, "", "https://nflabelling.actris.eu/facility/32", "Finland", "https://www.tuni.fi/en/research/atmo-lab-aerosol-and-trace-gas-mobile-laboratory", "Tampere University", 19],
["Exploratory platform UG", "Mobile platform", 57.686, 11.961, "", "https://nflabelling.actris.eu/facility/118", "Sweden", "", "University of Gothenburg", 21],
["University Innsbruck (UIBK)", "Observational platform", 47.264, 11.383, "", "https://nflabelling.actris.eu/facility/2", "Austria", "", "Universität Innsbruck", 23],
["Vielsalm", "Observational platform", 50.27, 5.9, "xp2z", "https://nflabelling.actris.eu/facility/6", "Belgium", "https://www.wallonair.be/en/", "Institut Scientifique de Service Public (ISSeP)\nRoyal Belgian Institute for Space Aeronomy (BIRA)\nUniversity of Liège", 24],
["National Atmospheric Observatory Kosetice", "Observational platform", 49.573, 15.08, "p797", "https://nflabelling.actris.eu/facility/14", "Czech Republic", "https://actris.cz/web/en/", "Czech Academy of Sciences, Global Change Research Institute (ÚVGZ AV ČR)\nCzech Academy of Sciences, Institute of Chemical Process Fundamentals (ÚCHP AV ČR)\nCzech Hydrometeorological Institute (CHMI)", 26],
["Pallas Atmosphere-Ecosystem Supersite", "Observational platform", 67.973, 24.116, "8h8z", "https://nflabelling.actris.eu/facility/26", "Finland", "https://en.ilmatieteenlaitos.fi/pallas-atmosphere-ecosystem-supersite", "Finnish Meteorological Institute (FMI)", 27],
["SMEAR II (Hyytiälä)", "Observational platform", 61.85, 24.283, "ko6m", "https://nflabelling.actris.eu/facility/23", "Finland", "https://www.atm.helsinki.fi/smear/smear-ii/", "University of Helsinki (UH)", 28],
["SMEAR III (Helsinki)", "Observational platform", 60.2, 24.967, "p0ob", "https://nflabelling.actris.eu/facility/24", "Finland", "https://www.atm.helsinki.fi/smear/smear-iii/", "Finnish Meteorological Institute (FMI)\nUniversity of Helsinki (UH)", 29],
["SMEAR I (Värriö)", "Observational platform", 67.767, 29.583, "d23p", "https://nflabelling.actris.eu/facility/22", "Finland", "https://www.helsinki.fi/en/research-stations/varrio-subarctic-research-station", "University of Helsinki (UH)", 30],
["Pyrenean Platform for Observation of the Atmosphere (P2OA)", "Observational platform", 42.936, 0.142, "gstt", "https://nflabelling.actris.eu/facility/40", "France", "https://p2oa.aeris-data.fr/", "French National Centre for Scientific Research (CNRS)\nUniversité de Toulouse (UT)", 31],
["Site d'observation atmosphériques Puy de Dôme/ Opme/Cézeaux (COPDD)", "Observational platform", 45.772, 2.965, "do7b", "https://nflabelling.actris.eu/facility/38", "France", "http://wwwobs.univ-bpclermont.fr/atmos/fr/recherches/station_obs.php", "French National Centre for Scientific Research (CNRS)\nUniversity of Clermont Auvergne", 32],
["Site Instrumental de Recherche par Télédétection Atmosphérique (SIRTA)", "Observational platform", 48.717, 2.207, "k0wb", "https://nflabelling.actris.eu/facility/37", "France", "https://sirta.ipsl.fr/", "Atomic Energy and Alternative Energies Commission (CEA)\nÉcole Polytechnique\nFrench National Centre for Scientific Research (CNRS)\nFrench National Institute for Industrial Environment and Risks (INERIS)\nVersailles Saint-Quentin-en-Yvelines University (UVSQ)", 33],
["Cape Verde Atmospheric Observatory", "Observational platform", 16.834, -24.868, "wnsz", "https://nflabelling.actris.eu/facility/55", "Germany", "https://www.tropos.de/en/research/projects-infrastructures-technology/coordinated-observations-and-networks/cvao-cape-verde-atmospheric-observatory", "Leibniz Institute for Tropospheric Research (TROPOS)", 34],
["Melpitz Research Station", "Observational platform", 51.525, 12.928, "fhhq", "https://nflabelling.actris.eu/facility/50", "Germany", "https://www.tropos.de/en/research/atmospheric-aerosols/long-term-trends-and-process-analysis/long-term-studies-of-regional-importance-and-air-quality/regional-research-station-melpitz/overview", "Leibniz Institute for Tropospheric Research (TROPOS)", 35],
["Meteorological Observatory Hohenpeissenberg (DWD)", "Observational platform", 47.801, 11.01, "rhhz", "https://nflabelling.actris.eu/facility/47", "Germany", "https://www.dwd.de/EN/research/observing_atmosphere/composition_atmosphere/hohenpeissenberg/start_mohp_node.html", "German Meteorological Service (DWD)", 36],
["Schmücke", "Observational platform", 50.65, 10.77, "6nb4", "https://nflabelling.actris.eu/facility/52", "Germany", "", "German Federal Environment Agency (UBA)\nLeibniz Institute for Tropospheric Research (TROPOS)", 37],
["Taunus Observatory", "Observational platform", 50.22, 8.45, "", "https://nflabelling.actris.eu/facility/53", "Germany", "https://www.goethe-university-frankfurt.de/172144516/ACTRIS", "Goethe University Frankfurt", 38],
["Waldhof", "Observational platform", 52.801, 10.757, "khp0", "https://nflabelling.actris.eu/facility/54", "Germany", "", "German Federal Environment Agency (UBA)", 39],
["CMN-PV", "Observational platform", 44.193, 10.701, "7uqv", "https://nflabelling.actris.eu/facility/79", "Italy", "https://cimone.isac.cnr.it/", "Institute of Atmospheric Sciences and Climate (CNR-ISAC)", 42],
["Lecce (ECO-CNR + UNISALENTO)", "Observational platform", 40.336, 18.124, "ytp0", "https://nflabelling.actris.eu/facility/80", "Italy", "https://actris.it/lecce-cnr-isac-environmental-climate-observatory/", "Institute of Atmospheric Sciences and Climate (CNR-ISAC)\nUniversity of Salento", 43],
["Ruisdael Observatory: CABAUW", "Observational platform", 51.971, 4.927, "oy7a", "https://nflabelling.actris.eu/facility/88", "Netherlands", "https://ruisdael-observatory.nl/cabauw/", "Royal Netherlands Meteorological Institute (KNMI)", 44],
["Trollhaugen", "Observational platform", -72.012, 2.535, "x2ve", "https://nflabelling.actris.eu/facility/91", "Norway", "https://www.pmodwrc.ch/en/world-radiation-center-2/worcc/gaw-pfr/trollhaugen/", "Norwegian Institute for Air Research (NILU)", 45],
["Zeppelin", "Observational platform", 78.907, 11.889, "w2kl", "https://nflabelling.actris.eu/facility/90", "Norway", "", "Norwegian Institute for Air Research (NILU)\nNorwegian Polar Institute\nStockholm University", 46],
["Hyltemossa", "Observational platform", 56.1, 13.417, "3y00", "https://nflabelling.actris.eu/facility/113", "Sweden", "https://www.actris.se/", "Lund University", 47],
["Norunda", "Observational platform", 60.083, 17.483, "xgkg", "https://nflabelling.actris.eu/facility/114", "Sweden", "https://www.actris.se/node/10", "Stockholm University", 48],
["Svartberget", "Observational platform", 64.25, 19.767, "fq8c", "https://nflabelling.actris.eu/facility/116", "Sweden", "https://www.icos-sweden.se/Svartberget", "Swedish University of Agricultural Sciences (SLU)", 49],
["Jungfraujoch", "Observational platform", 46.547, 7.985, "mmee", "https://nflabelling.actris.eu/facility/120", "Switzerland", "https://www.actris.ch/", "ETH Zurich\nPaul Scherrer Institute (PSI)\nSwiss Federal Laboratories for Materials Science and Technology (EMPA)", 50],
["Beromuenster", "Observational platform", 47.19, 8.175, "ccmg", "https://nflabelling.actris.eu/facility/129", "Switzerland", "https://www.actris.ch/facilities/beromunster/", "Swiss Federal Laboratories for Materials Science and Technology (EMPA)", 51],
["MAGA Mobile facility", "Mobile platform", 40.336, 18.124, "", "https://nflabelling.actris.eu/facility/83", "Italy", "", "Institute of Atmospheric Sciences and Climate (CNR-ISAC)", 472],
["ACTRIS Flanders", "Mobile platform", 51.21877, 5.09084, "", "https://nflabelling.actris.eu/facility/131", "Belgium", "", "VITO - Flemish Institute for Technological Research", 473],
["Forschungszentrum Jülich - VOCs", "central facility", 50.91, 6.41, "", "", "Germany", "https://actris.eu/topical-centre/cigas", "Forschungszentrum Jülich (FZJ)", 383],
["Forschungszentrum Jülich - NOx", "central facility", 50.91, 6.41, "", "", "Germany", "https://actris.eu/topical-centre/cigas", "Forschungszentrum Jülich (FZJ)", 384],
["University of Helsinki (UHEL)", "central facility", 60.20, 24.96, "", "", "Finland", "https://actris.eu/topical-centre/cigas", "University of Helsinki (UHEL)", 388],
["Institut Mines Télécom Nord Europe (IMT-NE)", "central facility", 50.39, 3.08, "", "", "France", "https://actris.eu/topical-centre/cigas", "Institut Mines Télécom Nord Europe (IMT-NE)", 387],
["Eidgenössische Materialprüfungs- und Forschungsanstalt (EMPA)", "central facility", 47.40, 8.61, "", "", "Switzerland", "https://actris.eu/topical-centre/cigas", "Eidgenössische Materialprüfungs- und Forschungsanstalt (EMPA)", 386],
["Deutscher Wetterdienst - Hohenpeißenberg (DWD)", "central facility (DWD)", 47.801, 11.01, "", "", "Germany", "https://actris.eu/topical-centre/cigas", "Forschungszentrum Jülich (FZJ)", 385]];
const NFIcon = L.Icon.extend({
  options: {
    iconSize: [20, 30],
    iconAnchor: [10, 30],
    popupAnchor: [0, -30]
  }
});
const chamberIcon = new NFIcon({iconUrl: '/sites/default/files/inline-images/simulation_chamber_0.png'});
const mobileIcon = new NFIcon({iconUrl: '/sites/default/files/inline-images/mobile_platform.png'});
const ObsIcon = new NFIcon({iconUrl: '/sites/default/files/inline-images/observatory_platform_0.png'});
const labIcon = new NFIcon({iconUrl: '/sites/default/files/inline-images/Laboratory_platform_3.png'});
const CentralIcon = new NFIcon({iconUrl: '/sites/default/files/inline-images/Central_facility.png'});
const chambers = L.layerGroup();
const LabPlat = L.layerGroup();
const MobilePlat = L.layerGroup();
const ObsPlat = L.layerGroup();
const CentralFacility = L.layerGroup();
const circleOptions = {
  radius: 3,
  color: '#2C347F',
  fillColor: '#2C347F',
  fillOpacity: 1,
  weight: 1
};
function getColorForFacilityType(type) {
  if (!type) return '#808080';
  const t = type.toLowerCase();
  if (t.includes('atmospheric simulation chamber')) return '#FDC59F';
  if (t.includes('mobile platform')) return '#2398AA';
  if (t.includes('laboratory platform')) return '#F86A71';
  if (t.includes('observational platform')) return '#2C347F';
  if (t.includes('central facility')) return '#808080';
  return '#808080';
}
function getFlagURL(countryName) {
  const countryCodeMap = {
    "Austria": "at", "Belgium": "be", "Bulgaria": "bg", "Cyprus": "cy", "Czech Republic": "cz",
    "Denmark": "dk", "Finland": "fi", "France": "fr", "Germany": "de", "Greece": "gr",
    "Italy": "it", "Netherlands": "nl", "Norway": "no", "Poland": "pl", "Romania": "ro",
    "Spain": "es", "Sweden": "se", "Switzerland": "ch", "United Kingdom": "gb"
  };
  const code = countryCodeMap[countryName];
  return code ? 'https://flagcdn.com/w20/' + code + '.png' : '';
}
function createPopupContent(name, typeLabel, country, labellingURL, dataURL, nfURL, hostingInst, nfObjectID) {
  const flagURL = getFlagURL(country);
  let nfLink = '';
  if (nfURL && nfURL.trim() !== '') {
    let label = typeLabel.toLowerCase().includes("central facility") ? "Central Facility Website" : "National Facility Website";
    nfLink = '<p>🌐 <a href="' + nfURL + '" target="_blank">' + label + '</a></p>';
  }
  let dataLink = '';
  if (dataURL && dataURL.trim() !== '') {
    dataLink = '<p>📊 <a href="https://data.actris.eu/facility/' + dataURL + '" target="_blank">ACTRIS Data Portal</a></p>';
  }
  let labellingLink = '';
  if (labellingURL && labellingURL.trim() !== '') {
    labellingLink = '<p>🔗 <a href="' + labellingURL + '" target="_blank">ACTRIS Labelling Portal</a></p>';
  }
  const instFormatted = hostingInst.replace(/\n/g, '<br>');
  const flagImg = flagURL ? '<img src="' + flagURL + '" class="flag-icon">' : '';
  const cigasLink = '<p>📦 <a href="https://cigas-box.fz-juelich.de/facility/' + nfObjectID + '" target="_blank">Instruments</a></p>';
  return '<div style="font-family: sans-serif; min-width: 220px;"><div style="font-size: 16px; font-weight: bold; color: #2c3e50;">' + name + '</div><div style="font-size: 13px; color: #555;"><span style="color: grey; padding: 2px 6px; border-radius: 3px; font-size: 12px; font-style: italic">' + typeLabel + '</span></div><div style="margin: 6px 0;">' + instFormatted + '<br>' + flagImg + country + '</div><hr><div class="links">' + nfLink + labellingLink + dataLink + cigasLink + '</div></div>';
  }
function createMarker(lng, lat, name, country, labellingURL, dataURL, nfURL, hostingInst, nfObjectID, typeLabel, useIcon) {
  if (useIcon === undefined) useIcon = false;
  const popupContent = createPopupContent(name, typeLabel, country, labellingURL, dataURL, nfURL, hostingInst, nfObjectID);
  const color = getColorForFacilityType(typeLabel);
  let marker;
  if (useIcon) {
    let icon = color === '#FDC59F' ? chamberIcon : color === '#2398AA' ? mobileIcon : color === '#F86A71' ? labIcon : color === '#2C347F' ? ObsIcon : color === '#808080' ? CentralIcon : null;
    if (icon) marker = L.marker([lat, lng], {icon: icon}).bindPopup(popupContent);
  } else {
    const options = {radius: circleOptions.radius, color: color, fillColor: color, fillOpacity: circleOptions.fillOpacity, weight: circleOptions.weight};
    marker = L.circleMarker([lat, lng], options).bindPopup(popupContent);
  }
  if (marker) {
    if (color === '#FDC59F') chambers.addLayer(marker);
    else if (color === '#F86A71') LabPlat.addLayer(marker);
    else if (color === '#2398AA') MobilePlat.addLayer(marker);
    else if (color === '#2C347F') ObsPlat.addLayer(marker);
    else if (color === '#808080') CentralFacility.addLayer(marker);
  }
}
function updateMarkers(useIcon) {
  chambers.clearLayers();
  LabPlat.clearLayers();
  MobilePlat.clearLayers();
  ObsPlat.clearLayers();
  CentralFacility.clearLayers();
  markers.forEach(function(m) {
    createMarker(m[3], m[2], m[0], m[6], m[5], m[4], m[7], m[8], m[9], m[1], useIcon);
  });
  map.addLayer(chambers);
  map.addLayer(LabPlat);
  map.addLayer(MobilePlat);
  map.addLayer(ObsPlat);
  map.addLayer(CentralFacility);
}
const map = L.map('cigas-map', {center: [50, 10], zoom: 4, fullscreenControl: true});
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a>'}).addTo(map);
const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'});
const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {maxZoom: 19, attribution: 'Tiles &copy; Esri'});
const baseLayers = {'OpenStreetMap': osm, 'OpenStreetMap.HOT': osmHOT, 'satellite': satellite};
const overlays = {
  '<img src="/sites/default/files/inline-images/simulation_chamber_0.png" style="width: 16px; height: 24px; vertical-align: middle; margin-right: 5px;"> Atmospheric simulation chambers': chambers,
  '<img src="/sites/default/files/inline-images/Laboratory_platform_3.png" style="width: 16px; height: 24px; vertical-align: middle; margin-right: 5px;"> Laboratory platforms': LabPlat,
  '<img src="/sites/default/files/inline-images/mobile_platform.png" style="width: 16px; height: 24px; vertical-align: middle; margin-right: 5px;"> Mobile platforms': MobilePlat,
  '<img src="/sites/default/files/inline-images/observatory_platform_0.png" style="width: 16px; height: 24px; vertical-align: middle; margin-right: 5px;"> Observational platforms': ObsPlat,
  '<img src="/sites/default/files/inline-images/Central_facility.png" style="width: 16px; height: 24px; vertical-align: middle; margin-right: 5px;"> Central facilities': CentralFacility
};
const layerControl = L.control.layers(baseLayers, overlays);
const legend = L.control({position: 'bottomleft'});
legend.onAdd = function(map) {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML = '<strong>Platform Types</strong><br>';
  div.innerHTML += '<img src="/sites/default/files/inline-images/simulation_chamber_0.png" style="width: 20px; height: 30px; vertical-align: middle; margin-right: 5px;"> Atmospheric simulation chambers<br>';
  div.innerHTML += '<img src="/sites/default/files/inline-images/Laboratory_platform_3.png" style="width: 20px; height: 30px; vertical-align: middle; margin-right: 5px;"> Laboratory platforms<br>';
  div.innerHTML += '<img src="/sites/default/files/inline-images/mobile_platform.png" style="width: 20px; height: 30px; vertical-align: middle; margin-right: 5px;"> Mobile platforms<br>';
  div.innerHTML += '<img src="/sites/default/files/inline-images/observatory_platform_0.png" style="width: 20px; height: 30px; vertical-align: middle; margin-right: 5px;"> Observational platforms<br>';
  div.innerHTML += '<img src="/sites/default/files/inline-images/Central_facility.png" style="width: 20px; height: 30px; vertical-align: middle; margin-right: 5px;"> Central facilities<br>';
  return div;
};
map.on('enterFullscreen', function() {
  map.setView([50, 10], 4);
  updateMarkers(true);
  map.addControl(layerControl);
  map.addControl(legend);
});
map.on('exitFullscreen', function() {
  map.setView([50, 10], 4);
  updateMarkers(false);
  map.removeControl(layerControl);
  map.removeControl(legend);
});
updateMarkers(false);
document.getElementById('map') && (document.getElementById('map').style.display = 'none');
})();
