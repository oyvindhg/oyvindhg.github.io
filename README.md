# React app on Github pages

## Requirements

- Typescript (3.8.3 +)
- Yarn (1.22.4 +)
- Node (12.16.2 +)

## Development

#### `yarn install`

Install all the packages.

#### `yarn start`

Runs the app in the development mode.
View in your browser at [http://localhost:3000](http://localhost:3000)

The page will reload if you make edits, and you can see lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode. Learn more about running tests [here](https://facebook.github.io/create-react-app/docs/running-tests)


## Deployment

1) Make sure the publishing source is set to the `gh-pages` branch as described [here]https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

2) Edit `package.json` to set the correct project `ǹame` and `homepage`

#### Custom wdomain

To use a custom domain, fill in the `cusom domain` field under the project setting in Github, and create an `A` record at the DNS provider.

More details [here](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)

#### `yarn build`

Builds the app for production to the `build` folder.

#### `yarn deploy`

Runs `yarn build`, then deploys.
