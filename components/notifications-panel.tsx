'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Bell,
  MessageSquare,
  AtSign,
  Edit,
  Share2,
  Trash2,
  CheckCircle,
  X,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface Notification {
  id: string
  type: 'mention' | 'assignment' | 'comment' | 'share'
  title: string
  description: string
  user: string
  avatar: string
  time: string
  read: boolean
  icon: React.ReactNode
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'mention',
    title: 'Sarah mentioned you',
    description: 'in #engineering: "Hey @you, can you review this design?"',
    user: 'Sarah Chen',
    avatar: 'SC',
    time: '5 min ago',
    read: false,
    icon: <AtSign className="w-5 h-5 text-blue-400" />,
  },
  {
    id: '2',
    type: 'assignment',
    title: 'You were assigned a task',
    description: 'Design new landing page - Q1 Product Roadmap',
    user: 'Alex Johnson',
    avatar: 'AJ',
    time: '2 hours ago',
    read: false,
    icon: <Edit className="w-5 h-5 text-green-400" />,
  },
  {
    id: '3',
    type: 'comment',
    title: 'New comment on your document',
    description: 'Design System Guidelines - "This looks great!"',
    user: 'Mike Wong',
    avatar: 'MW',
    time: '4 hours ago',
    read: true,
    icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
  },
  {
    id: '4',
    type: 'share',
    title: 'Document shared with you',
    description: 'Q1 Planning Notes - shared by Emma Davis',
    user: 'Emma Davis',
    avatar: 'ED',
    time: '1 day ago',
    read: true,
    icon: <Share2 className="w-5 h-5 text-pink-400" />,
  },
]

interface NotificationsPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const [items, setItems] = useState(notifications)
  const unreadCount = items.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setItems(items.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const deleteNotification = (id: string) => {
    setItems(items.filter((n) => n.id !== id))
  }

  const markAllAsRead = () => {
    setItems(items.map((n) => ({ ...n, read: true })))
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-30"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-4 top-20 z-40 w-96 max-h-96 overflow-hidden shadow-xl rounded-lg border border-border/50 bg-card/95 backdrop-blur flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50 bg-card/50">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            <h3 className="font-bold">Notifications</h3>
            {unreadCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
                {unreadCount}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Notifications */}
        <div className="overflow-y-auto flex-1">
          {items.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No notifications</p>
            </div>
          ) : (
            <div className="space-y-2 p-2">
              {items.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg cursor-pointer transition ${
                    notification.read
                      ? 'bg-secondary/10 hover:bg-secondary/20'
                      : 'bg-primary/10 hover:bg-primary/20'
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{notification.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {notification.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                        <Avatar className="h-4 w-4">
                          <AvatarFallback className="text-[8px]">
                            {notification.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <span>{notification.user}</span>
                        <span>•</span>
                        <span>{notification.time}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteNotification(notification.id)
                      }}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border/50 p-2 bg-card/50">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs text-muted-foreground hover:text-foreground"
              onClick={markAllAsRead}
            >
              <CheckCircle className="w-3 h-3 mr-1" />
              Mark all as read
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
