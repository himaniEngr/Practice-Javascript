console.log('Tutorial 44');
// // let a = 12;
// // if (a) {
// //     throw new Error('This value should be null')
// // }
// // else {
// //     console.log('correct answer');

// }


try {
    console.log('inside try block');
    getUserdata()

} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error);



} finally {
    console.log('Finally we will run this code.');

}
