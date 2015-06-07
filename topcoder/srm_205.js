//http://community.topcoder.com/stat?c=problem_statement&pm=818


SRM 205

function Average(math,verb) {
    var sum = 0;
    var avg = 0;
    var count = 0;
    for (var i = 0; i < math.length; i++) {
        sum =  sum + verb[i] + math[i];
    }
    avg = sum / math.length;
     
    for (var j = 0; j < math.length; j++) 
    {
        if (verb[j] + math[j] < avg)
        {
           count++;
        }
    }
    return count;
}

Average([400,400,400,400,400,400,401],
[400,400,400,400,400,400,400]);
