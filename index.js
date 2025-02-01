const API_KEY = "5090f06cd5b848d0a6351149253001";

const SAMPLE_COUNTRIES = [
  { code: "AFG", city: "Kabul", name: "Afghanistan" },
  { code: "ALB", city: "Tirana", name: "Albania" },
  { code: "DZA", city: "Algiers", name: "Algeria" },
  { code: "AND", city: "Andorra la Vella", name: "Andorra" },
  { code: "AGO", city: "Luanda", name: "Angola" },
  { code: "ARG", city: "Buenos Aires", name: "Argentina" },
  { code: "ARM", city: "Yerevan", name: "Armenia" },
  { code: "AUS", city: "Canberra", name: "Australia" },
  { code: "AUT", city: "Vienna", name: "Austria" },
  { code: "AZE", city: "Baku", name: "Azerbaijan" },
  { code: "BHS", city: "Nassau", name: "Bahamas" },
  { code: "BHR", city: "Manama", name: "Bahrain" },
  { code: "BGD", city: "Dhaka", name: "Bangladesh" },
  { code: "BRB", city: "Bridgetown", name: "Barbados" },
  { code: "BLR", city: "Minsk", name: "Belarus" },
  { code: "BEL", city: "Brussels", name: "Belgium" },
  { code: "BLZ", city: "Belmopan", name: "Belize" },
  { code: "BEN", city: "Porto-Novo", name: "Benin" },
  { code: "BTN", city: "Thimphu", name: "Bhutan" },
  { code: "BOL", city: "Sucre", name: "Bolivia" },
  { code: "BIH", city: "Sarajevo", name: "Bosnia and Herzegovina" },
  { code: "BWA", city: "Gaborone", name: "Botswana" },
  { code: "BRA", city: "Brasilia", name: "Brazil" },
  { code: "BRN", city: "Bandar Seri Begawan", name: "Brunei" },
  { code: "BGR", city: "Sofia", name: "Bulgaria" },
  { code: "BFA", city: "Ouagadougou", name: "Burkina Faso" },
  { code: "BDI", city: "Gitega", name: "Burundi" },
  { code: "KHM", city: "Phnom Penh", name: "Cambodia" },
  { code: "CMR", city: "Yaounde", name: "Cameroon" },
  { code: "CAN", city: "Ottawa", name: "Canada" },
  { code: "CPV", city: "Praia", name: "Cape Verde" },
  { code: "CAF", city: "Bangui", name: "Central African Republic" },
  { code: "TCD", city: "N'Djamena", name: "Chad" },
  { code: "CHL", city: "Santiago", name: "Chile" },
  { code: "CHN", city: "Beijing", name: "China" },
  { code: "COL", city: "Bogotá", name: "Colombia" },
  { code: "COM", city: "Moroni", name: "Comoros" },
  { code: "COD", city: "Kinshasa", name: "Democratic Republic of the Congo" },
  { code: "COG", city: "Brazzaville", name: "Republic of the Congo" },
  { code: "CRI", city: "San José", name: "Costa Rica" },
  { code: "HRV", city: "Zagreb", name: "Croatia" },
  { code: "CUB", city: "Havana", name: "Cuba" },
  { code: "CYP", city: "Nicosia", name: "Cyprus" },
  { code: "CZE", city: "Prague", name: "Czech Republic" },
  { code: "DNK", city: "Copenhagen", name: "Denmark" },
  { code: "DJI", city: "Djibouti", name: "Djibouti" },
  { code: "DMA", city: "Roseau", name: "Dominica" },
  { code: "DOM", city: "Santo Domingo", name: "Dominican Republic" },
  { code: "ECU", city: "Quito", name: "Ecuador" },
  { code: "EGY", city: "Cairo", name: "Egypt" },
  { code: "SLV", city: "San Salvador", name: "El Salvador" },
  { code: "GNQ", city: "Malabo", name: "Equatorial Guinea" },
  { code: "ERI", city: "Asmara", name: "Eritrea" },
  { code: "EST", city: "Tallinn", name: "Estonia" },
  { code: "ETH", city: "Addis Ababa", name: "Ethiopia" },
  { code: "FJI", city: "Suva", name: "Fiji" },
  { code: "FIN", city: "Helsinki", name: "Finland" },
  { code: "FRA", city: "Paris", name: "France" },
  { code: "GAB", city: "Libreville", name: "Gabon" },
  { code: "GMB", city: "Banjul", name: "Gambia" },
  { code: "GEO", city: "Tbilisi", name: "Georgia" },
  { code: "DEU", city: "Berlin", name: "Germany" },
  { code: "GHA", city: "Accra", name: "Ghana" },
  { code: "GRC", city: "Athens", name: "Greece" },
  { code: "GRD", city: "St. George's", name: "Grenada" },
  { code: "GRL", city: "Nuuk", name: "Greenland" },
  { code: "GTM", city: "Guatemala City", name: "Guatemala" },
  { code: "GIN", city: "Conakry", name: "Guinea" },
  { code: "GNB", city: "Bissau", name: "Guinea-Bissau" },
  { code: "GUY", city: "Georgetown", name: "Guyana" },
  { code: "HTI", city: "Port-au-Prince", name: "Haiti" },
  { code: "HND", city: "Tegucigalpa", name: "Honduras" },
  { code: "HUN", city: "Budapest", name: "Hungary" },
  { code: "ISL", city: "Reykjavik", name: "Iceland" },
  { code: "IND", city: "New Delhi", name: "India" },
  { code: "IDN", city: "Jakarta", name: "Indonesia" },
  { code: "IRN", city: "Tehran", name: "Iran" },
  { code: "IRQ", city: "Baghdad", name: "Iraq" },
  { code: "IRL", city: "Dublin", name: "Ireland" },
  { code: "ISR", city: "Jerusalem", name: "Israel" },
  { code: "ITA", city: "Rome", name: "Italy" },
  { code: "JAM", city: "Kingston", name: "Jamaica" },
  { code: "JPN", city: "Tokyo", name: "Japan" },
  { code: "JOR", city: "Amman", name: "Jordan" },
  { code: "KAZ", city: "Nur-Sultan", name: "Kazakhstan" },
  { code: "KEN", city: "Nairobi", name: "Kenya" },
  { code: "KIR", city: "South Tarawa", name: "Kiribati" },
  { code: "PRK", city: "Pyongyang", name: "North Korea" },
  { code: "KOR", city: "Seoul", name: "South Korea" },
  { code: "KWT", city: "Kuwait City", name: "Kuwait" },
  { code: "KGZ", city: "Bishkek", name: "Kyrgyzstan" },
  { code: "LAO", city: "Vientiane", name: "Laos" },
  { code: "LVA", city: "Riga", name: "Latvia" },
  { code: "LBN", city: "Beirut", name: "Lebanon" },
  { code: "LSO", city: "Maseru", name: "Lesotho" },
  { code: "LBR", city: "Monrovia", name: "Liberia" },
  { code: "LBY", city: "Tripoli", name: "Libya" },
  { code: "LIE", city: "Vaduz", name: "Liechtenstein" },
  { code: "LTU", city: "Vilnius", name: "Lithuania" },
  { code: "LUX", city: "Luxembourg", name: "Luxembourg" },
  { code: "MDG", city: "Antananarivo", name: "Madagascar" },
  { code: "MWI", city: "Lilongwe", name: "Malawi" },
  { code: "MYS", city: "Kuala Lumpur", name: "Malaysia" },
  { code: "MDV", city: "Male", name: "Maldives" },
  { code: "MLI", city: "Bamako", name: "Mali" },
  { code: "MLT", city: "Valletta", name: "Malta" },
  { code: "MHL", city: "Majuro", name: "Marshall Islands" },
  { code: "MRT", city: "Nouakchott", name: "Mauritania" },
  { code: "MUS", city: "Port Louis", name: "Mauritius" },
  { code: "MEX", city: "Mexico City", name: "Mexico" },
  { code: "FSM", city: "Palikir", name: "Micronesia" },
  { code: "MDA", city: "Chisinau", name: "Moldova" },
  { code: "MCO", city: "Monaco", name: "Monaco" },
  { code: "MNG", city: "Ulaanbaatar", name: "Mongolia" },
  { code: "MNE", city: "Podgorica", name: "Montenegro" },
  { code: "MAR", city: "Rabat", name: "Morocco" },
  { code: "MOZ", city: "Maputo", name: "Mozambique" },
  { code: "NAM", city: "Windhoek", name: "Namibia" },
  { code: "NRU", city: "Yaren", name: "Nauru" },
  { code: "NPL", city: "Kathmandu", name: "Nepal" },
  { code: "NLD", city: "Amsterdam", name: "Netherlands" },
  { code: "NZL", city: "Wellington", name: "New Zealand" },
  { code: "NIC", city: "Managua", name: "Nicaragua" },
  { code: "NER", city: "Niamey", name: "Niger" },
  { code: "NGA", city: "Abuja", name: "Nigeria" },
  { code: "MKD", city: "Skopje", name: "North Macedonia" },
  { code: "NOR", city: "Oslo", name: "Norway" },
  { code: "OMN", city: "Muscat", name: "Oman" },
  { code: "PAK", city: "Islamabad", name: "Pakistan" },
  { code: "PAN", city: "Panama City", name: "Panama" },
  { code: "PNG", city: "Port Moresby", name: "Papua New Guinea" },
  { code: "PRY", city: "Asunción", name: "Paraguay" },
  { code: "PER", city: "Lima", name: "Peru" },
  { code: "PHL", city: "Manila", name: "Philippines" },
  { code: "POL", city: "Warsaw", name: "Poland" },
  { code: "PRT", city: "Lisbon", name: "Portugal" },
  { code: "QAT", city: "Doha", name: "Qatar" },
  { code: "ROU", city: "Bucharest", name: "Romania" },
  { code: "RUS", city: "Moscow", name: "Russia" },
  { code: "RWA", city: "Kigali", name: "Rwanda" },
  { code: "KNA", city: "Basseterre", name: "Saint Kitts and Nevis" },
  { code: "LCA", city: "Castries", name: "Saint Lucia" },
  { code: "VCT", city: "Kingstown", name: "Saint Vincent and the Grenadines" },
  { code: "WSM", city: "Apia", name: "Samoa" },
  { code: "SMR", city: "San Marino", name: "San Marino" },
  { code: "STP", city: "São Tomé", name: "Sao Tome and Principe" },
  { code: "SAU", city: "Riyadh", name: "Saudi Arabia" },
  { code: "SEN", city: "Dakar", name: "Senegal" },
  { code: "SRB", city: "Belgrade", name: "Serbia" },
  { code: "SYC", city: "Victoria", name: "Seychelles" },
  { code: "SLE", city: "Freetown", name: "Sierra Leone" },
  { code: "SGP", city: "Singapore", name: "Singapore" },
  { code: "SVK", city: "Bratislava", name: "Slovakia" },
  { code: "SVN", city: "Ljubljana", name: "Slovenia" },
  { code: "SLB", city: "Honiara", name: "Solomon Islands" },
  { code: "SOM", city: "Mogadishu", name: "Somalia" },
  { code: "ZAF", city: "Pretoria", name: "South Africa" },
  { code: "SSD", city: "Juba", name: "South Sudan" },
  { code: "ESP", city: "Madrid", name: "Spain" },
  { code: "LKA", city: "Colombo", name: "Sri Lanka" },
  { code: "SDN", city: "Khartoum", name: "Sudan" },
  { code: "SUR", city: "Paramaribo", name: "Suriname" },
  { code: "SWE", city: "Stockholm", name: "Sweden" },
  { code: "CHE", city: "Bern", name: "Switzerland" },
  { code: "SYR", city: "Damascus", name: "Syria" },
  { code: "TWN", city: "Taipei", name: "Taiwan" },
  { code: "TJK", city: "Dushanbe", name: "Tajikistan" },
  { code: "TZA", city: "Dodoma", name: "Tanzania" },
  { code: "THA", city: "Bangkok", name: "Thailand" },
  { code: "TLS", city: "Dili", name: "Timor-Leste" },
  { code: "TGO", city: "Lome", name: "Togo" },
  { code: "TTO", city: "Port of Spain", name: "Trinidad and Tobago" },
  { code: "TUN", city: "Tunis", name: "Tunisia" },
  { code: "TUR", city: "Ankara", name: "Turkey" },
  { code: "TKM", city: "Ashgabat", name: "Turkmenistan" },
  { code: "TUV", city: "Funafuti", name: "Tuvalu" },
  { code: "UGA", city: "Kampala", name: "Uganda" },
  { code: "UKR", city: "Kyiv", name: "Ukraine" },
  { code: "ARE", city: "Abu Dhabi", name: "United Arab Emirates" },
  { code: "GBR", city: "London", name: "United Kingdom" },
  { code: "USA", city: "Washington, D.C.", name: "United States" },
  { code: "URY", city: "Montevideo", name: "Uruguay" },
  { code: "UZB", city: "Tashkent", name: "Uzbekistan" },
  { code: "VUT", city: "Port Vila", name: "Vanuatu" },
  { code: "VAT", city: "Vatican City", name: "Vatican City" },
  { code: "VEN", city: "Caracas", name: "Venezuela" },
  { code: "VNM", city: "Hanoi", name: "Vietnam" },
  { code: "YEM", city: "Sana a", name: "Yemen" },
  { code: "ZMB", city: "Lusaka", name: "Zambia" },
  { code: "ZWE", city: "Harare", name: "Zimbabwe" },
  { code: "ABH", city: "Sukhumi", name: "Abkhazia" },
  { code: "XK", city: "Pristina", name: "Kosovo" },
  { code: "TRNC", city: "Nicosia", name: "Northern Cyprus" },
  { code: "PSE", city: "Ramallah", name: "Palestine" },
  { code: "SAH", city: "El Aaiún", name: "Western Sahara" },
  { code: "TWN", city: "Taipei", name: "Taiwan" },
  { code: "SOML", city: "Hargeisa", name: "Somaliland" },
  { code: "PMR", city: "Tiraspol", name: "Transnistria" },
  { code: "ARTS", city: "Stepanakert", name: "Artsakh" },
];

