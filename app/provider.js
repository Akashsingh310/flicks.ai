'use client'

import { db } from '@/configs/db';
import { User } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React,{ useEffect } from 'react'

function provider({children}) {

  const { user }=useUser();

  useEffect(()=>{
    user && isNewUser();
  },[user])

  const isNewUser=async()=>{
    const result = await db.select().from(User)
    .where(eq(User.email,user?.primaryEmailAddress?.emailAddress))

    if(!result[0])
    {
        await db.insert(User).values({
            name:user.fullName,
            email:user?.primaryEmailAddress?.emailAddress,
            imageUrl:user?.imageUrl
        })
    }
  }
  return (
    <div>{children}</div>
  )
}

export default provider