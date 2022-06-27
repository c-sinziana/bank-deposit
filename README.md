# Bank Deposit

A responsive web application that allows the user to withdraw and deposit virtual money. 

Used technologies were React with TS (TypeScript), HTML and CSS.

## Setup guide:

`node` and `npm` are needed to be installed globally on the machine with the cloned project.  

Installation:

`npm install`  

To start the server:

`npm start`   

## Personal notes:

This project helped me understand Typescript.

In order to create the application, I've used a reducer in order to conditionally render the actions that can be performed by the user (withdraw, deposit and bankrupt).

I've created separate interfaces for the actions, where I have defined their type and payload. 
I've also created an enum for each type of action.

The most challenging part was understanding how to render the interfaces, and I have done that through dispatch.