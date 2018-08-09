const devTools = {
  strToBin: (srcInput, delimiter = ' ') =>
    srcInput.split('').map(x => (1e15 + x.charCodeAt(0).toString(2)).slice(-8)).join(delimiter),
  binToDecimals: (input, delimiter = ' ') =>
    input.split(delimiter).map(x => parseInt(x, 2)),
  binToAscii: (input, delimiterInput = ' ', delimiterOutput = ' ') =>
    devTools.binToDecimals(input, delimiterInput).join(delimiterOutput),
  binToText: (input, delimiter = ' ') =>
    devTools.binToDecimals(input, delimiter).map(x => String.fromCharCode(x)).join(''),
};

////// Convert some string to binary.
var someStr = "Convert this into binary!"
console.log(devTools.strToBin(someStr))

////// Convert some binary to ASCII.
var someBin = '01000011 01101111 01101110 01110110 01100101 01110010 01110100 00100000 01110100 01101000 01101001 01110011 00100000 01101001 01101110 01110100 01101111 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100001'
console.log(devTools.binToAscii(someBin, ' '))

////// Convert some binary to Text.
var someBin = '01000011 01101111 01101110 01110110 01100101 01110010 01110100 00100000 01110100 01101000 01101001 01110011 00100000 01101001 01101110 01110100 01101111 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100001'
console.log(devTools.binToText(someBin, ' '))
