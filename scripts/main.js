/**
 * Created on: 6/12/15
 *     Author: Bobby Lin
 */

function generateQuote() {
    currentIndex = generateNextRandomInt();
    console.log(currentIndex);
    document.getElementById('text').innerHTML = data[currentIndex].text;
    document.getElementById('origin').innerHTML = data[currentIndex].origin;
    createButton();
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

function createButton() {
    var msg = document.getElementById("text").innerHTML;
    msg = modifyStringToWordLimit(msg);
    var tweetDiv = document.querySelector(".twitter-share-button");
    var link = document.createElement("a");

    link.setAttribute("href", "https://twitter.com/share");
    link.setAttribute("class", "twitter-share-button");
    link.setAttribute('id', 'twitter');
    link.setAttribute("data-text", "" + msg + "");
    link.setAttribute("data-size", "large");
    tweetDiv.parentNode.replaceChild(link, tweetDiv);
    twttr.widgets.load();
}

function modifyStringToWordLimit(msg) {
    if(msg.length >=80) {
        msg = msg.substring(0,75);
        msg += '..."';
    }
    return msg;
}

// Twitter API for posting single tweet
!function(d, s, id){
    var js,
        fjs=d.getElementsByTagName(s)[0],
        p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)) {
        js=d.createElement(s);
        js.id=id;
        js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');