let userInputUnknown;
let userInputAny;
let userName;
userInputUnknown = 3;
userInputUnknown = 'Quang';
if (typeof userInputUnknown === 'string') {
    userName = userInputUnknown;
}
userInputAny = 3;
userInputAny = 'Quang';
userName = userInputAny;
function generateError(message, code) {
    throw { message, code };
}
const err = generateError('Error', 500);
console.log(err);
//# sourceMappingURL=app.js.map