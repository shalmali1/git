 http://community.topcoder.com/stat?c=problem_statement&pm=13553
 
SRM 642
 
 function calculateMin(str) {
        var answer = 0;
        var i = 1;
        var a, b, c;
        while (i < str.length) {
            a = parseInt(str.slice(0, i));
            b = parseInt(str.slice(i,str.length));
           
         if (a + b < answer || answer === 0) 
        {
            answer = a + b;
            console.log(answer);
        }
        i++;
        }
        return answer;
}

calculateMin("1289");