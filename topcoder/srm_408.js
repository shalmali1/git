http://community.topcoder.com/stat?c=problem_statement&pm=9822


SRM 408

function TournamentJudging(rawscore,conversionfactor) {
    var adjscore = 0;
        for (var j = 0; j < conversionfactor.length; j++) {
            adjscore = adjscore +Math.round(rawscore[j]/conversionfactor[j]);
        }
    
    return adjscore;
}

 TournamentJudging([0, 1000000, 5000, 1000000],[1, 2, 1000000, 4]);
 
 