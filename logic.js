function wordCount(str){

   count =  str.split(" ").length;
    console.log(count);

};


//esta ultima funcion no funciona, me gustaria que me dieran un ejemplo de como podria identificar si es un palindromo

function palindrome(text1){

    if (text1) {
        const re = /[\W_]/g;
        const lowRegStr = text1.toLowerCase().replace(re, '');
        const reverseStr = lowRegStr.split('').reverse().join(''); 
        console.log(reverseStr === lowRegStr + 'Palindrome')
    } else {
        console.log('This is not a Palindrome');
    }

};

wordCount('Hello World this is a project, countint words');
palindrome('No');