const temperatureColors = {
  "-30": "#003366",
  "-20": "#4A90E2",
  "-10": "#B3DFFD",
  0: "#E6F7FF",
  10: "#D1F2D3",
  20: "#FFFACD",
  30: "#FFCC80",
  40: "#FF7043",
  50: "#D32F2F",
};

const windColors = {
  10: "#E0F7FA",
  20: "#B2EBF2",
  40: "#4DD0E1",
  60: "#0288D1",
  100: "#01579B",
};

const cloudColors = {
  10: "#FFF9C4",
  30: "#FFF176",
  60: "#E0E0E0",
  90: "#9E9E9E",
  100: "#616161",
};

let currentMode = "temperature";
let weatherData = {};
let map = null;

function showLoading() {
  document.getElementById("loading").style.display = "flex";
}

function hideLoading() {
  document.getElementById("loading").style.display = "none";
}

function showError(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  document.body.appendChild(errorDiv);
  setTimeout(() => errorDiv.remove(), 5000);
}

async function fetchWeatherData() {
  showLoading();
  try {
    const promises = SAMPLE_COUNTRIES.map(async (country) => {
      try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${country.city}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return {
          country: country.code,
          temp_c: data.current.temp_c,
          wind_kph: data.current.wind_kph,
          cloud: data.current.cloud,
        };
      } catch (error) {
        return null;
      }
    });

    const results = await Promise.all(promises);
    results.forEach((result) => {
      if (result) {
        weatherData[result.country] = result;
      }
    });

    updateMap();
  } catch (error) {
    showError("Ma'lumotlarni yuklashda xatolik yuz berdi");
  } finally {
    hideLoading();
  }
}

