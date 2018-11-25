const NAME = "hello";

function capitalizeAllCharacters(string) {
    let result = "";
    for(let character of string) {
        result += character.toUpperCase();
    }
    return result;
}

