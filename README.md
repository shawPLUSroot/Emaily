# Emaily

It's currently running on https://thawing-mountain-65623.herokuapp.com/ 

This is a web application built in React and Node.js.

This project allows startup owners to collect feedback via email responses and get a tabulation of results. User flow: 
1. User signs in with Google OAuth
2. Pays for credits using Stripe 
3. Creates survey 
4. Fill in the information of survey and the recipients list (emails split by a comma ',') 
5. Emails sent to list 
6. Recipients click link in email to give feedback 
7. Users can see the collected feedback on their Dashboard

# Build in Local Environment


> git clone https://github.com/shawPLUSroot/Emaily.git

Make sure you are currently inside the directory where the project you just cloned.
Now you need to create a new file inside the config folder named dev.js and it should be like this:

module.exports = {
    googleClientID : 'XXX',
    googleClientSecert: 'XXX',
    mongoURI: 'XXX',
    stripePublishableKey: 'XXXX',
    stripeSecretKey: 'XXX',
    sendGridKey:'XXX',
    redirectDomain: "http:localhost:3000"
};

You should fill in the secert and key of your own.

> npm run dev
