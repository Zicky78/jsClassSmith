## Week 12

## Fixing I/O

I set step="any" on the form inputs, and then added .toFixed(2) to my MPG and TripCost calculation

## Fixed Code

I guess I never realized / noticed the number attribute stored them as a string, because my calculations weren't giving any errors. I didn't know javascript auto-converted with multiplication / division. I did know .toFixed() converted to string, which is why I try to only use it for displaying numbers, but calling the constructor on it was a great solution. 

Also in my html I've had "label" mis-spelled as "lable" this entire time haha