import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

declare module "next-auth/jwt" {
    interface JWT {
        id: UserId
        username?: string | null
    }
}
declare module "next-auth" {
    interface session {
        id: UserId
        username?: string | null
    }
}