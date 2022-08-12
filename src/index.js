const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";
    let arr = [];
    for (let i = 0; expr[i] != undefined; i+=10) {
        arr.push(expr.slice(i, i+10));
    }

    arr.forEach((el) => {
        if (el == "**********") result += " ";
        else {
            let letter = "";
            let symbols = el.substring(el.indexOf(1));
            for (let i = 0; i < symbols.length; i+=2) {
                if (symbols[i] == "1" && symbols[i+1] == "0") letter += ".";
                else if (symbols[i] == "1" && symbols[i+1] == "1") letter += "-";
            }
            result += MORSE_TABLE[letter];
        }
    })

    return result;
}

module.exports = {
    decode
}