let names = ["Bruno", "Miller", "Kendrick", "Walter", 90, 100, 50];

names.forEach((name) => {
  typeof name === "string"
    ? console.log(name.toUpperCase())
    : typeof name === "number"
    ? console.log(name)
    : null;
});
