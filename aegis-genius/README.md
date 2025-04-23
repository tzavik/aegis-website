# Aegis Genius

Aegis Genius is an AI-powered insurance helper designed to assist users with their insurance-related queries. This full-stack web application utilizes a modern tech stack to provide a seamless user experience.

## Tech Stack

- **Frontend**: Next.js (React) with Tailwind CSS
- **Authentication**: NextAuth.js (Google OAuth + email/password)
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Chatbot**: OpenAI Agent SDK
- **Deployment**: Vercel (frontend), Heroku or Render (backend)

## Project Structure

```
/aegis-genius
├── /components
│   ├── Header.tsx
│   ├── ChatBox.tsx
│   └── ArticleCard.tsx
├── /lib
│   ├── mongodb.ts
│   └── agent.ts
├── /models
│   ├── User.ts
│   └── ChatLog.ts
├── /pages
│   ├── index.tsx
│   ├── seo.tsx
│   ├── profile.tsx
│   └── /api
│       ├── /auth
│       │   └── [...nextauth].ts
│       ├── chat.ts
│       └── articles.ts
├── /public
│   └── favicon.ico
├── /styles
│   └── globals.css
├── .env.local
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── .github
│   └── /workflows
│       └── ci.yml
└── README.md
```

## Features

1. **User Authentication**: Users can sign in using Google OAuth or email/password.
2. **Chat Interface**: Users can interact with an AI insurance agent to get answers to their insurance-related questions.
3. **Profile Management**: Users can view their profile information and past chat logs.
4. **SEO Articles**: The application includes a page for displaying SEO-optimized articles related to insurance.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- A Google Cloud project for OAuth

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/aegis-genius.git
   cd aegis-genius
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Testing

To run tests, use:
```
npm test
```

## CI/CD

This project includes a GitHub Actions workflow for continuous integration. The configuration can be found in `.github/workflows/ci.yml`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.