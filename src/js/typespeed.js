
const timerWrapper = $('.timer-wrapper');
const originText = $('.typecheck-test-text p').text()
const textArea = $('.typecheck-input');
const resetBtn = $('.typecheck-reset');


var timer = [0, 0, 0, 0];
var timerInterval;
var timeRunning = false;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time
    }
    return time
}

function runTimer() {

    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2])

    timerWrapper.html(currentTime)
    timer[3]++;

    //timer
    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function spellCheck() {
    let textEntered = textArea.val();
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        textArea.css('border', '5px solid green');
        clearInterval(timerInterval)
    } else {
        if (textEntered == originTextMatch) {
            textArea.css('border', '5px solid yellow');
        } else {
            textArea.css('border', '5px solid red');
        }
    }

}

function resetAll () {
    timer = [0, 0, 0, 0];
    timeRunning = false;
    clearInterval(timerInterval);

    timerWrapper.text('00:00:00');
    textArea.val('')
    textArea.css('border', '1px solid ')
}


$(function () {
    $('.typecheck-input').on({
        keypress: function () {
            if ($(this).val() == "" && !timeRunning) {
                timeRunning = true;
                timerInterval = setInterval(() => {
                    runTimer()
                }, 10);
            }
        },
        keyup: function () { spellCheck() }
    });

    resetBtn.on('click', function(){
        resetAll()
    })

})

$(window).on('load', resetAll)