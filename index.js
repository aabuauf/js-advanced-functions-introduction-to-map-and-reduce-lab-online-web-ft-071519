// Your code here
function mapToNegativize(sourceArray){
let result = []
for (let i = 0; i<sourceArray.length; i++){
  result[i]=sourceArray[i]*-1
}
return result
}

function mapToNoChange(sourceArray){
  let result = []
for (let i = 0; i<sourceArray.length; i++){
  result[i]=sourceArray[i]*-1
}
return sourceArray
}