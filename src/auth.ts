import prisma from "./libs/prisma";
import { verifyPassword } from "./utils/crypto";
import { userSignInSchema } from "./utils/validate";
import { AuthOptions, DefaultSession, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

const auth: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials) {
        // verify username format
        const username = credentials?.username as string;
        const password = credentials?.password as string;

        const result = userSignInSchema.safeParse({
          username,
          password,
        });
        if (!result.success) {
          console.log(username, result.error);
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

        const verifyPasswordResult = await verifyPassword(
          password,
          user.hashed_password
        );
        if (!verifyPasswordResult) {
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
  },
  pages: {
    signIn: "/signin",
  },
};

export default auth;
