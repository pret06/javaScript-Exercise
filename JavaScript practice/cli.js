
let arr = [
  ["Amish",23],
  ["karan", 24],
  ["Yash", 24]
]

function printarr(arr){
  console.log("Printing whole array");
  for(let i=0;i<=arr.length;i++){
    console.log(arr[i])
  }
}
function printNames(arr){
  console.log("Printing only name");
  for(let i=0;i<=arr.length;i++){
    console.log(arr[i][0])
  }
}

// SAME QUESTION USING ForEach and ForOf

let Arr = [
  ["Amish",23],
  ["karan", 24],
  ["Yash", 24]
]

Arr.forEach(e=>{
  e.forEach(val => {
    console.log(val)
  });
})

for (let ar of Arr) {
  for(let i of ar){
    console.log(i);
  }
}
