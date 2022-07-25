
const compression = (input:any)=>{

    const compString = []
    let lastChar = input[0]
    let charCount = 0 

    for(const char of input){
        if(char !== lastChar){
            compString.push(lastChar + charCount)
            lastChar = char
            charCount = 0
        }
        charCount++
    }

    compString.push(lastChar + charCount)
    let result = ""
    for(const key of compString){
        result += key
    }
    return result.length > input.length ? input: result
}


console.log(compression("aabbb"))