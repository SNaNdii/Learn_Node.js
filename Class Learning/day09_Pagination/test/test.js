/*

question 01 ) 
===========

n           Output:-
4             *
              * * 
              * *
            * * *
            * * * *
            * * * *

*/


/*
quesion 02 )
============

There are two strings--
let str1 = " My name is Tarun"
let str2 = " My name is Nandita "

Find the common longest substring

 */
let str1 = "My name is Tarun"
let str2 = "My name is Tandita"
let a1 = [];
let a2 = [];

for(let i=0; i<str1.length; i++){
    let  bag = "";
    for(let j=i; j<str1.length; j++){
        bag += str1[j];
        a1.push(bag);
    }
}

for(let i=0; i<str2.length; i++){
    let  bag = "";
    for(let j=i; j<str2.length; j++){
        bag += str2[j];
        a2.push(bag);
    }
}

let res = "";
let max = 0;

for(let i=0; i<a1.length; i++){
    for(let j=0; j<a2.length; j++){
        if(a1[i].length == a2[j].length){
            if(a1[i] == a2[j]){
                if(max < a1[i].length){
                    max = a1[i].length;
                    res = a1[i];
                }
            }
        }
    }
}
console.log(res , max);

