var devTools = {
    strToBin: function (input) {
        var output = '';
        input = input.split('')
        for ( var i = 0; i < input.length; i++ ) {
            var singleChar = input[i].charCodeAt(0).toString(2) + ','
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
        output = output.split(',')
        output.pop()
        output = output.toString().replace(/,/g,' ')
        return output
    },
    binToAscii: function (input, delimiter) {
        this.output = '',
        this.delimiter = delimiter;
        if ( this.delimiter ) {
            input = input.split(this.delimiter)
        }
        else {
            input = input.match(/.{1,8}/g);
        }
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
            this.output += (singleBin + ',')
        }
        this.output = this.output.split(',')
        this.output.pop()
        this.output = this.output.toString().replace(/,/g,' ')
        return this.output
    },
    binToText: function(input, delimiter) {
            this.output = '',
            this.arr = '',
            this.delimiter = delimiter;

        if ( this.delimiter ) {
            this.arr = input.split(this.delimiter);
        }
        else {
            this.arr = input.match(/.{1,8}/g);
        }
		for (var i = 0; i < this.arr.length; i++) {
			this.output += String.fromCharCode(parseInt(this.arr[i], 2).toString(10));
		}
		return this.output;
	}
}

////// Convert some string to binary.
var someStr = "Convert this into binary!"
console.log(devTools.strToBin(someStr))

////// Convert some binary to ASCII.
var someBin = '01000011 01101111 01101110 01110110 01100101 01110010 01110100 00100000 01110100 01101000 01101001 01110011 00100000 01101001 01101110 01110100 01101111 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100001'
console.log(devTools.binToAscii(someBin, ' '))

////// Convert some binary to Text.
var someBin = '01000011 01101111 01101110 01110110 01100101 01110010 01110100 00100000 01110100 01101000 01101001 01110011 00100000 01101001 01101110 01110100 01101111 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100001'
console.log(devTools.binToText(someBin, ' '))