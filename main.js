const modeOptions = document.querySelectorAll('.mode-options > p');
const highScore = document.querySelector('.high-score');
const appleEasyButton = document.querySelector('.easyGame');
const appleMediumButton = document.querySelector('.mediumGame');
const appleHardButton = document.querySelector('.hardGame');
const appleMenu = document.querySelector('.apple-info');
const mode = document.querySelector('.mode');


var score = 0;

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function setBG() {
    if (Math.round(Math.random())) {
        return "apple.png";
    } else {
        return "rotten-apple.png";
    }
}

//show or hide screens
function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "";
}

function modeSelectionHandler() {
    pick.modeSelection(this);
    show(appleMenu);
    hide(mode);
}

function menuHandler() {
    hide(appleMenu);
    pick.high = 0;
    pick.score = 0;
    hide(messageWhack);
    score.textContent = pick.score;
    highScore.textContent = pick.high;
    show(intro);
}


//Apples will fall at random at different sizes
function fallApples() {
    var length = random(100, ($(".game").width() - 100));
    var velocity = random(850, 10000);
    var size = random(50, 150);
    var thisBox = $("<div/>", {
        class: "box",
        style: "width:" + size + "px; height:" + size + "px; left:" + length + "px; transition: transform " + velocity + "ms linear;"
    })

    thisBox.data("test", Math.round(Math.random()));
    if (thisBox.data("test")) {
        thisBox.css({ "background": "url('apple.png')", "background-size": "contain" });
    } else {
        thisBox.css({ "background": "url('rotten-apple.png')", "background-size": "cover" });
    }

    $(".game").append(thisBox);

    //random start for animation
    setTimeout(function () {
        thisBox.addClass("move");
    }, random(0, 5000));

    thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        function (event) {
            $(this).remove();
        });
}

// for (i = 0; i < 10; i++) { 
//     fallApples();
// }

// If apple is clicked add a point, if the rotten apple is clicked, subtract a point
let pick = $(document).on('click', '.box', function () {

    if ($(this).data("test")) {
        score += 1;
    } else {
        score -= 1;
    }

    if (score)

        $(".score").html(score);
    $(this).remove();
});

// Start the Easy Game on Button Click
$('.easyGame').on('click', function () {
    hide(appleMenu);
    var runGame = setInterval(function () {
        for (i = 0; i < 10; i++) {
            fallApples();
        }
    }, 5000);

    function countdown() {
        var seconds = 25;
        function tick() {
            var counter = document.getElementById("counter");
            seconds--;
            counter.innerHTML = (seconds < 10 ? "0" : "") + String(seconds) + "S";
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                alert("Game over");
                clearInterval(runGame);
                show(appleMenu);

            }
        }
        tick();
    }

    countdown();


})

$('.mediumGame').on('click', function () {
    hide(appleMenu);
    var runGame = setInterval(function () {
        for (i = 0; i < 10; i++) {
            fallApples();
        }
    }, 3500);

    function countdown() {
        var seconds = 25;
        function tick() {
            var counter = document.getElementById("counter");
            seconds--;
            counter.innerHTML = (seconds < 10 ? "0" : "") + String(seconds) + "S";
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                alert("Game over");
                clearInterval(runGame);
                show(appleMenu);
            }
        }
        tick();
    }

    countdown();


})
$('.hardGame').on('click', function () {
    hide(appleMenu);
    var runGame = setInterval(function () {
        for (i = 0; i < 10; i++) {
            fallApples();
        }
    }, 1500);

    function countdown() {
        var seconds = 25;
        function tick() {
            var counter = document.getElementById("counter");
            seconds--;
            counter.innerHTML = (seconds < 10 ? "0" : "") + String(seconds) + "S";
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                alert("Game over");
                clearInterval(runGame);
                show(appleMenu);
            }
        }
        tick();
    }

    countdown();


})




