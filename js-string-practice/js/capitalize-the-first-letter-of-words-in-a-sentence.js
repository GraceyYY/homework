const SENTENCE = "good afternoon, mr mike.";

function capitalizeTheFirstLetterOfWordsInTheSentence(sentence) {
    let words = sentence.split(" ");
    let result = "\n";
    for(let word of words) {
        let capitalizedWord = word[0].toUpperCase() + word.substr(1) + " ";
        result += capitalizedWord;
    }
    return result;
}
