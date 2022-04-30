# IndyWise Web App

## Tech Stack

All the code is done using typescript.

- React
- Redux
- Styled Components
- Jest + React-testing-library + Snapshots
- Cypress + Cucumber + Cypress-Visual-Regression
- Graphql(Aws AppSync)

## Setup Instructions

Run `yarn prestart`
Run `yarn`.

## Running Tests

To run unit tests, use `yarn test`.

To setup a snapshot for cypress run `yarn cypress:snapshot`.

To run cypress tests run `yarn cypress`.

### TO start web app

`yarn workspace @indywise/app-web start`

### Running Build Files Locally (Check Hosting Local)

1.  `npx react-scripts build` and then
2.  `npm i -g serve ` && `serve -s build -l 4000` (inside build folder)

### Cypress Test in detail

1. To create Snapshot
   `yarn start`
   Open another terminal -
   `yarn workspace @indywise/app-web cy:snapshot`

2. After Creating snapshot, save the snapshots -
   git add .
   git commit -m "test: snapshot taken"

3. Then you can run -
   `yarn test`
   or you can do
   `git push origin <branch-name>`

### To push without cypress test

--no-verify

## Containers

1. Login & Register - register, verify, typeOfProfile, login, changePassword, ForgotPssword
2. KYC
3. MenteeList
4. MentorCard

## AWS APPSYNC

setup done by username: frontend

### To update on frontend

- `npm install -g @aws-amplify/cli`
- `amplify codegen`
