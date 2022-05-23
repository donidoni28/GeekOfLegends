export function getRngObj(arr) {
    let rngNumber = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0
    let result = arr[rngNumber]
    // console.log(rngNumber);
    // console.log(result);
    return {
        number: rngNumber,
        obj: result
    }
}
export function getBattlePhaseOrder(boss, pers) {
    let arr = [
        ...pers,
        boss
    ]
    let rngArr = []
    while(arr.length > 0){
        let elem = getRngObj(arr)
        rngArr.push(elem.obj)
        arr.splice(elem.number,1)
    }
    return rngArr
}
