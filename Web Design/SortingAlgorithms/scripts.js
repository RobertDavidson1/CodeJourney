// Example data structure for algorithms
const algorithms = [
  { name: "Bubble Sort", complexity: "O(n^2)" },
  { name: "Quick Sort", complexity: "O(n log n)" },
  { name: "Merge Sort", complexity: "O(n log n)" },
  { name: "Insertion Sort", complexity: "O(n^2)" },
  { name: "Selection Sort", complexity: "O(n^2)" },
  { name: "Counting Sort", complexity: "O(n)" },
  // Add more algorithms as needed
];

window.onload = () => {
  displayAlgorithms(algorithms);
};

function displayAlgorithms(algorithmsToDisplay) {
  // Get the container for the cards, not the dropdown.
  // This can be a specific div that you might need to add to your HTML layout.
  const cardsContainer = document.getElementById("cards-container");

  // Clear only the cards, not the entire algorithm container.
  cardsContainer.innerHTML = "";

  // Create a card for each algorithm and append to the cardsContainer.
  algorithmsToDisplay.forEach((algo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${algo.name}</strong><p>${algo.complexity}</p>`;
    cardsContainer.appendChild(card);
  });
}

function filterAlgorithms() {
  const filterValue = document.getElementById("complexity-filter").value;
  const filteredAlgorithms = algorithms.filter((algo) => {
    return algo.complexity === filterValue || filterValue === "all";
  });
  displayAlgorithms(filteredAlgorithms);
}
