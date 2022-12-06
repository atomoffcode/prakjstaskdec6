//1
let Finder = function(x){
    let arr = [32,53,46,87,24,586,23,33,1,33]
    let i = []

    for (let index = 0; index < arr.length; index++) {
        if(arr[index]==x){
            i.push(index)
        }
        
    }
    if(i===0){
        return 'bele bir element yoxdur'
    }else{
        return i

    }

}

console.log(Finder(33));


console.log('================================================');

//2
let arr = [1,2,3,4,5,6,7,8,9,10]
let Even = function(x) {
    return x%2==0;
}
let Odd = function(x) {
    return x%2==1;
}
let ev = arr.filter(Even)
let od = arr.filter(Odd)
console.log(ev);
console.log(od);



console.log('================================================');

//3

let Palindrome = function(word){
    let check = true
    for (let index = 0; index < word.length; index++) {
        if (word[index]!=word[word.length-1-index]) {
            check = false
        }
    }
    return check
}

console.log(Palindrome('zaaz'));
