//http://community.topcoder.com/stat?c=problem_statement&pm=12297

SRM 560

function typingDistance(str, word) 
{
  var result = 0;
  for (var i = 0; i < word.length-1; i++) 
    {
      var s = str.indexOf(word.charAt(i));
      var m = str.indexOf(word.charAt(i+1));
      result = result + Math.abs(s-m);
    }
   return result; 
}

typingDistance("qwertyuiop","potter");
