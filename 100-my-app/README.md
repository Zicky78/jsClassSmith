## Week 15

Very simple to implement, the code is nearly the same as the mileage program.

I didn't use the functionality to disable the edit buttons when they are clicked since edit opens the modal,
so I instead added functionality that disables closing the modal, and resumes normal functionality once submitted

I also made sure to add that closing the modal resets the form

I didn't know that imported variables are treated as constants, so I had to make a toggleModalListener function when I
had previously tried just exporting the boolean itself. Its more organized that way though, so it makes sense

I also reorganized the folder structure and removed the old.js file since it's not needed anymore








