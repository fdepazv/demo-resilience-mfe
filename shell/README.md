## Running the app

```bash
npm run i
npm run build
npm run start
```

## Notes

### Important
Make sure that after installing, building and running the app, open it on the following url:  http://local.telus.com:3000/. If localhost:3000 is used, it will fail with a CORS error.

### Running local environment
- See the `webpack.config.js` file and find the `ModuleFederationPlugin`
- Identify the `remotes` property and for the `pers_api_mfe_lite` key, change the url value to `http://local.telus.com:4321/remoteEntry.js`

### Running staging environemnt
- See the `webpack.config.js` file and find the `ModuleFederationPlugin`
- Identify the `remotes` property and for the `pers_api_mfe_lite` key, change the url value to `https://www.wcstage.telus.com/pers-api-mfe-lite/mfe/remoteEntry.js`
