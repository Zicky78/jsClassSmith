## Week 12

## Fixing I/O

I set step="any" on the form inputs, and then added .toFixed(2) to my MPG and TripCost calculation

## Fixed Code

I guess I never realized / noticed the number attribute stored them as a string, because my calculations weren't giving any errors. I didn't know javascript auto-converted with multiplication / division. I did know .toFixed() converted to string, which is why I try to only use it for displaying numbers, but calling the constructor on it was a great solution. 

Also in my html I've had "label" mis-spelled as "lable" this entire time haha

## DOM Selectors and where the code goes

Reading through the CSS Selectors, the descendant combinator jumped out at me as a way to solve the problem. Since we only want the buttons in our table selected, I chose to use querySelectorAll('td button') as a way to target only buttons in tds. I created a function that would get said buttons, and toggle their disabled status. Then I added the function call in the event listener onto the edit button. 

My forEach originally contained an if else to check the state of the button so that pressing submit would untoggle them, but when we submit we re-render the whole table anyways with new elements so they are automatically restored

## Solution to disable buttons

I noticed pretty much immediately after submitting that I forgot to remove my import / export of the function I made, and then watching your solution realized that I dont even need a function since I'm not importing/exporting it and could just move it inside the event listener