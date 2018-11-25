const NAME = "hello";

function capitalizeAllCharacters(string) {
    let result = "";
    for(let character of string) {
        result += character.toUpperCase();
    }
    return result;
}

document.getElementById("output").innerHTML = capitalizeAllCharacters(NAME);
