# WellnessWise

**WellnessWise** is a responsive web application designed to enhance wellness and health. The platform connects users with wellness experts, offers personalized advice, and provides interactive features such as video conferencing and wellness resources.

## Features
- **Expert Connections**: Book sessions and interact with wellness experts through video conferencing.
- **Personalized Advice**: Receive tailored wellness recommendations based on user profiles and goals.
- **Responsive Design**: Enjoy a user-friendly and accessible interface optimized for various devices.
- **Seamless Registration**: Easily register with a two-step process for basic and additional profile information.
- **Wellness Resources**: Access articles, guides, and tools to support your wellness journey.

## Tools Used

### Front-End
- **React**: For building the dynamic user interface.
- **React Router DOM**: For managing application navigation and routing.
- **Axios**: For making HTTP requests to the backend.
- **Sass**: For advanced styling and responsiveness.
- **Prop-Types**: For type-checking React component props.
- **Nutritionix API**: For integrating nutrition-related services.
- **Nodemailer**: For sending emails from the application.
- **Crypto**: For handling cryptographic functions.
- **React Testing Library**: For testing React components.
- **Web Vitals**: For measuring and analyzing performance metrics.
- **Jitsi Meet**: For integrating video conferencing capabilities.

### Back-End
- **Express**: For handling routing and API requests.
- **Mongoose**: For managing data interactions with MongoDB.
- **Bcrypt**: For hashing passwords and ensuring security.
- **Body-Parser**: For parsing incoming request bodies.
- **Cors**: For enabling cross-origin resource sharing.
- **Dotenv**: For managing environment variables.
- **Env-Cmd**: For loading environment variables from `.env` files.
- **JsonWebToken**: For handling JWT authentication.
- **Nodemailer**: For sending emails from the server.
- **Nodemon**: For automatically restarting the server during development.
- **Node-Dev**: For enhancing the development experience with additional features.

## Installation

### Front-End

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wellnesswise-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd wellnesswise-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Back-End

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wellnesswise-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd wellnesswise-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Front-End

1. Start the development server:
   ```bash
   npm start
   ```

### Back-End

1. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root of the backend project with the following variables:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

## Testing

To run tests for the front-end:

```bash
npm test
```

To run tests for the back-end, ensure you have the necessary test configurations and run:

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Jitsi Meet](https://meet.jit.si) for video conferencing integration.

For more information or any questions, please reach out via [email](mailto:meharaziz.1614@gmail.com).
```