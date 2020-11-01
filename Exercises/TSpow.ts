type TSpowFunctionType = (pow:number) => number

const TSpow:TSpowFunctionType = function(pow){
    return  pow*pow
}

console.log(TSpow(5))

export {TSpow}