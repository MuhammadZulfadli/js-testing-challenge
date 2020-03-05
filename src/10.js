function censor  (text, censoredWords = [], censorSymbol = '#') {
    censoredWords.forEach(function(word) {
        let find = new RegExp("\\b" + word + "\\b", "gi");
        let repl = Array(word.length+1).join(censorSymbol);
        text = text.replace(find, repl);
    });
    return text;
}
module.exports = censor