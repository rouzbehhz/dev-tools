var devTools = {
    strToBin: function (input) {
        var output = '';
        input = input.replace(/’/g,'\'').split('')
        for ( var i = 0; i < input.length; i++ ) {
            var singleChar = Array(input[i].charCodeAt(0).toString(2) + ',')
            function addZero() {
                singleChar = 0 + singleChar
                checkLength();
            }
            function checkLength() {
                if ( singleChar.length <= 8 ) {
                    addZero();
                }
            }
            checkLength()
            output += singleChar
        }
        return Array(output)
    },
    binToAscii: function (input) {
        var output = '';
        input = input.split(' ')
        for ( var i = 0; i < input.length; i++ ) {
            var multiplier = 0,
                addIt = 0;
            bin = input[i].split('').reverse()
            for (var o = 0; o < bin.length; o++) {
                powOf = Math.pow(2, multiplier)
                addIt += bin[o] * powOf + ' '
                multiplier++
            }
            singleBin = addIt.split(" ").map(Number);
            singleBin = singleBin.reduce((a, b) => a + b, 0);
            output += singleBin + ','
        }
        return Array(output)
    }
}

////// Convert some string to binary.
// var someStr = "Conver this into binary!"
// console.log(devTools.strToBin(someStr))

////// Convert some binary to ASCII.
// var someBin = '01000011 01101111 01101110 01110110 01100101 01110010 01110100 00100000 01101101 01100101 00100000 01110100 01101111 00100000 01100001 01110011 01100011 01101001 01101001 00100001'
// console.log(devTools.binToAscii(someBin))