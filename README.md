# cha-ching

A virtual payment method between a web application and a customer/user to allow them to subscribe and verify that their subscription has been successful.

# Technologies

- Node.js Express server
- React client
- Stripe SDK
- Jest, supertest, and testing-library/react

# Developing

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

## Deploying the App

We deploy the app with [heroku](https://www.heroku.com). The front and back end are deployed separately.

Add heroku remotes

```
git remote add heroku https://git.heroku.com/io-cha-ching.git
git remote add heroku-client https://git.heroku.com/io-cha-ching-client.git
```

### Time to deploy

Make sure to deploy from the upstream `main`, rather than your forked `main`. After merging your PR, fetch the upstream and checkout to it: `git fetch upstream && git checkout upstream/main`. Then run your deploy commands from this detached head state.

#### Deploy the client

```
git subtree push --prefix client heroku-client main
```

If the branch tip is behind the remote, you may have to [force push](https://stackoverflow.com/a/65733058).

```
git push heroku-client `git subtree split --prefix client main`:main --force
```

#### Deploy the server

```
git push heroku main

```

#### Deployed site
https://flora-denbo.herokuapp.com/ 

# Current UI

##### Landing page
![image](https://user-images.githubusercontent.com/50315144/202252727-68a6f8ac-5ff0-4283-864c-877dcac5de76.png)

##### About page
![image](https://user-images.githubusercontent.com/50315144/202252936-45e571d6-da29-4861-a442-83104f02c121.png)

##### Subscription selection page
![image](https://user-images.githubusercontent.com/50315144/202252302-87964e24-d07b-40fb-a77a-5fe9ca040d90.png)

##### Card payment page
![image](https://user-images.githubusercontent.com/50315144/202253411-1df34dc1-0394-4673-9d83-9d326c55cd47.png)

##### Successful payment stored in Stripe account
![image](https://user-images.githubusercontent.com/50315144/202254653-e15bd253-e6fb-4c37-b24f-fbf0b5e91c0c.png)
