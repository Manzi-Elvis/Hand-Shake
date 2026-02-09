'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  MessageSquare,
  Plus,
  Search,
  Hash,
  Lock,
  Send,
  Smile,
  Paperclip,
} from 'lucide-react'

export default function ChatPage() {
  const [selectedChannel, setSelectedChannel] = useState('general')
  const [message, setMessage] = useState('')

  const channels = [
    { id: 'general', name: 'general', unread: 0, type: 'public' },
    { id: 'engineering', name: 'engineering', unread: 3, type: 'public' },
    { id: 'design', name: 'design', unread: 0, type: 'public' },
    { id: 'product', name: 'product', unread: 0, type: 'public' },
    { id: 'marketing', name: 'marketing', unread: 2, type: 'public' },
    { id: 'random', name: 'random', unread: 0, type: 'public' },
  ]

  const directMessages = [
    { id: 'user1', name: 'Sarah Chen', avatar: 'SC', unread: 1, online: true },
    { id: 'user2', name: 'Alex Johnson', avatar: 'AJ', unread: 0, online: true },
    { id: 'user3', name: 'Mike Wong', avatar: 'MW', unread: 0, online: false },
    { id: 'user4', name: 'Emma Davis', avatar: 'ED', unread: 0, online: true },
  ]

  const messages = [
    {
      id: '1',
      user: 'Sarah Chen',
      avatar: 'SC',
      text: 'Hey everyone! Just pushed the new design system updates',
      time: '10:30 AM',
    },
    {
      id: '2',
      user: 'Alex Johnson',
      avatar: 'AJ',
      text: 'Great! I\'ll review them in the PR',
      time: '10:32 AM',
    },
    {
      id: '3',
      user: 'Mike Wong',
      avatar: 'MW',
      text: 'Looks good from my end. Ready to ship! 🚀',
      time: '10:35 AM',
    },
    {
      id: '4',
      user: 'You',
      avatar: 'YO',
      text: 'Awesome work team! Let\'s deploy this week.',
      time: '10:38 AM',
    },
  ]

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 border-r border-border/50 flex flex-col bg-card/30">
        {/* Search */}
        <div className="p-4 border-b border-border/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 h-8 bg-input border-border/30 text-sm"
            />
          </div>
        </div>

        {/* Channels */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Channels</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>

            <nav className="space-y-1">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                    selectedChannel === channel.id
                      ? 'bg-secondary text-primary font-medium'
                      : 'text-muted-foreground hover:bg-secondary/50'
                  }`}
                >
                  <Hash className="w-4 h-4" />
                  <span className="flex-1 text-left">{channel.name}</span>
                  {channel.unread > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs rounded-full px-1.5">
                      {channel.unread}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Direct Messages */}
          <div className="p-4 border-t border-border/50">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">Direct</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>

            <nav className="space-y-1">
              {directMessages.map((dm) => (
                <button
                  key={dm.id}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-secondary/50 transition"
                >
                  <div className="relative">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-[10px]">{dm.avatar}</AvatarFallback>
                    </Avatar>
                    {dm.online && (
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-card" />
                    )}
                  </div>
                  <span className="flex-1 text-left text-muted-foreground">{dm.name}</span>
                  {dm.unread > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs rounded-full px-1.5">
                      {dm.unread}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-card/30 rounded-lg border border-border/50 overflow-hidden">
        {/* Channel Header */}
        <div className="border-b border-border/50 p-4 flex items-center justify-between bg-card/50">
          <div>
            <h2 className="font-bold text-lg flex items-center gap-2">
              <Hash className="w-5 h-5 text-muted-foreground" />
              {selectedChannel}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              General discussion for the team
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-3">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback className="text-xs">{msg.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-medium text-sm">{msg.user}</span>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <p className="text-sm text-foreground mt-1">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t border-border/50 p-4 bg-card/50">
          <div className="flex items-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <Paperclip className="w-4 h-4" />
            </Button>

            <div className="flex-1">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="bg-input border-border/30"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    setMessage('')
                  }
                }}
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <Smile className="w-4 h-4" />
            </Button>

            <Button
              size="icon"
              className="h-8 w-8 bg-primary hover:bg-primary/90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
