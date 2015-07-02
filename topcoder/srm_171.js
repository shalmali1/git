//http://community.topcoder.com/stat?c=problem_statement&pm=1944

//SRM 171

function RPG(arr) {
    var min = 0;
    var max = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        var d = str.indexOf('d');
        var numDices = parseInt(str.substring(0, d));
        var numSides = parseInt(str.substring(d+1, str.length));
        min += numDices;
        max += (numDices * numSides);
        avg += (numDices * (numSides + 1) / 2);
    }
    avg = Math.floor(avg);
    console.log("min = " + min);
    console.log("max = " + max);
    console.log("avg = " + avg);

}

 RPG(["1d2","2d2","4d2","6d2","8d2"]);

 //2nd method

 function RPG(arr) {
    var min = 0;
    var max = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        var temp = '';
        var numDices, numSides;
        
        for (var j = 0; j < str.length; j++) 
        {
            if (str[j] === 'd') {
                numDices = parseInt(temp);
                temp = '';
            } 
            else 
            {
                temp = temp + str[j];
            }
        }
        
        numSides = parseInt(temp);
        
        min += numDices;
        max += (numDices * numSides);
        avg += (numDices * (numSides + 1) / 2);
    }
    avg = Math.floor(avg);
    console.log("min = " + min);
    console.log("max = " + max);
    console.log("avg = " + avg);

}


 RPG(["1d2","2d2","4d2","6d2","8d2"]);
 