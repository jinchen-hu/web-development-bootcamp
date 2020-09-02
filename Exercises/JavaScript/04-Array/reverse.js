var num = [1,2,3,4];
var lets = ["a", "b", "c", "d"];

function revs(arr){
    for (let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

function isUniform(arr){
    for (let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                return false;
            }
        }
    }
    return true;
}

function sumArray(arr){
    var sum = 0
    arr.forEach(function(num){
        sum += num;
    })
    return sum;
}

function max(arr){
    var m = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(m < arr[i]){
            m = arr[i];
        }
    }
    return m;
}

revs(num);
revs(lets);

rep = [1,2,3,4,5,6,6];
console.log(isUniform(num));
console.log(isUniform(rep));

console.log(sumArray([1,2,3]))
console.log(sumArray([10,3,10,4]))
console.log(sumArray([-5,100]))

console.log(max([1,2,3]))
console.log(max([10,3,10,4]))
console.log(max([-5,100]))
