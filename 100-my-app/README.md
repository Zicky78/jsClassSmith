## Week 16

ChatGPT wasn't the most helpful here due to how my data was structured. 

My two main issues were not changing the original array when copying it over, and maintaining references to everything as needed

It suggested changing the functions into strings and then restoring them with the function constructor, and changing the date into a timestamp and doing the same

I was still using map() though which changes the original array, so it suggested the spread operator to make a shallow copy of the array like 
```
[...calLog].map((e)=>{})
```

I spent some time learning about the spread operator, but in testing, map was still modifying the original array. It then suggested to use Object.assign to copy the array, so I tried:
```
let storedLog = Object.assign([], calLog);

storedLog.map((e)=>{...})
```

But then later learned that Object.assign only makes shallow copies of objects that are in arrays, so modifying the new array only using map or forEach still results in changing the originals. It then recommended to use JSON.stringify() and JSON.parse() to serialize the objects, but that would make them lose reference to the functions inside, so it then recommended to just define the functions outside of the object entirely.

The solution I came up with isn't as concise as I was wanting, but I couldn't find any other way that created a copy of the array, changed some of the properties, kept proper references, and didn't change anything in the original







