# VanillaJS timer
  Simple JavaScript timer.
  
# Set up a timer
  To set up this timer on your page import function <code>configureTimer</code> from timer.js. You can import default or the function by its name.  
  Function requires two arguments: 
  <ol>
    <li> deadline (following format example: YYYY-MM-DDT00:00). </li>
    <li> css selector for the timer block. You can use "body" if there is only one timer on the page.</li>
  </ol>
      
  <b>Example</b>: <code>configureTimer('.sale', '2020-10-07T00:00');</code>. 
  
  This timer requires a container that contains elements (<code>&lt;span&gt;</code> for example) with #days, #hours, #minutes and #seconds.  
  !Some of those elements (#days or #seconds for example) may be missing. Timer will still work properly.
  
# Functionality description

  Algorithm is pretty simple:
   <ol>
    <li> Get a timer node by a selector.</li>
    <li> Set 1 second interval for timer update.</li>
    <li> Initialize timer for the first time.</li>
  </ol>
    
  <h3>calcTimeRemaining()</h3> 
 Function calcTimeRemaining unction takes deadline as parameter and returns object that contains:
  <ul style="list-style-type:disc;">
    <li> total: total amount of milliseconds left; </li>  
    <li> days: total amount of days left; </li> 
    <li> hours: total amouny of hours left; </li> 
    <li> minutes: total amount of minutes left; </li> 
    <li> seconds: total amount of seconds left. </li> 
  </ul>
    
  <i>All the values are integers and can be positive, negative or 0</i>.
  
  <h3>setTextContent()</h3>
 This function takes node, selector and value as parameters, checks if there is an element with that selector in that node. If true — set textContent with the value.
  
  <h3>withZero()</h3> 
 Function withZero takes number as a parameter and adds 0 at the start if the number is less than 10.
  
  <h3>displayTimer()</h3> 
 displayTimer function takes following parameters: node, days, hours, minutes, seconds. It sets following values (days, hours etc...) to the node#days, node#hours, node#minutes and node#second by using "setTextContent" and "withZero" functions. <br>
  <i>If there are no days/hours/minutes/seconds, it sets those values to "00".</i>
  
  <h3>updateTimer()</h3>
 Funtion updateTimer takes 3 parameters: node, deadline, timerInterval. It gets timeRemaining object and checks the total of time remainig:
 <ol>
   <li>if total of milliseconds is less or equal to 0 → clears interval and set timer to 00 days 00 hours 00 minutes 00 seconds;</li>
   <li>if total is more than 0 → set timer with values from timeRemaining.</li>
 </ol>
