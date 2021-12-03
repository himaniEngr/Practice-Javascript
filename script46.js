console.log('tutorial 46');
let regex = /harry/; //this is a regular expresssion literal
// regex = /harry/g
// regex = /harry/i
console.log(regex, typeof regex, regex.source);

//functions to match expressions
//1.exex()- this function will return array of match or null for no match

s = 'this is tutorial by harry. This is channel of harry.'
let result = regex.exec(s);
console.log(result);
// console.log(result.input, result[0], result.index);

//we can use multiple exec with global flag-g 
// console.log(regex.exec(s));
// console.log(regex.exec(s));

//2. test() -returns true or false
let result2 = regex.test(s)
console.log(result2);

//3. match()- it ill return an array of results (when global flag is set)or null.
let result3 = s.match(regex);
console.log(result3);

//4.search()- returns index of first match else -1 when no match exists

let result4 = s.search(regex);
console.log(result4);

//5. replace()- returns new replaced string with all the replacements 
//only first element is replaced if global flag is not set.
//all of elements are replaced if global flag is set.
let result5 = s.replace(regex, 'Riya')
console.log(result5, s)
//note: original string remains as it is , no replacement in  original string;
