import NextAuth, { DefaultSession, NextAuthConfig, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { usernameSchema } from "./utils/validate";
import prisma from "./libs/db/prisma";

// TODO: recheck role
declare module "next-auth" {
  interface User {
    role: string;
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    role: string;
  }
}

const config = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
      },

      async authorize(credentials) {
        // verify username format
        const username = credentials?.username as string;
        const verifyUsername = usernameSchema.safeParse({ username });
        if (!verifyUsername.success) {
          console.log(username, verifyUsername.error);
          return null;
        }

        // check username exist in database
        const user = await prisma.users.findFirst({
          where: {
            username: username,
          },
        });
        if (!user) {
          return null;
        }

        // convert to user type of next-auth
        const mappedUser: User = {
          id: String(user.id),
          name: user.username,
          email: user.email,
          role: user.role,
        };

        return mappedUser;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub ?? "";
        session.user.role = token.role as string;
      }
      return session;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
