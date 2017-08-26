Event registration system for tkt-akat.

https://tkt-akat-events.herokuapp.com/

#### Running locally
- .env file with the mongodb uri at the root
- `npm run install-dev`
- `npm start`

#### Deploying to Heroku
- `npm run build`
- commit client/build
- push to Heroku

#### TODO:
- removing participants (front)
- authentication & login
    - participants get a password/token in email so they can edit or cancel their registration
- email:
    - email to participant when they register
    - email to participant who gets to attend from the queue when someone cancels
    - verify email after sign up
- better date picker for event form
- ending time for events
- update participant amount after registration
- figure out a better way to deploy
