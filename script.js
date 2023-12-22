/*

The Fibonacci sequence is defined as follows:
The first number of the sequence is 0, the second number is 1, and the nth number is the sum of (n-1)th and (n-2)th numbers.

Your task is to write a function that takes in an integer n and returns the nth Fibonacci number.

Sample Input:                               Sample Output:
n=2                                         1
n=6                                         5  
n=9                                         21


*/

function fibonacciCheck(n) {
  if (n <= 1) {
    return n; // This represents the base case. 
  }
  return fibonacci(n - 1) + fibonacci(n - 2); //this is the recursive step that keeps the func running until any one of the put cases are met
}
