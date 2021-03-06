function wrap(value) {
    return value + '/' + (23 - value);
}

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
    let birthDate = document.getElementById('inputBirthDate').value;

    console.log(birthDate);
    var [day, month, year] = birthDate.split('.');

    if (!day || !month || !year) {
        console.log("wrong format")
        return
    }

    let fizReality = sumNumbers(day);
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

function exportCanvas() {

    var element = document.getElementById('circlesWithNumbers')

    window.scrollTo(0, 0);
    html2canvas(element).then(canvas => {
        let birthDate = document.getElementById('inputBirthDate').value;
        let fileName = birthDate.replaceAll('.','-') + ".png";
        // document.body.appendChild(canvas)
        // getCanvas = canvas;
        let dataURL = canvas.toDataURL("image/png");
        let newData = dataURL.replace(
            /^data:image\/png/, "data:application/octet-stream");
        
        let button = document.getElementById("btn-save-result");
        button.setAttribute("download", fileName)
        button.setAttribute("href", newData);
    });

    // var imgageData = getCanvas.toDataURL("image/png");


    // Now browser starts downloading 
    // it instead of just showing it
    // var newData = imgageData.replace(
    //     /^data:image\/png/, "data:application/octet-stream");

    // document.getElementById("btn-Convert-Html2Image")
    // .attr("download", "GeeksForGeeks.png")
    // .attr("href", newData);
}