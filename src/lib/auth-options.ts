import NextAuth, {
  type NextAuthOptions,
  type Session,
  type Account,
  type Profile,
  type User as NextAuthUser,
} from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

// export a reusable authOptions (do NOT export from the route file)
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        if (!credentials?.email || !credentials?.password) return null;

        const dbUser = await User.findOne({ email: credentials.email }).lean();
        if (!dbUser) return null;

        const ok = await bcrypt.compare(credentials.password, dbUser.passwordHash);
        if (!ok) return null;

        const appUser: NextAuthUser = {
          id: String(dbUser._id),
          email: dbUser.email,
          name: dbUser.name,
          role: dbUser.role as "ADMIN" | "USER",
        };
        return appUser;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt(params: {
      token: JWT;
      user?: AdapterUser | NextAuthUser | null;
      account: Account | null;
      profile?: Profile;
      trigger?: "signIn" | "signUp" | "update";
      isNewUser?: boolean;
      session?: unknown;
    }): Promise<JWT> {
      const { token, user } = params;
      if (user && "role" in user && user.role) {
        token.role = user.role as "ADMIN" | "USER";
      }
      return token;
    },
    async session(params: {
      session: Session;
      token: JWT;
      user: AdapterUser | NextAuthUser;
      newSession?: Session;
      trigger?: "update";
    }): Promise<Session> {
      const { session, token } = params;
      if (session.user) {
        session.user.role = (token.role as "ADMIN" | "USER") ?? "USER";
      }
      return session;
    },
  },
  pages: { signIn: "/login" },
};
