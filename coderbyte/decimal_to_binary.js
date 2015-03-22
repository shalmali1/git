function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
        //Explicit test-case
        return "0";
    }
    var binaryString = "";
    while (decimalNumber > 0) {
        var remainder = decimalNumber % 2;
        binaryString  = remainder + binaryString;
        decimalNumber = Math.floor(decimalNumber/2);
    }
    return binaryString;
}

decimalToBinary(8);
