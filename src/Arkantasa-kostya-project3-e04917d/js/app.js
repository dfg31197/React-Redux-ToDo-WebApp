/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

/*
 * Create a list that holds all of your cards
 */

 const allCards = ["fa-diamond", , "fa-paper-plane-o", "fa-anchor",
                  "fa-bolt", "fa-cube", "fa-leaf",
                  "fa-bicycle", "fa-bomb"];
const doubledArray = allCards.concat(allCards);


// variables
const open = [];
const modal = $("#winnerModal");
let matchingCards = 0;
let countingCards = 0;
let threeStars = 14;
let twoStars = 19;
let stars = 3;

//timer

let timer = {
    seconds: 0,
    minutes: 0,
};

let beginTimer = function() {
    if (timer.seconds === 59) {
        timer.minutes++;
        timer.seconds = 0;
    } else {
        timer.seconds++;
    }
    let formattedSec = "0";
    if (timer.seconds < 10) {
        formattedSec += timer.seconds
    } else {
        formattedSec = String(timer.seconds);
    }

    let time = String(timer.minutes) + ":" + formattedSec;
    $(".timer").text(time);
};
function restartTimer() {
    clearInterval(timer.clearTime);
    timer.seconds = 0;
    timer.minutes = 0;
    $(".timer").text("0:00");

    timer.clearTime = setInterval(beginTimer, 1000);
};


// click and start.
let onClick = function() {
    if (isValid( $(this) )) {
        if (open.length === 0) {
            openCard( $(this) );
        } else if (open.length === 1) {
            openCard( $(this) );
            countingCards++;
            starUpdate();
            if (checkMatch()) {
                setTimeout(currentMatch, 400);
            } else {
                setTimeout(resetAllCards, 600);
            }
        }
    }
};

// shuffle all of the cards
function updateCards() {
    allCards = shuffle(allCards);
    let index = 0;
    $.each($(".card i"), function(){
      $(this).attr("class", "fa " + allCards[index]);
      index++;
    });
    restartTimer();
};
// Validate cards.
function isValid(card) {
    return !(card.hasClass("open") || card.hasClass("match"));
};

// 16 cards open = win || Modal

function wonGame() {
    if (matchingCards === 16) {
        return true;
    } else {
        return false;
    }
};

function displayModal() {
    modal.css("display", "block");
};

let playAgain = function() {
    resetGame();
    modal.css("display", "none");
};


// Match, Reset, Open.

function checkMatch() {
    if (open[0].children().attr("class")===open[1].children().attr("class")) {
        return true;
    } else {
        return false;
    }
};

let currentMatch = function() {
    open.forEach(function(card) {
        card.addClass("match");
    });
    open = [];
    matchingCards += 2;

    if (wonGame()) {
        clearInterval(timer.clearTime);
        displayModal();
    }
};

let resetAllCards = function() {
    open.forEach(function(card) {
        card.toggleClass("open");
        card.toggleClass("show");
    });
    open = [];
};

function openCard(card) {
    if (!card.hasClass("open")) {
        card.addClass("open");
        card.addClass("show");
        open.push(card);
    }
};

// reset the game

let resetGame = function() {
    open = [];
    matchingCards = 0;
    countingCards = 0;
    restartTimer();
    starUpdate();
    $(".card").attr("class", "card");
    updateCards();
    resetStars();
};


// stars back to default & update

function deleteStar() {
    $(".fa-star").last().attr("class", "fa fa-star-o");
    stars--;
    $(".starNumber").text(String(stars));
};

function resetStars() {
    $(".fa-star-o").attr("class", "fa fa-star");
    stars = 3;
    $(".starNumber").text(String(stars));
};

function starUpdate() {
    $(".moves").text(countingCards);

    if (countingCards === threeStars || countingCards === twoStars) {
        deleteStar();
    }
};

//event listeners

$(".card").click(onClick);
$(".restart").click(resetGame);
$(".try-again").click(playAgain);
$(updateCards);
