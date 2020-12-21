interface LivingThingsMustHave{
    name:string;
    age:number;
    alive:boolean;
    legs:number;
    arms:number;
    height:number;
    weight:number;
}



type NormalHumanDataForMeasuring = Pick<LivingThingsMustHave, "age"|"height"|"weight" >


const x:NormalHumanDataForMeasuring = {
    age: 21,
    height:170,
    weight:70
}

console.log(x.age)