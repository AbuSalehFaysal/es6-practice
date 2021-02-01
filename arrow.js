function double(num) {
    return num*2;
}

const result1 = double(5);
console.log(result1);

const double2 = function myFunction(num){
    return num*2;
}

const result2 = double2(10);
console.log(result2);

const double3 = (num) => num*2;

const result3 = double3(15);
console.log(result3);

const sum = (num1,num2) => num1+num2;

const sumResult = sum(10,5);
console.log(sumResult);

const singleParam = () => 5;
const resultSingle = singleParam();
console.log(resultSingle);

const sum2 = (num1, num2) => {
    const sum = num1+num2;
    return sum;
}

const resultSum2 = sum2(4,5);
console.log(resultSum2);
