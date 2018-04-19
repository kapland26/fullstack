create-raect-app

Backend:
$ npm i express express-session massive passport passport-auth0 dotenv
    +Making Auth0: create new app, second card option
                    - Scroll down in settings to advanced, OAuth, OIDC conformant off

Database: 
On heroku - New app => Resources => add-ons => heroku postgress =>
    + Settings => copy and paste URI into env with ?ssl=true

Front-end:
npm i redux react-router-dom react-redux axios redux-promise-middleware
    + Make routes
    + Set up redux