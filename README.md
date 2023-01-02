PacMen

This is an exercise developed during MIT xPro Professional Certificate in Coding: Women's Cohort September 2022. 

The goal of this exercise is to fetch live data from an API and use it to animate bus stops on a map. I implemented a function to update the Route 1 of MBTA in real time every 15 seconds. Each bus is shown with their bus number and will animate on the map with their current location. 

How to Run 
Open the map and watch as the bus markers will update every 15 seconds to show the bus current location and movement along Route 1.

To install this project, follow these steps:

1. Download or clone the project
2. Add it to your code editor tool
3. Create your unique API Token on MapBox and update the mapboxgl.accessToken value in mapanimation.js
3. Open index.html

Roadmap 
1. The bus route will show all markers and highlight the current location with the bus number at the location above.
2. Red marker for no seats available and green for seats available
3. Bus markers will be in arrow form to show where they are headed along the route. 

License information 

MIT License

Copyright (c) 2022 Alexandra Gross

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Files 

index.html
mapanimation.js
styles.css