# Real-Time-Bus-Tracker

## Description
This program shows the real time location of the bus on the map for any specified bus that currently runs on the MBTA line.

## How to Run
Step 1 : Once the html file is loaded, open up the developer console and press the "Show active bus" button to see the list of the ids of currently active bus that runs on the MBTA line. 

Step 2: Next type in your desired bus id you would like to track by setting the 'busid' value to one of the bus ids that are shown in the console. ex) busid = 'y1988';

Step 3: Click "Show live location of the bus" button to activate the tracking of the selected bus on the map.

## Roadmap of future improvements
Since current phase of the project requires user to open up the developer console to type in the busid value, it is difficult for non-developer users to run the program. I have tested out multiple different approaches to do a for loop to create a full list of the buttons for each active bus or to create a separate link for each active bus, but they have failed as I found out about the limitations.

Next step, as I familiarize myself more with Javascript, I would like to try creating an active window directly on the html page where the user can input values without having to open up the console to set the busid value to their desired value.

## License information
This program is licensed under the MIT License.
