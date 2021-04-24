
To install and run use the following commands
1. npm i
2. npx json-server --watch db.json
2. node src/twitterStream.js
4. npm run start


Limitations:
I presumed 'Twitter V2 API for Node.js' would be straightforward to impliement but like it and others theres limitations 
- Cors policy
- i struggled to refactor the code into react as the above happened through localhost aswell as type errors from the backend ( url-1 is not a constructor)
something to do with how you factor promises and await  and how its asyncorous iteration.

typescript ? 🤔
Yesterday I started with Typescript and soon when problem solving objects that were nested in arrays nested in objects and typecasting with axios got too much .
Plus NPM started having tree dependacy issues, permission issues , global prefix was incorrect , trying to troubleshoot again 🙃. 
so is scrapped typescript and started fresh project today.( also trying to show off with incorporating parcel.js and graphql 🤦🏻‍♂️ )

Project Overview

You have the twitterStream.js file :

- credentials entered through command line
- place data into array
- post (axios) to mock rest server ( using json-server)\

This project would have taken half the time if i could figure out how to programatically call tweet array and pass it through traditional parent/child components with props.




how to process and display data :

- bulk / batches ( how much will you need?)
- continuous ( this a huge waste of memory and render performance) 
- continuous/batch but like an automated tap turning off and on to reduce speed ( theres a .close(), but not an .open() so there library limitations here )


This stream loads alot of information so you can as i did create batches ( limits memory use)
tradeoff is that you then have to have a method to fitler/limit tweets and might end up being wasteful

display new bactch when reaching the bottom of page 
this can be optimised by smaller batches
or even singularily.
I think this would cause alot of jankness  (page position moves when its extended) 

This loading when reaching the bottom can be optimised by rendereing when the scroll position is at 80% ish (like facebook) and keep the scren locked to the last anchor link

alternatively :
the screen doesnt move but scolling triggeres the next tweet in array to become visible and the last to become hidden . 
kinda like a slot machine

alt-alt:
css can make smooth transitions of data by translate ( with opacity) moving in and out of screen from scroll position

Organisation: 
to-do
- remove all boilerplate
- replace twitterStream.js with a proper singular function components 
- command line is fun but i wanted to use text input for the credentials ( alternative is .env)
- make Strings - Strings with regex 
- reusable parts like twitterStream.js , seperating Axios calls, tweetList manipulation seperate, parent child components passing props 
