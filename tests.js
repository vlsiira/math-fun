'use strict';

function setElementsPass(id) {
    const p = document.getElementById(id);
    p.setAttribute('style', 'white-space: pre;');
    p.textContent = 'TEST FOR ' + id + '()' + ' PASSES';
    p.style.color = 'green';
}

function setElementsFail(id, actual, expected) {
    const p = document.getElementById(id);
    p.setAttribute('style', 'white-space: pre;');

    p.textContent += 'TEST FOR ' + id + '()' + ' FAILS\r\n';
    p.textContent += 'Expected: ';
    p.appendChild(addCode(expected));

    p.innerHTML += 'Got: ';
    p.appendChild(addCode(actual));

    p.style.color = 'red';
}

function addCode (code) {
    const monospace = document.createElement('span');
    monospace.textContent = '[' + code + ']\r\n';
    monospace.style.fontFamily = 'monospace';
    monospace.style.backgroundColor = '#eee';
    monospace.style.padding = '2px';

    return monospace;
}

function testSum() { //eslint-disable-line
    const testAns = sum(4, 7);
    if (testAns[1] === 'The sum of 4 and 7 is 11.') {
        setElementsPass('sum');
    } else {
        setElementsFail('sum', testAns, '11, The sum of 4 and 7 is 11.');
    }
}

function testMultiply() { //eslint-disable-line
    const testAns = multiply(5, 9);
    if (testAns[1] === 'The product of 5 and 9 is 45.') {
        setElementsPass('multiply');
    } else {
        setElementsFail('multiply', testAns, '45,The product of 5 and 9 is 45.');
    }
}

function testSumAndMultiply() { //eslint-disable-line
    const testAns = sumAndMultiply(4, 7, 5);
    if (testAns[2] === '4 and 7 and 5 sum to 16.' && testAns[3] === 'The product of 4 and 7 and 5 is 140.') {
        setElementsPass('sumAndMultiply');
    } else {
        setElementsFail('sumAndMultiply', testAns, '16,140,4 and 7 and 5 sum to 16.,The product of 4 and 7 and 5 is 140.');
    }
}

const testArray = [2,3,4];

function testSumArray() { //eslint-disable-line
    const testAns = sumArray(testArray);
    if (testAns[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
        setElementsPass('sumArray');
    } else {
        setElementsFail('sumArray', testAns, '9,2,3,4 was passed in as an array of numbers, and 9 is their sum.');
    }
}

function testMultiplyArray() { //eslint-disable-line
    const testAns = multiplyArray(testArray);
    if (testAns[1] === 'The numbers 2,3,4 have a product of 24.') {
        setElementsPass('multiplyArray');
    } else {
        setElementsFail('multiplyArray', testAns, '24,The numbers 2,3,4 have a product of 24.');
    }
}
