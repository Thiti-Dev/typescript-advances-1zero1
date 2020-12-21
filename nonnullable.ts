// Has to enable structnullchecks
interface EachColorProperties{
    color?: 'blue' | 'red' | 'green' // if it's optional <we can send undefined to it>
}

function paintThis(userId:number,color:NonNullable<EachColorProperties['color']>){}



paintThis(1,'green')