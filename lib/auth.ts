import { cookies } from 'next/headers'
import type { Session, User } from './types'

const SESSION_COOKIE = 'handshake-session'
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000 // 7 days

// These are mock implementations. In production, you'd use bcrypt and a real database
export async function hashPassword(password: string): Promise<string> {
  // In production: use bcrypt or argon2
  // import bcrypt from 'bcryptjs'
  // return bcrypt.hash(password, 10)
  
  // Mock for demo
  return `hashed_${Buffer.from(password).toString('base64')}`
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  // In production: use bcrypt.compare
  // return bcrypt.compare(password, hash)
  
  // Mock for demo
  return hash === `hashed_${Buffer.from(password).toString('base64')}`
}

export async function createSession(userId: string): Promise<string> {
  // In production: generate a secure session ID and store in database
  const sessionId = Buffer.from(`${userId}:${Date.now()}`).toString('base64')
  
  // Set secure, HTTP-only cookie
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION / 1000,
    path: '/',
  })
  
  return sessionId
}

export async function getSession(): Promise<Session | null> {
  try {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get(SESSION_COOKIE)?.value
    
    if (!sessionId) {
      return null
    }
    
    // In production: validate session from database
    // Check expiration, user still exists, etc.
    
    // Parse mock session
    const decoded = Buffer.from(sessionId, 'base64').toString('utf-8')
    const [userId] = decoded.split(':')
    
    return {
      id: sessionId,
      userId,
      expiresAt: new Date(Date.now() + SESSION_DURATION),
      createdAt: new Date(),
    }
  } catch (error) {
    return null
  }
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

export async function getCurrentUser(): Promise<User | null> {
  const session = await getSession()
  
  if (!session) {
    return null
  }
  
  // In production: fetch user from database
  // SELECT * FROM users WHERE id = $1
  
  // Mock user data for demo
  if (session.userId === 'demo-user-1') {
    return {
      id: 'demo-user-1',
      email: 'user@example.com',
      name: 'Demo User',
      createdAt: new Date(),
      updatedAt: new Date(),
      isAdmin: false,
    }
  }
  
  if (session.userId === 'admin-user-1') {
    return {
      id: 'admin-user-1',
      email: 'elvismanzi16@gmail.com',
      name: 'Admin User',
      createdAt: new Date(),
      updatedAt: new Date(),
      isAdmin: true,
    }
  }
  
  return null
}

export async function isAdmin(): Promise<boolean> {
  const user = await getCurrentUser()
  return user?.isAdmin ?? false
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
