//Useful when doing mixins -> polymorphism

type Constructable<ClassInstance> = new(...args:any[]) => ClassInstance

function Deleteable<BaseClass extends Constructable<{}>>(Base: BaseClass){
    return class extends Base {
        deleted?: boolean;
        delete(){}
    }
}

class Car {
    // deleted?:boolean
    // delete(){}
    constructor(public name:string){}
}

class User{
    // deleted?:boolean
    // delete(){}
    constructor(public name:string){}
}

const DeleteableCar = Deleteable(Car);
const DeleteableUser = Deleteable(User);

type DeleteableUserInstance = InstanceType<typeof DeleteableUser>
type DeleteableCarInstance = InstanceType<typeof DeleteableCar>

class Profile {
    user!: DeleteableUserInstance;
    car!: DeleteableCarInstance
}

const profile = new Profile()
profile.user = new DeleteableUser('Por')
profile.car = new DeleteableCar('Evolution')
profile.user.delete()
profile.car.delete()