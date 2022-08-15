
// // js assignments on Lessons: 48-53 // //

////////////////////////////////////////////////
// // Assignment 1

// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start;i <=end ;i+=start )
// {
//     if(i === exclude)continue;
//     console.log(i);
// }
// /* output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
// */
////////////////////////////////////////////////
// // Assignment 2
// let start = 10;
// let end = 0;
// let stop = 3;

// for(let i = start; i >= stop;i--)
// {
//     if(i < start)
//     {
//         console.log((""+end+i));
//     }
//     else
//     {
//         console.log(i.toFixed());
//     }
// }

// /* Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
// */

////////////////////////////////////////////////
// // Assignment 3

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i= start;i<=end;i++)
// {
//     console.log(i);
//     for(let k = breaker; k <= breaker*breaker;k+=breaker)
//     {
//         console.log("-- " + k);
//     }
    
// }

// /*  Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
// */

////////////////////////////////////////////////
// // Assignment 4

// let index = 10;
// let jump = 2;
// let end = 0;

// for (let i = index;i >= ( jump*jump); i-=jump ) {
// console.log(i);
// }

// /* Output
// 10
// 8
// 6
// 4
// */

////////////////////////////////////////////////
// // Assignment 5

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// let one  = letter.length;

// for(let i= one ,k=one ; i < friends.length;i++)
// {
//     if(! friends[i].startsWith(letter.toUpperCase()))
//     {
//         console.log(`${k++} => ${friends[i]}`);
//     }
// }

// /* Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
// */

////////////////////////////////////////////////
// // Assignment 6

// let start = 0;
// let swappedName = "elZerO";

// // Output
// "ELzERo"
// let output = [];

// for(let i= start ; i < swappedName.length;i++)
// {
//     output[i] = swappedName[i]===swappedName[i].toLowerCase() ? swappedName[i].toUpperCase(): swappedName[i].toLowerCase();
// }

// console.log(output.join(""));

////////////////////////////////////////////////
// // Assignment 7

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for(let i = start ; i < mix.length;)
// {
//     i++;
//     if(typeof mix[i] === "number" )
//     {
//         console.log(mix[i]);
//     }
// }

// /* Output
// 2
// 3
// 4
// */

// // js assignments on Lessons: 54-56 // //

////////////////////////////////////////////////
// // Assignment 1

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while(index < friends.length )
// {
//     if ( typeof friends[index] === "string" && !friends[index].startsWith("A") )
//         console.log(`${++counter} => ${friends[index]}`);
    
//     index++;
// }

// /* Output
// "1 => Sayed"
// "2 => Mahmoud"
// */
