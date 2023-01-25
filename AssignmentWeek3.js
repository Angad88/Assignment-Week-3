let student = [ { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
{ name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
{ name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
{ name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];

/*
Write a function that takes the above array as a parameter and function to calculate the total of the
marks of each student, and returns the student name with the highest marks. Note: If you want you
can add values to the objects of these arrays.
*/
function studentWithHighestMarks(array) {
    sum = [];
    array.forEach((item, index) => sum.push(item.marks.reduce((acc, cV) => acc + cV, 0)))
    sum.forEach((item, index) => {
        if (item == Math.max(...sum)) {
            sum = index
        }
    })
    return (array[sum].name)

}
console.log(`The student with the highest overall grade is ${studentWithHighestMarks(student)}`);

// Write a function which finds the minimum value in an array using HOF’s.

arr1 = [20, -2, 4, -11, 0, 25]

function minimumValue(array) {
    minimum = Infinity;
    array.forEach((item, index) => {
        if (item < minimum) {
            minimum = item;
        }
    })
    return minimum;
}

console.log(`The minimum value of the array is ${minimumValue(arr1)}`)

// return a number

/*
Write a function that counts the number of letters inside a string using HOF’s.
For example, string name = “helloworld”
It should return // 10
*/

string = 'helloWorld';

function lengthOfString(string) {
    array = string.split("")
    count = 0;
    array.forEach((item,index) => 
    {
        count += 1;
    });
    return count;
}

console.log(`The length of ${string} is ${lengthOfString(string)}`)