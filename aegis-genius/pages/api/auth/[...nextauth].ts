import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '../../../lib/mongodb';
import User from '../../../models/User';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });

        if (user && user.password === credentials.password) {
          return { id: user._id, name: user.name, email: user.email };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      await connectToDatabase();
      if (account.provider === 'google') {
        const existingUser = await User.findOne({ email: profile.email });
        if (!existingUser) {
          const newUser = new User({
            email: profile.email,
            name: profile.name,
            lastLogin: new Date(),
          });
          await newUser.save();
        }
      }
      return true;
    },
    async session({ session, user }) {
      const dbUser = await User.findById(user.id);
      session.user.lastLogin = dbUser.lastLogin;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
});