const arrowFunc1 = () => 'Hi Beautiful ';
console.log(arrowFunc1());

const arrowFunc2 = (name, language) => console.log('How are you, ' + name + '?Do you know ' + language + '?');
arrowFunc2('Rohit', 'Spanish');

const arrowFunc3 = resource => 'Resource is ' + resource;
console.log(arrowFunc3('codeWithHarry'));

const arrowFunc4 = () => ({ name: 'harry', standard: 'A' });
console.log(arrowFunc4().name);
