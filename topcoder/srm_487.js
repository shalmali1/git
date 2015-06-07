//http://community.topcoder.com/stat?c=problem_statement&pm=11012

SRM 487

function BunnyExamAfter(black,gray,white) {
    var result = 0;
    for (var i = 0; i < gray.length; i++) 
    {
      if (black.charAt(i) != gray.charAt(i) 
      && gray.charAt(i) == white.charAt(i)) 
      {
        result += 2;
      } else if (black.charAt(i) !== gray.charAt(i) 
      || black.charAt(i) !== white.charAt(i)) 
      {
        result++;
      }
    }
    return result;
}

BunnyExamAfter("ABC","PQR","XYZ");

