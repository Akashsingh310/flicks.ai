'use client';

import { db } from '@/configs/db';
import { Users } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react';

function Provider({ children }) {
    const { user } = useUser();

    useEffect(() => {
        const checkAndAddUser = async () => {
            if (!user?.primaryEmailAddress?.emailAddress) return;

            try {
                // Check if user already exists
                const result = await db
                    .select()
                    .from(Users)
                    .where(eq(Users.email, user.primaryEmailAddress.emailAddress));

                if (!result[0]) {
                    // Insert new user into the database
                    await db.insert(Users).values({
                        name: user.fullName || 'Anonymous',
                        email: user.primaryEmailAddress.emailAddress,
                        imageUrl: user.imageUrl || '',
                    });
                }
            } catch (error) {
                console.error('Error checking or adding user:', error);
            }
        };

        if (user) {
            checkAndAddUser();
        }
    }, [user]);

    return <div>{children}</div>;
}

export default Provider;
