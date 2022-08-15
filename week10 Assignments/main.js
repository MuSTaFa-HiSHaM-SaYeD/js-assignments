
// // js assignments on Lessons: 71-78 // //

////////////////////////////////////////////////
// Assignment 1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
console.log(mix.map(
    ele => isNaN(parseInt(ele)) ? ele :""
    ).reduce(
        (all,ele)=> all+ele
        ),
    );
// Elzero

////////////////////////////////////////////////
// Assignment 2

let myString = "EElllzzzzzzzeroo";
let arr =[];
arr=myString.split("").filter((e)=>!arr.includes(e)) ;
// Elzero

////////////////////////////////////////////////
// Assignment 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];
console.log(myArray.reduce((all,ele)=> all + (!Array.isArray(ele) ? ele : ele.reduce((all,ele)=> all + ele ))));
// Elzero

////////////////////////////////////////////////
// Assignment 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
console.log(
    numsAndStrings.filter(_=>!isNaN(parseInt(_)) ).map(_=>-_)
    );
// [-1, -10, 10, 20, -5, -3]

////////////////////////////////////////////////
// Assignment 5
let nums = [2, 12, 11, 5, 10, 1, 99];
console.log(
    nums.reduce((all,ele)=> ele%2==0 ? all * ele:all+ ele,1)
);
// 500