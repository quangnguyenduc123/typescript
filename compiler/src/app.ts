let userInputUnknown: unknown
let userInputAny: any
let userName: string

userInputUnknown = 3
userInputUnknown = 'Quang'

//userName = userInputUnknown => error cant convert unknown type to other type but any can
if (typeof userInputUnknown === 'string') { // have to check typeof userInputUnknown
    userName = userInputUnknown
}

userInputAny = 3
userInputAny = 'Quang'
userName = userInputAny // not error


//Never type

function generateError(message: string, code: number): never {
    throw { message, code };
}

const err = generateError('Error', 500)
console.log(err) // when we console here => they not print undefine
