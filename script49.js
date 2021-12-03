console.log('tutorial 49');

//shorthand character classes:
// let regex = /\wrry/  // word character- alphanumeric or underscore
// let str = 'hrry is hrry2';
// let regex = /\w+rry/  // one or more word character
// let str = 'hima nirry is hrry2';
// let regex = /\drry/  // one digit- 0 to 9
// let str = 'h34rry is hrry2';
// let regex = /\d+rry/  // 0 or more digit - 0 to 9
// let str = 'h546667rry is hrry2';
// let regex = /\Wrry/  // one non- word character- not alphanumeric or underscore
// let str = 'h$%^rry is hrry2';
// let regex = /\W+rry/  // one or more non- word character- not alphanumeric or underscore
// let str = 'h$%^rry is hrry2';
// let regex = /\Drry/  // one non- digit character
// let str = 'h$%^rry is hrry2';
// let regex = /\D+rry/  // one or more non- digit character
// let str = 'h$%^rry is hrry2';

//space character
// let regex = /\shrr/  // space character (also matches tab)
// let str = 'h$%^rry is hrry2';

// let regex = /\s+hrr/  // 0 or more space character 
// let str = 'h$%^rry is               hrry2';
// let regex = /\Shrr/  // non - space character
// let str = 'h$%^rry i56756*&hrry2';
// let regex = /\S+hrr/  // 0 or more non-space character (also matches tab)
// let str = 'h$%^rry $^$^%hggjhishrry2';

//Assertions
// let regex = /h(?=y)/  // h is followed by y
// let str = 'h$%^rry is hyrry2';
let regex = /h(?!y)/  // h is not followed by y
let str = 'h$%^rry is hrry2';




let result = regex.exec(str);
console.log('Result is ', result);

if (regex.test(str)) {
    console.log(`${regex.source} matches with ${str} as ${result}`);
}
else {
    console.log(`${regex.source} does not match with ${str} as match is ${result}`);
}



