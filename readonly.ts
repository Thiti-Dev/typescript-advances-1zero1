interface Output{
    log_string:string
    complied_time:number
}


function genOutputOfCurrentThreadProcessing(): Readonly<Output>{
    const gen_output:Output = {
        log_string: 'asdasdx1088x',
        complied_time: 7.3665
    }
    return gen_output
}


(function getOutputProcess():void{
    const generated_output = genOutputOfCurrentThreadProcessing()
    generated_output.log_string = 'asdasdasd' // this is not possible
})()