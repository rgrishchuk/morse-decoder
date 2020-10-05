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
	let result = '';
	
	let i = 0;
	while (i < expr.length) {
	 	if (expr[i] == '*') result += ' '
	 		else { 
                let letter = expr.substr(i, 10);
                letter = letter.slice(letter.indexOf('1'));

                let j = 0;
                let morse = '';
                while (j < letter.length) {
                    if ( letter.slice(j , j + 2) == '10' ) morse += '.';
                    if ( letter.slice(j , j + 2) == '11' ) morse += '-';
                    j += 2;
                }

                result += MORSE_TABLE[morse];
            }
	 	i += 10;
		}
    return result;
}

module.exports = {
    decode
}