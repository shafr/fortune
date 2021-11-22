const MAGIC_NUMBER = 114;
const maxNumber = 10;

// function main(word,newNumberDivider, MAGIC_NUMBER) {
//     if (args.length > 1) {
//         let newNumberDivider = Integer.parseInt(args[1]);
//         maxNumber = newNumberDivider;
//         alert("Используется новый делитель " + maxNumber);
//     }

//     if (args.length > 2) {
//         MAGIC_NUMBER = Integer.parseInt(args[2]);
//         alert("Использую новое магическое число: " + MAGIC_NUMBER);
//     }

//     let totalWordsSum = wf.parseText(args[0]);

//     System.out.println(String.format("\r\n %20s = %3s", "СУММА всех чисел", totalWordsSum));
//     System.out.println(String.format("%16s '%3s' = %3s", "СУММА с Магическим числом", MAGIC_NUMBER, totalWordsSum += MAGIC_NUMBER));

//     let finalNumber = wf.reduceNumber(totalWordsSum);
//     let color = wf.getColor(finalNumber);

//     System.out.println("");
//     System.out.println("Число = " + finalNumber + "   " + color);
// }

function reduceNumber(value, maxNum) {
    //TODO - what if equals ? 
    if (value < maxNum){
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
        
    if (res > maxNum){
        return sumNumbers(res, maxNum);
    }

    return res;
}

function parseText(text) {
    let res = text
        .toString()
        .split('')
        .map(String)
        .reduce(function (a, b) {
            console.log(a + " " + b);
            return a + getNumberFromChar(b);
        }, 0);
    
    console.log("Текст: " + text + ", Сумма: " + res);

    return res;
}

function containsCharacter(pattern, letter) {
    return pattern.toLowerCase().includes(letter.toLowerCase());
}

function getNumberFromChar(letter) {
    if (containsCharacter("АИСЪ1", letter)) { return 1; }
    if (containsCharacter("БЙТЫ2", letter)) { return 2; }
    if (containsCharacter("ВКУЬ3", letter)) { return 3; }
    if (containsCharacter("ГЛФЭ4", letter)) { return 4; }
    if (containsCharacter("ДМХЮ5", letter)) { return 5; }
    if (containsCharacter("ЕНЦЯ6", letter)) { return 6; }
    if (containsCharacter("ЁОЧ7", letter)) { return 7; }
    if (containsCharacter("ЖПШ8", letter)) { return 8; }
    if (containsCharacter("ЗРЩ9", letter)) { return 9; }
    if (containsCharacter("0.,()    ", letter)) { return 0; }

    console.error("Непонятная буква: " + letter);
}

function getColor(number) {
    let colors = [
        "",
        "красный",
        "оранжевый",
        "желтый",
        "зеленый",
        "голубой",
        "синий",
        "фиолетовый",
        "розовый",
        "золотой",
    ];

    if ((number > 0) && (number < colors.length)) {
        return colors[number];
    }

    console.error("Неправильный цвет !: " + number);
}

