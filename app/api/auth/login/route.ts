import { createSession, getCurrentUser } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Mock authentication
    // In production: verify password hash from database
    let userId = ''
    if (email === 'elvismanzi16@gmail.com') {
      userId = 'admin-user-1'
    } else if (email === 'demo@example.com') {
      userId = 'demo-user-1'
    } else {
      // For demo, accept any email
      userId = `user-${Date.now()}`
    }

    // Create session
    await createSession(userId)

    // Get user data
    const user = await getCurrentUser()

    return NextResponse.json(
      {
        success: true,
        user,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}
