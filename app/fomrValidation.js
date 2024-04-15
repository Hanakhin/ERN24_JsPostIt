/** 
@param {HTMLElement} elField
@param {RegExp} pattern

@returns 
*/

function isUserInputValid(elField, pattern){
    let cleanValue = elField.value.trim()
    let isValid = pattern.test(cleanValue)
    
    if(isValid){
        return true;
    }
    
    elField.classList.add('error')
    elField.value = ''

    return false
}