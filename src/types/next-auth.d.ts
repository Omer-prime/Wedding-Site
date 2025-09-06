import "next-auth";
import "next-auth/jwt";
import "next-auth/adapters";

declare module "next-auth" {
  interface User {
    role?: "ADMIN" | "USER";
  }
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      role?: "ADMIN" | "USER";
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "ADMIN" | "USER";
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    role?: "ADMIN" | "USER";
  }
}
