// Sahifa yuklanganda tekshirish
window.onload = function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    showDashboard();
  }
};

// Login funksiyasi
function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Login va parolni tekshirish
  if (username === "havoyuli" && password === "havo123yuli") {
    // Login holatini saqlash
    localStorage.setItem("isLoggedIn", "true");

    // Dashboardni ko'rsatish
    showDashboard();

    // Xatolik xabarini tozalash
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Noto'g'ri login yoki parol";
  }

  return false;
}

// Dashboardni ko'rsatish funksiyasi
function showDashboard() {
  // Login formani yashirish
  document.getElementById("loginForm").style.display = "none";

  // Dashboardni ko'rsatish
  document.getElementById("dashboard").style.display = "block";

  // Harorat tugmasini faol qilish
  document.getElementById("temperature").classList.add("active");

  // Ob-havo ma'lumotlarini yuklash
  if (typeof fetchWeatherData === "function") {
    fetchWeatherData();
  }
}
// Sahifa yuklanganda tekshirish
window.onload = function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    showDashboard();
  }
};

// Login funksiyasi
function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Login va parolni tekshirish
  if (username === "havoyuli" && password === "havo123yuli") {
    // Login holatini saqlash
    localStorage.setItem("isLoggedIn", "true");

    // Dashboardni ko'rsatish
    showDashboard();

    // Xatolik xabarini tozalash
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Noto'g'ri login yoki parol";
  }

  return false;
}

// Dummy fetchWeatherData function (replace with your actual implementation)
async function fetchWeatherData() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=YOUR_API_KEY"
    ); // Replace YOUR_API_KEY with your actual API key
    const data = await response.json();
    console.log(data); // Handle the weather data here
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Dashboardni ko'rsatish funksiyasi
function showDashboard() {
  // Login formani yashirish
  document.getElementById("loginForm").style.display = "none";

  // Dashboardni ko'rsatish
  document.getElementById("dashboard").style.display = "block";

  // Harorat tugmasini faol qilish
  document.getElementById("temperature").classList.add("active");

  // Ob-havo ma'lumotlarini yuklash
  if (typeof fetchWeatherData === "function") {
    fetchWeatherData();
  }
}
