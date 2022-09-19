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

  if (hours > 12) {
    hours = hours - 12
  }
  
  
  if (seconds <10) {
    document.getElementById("sec").innerText = `0${seconds}`
  }
  
  else{
    document.getElementById("sec").innerText = seconds
  }

  document.getElementById("hou").innerText = hours
  document.getElementById("min").innerText = minutes
  






}

setInterval(myTime, 1000)