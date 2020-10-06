# VanillaJS timer
  Simple JavaScript timer.
  
# Set up a timer
  To set up this timer on your page import function "configureTimer" from timer.js. You can import default or the function by its name.
  Function requires two arguments: 
      1. deadline (following format example: YYYY-MM-DDT00:00).
      2. css selector for the timer block. You can use "body" if there is only one timer on the page.
      
  Example: configureTimer('.sale', '2020-10-07T00:00');.
  
  This timer requires a container that contains elements (<span> for example) with #days, #hours, #minutes and #seconds.
  !Some of those elements (#days or #seconds for example) may be missing. Timer will still work properly.
  
# Functionality description

  Algorithm is pretty simple:
    1. Get a timer node by a selector.
    2. Set 1 second interval for timer update.
    3. Initialize timer for the first time.
    
  -Function "calcTimeRemaining" takes deadline as parameter and returns object that contains: 
    x total: total amount of milliseconds left;
    x days: total amount of days left;
    x hours: total amouny of hours left;
    x minutes: total amount of minutes left;
    x seconds: total amount of seconds left.
    
  All the values are integers and can be positive, negative or 0.
  
  -Function "setTextContent" takes node, selector and value as parameters, checks if there is an element with that selector in that node. If true — set textContent with the value.
  
  -Function "withZero" takes number as a parameter and adds 0 at the start if the number is less than 10.
  
  -Function "displayTimer" takes following parameters: node, days, hours, minutes, seconds. It sets following values (days, hours etc...) to the node#days, node#hours, node#minutes and node#second by using "setTextContent" and "withZero" functions. 
  *If there are no days/hours/minutes/seconds, it sets those values to "00".
  
  -Funtion "updateTimer" takes 3 parameters: node, deadline, timerInterval. It gets timeRemaining object and checks the total of time remainig:
   x if total of milliseconds is less or equal to 0 → clears interval and set timer to 00 days 00 hours 00 minutes 00 seconds;
   x if total is more than 0 → set timer with values from timeRemaining.
