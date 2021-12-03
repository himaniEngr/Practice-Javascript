'use strict';
// let str1 = 'www.facebook.com';
// console.log(str1.indexOf('face'));


//console.log(lnk[0]);

function checklinks(txt){
    let lnk=document.links;
    for(let i=0;i<lnk.length;i++){
        let string1=String(lnk[i]);
        if(string1.indexOf(txt)!= -1){
            console.log(string1);
        }
    }
}

checklinks('oo')