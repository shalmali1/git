
//http://community.topcoder.com/stat?c=problem_statement&pm=10461

//SRM 453.5

function ToolsBox(arr) {
    var map = {};
    var count  = 0;
  
    for (var i = 0; i < arr.length; i++) 
    {
        var arr1 = arr[i].split(" ");
        for (var j = 0; j < arr1.length; j++) 
        {
            var str = arr1[j];
            if (!map[str]) 
            {
                map[str] = 1;
                count++;
            }
            else
            {
               map[str]++; 
            }
        }
    }
    return count;
}
    


ToolsBox(["SAW HAMMER SCREWDRIVER","SCREWDRIVER HAMMER KNIFE"]);