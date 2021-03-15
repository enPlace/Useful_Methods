test = [1,2,3,4,5,6,7,8]
test2 = "This is a test string"
test3 = []
test4 = ""


test.slice() /*.slice() allows us to slice an array or string. If I want to get the last item, 
I can use str.slice(-1). If I want to get the last 3, str.slice(-3). If I only want 
the third to last, str.slice(-3,-2). The first argument is the beginning point, 
the second argument is the ending point (not inclusive). 
*/
//Uncomment to log to console: 
//console.log(test.slice(-1))
//console.log(test2.slice(-6))

test.push() /* .push() Allows us to push something to the end of an array. Note
that this doesn't work for strings. 
*/
//test.push("test")
//console.log(test)
//test2.push("test")

test3.pop()
/*pops the last item off of an array. Note that it can also be used to 
store that value, and it changes the value of the array that you're popping from.  
*/
/*test.pop()
console.log(test)
test3.push(test.pop())

console.log(test3)
test3.push(test.pop())
console.log(test3, test)
*/
test3.shift()/* .shift() on the other hand, takes the value off of the *front*
of the array. 
*/
/*
test.shift()
console.log(test)
test3.push(test.shift())

console.log(test3)
test3.push(test.shift())
console.log(test3, test)
*/

test.unshift()/*UNshift, on the other hand, allows us to push things to the front
of an array. Where .push() adds something to the back of an array, .unshift adds
it to the front. 
*/

//test.unshift("test")
//console.log(test)
//test2.push("test")

let regex = /letter/g
regex = /letter/i
regex = /letter/gi
/*a regular expression is a sequence of characters that form a search pattern. 
g is a modifier that looks for all instances of the pattern. 
i is a modifier that makes it case insensitive. 
You can use more than one modifier
this is useful for replace() and search() methods. 


*/

console.log(test2.replace(/t/gi, "@"))