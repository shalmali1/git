//Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no. 

function FibonacciChecker(num) { 
  var prev = 0;
  var cur  = 1;
  var next = 0;
  
  while (num > next) {
  	next = cur + prev;
	prev = cur;
	cur = next;
  };

  //We will come here only if num == next OR next > num
  if (num == next)
    return "yes";
  if (next > num)
    return "no";
}

FibonacciChecker(8);           
