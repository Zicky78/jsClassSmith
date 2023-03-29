## Week 11

Now that we're getting input from a user, I did some refactoring (read: started over) to make the app
more in line with that. 

Outlined at the bottom of main.js are the features planned, but for now I wanted to get the create and display functions built.
Obviously those needed a few more miscellaneous functions to work properly, and to work with how I wanted to store the data.

Users can input a food, serving amount, and amount of calories per serving. They can also input exercise as part of the entry, though I think I'll separate those into two separate forms in the next step. 

After user input, the app checks if there is already an entry for the current day, and pushes the data into the existing entry if so. If not, it creates a new entry

Calories for that day are then totalled and displayed along with calories burned



