/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { prisma } from '@/feactures/core/lib/prisma.server';
import { generateUid } from '@/feactures/core/utils/generateUid';

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile: async (profile: any) => {
        const user = await prisma.user.findMany({
          where: { email: profile.email },
          take: 1,
        });

        if (!user[0]) {
          await prisma.user.create({
            data: {
              id: generateUid('user'),
              picture: profile.avatar_url,
              email: profile.email,
              firstName: profile.name,
            },
          });
        }

        return {
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          ...profile,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
