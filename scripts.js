/// SLIDER CONTROLER ///

// var counter = 2;
// setInterval(function () {
//   document.getElementById("slide-" + counter).checked = true;
//   counter++;
//   if (counter > 4) {
//     counter = 1;
//   }
// }, 4000);

/// SLIDER CONTROLER ///

// show_menu ----

let show_menu = function () {
  document.getElementById("menu").classList.toggle("show-menu");
};

// show_menu ----

let nav_menu = function (scrollto) {
  switch (scrollto) {
    case "accueil":
      document.getElementById("Accueil").scrollIntoView({ behavior: "smooth" });
      break;
    case "marque":
      document.getElementById("Marque").scrollIntoView({ behavior: "smooth" });
      break;
    case "historique":
      document
        .getElementById("Historique")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "contact":
      document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  }
};

// Display-details ----

let view_details = function (details) {
  switch (details) {
    case "METABO":
      document.getElementById("METABO-details").classList.add("view-details");
      document.getElementById("STIHL-details").classList.remove("view-details");
      document
        .getElementById("STABILA-details")
        .classList.remove("view-details");
      document.getElementById("HADEF-details").classList.remove("view-details");
      document
        .getElementById("METABO-details")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "STIHL":
      document.getElementById("STIHL-details").classList.add("view-details");
      document
        .getElementById("METABO-details")
        .classList.remove("view-details");
      document
        .getElementById("STABILA-details")
        .classList.remove("view-details");
      document.getElementById("HADEF-details").classList.remove("view-details");
      document
        .getElementById("STIHL-details")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "STABILA":
      document.getElementById("STABILA-details").classList.add("view-details");
      document
        .getElementById("METABO-details")
        .classList.remove("view-details");
      document.getElementById("STIHL-details").classList.remove("view-details");
      document.getElementById("HADEF-details").classList.remove("view-details");
      document
        .getElementById("STABILA-details")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "HADEF":
      document.getElementById("HADEF-details").classList.add("view-details");
      document
        .getElementById("METABO-details")
        .classList.remove("view-details");
      document.getElementById("STIHL-details").classList.remove("view-details");
      document
        .getElementById("STABILA-details")
        .classList.remove("view-details");
      document
        .getElementById("HADEF-details")
        .scrollIntoView({ behavior: "smooth" });
  }
};

// Display-details ----
