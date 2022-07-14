# Next.js Authentication APP

<p>
  <img src="https://i.ibb.co/h9fG4k8/Banner2.jpg" alt="Sublime's custom image" width=1500/>
</p>

### Dependencies

This project uses the following dependencies:

- `next.js` - v9.3 or above required for **API Routes** and new [**new data fetching method**](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).
- `react` - v16.8 or above required for **react hooks**.
- `react-dom` - v16.8 or above.
- `swr` - required for state management
- `mongodb` - may be replaced by `mongoose`.
- `passport`, `passport-local` - required for managing authentication
- `@material-ui/core`,`@material-ui/icons` - optional,**only if** you are using [materialize css](https://materializecss.com/getting-started.html) for Frontend.
- `next-connect` - recommended if you want to use Express/Connect middleware and easier method routing.
- `express-session`, `connect-mongo` - required for session, may be replaced with other session libraries such as `cookie-session` or `next-iron-session`.
- `bcryptjs` - optional, may be replaced with any password-hashing library. `argon2` recommended.
- `validator` - optional but recommended.
- `multer` - may be replaced with any middleware that handles `multipart/form-data`
- `cloudinary` - optional, **only if** you are using [Cloudinary](https://cloudinary.com) for image upload.
- `react-icons` - optional, **only if** you are using [React icons](https://react-icons.github.io/react-icons/) to add icons.

### Environment

The environment variables [will be inlined during build time](https://nextjs.org/docs#build-time-configuration) and thus should not be used in front-end codebase.

Required environmental variables in this project include:

- `process.env.MONGODB_URI` The MongoDB Connection String (with credentials)
- `process.env.MONGODB_DB` The name of the MongoDB database to be used.
- `process.env.CLOUDINARY_URL` (optional, Cloudinary **only**) Cloudinary environment variable for configuration. See [this](https://cloudinary.com/documentation/node_integration#configuration).