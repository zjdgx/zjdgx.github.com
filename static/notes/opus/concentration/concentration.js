/**
 * Build Date: 2016/10/01 21:55
 * Author: ZJDGX
 */

var doc = document,
      digits = [],
      clickCount = 0,
      timeElapsed = 0,
      milliseconds = 0,
      digitsNumber = 25,
      concentrationClock = null,
      smt = doc.querySelector('.smt'),
      start = doc.querySelector('.start'),
      handred = doc.querySelector('.handred'),
      table = doc.getElementById('digit-table'),
      times = doc.querySelector('.time-elapse');

function generateDigits () {
  var i = digitsNumber == 25 ? 1 : 0,
        end = i ? digitsNumber + 1 : digitsNumber;

  digits = [];

  for (i; i < end; i++) {
    digits.push(i);
  }
}

function generateTable () {
  var html = ["<table>"],
        colspan = digitsNumber == 25 ? 5 : 10;

  generateDigits();

  digits = digits.sort(function () {
    return Math.random() > 0.5;
  });

  for (var i = 1; i < digitsNumber + 1; i++) {
    if (i % colspan == 1) {
      html.push('<tr>');
    }
    html.push("<td>" + num2str(digits[i - 1], 2) + "</td>");
    if (i % colspan == 0) {
      html.push('</tr>');
    }
  }

  html.push("</table>");
  table.innerHTML = html.join("");
}

function num2str(num, length) {
  return new Array(length - num.toString().length + 1).join("0") + num.toString();
}

function EventBind () {
  var doc = document;

  start.addEventListener('click', clockTrigger, false);
  doc.querySelector('body').addEventListener('keydown', function (e) {
    if (e.keyCode == 32) {
      clockTrigger();
    }

    e.preventDefault();
    return false;
  }, false);

  doc.querySelector('.mask').addEventListener('click', function (e) {
    var target = e.target,
          cls = target.className;

    console.log(concentrationClock);
    if (!concentrationClock) {
      if (cls.indexOf('left') > -1) {
        digitsNumber = 25;
        smt.className = 'smt';
        target.className = 'mask';
        handred.className = 'handred hidden';
      } else {
        digitsNumber = 100;
        smt.className = 'smt hidden';
        handred.className = 'handred';
        target.className = 'mask left';
      }

      generateTable();
    }
  }, false)

}

function clockTrigger () {
  if (clickCount % 2 == 0) {
    var startTime = Date.now(),
          elapsedTime = 0;

    generateTable();
    start.innerHTML = "结束";

    concentrationClock = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      milliseconds = elapsedTime % 1000;
      times.innerHTML = Math.floor(elapsedTime / 1000) + '.' + num2str(milliseconds, 3);
    }, 100);
  } else {
    start.innerHTML = "开始";
    clearInterval(concentrationClock);
    concentrationClock = null;
  }

  clickCount++;
}

function onLoaded () {
  generateTable();
  EventBind();
}