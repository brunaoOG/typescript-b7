function capitalizeWords(word: string) {
  let result = `${word[0].toUpperCase()}${word.slice(1)}`;
  console.log(result);
}

capitalizeWords(true);
capitalizeWords("bruno"); //"Bruno"
