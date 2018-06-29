var devTools = {
    strToBin: function (input) {
        var output = '';
        input = input.split('')
        for ( var i = 0; i < input.length; i++ ) {
            output += Array(input[i].charCodeAt(0).toString(2) + ' ')
        }
        return output
    }
}
console.log(devTools.strToBin("Convert this into binary."))