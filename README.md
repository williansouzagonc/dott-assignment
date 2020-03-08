# dott-assignment

### Requirements

-   Node >= v12
-   Typescript >= v3.8.3

### Getting started

-   Install dependencies: `npm install`
-   Run tests: `npm test`
-   Build application: `npm build`
-   Run for development: `npm start`
-   Fix lint issues: `npm lint`

### Technologies

-   Platform: Node.js
-   Programming language: Javascript (ES2017) / Typescript

## The assignment

-   Task: There is given a rectangular bitmap of size n*m. Each pixel of the bitmap is either white or
    black, but at least one is white. The pixel in i-th line and j-th column is called the pixel (i,j). The
    distance between two pixels p1=(i1,j1) and p2=(i2,j2) is defined as d(p1,p2)=|i1-i2|+|j1-j2|.
    Write a program which:
    - reads the description of the bitmap from the standard input;
    - for each pixel, computes the distance to the nearest white;
    - writes the results to the standard output.

## Use case

-   Input

    1  
    3 4  
    0001  
    0011  
    0110  

-   Output

    3 2 1 0  
    2 1 0 0  
    1 0 0 1  