//1
const arr = [1 , 44 , 67 , 55 , 100]
function totalCalc(array1){
let sum = 0 
  for(let i = 0 ; i < array1.length ; i++){
    sum = sum + array1[i]

  }
  return sum
}
const sum = totalCalc(arr)
console.log(sum)

//2

const arr1 = [66 , 70 , 55 , 98 , 88]
function avgCalc(array2){
  let avg = 0
  let sum = 0
  for(let i = 0 ; i < array2.length ; i++){
    sum = sum + array2[i]
  avg = sum / array2.length
  }
return avg

}
const avg = avgCalc(arr1)
console.log(avg)

//3 

const arr2 = [9 , 6 , 5 ,3 , 7]
function blabla(array2,num1){
  
  let sum = 0
  
  for(let i = 0 ; i < array2.length ; i++){
    if(array2[i] > num1){
      sum = sum + array2[i]
    }
    return sum
   }
}
const rSum = (arr2 , 9)
console.log(rSum)


//4 

const arr3 = [ 6 , 7 ,7 ,8 ,55 ,16 , 4, 198 , 7]
function findNum(array3 , num2){
let arrNumbers = 0
for(let i = 0 ; i < array3.length ; i++){
  if(array3[i] === num2){
    arrNumbers++
  }
  return arrNumbers
}
}
const W = findNum(arr3 , 7)
console.log(W)