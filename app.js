function modSessionTime( val ) {
  var s   = document.getElementById('session-length').innerHTML
  var int = parseInt(s, 10) + val

  if (int < 0) {
    int = 0 
  }
  document.getElementById('session-length').innerHTML = int
  document.getElementById('time-here').innerHTML = int
  return int
}

// -------------------------------------------------------------------------
var session = true
var sessiontime = (document.getElementById('session-length').innerHTML)*60

function startTimer(sessiontime,  display) {
    var timer   = sessiontime, minutes, seconds

    var clock   = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds
// Assing text content as a property for display
        display.textContent = minutes + ":" + seconds
        
        function stop () {
          clearInterval(clock)
        }

// This section moves the clock downward if the timer is above 0
        if (--timer < 0) {
          timer = sessiontime
          stop()
        }
        
        if (timer == 0) {
          var element = document.getElementById('parent')
          element.className = 'bg2'
        }
      
        document.getElementById('stop').onclick = function() {
          var element = document.getElementById('parent')
          element.className = 'parent'
          var reseted = document.getElementById('session-length').innerHTML
          stop()
          document.getElementById('time-here').innerHTML = reseted
          document.getElementById('start').disabled = false

        }

    }, 1000)
}


// -------------------------------------------------------------------------
function start () {
  var sessiontime = (document.getElementById('session-length').innerHTML)*60

  var display  = document.querySelector('#time-here')
  startTimer(sessiontime, display)
}
document.getElementById('start').onclick = function() {
  start()
  this.disabled = true
}

// -------------------------------------------------------------------------
// Button functionality using modSessionTIme BreakSessionTime
document.getElementById('session-plus').onclick = function() {
  var val = 1
  modSessionTime(val)
}
document.getElementById('session-minus').onclick = function() {
  var val = -1
  modSessionTime(val)
}

