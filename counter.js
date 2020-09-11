var values=[2,2,3,4];
var counter= function(arr){

    let total=0;

    for(var i=0;i<arr.length;i++){
        
        total+=arr[i];
    }

    return total;

}

module.exports={

    values:values,
    counter:counter,

}