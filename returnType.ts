function getRandomShit():number{
    return 66599
}

type RandomShitReturnType = ReturnType<typeof getRandomShit>

function getReferenceOfRandomShit(): ()=> number{
    return getRandomShit
}

const xx = getReferenceOfRandomShit() // xx knowns as number