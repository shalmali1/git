//http://community.topcoder.com/stat?c=problem_statement&pm=1728

SRM 208

function DitherCounter(str, color) {
    var count = 0;
    for (var j = 0; j < color.length; j++) 
    {
        var colorStr = color[j];
        for (var k = 0; k < colorStr.length; k++) 
        {
            for (var i = 0; i < str.length; i++) 
            {
                if (colorStr.charAt(k) === str.charAt(i)) 
                {
                    count++;
                    break;
                }
            }
        }
    }
    return count;
}
DitherCounter("BW",["BBBBBBBB","BBWBWBWB","BWBWBWBB","BBWBWBWB",
 "BWBWBWBB","BBBBBBBB"]);
 