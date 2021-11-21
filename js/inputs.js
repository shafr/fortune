// function myChangeFunction(input1) {
//     var input2 = document.getElementById('myInput2');
//     input2.value = input1.value;
// }

function sumNumbers(value) {
    let res = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
    
        console.log(res);
        
    if (res > 23){
        return sumNumbers(res);
    }
    return res;
}


function DoCalculations() {
    console.log("CLICKED");
    // birthDate = document.getElementById('birthDate').value;
    birthDate='24.12.1976'
    console.log(birthDate);
    var [day, month, year] = birthDate.split('.');

    // BottomLeft = fizReality
    let res = 0;
    if (day <= 23) {
        res = day  + '/' + (23-day);
    } else {
        res = sumNumbers(day) + '/' + (23 - sumNumbers(day));
    }
    document.getElementById('inputBottomLeft').value = res;

    // BottomRight = relationships
    document.getElementById('inputBottomRight').value = month + '/' + (23 - month);
    // TopRight = socialSphere
    res = sumNumbers(year);
    document.getElementById('inputTopRight').value = res + '/' + (23 - res);

    // TopLeft = spiritualGrowth
    // document.getElementById('inputTopLeft').value = 


    // Center = SoulKernel

    // Bottom = LifeMeaning

    // Top = SoulPurpose
}


