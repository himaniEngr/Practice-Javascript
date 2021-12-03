//Charcter sets: []
// regex=/h[aty]rry/   // can be a,t or y
// regex = /har[^aty]y/   // can not be a,t or y , add any other character for match. no character is also no -match.

// regex = /h[^aty]rr[yu]/ //matches with hirru bhai
// let str = 'hirru is  abcy';
// regex = /h[a-zA-z]rr[yY0-9]/  //matches hArrY and hirr9
// let str = 'hIrr9 is  abcy';
// regex = /h[a-zA-z]r\?r[yY0-9]/  //literal question mark- use backslash \?
// let str = 'hIr?r9 is  abcy';

//Quantifiers: {}
// regex = /har{2}y/  //r can occur exactly 2 times 
// let str = 'harry is  abcy';
// regex = /har{0,7}y/  //r can occur 0 to 7 times 
// let str = 'harrry is  abcy';

//Groupings:  ()
//we use parenthesis () for groupings
// regex = /(har){2}/  //har  occurs exactly 2 times 
// let str = 'harharry is  abcy';
// regex = /([0-9]r){2}/  //har  occurs exactly 2 times 
// let str = '1r2r harhartest is  abcy';
let regex = /(har){2}([0-9]r){3}/  //har  occurs exactly 2 times 
let str = 'harhar1r2r8r test is  abcy';


let result = regex.exec(str);  //shos match object
console.log('The result from exec is ', result);

if (regex.test(str)) {
    console.log(`The string ${str} matches expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match with expression ${regex.source}`);

}