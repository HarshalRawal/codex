// types.ts
export interface User {
    id: string
    name: string | null     // ✅ match Prisma
    email: string
    image: string | null    // ✅ match Prisma
    role: string
    createdAt: Date
    updatedAt: Date
  }
  
  export interface Project {
    id: string
    title: string
    description: string | null
    template: string
    createdAt: Date
    updatedAt: Date
    userId: string
    user: User
    Starmark: { isMarked: boolean }[]
  }
  