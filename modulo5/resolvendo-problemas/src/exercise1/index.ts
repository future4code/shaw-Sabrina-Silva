
const isOneEdit = (stringA: string, stringB: string): boolean => {

    if (Math.abs(stringB.length - stringA.length) > 1) return false

    if (stringA > stringB) {
        return (stringA.includes(stringB))
    }

    let charsDiff = 0
    for (let i = 0; i < stringA.length; i++) {
        if(stringA[i] !== stringB[i]) charsDiff++

    }
    return charsDiff === 1


}


console.log(isOneEdit("laranja","laranj"))