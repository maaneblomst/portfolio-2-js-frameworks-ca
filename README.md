This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# JS Frameworks Course Assignment

## Brief

Create either a new React or Next.js app in this repo.

For the login functionality, use either a Wordpress installation with the <a href="https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/" target="_blank">JWT plugin from Module 3</a> installed, or a Strapi installation. Do not add either of these to your repo. Your API should remain a separate project. The markers will use their own installations when marking.

You can use either a REST or GraphQL API for the API calls.

---

## Level 1

Your app should have the following paths:

- "/"
- "/detail/:param"
- "/contact"
- "/login"
- "/admin"

The admin path won't appear in your navigation.

Use reusable components where appropriate and pay attention to how the components are arranged.

### Home

Find an API that returns at least:

- an array of items
- a single item retrieved by a parameter (id, name, slug, etc)

If you are using Next you can also hard-code json and return it from API routes created in `pages/api/*`.

You can use your own Wordpress or Strapi or any other API that you have created for these calls but it must be publically hosted - it must not be running on your localhost.

Display at least 2 properties from each result.

Each result should link to the detail page, passing a parameter in the URL.

### Detail

Retrieve the parameter from the URL and use it in an API call to fetch one item.

Display at least 3 properties from the item.

### Contact

Create a form with the following inputs and validation:

- First name - required, minimum 3 characters
- Last name - required, minimum 4 characters
- Email - required, must be in a valid email format
- Subject - required, this must be a select box with at least 2 options
- Message - required, minimum 10 characters.

### Login

Create a form with username/email and password fields. The inputs should have the necessary validation for a login form (not a registration form).

The form should make a login request to either a Wordpress API with the JWT plugin installed or a Strapi API. If the login is successful redirect the user to the admin route.

If the login is unsuccessful display a message above the form.

### Admin

This page will simply display an "Admin" heading.

---

## Level 2

Add a favourite button/icon component to each result on your home page. Clicking this button will toggle the result in/out of a favourites array.

Add a "/favourites" path to your routes. This page will display all the items currently in the favourites array.
