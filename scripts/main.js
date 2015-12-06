/**
 * Created on: 6/12/15
 *     Author: Bobby Lin
 */

function generateQuote() {
    currentIndex = generateNextRandomInt();
    console.log(currentIndex);
    document.getElementById('text').innerHTML = data[currentIndex].text;
    document.getElementById('origin').innerHTML = data[currentIndex].origin;
}

function generateRandomIntFromInterval() {
    return Math.floor(Math.random()*(data.length));
}

function generateNextRandomInt() {
    var num = generateRandomIntFromInterval();
    while(num == currentIndex) {
        num = generateRandomIntFromInterval();
    }
    return num;
}

var currentIndex = generateRandomIntFromInterval();