// 🌍 Initialisation de la carte Leaflet
const carte = L.map('carte').setView([47.3, 0.7], 16); // 📍 Coordonnées de base

// 🗺️ Ajout du fond de carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(carte);

// 🦁 Définir les zones du zoo
const zonesZoo = [
  {
    nom: 'Lions',
    position: [47.3005, 0.705],
    image: 'images/lion.jpg',
    description: 'Roi de la savane, découvrez nos lions majestueux.',
    audio: 'audio/lion.mp3'
  },
  {
    nom: 'Pandas',
    position: [47.301, 0.703],
    image: 'images/panda.jpg',
    description: 'Nos pandas adorent les bambous et les câlins !',
    audio: 'audio/panda.mp3'
  },
  {
    nom: 'Girafes',
    position: [47.302, 0.704],
    image: 'images/girafe.jpg',
    description: 'Admirez les girafes majestueuses dans leur habitat naturel.',
    audio: 'audio/girafe.mp3'
  }
];

// 📌 Ajouter les marqueurs et popups dynamiques
zonesZoo.forEach(zone => {
  const popupContent = `
    <h3>${zone.nom}</h3>
    <img src="${zone.image}" alt="${zone.nom}" width="100%" style="border-radius:8px; margin-bottom:8px;">
    <p>${zone.description}</p>
  `;
  const marker = L.marker(zone.position).addTo(carte).bindPopup(popupContent);

  marker.on('click', () => {
    afficherInfo(zone.nom.toLowerCase());
  });
});

// 📋 Afficher les infos détaillées dans le bloc info
function afficherInfo(animal) {
  const zone = zonesZoo.find(z => z.nom.toLowerCase() === animal);
  if (!zone) return;

  document.getElementById("zone-nom").textContent = zone.nom;
  document.getElementById("zone-image").src = zone.image;
  document.getElementById("zone-description").textContent = zone.description;
  document.getElementById("zone-audio").src = zone.audio;
  document.getElementById("zone-audio").load(); // 🔁 recharge le son
  document.getElementById("info-zone").style.display = "block";
}

// 🎯 Scroll fluide vers une section donnée
function goToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// 🎉 Animation ou message au chargement
window.addEventListener("DOMContentLoaded", () => {
  console.log("Bienvenue dans le Zoo de l’Avenir 🐾");
});
// 📋 Mettre à jour et afficher les infos d'une zone
function afficherInfo(animal) {
  const zone = zonesZoo.find(z => z.nom.toLowerCase() === animal);
  if (!zone) return;

  document.getElementById("zone-nom").textContent = zone.nom;
  document.getElementById("zone-image").src = zone.image;
  document.getElementById("zone-image").alt = "Photo de " + zone.nom; // Alt dynamique
  document.getElementById("zone-description").textContent = zone.description;
  document.getElementById("zone-audio").src = zone.audio;
  document.getElementById("zone-audio").load(); // Recharger le fichier audio

  const infoZone = document.getElementById("info-zone");
  infoZone.classList.remove("active"); // Enlever la classe avant de la remettre
  setTimeout(() => {
    infoZone.style.display = "block"; // S'assurer qu'elle est visible
    infoZone.classList.add("active"); // Activer l'animation
  }, 10);
}
