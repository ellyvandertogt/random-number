//Math.random() = Generates a seudo-random between 0 and 1.

var randNum;
//randNum = Math.floor(Math.random() * 6);//random 0 to 6
//randNum = Math.floor(Math.random() * 6) + 1;//random 1 to 6
//randNum = Math.floor(Math.random() * 100) + 1;//random 1 to 6

//Create a random number with function
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

randNum = getRandomNum(1 , 100);
console.log(randNum);
randNum = getRandomNum(1 , 100);
console.log(randNum);
randNum = getRandomNum(1 , 100);
console.log(randNum);




