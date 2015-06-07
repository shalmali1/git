//http://community.topcoder.com/stat?c=problem_statement&pm=12424

SRM 570


function Chopsticks(arr) {
   var map = {};
   var res = 0;
   for (var i = 0; i < arr.length; i++) 
   {
       if (!map[arr[i]]) 
       {
            map[arr[i]] = 1;
       }
       else
       {
            map[arr[i]]++;   
       }
   }   
   
   for (var e in map) {
       if (Math.floor(map[e] % 2) === 0) {
            res = res + (map[e]/2);
            console.log(map[e]);
        }
        else
        {
            res = res + (map[e]-1)/2;
        }
    }
       
    return res;
}

Chopsticks([1,2,3,2,1,2,3,2,1]);