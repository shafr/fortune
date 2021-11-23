// function myChangeFunction(input1) {
//     var input2 = document.getElementById('myInput2');
//     input2.value = input1.value;
// }

const maxNum = 23;
function sumNumbers(value) {
    //TODO - what if equals ? 
    if (value <= maxNum) {
        console.log("Число меньше " + maxNum);
        return value;
    }

    let res = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

    console.log("Число: " + value + "Сумма: " + res);

    if (res > maxNum) {
        return sumNumbers(res, maxNum);
    }

    return res;
}

function DoCalculations() {
    console.log("CLICKED");
    // birthDate = document.getElementById('birthDate').value;
    birthDate = '24.12.1976'
    console.log(birthDate);
    var [day, month, year] = birthDate.split('.');

    // BottomLeft = fizReality
    let fizReality = 0;
    if (day <= 23) {
        fizReality = day;
    } else {
        fizReality = sumNumbers(day);
    }

    document.getElementById('inputBottomLeft').value = wrap(fizReality)

    let relationships = month;
    document.getElementById('inputBottomRight').value = wrap(relationships)

    let socialSphere = sumNumbers(year);
    document.getElementById('inputTopRight').value = wrap(socialSphere)

    let spiritualGrowth = sumNumbers(Number(fizReality) + Number(relationships) + Number(socialSphere))
    document.getElementById('inputTopLeft').value = wrap(spiritualGrowth)
    
    let soulKernel = sumNumbers(Number(fizReality) + Number(relationships) + Number(socialSphere) + Number(spiritualGrowth))
    document.getElementById('inputCenter').value = wrap(soulKernel)

    let lifeMeaning = sumNumbers(Number(fizReality) + Number(relationships))
    document.getElementById('inputBottom').value = wrap(lifeMeaning);

    let soulPurpose = sumNumbers(Number(socialSphere) + Number(spiritualGrowth))
    document.getElementById('inputTop').value = wrap(soulPurpose);
}

function wrap(value){
    return value + '/' + (23 - value);
}
