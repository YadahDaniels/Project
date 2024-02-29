
  // Function to set the countdown date 10 days from today
  function setCountdownDate() {
    const currentDate = new Date();
    const targetDate = currentDate.getDate() + 10;
    currentDate.setDate(targetDate);
    return currentDate.getTime();
  }

  // Set the initial countdown date
  let countDownDate = setCountdownDate();

  // Update the countdown every 1 second
  const x = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the table
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, refresh the countdown date
    if (distance < 0) {
      countDownDate = setCountdownDate();
    }
  }, 1000);


 

  

