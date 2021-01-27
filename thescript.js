let view_STABILA = function () {
  document.getElementById("METABO_details").classList.remove("view_details");
  document.getElementById("STIHL_details").classList.remove("view_details");
  document.getElementById("HADEF_details").classList.remove("view_details");
  document.getElementById("STABILA_details").classList.add("view_details");
  document
    .getElementById("STABILA_details")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

let view_METABO = function () {
  document.getElementById("STABILA_details").classList.remove("view_details");
  document.getElementById("STIHL_details").classList.remove("view_details");
  document.getElementById("HADEF_details").classList.remove("view_details");
  document.getElementById("METABO_details").classList.add("view_details");
  document
    .getElementById("METABO_details")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

let view_STIHL = function () {
  document.getElementById("STABILA_details").classList.remove("view_details");
  document.getElementById("METABO_details").classList.remove("view_details");
  document.getElementById("HADEF_details").classList.remove("view_details");
  document.getElementById("STIHL_details").classList.add("view_details");
  document
    .getElementById("STIHL_details")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

let view_HADEF = function () {
  document.getElementById("STABILA_details").classList.remove("view_details");
  document.getElementById("METABO_details").classList.remove("view_details");
  document.getElementById("STIHL_details").classList.remove("view_details");
  document.getElementById("HADEF_details").classList.add("view_details");
  document
    .getElementById("HADEF_details")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};
