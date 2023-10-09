type findMedianSortedArrays = number[] | number;
let nums1: findMedianSortedArrays = [1, 3];
let nums2: findMedianSortedArrays = [2];
nums1.length = 100000;
nums2.length = 100000;
const result = nums1.length + nums2.length;
console.log(result);


type multiply = number | number[];
let num1: multiply = [1];
let num2: multiply = [2];
num1.length = 123;
num2.length = 456;
const otvet = num1.length * num2.length;
console.log(otvet);