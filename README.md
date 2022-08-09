# cha-ching

A virtual payment method between a web application and a customer/user to allow them to subscribe and verify that their subscription has been successful.

# Technologies

- Node.js Express server
- React client
- Stripe SDK
- Jest, supertest, and testing-library/react

## Developing

### Setting up Stripe

You need to create a [Stripe](https://stripe.com/) developer account (no need to give any bank info). This will give you the necessary tokens to run the app. The `Publishable key` is the `REACT_APP_PUBLIC_STRIPE_KEY` environment variable. The `Secret key` is the `SECRET_STRIPE_KEY` environment variable.

### Forking

Work off of a fork. When you are ready, make a pull request.

If you have conflicts that cannot be resolved in the github UI, manually resolve them by setting a new remote. Here, `upstream` is the name of the remote, but you can call it whatever you'd like.

```
git remote add upstream git@github.com:insightorchards/cha-ching.git
```

Run `git remote` and you should see `upstream` in the output list.

```
git fetch upstream
```

Now you will have the latest changes from the upstream.

Proceed with resolving conflicts with a rebase or merge, whichever you prefer.

## Deploying the Server

We deploy the app with [heroku](https://www.heroku.com). The front and back end are deployed separately. See [client README](./client/README.md#deploying-the-client) for instructions on how to deploy the client.

```
git push heroku main
```
