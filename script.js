document.addEventListener("DOMContentLoaded", function() {
  var fetchBtn = document.getElementById("fetchUsersBtn");
  var loadCacheBtn = document.getElementById("loadCacheBtn");


  fetchBtn.addEventListener("click", fetchUsers);

  loadCacheBtn.addEventListener("click", loadCachedData);
});

async function fetchUsers() {
  try {

    const response = await fetch("https://reqres.in/api/users");
    if (!response.ok) {
      throw new Error("HTTP помилка: " + response.status);
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.data)) {
      throw new Error("Помилкова структура JSON");
    }

    var users = data.data.filter(function(user) {
      return user.first_name && user.last_name;
    });

    if (users.length === 0) {
      throw new Error("Дані не містять коректних користувачів");
    }

    renderUsers(users);

    localStorage.setItem("users", JSON.stringify(users));
    sessionStorage.setItem("users", JSON.stringify(users));

    document.querySelector(".error-message").textContent = "";
  } catch (error) {

    document.querySelector(".error-message").textContent = "Помилка: " + error.message;
  }
}

function renderUsers(users) {
  var userList = document.querySelector(".user-list");
  userList.innerHTML = "";
  users.forEach(function(user) {
    var li = document.createElement("li");
    li.textContent = user.first_name + " " + user.last_name;
    userList.appendChild(li);
  });
}

function loadCachedData() {
  var cachedUsers = localStorage.getItem("users");
  if (cachedUsers) {

    renderUsers(JSON.parse(cachedUsers));
  } else {
    document.querySelector(".error-message").textContent = "Немає кешованих даних.";
  }
}