//http://community.topcoder.com/stat?c=problem_statement&pm=7707


SRM 359


function CricketScores(runs) {
    var s = [0, 0];
    var currentBatsman = 0;
    for (var i = 0; i < runs.length; i++) 
    {
        s[currentBatsman] = s[currentBatsman] + runs[i];
        if (runs[i] % 2 !== 0) {
            currentBatsman = (currentBatsman + 1) % 2;
        }
        if ((i+1) % 6 === 0) {
            currentBatsman = (currentBatsman + 1) % 2;
        }
    }
    return s;
}

CricketScores([1, 3, 1, 3, 1, 3, 1, 3]);

