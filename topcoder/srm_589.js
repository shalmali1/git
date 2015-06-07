//http://community.topcoder.com/stat?c=problem_statement&pm=12733

SRM 589


function GooseTattarrattatDiv2(str) {
    
    var map = {};
    var maxKey = "";
    var count = 0;
    for (var i = 0; i < str.length; i++)
    {
        var key = str[i];
        if(!map[key])
        {
         map[key] = 0;
        }
        map[key]++;
        if(maxKey === "" || map[key] > map[maxKey]){
            maxKey = key;
        }
    }
    
    for (var j = 0; j < str.length; j++) 
    {
        if (str.charAt(j) !== maxKey) 
        {
            count++;
        }
     }
     return count;
}

GooseTattarrattatDiv2('geese');