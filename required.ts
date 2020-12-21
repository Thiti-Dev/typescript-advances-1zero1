interface OptionalData{
    skill_level?: number;
    interest?: string[];
    extras?: string
}

function describeOptionalData(b:Required<OptionalData>){
}

describeOptionalData({skill_level:3,interest:['hiphop'],extras:'none'})