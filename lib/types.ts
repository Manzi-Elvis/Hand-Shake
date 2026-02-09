// User types
export type UserRole = 'owner' | 'admin' | 'member' | 'guest'

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
  isAdmin: boolean
}

export interface Organization {
  id: string
  name: string
  slug: string
  logo?: string
  description?: string
  ownerId: string
  createdAt: Date
  updatedAt: Date
}

export interface OrganizationMember {
  id: string
  organizationId: string
  userId: string
  role: UserRole
  joinedAt: Date
}

// Board types
export interface Board {
  id: string
  organizationId: string
  name: string
  description?: string
  icon?: string
  createdBy: string
  createdAt: Date
  updatedAt: Date
}

export interface BoardColumn {
  id: string
  boardId: string
  title: string
  position: number
  createdAt: Date
}

export interface BoardCard {
  id: string
  columnId: string
  title: string
  description?: string
  position: number
  assignees: string[]
  priority: 'low' | 'medium' | 'high'
  dueDate?: Date
  createdAt: Date
  updatedAt: Date
}

// Document types
export interface Document {
  id: string
  organizationId: string
  title: string
  content: string
  createdBy: string
  createdAt: Date
  updatedAt: Date
  lastEditedBy?: string
}

// Chat types
export interface Channel {
  id: string
  organizationId: string
  name: string
  description?: string
  isPrivate: boolean
  createdAt: Date
}

export interface Message {
  id: string
  channelId: string
  userId: string
  content: string
  createdAt: Date
  updatedAt: Date
  reactions?: Record<string, string[]>
}

// Session types
export interface Session {
  id: string
  userId: string
  expiresAt: Date
  createdAt: Date
}

// Notification types
export type NotificationType = 'mention' | 'assignment' | 'comment' | 'invite'

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  description?: string
  read: boolean
  createdAt: Date
  relatedId?: string
}
