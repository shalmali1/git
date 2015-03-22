function aToi(str) {
    var exp   = 0;
    var res   = 0;
    for (var k = str.length-1; k >= 0; k--) {
        var x = str.charCodeAt(k);
        var y = x - 48;
        var z = y * Math.pow(10, exp);
        exp++;
        res += z;
    }
    return res;
}

console.log(aToi("1234"));
