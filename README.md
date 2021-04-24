
To install and run use the following commands
1. npm i
2. npx json-server --watch db.json 
3. start new terminal
4. node src/twitterStream.js 
5. input twitter credentials
6. npm run start 


Limitations:
I presumed 'Twitter V2 API for Node.js' would be straightforward to implement but like it and others there are limitations 
- CORS policy
- I struggled to refactor the code into react as the above happened through localhost as well as type errors from the backend (url-1 is not a constructor)
Something to do with how you factor promises and await  and how its asynchronous iteration.

Typescript ? 🤔
Yesterday I started with Typescript and soon when problem-solving objects that were nested in arrays nested in objects and typecasting with Axios got too much.
Plus NPM started having tree dependency issues, permission issues, global prefix was incorrect, trying to troubleshoot again 🙃. 
So is scrapped typescript and started fresh project today.(also trying to show off with incorporating parcel.js and GraphQL 🤦🏻‍♂️)

Project Overview

You have the twitterStream.js file :

- credentials entered through command line
- place data into array
- post (axios) to mock rest server (using json-server)\

This project would have taken half the time if I could figure out how to programmatically call a tweet array and pass it through traditional parent/child components with props.




How to process and display data :

- bulk / batches (how much will you need?)
- continuous (this a huge waste of memory and render performance) 
- continuous/batch but like an automated tap turning off and on to reduce speed (there's a.close(), but not an .open() so there library limitations here)


This stream loads a lot of information, so you can as I did create batches (limits memory use)
trade-off is that you then have to have a method to filter/limit tweets and might end up being wasteful

display new batch when reaching the bottom of page 
this can be optimized by smaller batches
Or even singularly.
I think this would cause a lot of jankness  (page position moves when it's extended) 

This loading when reaching the bottom can be optimized by rendering when the scroll position is at 80% ish (like Facebook) and keep the screen locked to the last anchor link

alternatively :
The screen doesn't move but scrolling triggers the next tweet in array to become visible and the last to become hidden. 
Kinda like a slot machine

alt-alt:
CSS can make smooth transitions of data by translate (with opacity) moving in and out of screen from scroll position

Organization: 
to-do
- remove all boilerplate
- replace twitterStream.js with a proper singular function components 
- command line is fun, but(I wanted to use text input for the credentials (alternative is .env)
- make Strings - Strings with regex 
- reusable parts like twitterStream.js, separating Axios calls, tweetList manipulation separate, parent child components passing props 


