const NAME = "hello";

function capitalizeAllCharacters(string) {
  let result = "";
  for (let character of string) {
    result += character.toUpperCase();
  }
  return result;
}
document.getElementById("output").innerHTML = capitalizeAllCharacters(NAME);

const SENTENCE = "good afternoon, mr mike.";

function capitalizeTheFirstLetterOfWordsInTheSentence(sentence) {
  let words = sentence.split(" ");
  let result = "\n";
  for (let word of words) {
    let capitalizedWord = word[0].toUpperCase() + word.substr(1) + " ";
    result += capitalizedWord;
  }
  return result;
}
document.getElementById("output").innerHTML += capitalizeTheFirstLetterOfWordsInTheSentence(SENTENCE);