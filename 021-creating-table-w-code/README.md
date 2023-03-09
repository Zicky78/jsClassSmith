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

## Separating the render and populate functions

I made a new function populateTableData, and grabbed the previously made table with a querySelector
I spent a good while thinking about how I could not re-render the whole table each time, but I couldn't
figure it out without refactoring quite a bit. Since we loop through all the data to create our nodes, they get appended multiple times. Clearing just the table's innerHTML also gets rid of the headings, so I also thought about getting a list of all child elements of the table and deleting all but the first, but I figured I'd just move on and see how you did it. 