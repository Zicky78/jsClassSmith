## Week 15

Very simple to implement, the code is nearly the same as the mileage program.

I didn't use the functionality to disable the edit buttons when they are clicked since edit opens the modal,
so I instead added functionality that disables closing the modal, and resumes normal functionality once submitted

I also made sure to add that closing the modal resets the form

I didn't know that imported variables are treated as constants, so I had to make a toggleModalListener function when I
had previously tried just exporting the boolean itself. Its more organized that way though, so it makes sense

I also reorganized the folder structure and removed the old.js file since it's not needed anymore

## Updates:

I had to rename some calBurned stuff since I ran into duplicate names using it too many times. Naming is hard.

I refactored my render to be more modular, taking some inspiration from ChatGPT, though it's code was far less readable, having a separate createElement and createElementWithClass feature instead of using default values to psuedo-overload the function.

I had also wanted to refactor log.js to have the functions become object methods of the entry object so it could have reference to the entry automatically, and when I was copying over the code github copilot suggested:

```
this.items.splice(this.items.indexOf(item), 1);
```

instead of what I was using:

```
entry.items.splice(index, 1)
```

This, along with my object methods refactor meant I could take out a lot of the parameters I was passing around.

Find log still needed to be separate as it's use is to return entries of a specific date.

I also originally tried:

```
let btns = createEditDelBtns();
let editBtn = btns['editBtn'];
let delBtn = btns['delBtn'];
```

but ChatGPT provided this solution that used destructuring, so I went and learned more about that too:

```
let {editBtn, delBtn} = createEditDelBtns();
```









