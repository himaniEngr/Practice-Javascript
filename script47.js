console.log('this is tutorial 47');
let regex = /harry/;

//Metacharacters:
//let regex = /^har/; //starts with
// let regex = /ry$/;  //ends with
// let regex = /h.rry/  //dot means any one character is matched
// regex = /har\*/ //matches any 0 or more characters

// regex=/har*y/
// regex = /har[a-z]y/  //can be anything from a to z - one character
// regex = /^h/i/   //starts with h and case insensitive
// regex=/har?yy?/  //r and y are optional
let str='harry is harry'

let result = regex.exec(str);  //shos match object
console.log('The result from exec is ', result);

if (regex.test(str)) {
    console.log(`The string ${str} matches expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match with expression ${regex.source}`);

}