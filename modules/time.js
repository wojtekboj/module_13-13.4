var os = require('os');

function time(osTime) {
    var hours = osTime / 3600;
    hours = Math.floor(hours);
    var minutes = (osTime % 3600) / 60;
    minutes = Math.floor(minutes);
    var sec = (osTime % 3600) % 60;
    sec = Math.floor(sec);

    var formatedTime = hours + 'godz. ' + minutes + 'min. ' + sec + 'sek.';
    return formatedTime;
}

exports.print = time;