function getColor(value, colorScale) {
  const thresholds = Object.keys(colorScale)
    .map(Number)
    .sort((a, b) => a - b);

  for (let threshold of thresholds) {
    if (value <= threshold) {
      return colorScale[threshold];
    }
  }
  return colorScale[thresholds[thresholds.length - 1]];
}

function updateMap() {
  if (Object.keys(weatherData).length === 0) {
    showError("Ob-havo ma'lumotlari mavjud emas");
    return;
  }

  const fills = { defaultFill: "#F5F5F5" };

  Object.entries(weatherData).forEach(([country, data]) => {
    let value, colorScale;

    switch (currentMode) {
      case "temperature":
        value = data.temp_c;
        colorScale = temperatureColors;
        break;
      case "wind":
        value = data.wind_kph;
        colorScale = windColors;
        break;
      case "cloud":
        value = data.cloud;
        colorScale = cloudColors;
        break;
    }

    fills[country] = getColor(value, colorScale);
  });

  if (!map) {
    map = new Datamap({
      element: document.getElementById("map-container"),
      responsive: true,
      fills: fills,
      data: weatherData,
      geographyConfig: {
        popupTemplate: function (geo, data) {
          if (!weatherData[geo.id]) return;
          const weather = weatherData[geo.id];
          return `
            <div class="hoverinfo">
              <strong>${geo.properties.name}</strong><br>
              Harorat: ${weather.temp_c}°C<br>
              Shamol: ${weather.wind_kph} km/h<br>
              Bulutlilik: ${weather.cloud}%
            </div>
          `;
        },
        highlightFillColor: "#99d8c9",
        highlightBorderColor: "#081d58",
        highlightBorderWidth: 1,
      },
    });
  } else {
    map.updateChoropleth(fills);
  }

  updateLegend();
}

function updateLegend() {
  const legend = document.getElementById("legend");
  legend.innerHTML = "";

  let colorScale, units;

  switch (currentMode) {
    case "temperature":
      colorScale = temperatureColors;
      units = "°C";
      break;
    case "wind":
      colorScale = windColors;
      units = "km/h";
      break;
    case "cloud":
      colorScale = cloudColors;
      units = "%";
      break;
  }

  Object.entries(colorScale).forEach(([threshold, color]) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
      <span class="legend-color" style="background-color: ${color}"></span>
      <span class="legend-label">${threshold}${units}</span>
    `;
    legend.appendChild(item);
  });
}

document.querySelectorAll(".buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    button.classList.add("active");
    currentMode = button.id;
    updateMap();
  });
});

window.addEventListener("resize", () => {
  if (map) map.resize();
});
