#Step and Note


## random number

Math.random()
From the Mozilla Developer Network documentation:

// Returns a random integer between min (include) and max (include)

Math.floor(Math.random() * (max - min + 1)) + min;
Useful examples:

// 0 -> 10
Math.floor(Math.random() * 11);

// 1 -> 10
Math.floor(Math.random() * 10) + 1;

// 5 -> 20
Math.floor(Math.random() * 16) + 5;

// -10 -> (-2)
Math.floor(Math.random() * 9) - 10;
