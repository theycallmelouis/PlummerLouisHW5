let arr = [1,2,3,4,5,6,7,8,9,10];
let odd_arr = arr.filter(num => num % 2 != 0); 
let div_by_2or5 = arr.filter(num => (num % 2 == 0) || (num % 5 == 0));  /
let div_by_3_squared = arr.filter(num => num % 3 == 0).map(num => num * num);   
let sum_sqrs_num_div_by_5 = arr.filter(num => num % 5 == 0).map(num => num * num).reduce((a, b) => a+b);   

console.log('Original Array: ', arr);
console.log('Odd numbers: ', odd_arr);
console.log('Numbers divisible by 2 or 5: ', div_by_2or5);
console.log('square of Numbers divisible by 3:', div_by_3_squared);
console.log('Sum of squares of numbers divisible by 5: ', sum_sqrs_num_div_by_5);