# Week 10

## function vs =>

My philosophy is that I use function syntax if the code inside will be reused in other places in my program, and arrow functions 
for callbacks or quick one-line functions, or things that only get used once. function syntax is cleaner, because you don't use const to get 
confused with other variables at a glance. I love arrow functions though, they're really nice utility

## Where in the code do we start to render the table?

After we get our data and do our calculations, near where we are calling the other outputs

## How do we get the next rows with the data we need in them?

We could loop over MY_DATA with a forEach to create the table rows, and then run a for in on each of those objects to create our table data

## How do we fix the data lining up with the table?

Thankfully my code was already set up in the correct order, but we can just reorder the key/values in the object