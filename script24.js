console.log('tutorial 24');
let today = new Date();
console.log(today, typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date('June 16 2004');
otherDate = new Date('07/20/2008');  //mm-dd-yyyy format
console.log(otherDate);
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
a = otherDate.toDateString(); //Mon Aug 04 2003
a = otherDate.getTime();    //gets time value in milliseconds since 1 Jan, 1970
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate('23');
otherDate.setMonth('1');
otherDate.setFullYear('1992');
otherDate.setMinutes('1');
otherDate.setSeconds('59');
otherDate.setHours('12');
console.log(otherDate);