const myTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const am = document.getElementById("am")
  if (hours >= 12) {
    am.innerText = "PM"
  }
  else {
    am.innerText = "AM"
  }



  if (seconds < 10) {
    document.getElementById("sec").innerText = `0${seconds}`
  }


  else {
    document.getElementById("sec").innerText = seconds
  }

document.getElementById("hou").innerText=hours

  if (hours > 12) {
    document.getElementById("hou").innerText = hours - 12
  }

  if (minutes < 10) {
    document.getElementById("min").innerText = `0${minutes}`
  }

  else {
    document.getElementById("min").innerText = minutes
  }

}

setInterval(myTime, 1000)
