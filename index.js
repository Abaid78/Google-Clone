let setting_button = document.getElementById("setting_button");
let setting_manu = document.getElementById("setting-menu");
let apps = document.getElementById("apps");
let apps_button = document.getElementById("apps_button");
let dis = document.getElementsByClassName(".none_display");
document.addEventListener("click", function(event) {
  if (!apps.contains(event.target) && event.target !== apps_button) {
    // Hide the div apps
    apps.style.display = "none";
  }
  if (!setting_manu.contains(event.target) && event.target !== apps_button) {
    // Hide the div setting-manu
    setting_manu.style.display = "none";
  }
});

// Add a click event listener to the show apps button
apps_button.addEventListener("click", function(event) {
  // Toggle the display of the div apps
  apps.style.display = apps.style.display === "none" ? "flex" : "none";
  // Prevent the click event from bubbling up to the document object
  event.stopPropagation();
});
setting_button.addEventListener("click", function(event) {
  // Toggle the display of the div apps using ternary operator
  setting_manu.style.display = apps.style.display === "none" ? "flex" : "none";
  event.stopPropagation();
});

