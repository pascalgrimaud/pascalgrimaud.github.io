// Variables globales
var tableau = document.getElementById("tableauDonnees");
var selectedRow = 1;
var selectedCol = 1;

// Tableau de prénoms
var prenoms = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Isabella", "Jack"];

// Générer des prénoms aléatoires pour le tableau
for (var i = 1; i < tableau.rows.length; i++) {
  for (var j = 0; j < tableau.rows[i].cells.length; j++) {
    var randomIndex = Math.floor(Math.random() * prenoms.length);
    tableau.rows[i].cells[j].textContent = prenoms[randomIndex];
  }
}

// Fonction pour mettre à jour la sélection et surligner la cellule correspondante
function updateSelection() {
  // Réinitialiser la classe "highlight" pour toutes les cellules
  var cells = tableau.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.remove("highlight");
  }

  // Ajouter la classe "highlight" à la cellule sélectionnée
  var selectedCell = tableau.rows[selectedRow].cells[selectedCol];
  selectedCell.classList.add("highlight");
}

// Fonction pour gérer l'événement des touches directionnelles et de la touche "Entrée"
function gererTouches(event) {
  var numRows = tableau.rows.length;
  var numCols = tableau.rows[0].cells.length;

  switch (event.keyCode) {
    case 37: // Gauche
      selectedCol = (selectedCol > 0) ? selectedCol - 1 : numCols - 1;
      clearRowHighlight();
      break;
    case 38: // Haut
      selectedRow = (selectedRow > 1) ? selectedRow - 1 : numRows - 1;
      clearRowHighlight();
      break;
    case 39: // Droite
      selectedCol = (selectedCol < numCols - 1) ? selectedCol + 1 : 0;
      clearRowHighlight();
      break;
    case 40: // Bas
      selectedRow = (selectedRow < numRows - 1) ? selectedRow + 1 : 1;
      clearRowHighlight();
      break;
    case 13: // Entrée
      tableau.rows[selectedRow].classList.add("highlight");
      break;
  }

  updateSelection();
}

// Fonction pour effacer la sélection de la ligne
function clearRowHighlight() {
  var rows = tableau.getElementsByTagName("tr");
  for (var i = 1; i < rows.length; i++) {
    rows[i].classList.remove("highlight");
  }
}

// Ajouter un écouteur d'événement pour les touches directionnelles et la touche "Entrée"
document.addEventListener("keydown", gererTouches);

// Initialiser la sélection au chargement de la page
updateSelection();
