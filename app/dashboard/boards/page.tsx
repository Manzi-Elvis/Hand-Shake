'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { LayoutDashboard as LayoutBoard, Plus, Search, Grid, List, MoreVertical } from 'lucide-react'

export default function BoardsPage() {
  const boards = [
    {
      id: '1',
      name: 'Q1 Product Roadmap',
      description: 'Features and initiatives for Q1',
      icon: '🚀',
      cards: 24,
      members: 5,
    },
    {
      id: '2',
      name: 'Design System',
      description: 'UI components and design tokens',
      icon: '🎨',
      cards: 18,
      members: 3,
    },
    {
      id: '3',
      name: 'Bug Tracker',
      description: 'Reported issues and fixes',
      icon: '🐛',
      cards: 12,
      members: 4,
    },
    {
      id: '4',
      name: 'Marketing Campaign',
      description: 'Q1 marketing initiatives',
      icon: '📢',
      cards: 8,
      members: 6,
    },
    {
      id: '5',
      name: 'Engineering Sprints',
      description: 'Current sprint tasks',
      icon: '⚙️',
      cards: 32,
      members: 8,
    },
    {
      id: '6',
      name: 'Customer Support',
      description: 'Support tickets and requests',
      icon: '💬',
      cards: 15,
      members: 4,
    },
    {
      id: '7',
      name: 'Events & Conferences',
      description: 'Team events planning',
      icon: '🎯',
      cards: 6,
      members: 3,
    },
    {
      id: '8',
      name: 'Hiring Board',
      description: 'Open positions and candidates',
      icon: '👥',
      cards: 10,
      members: 2,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <LayoutBoard className="w-8 h-8" />
            Boards
          </h1>
          <p className="text-muted-foreground">Kanban boards for task management</p>
        </div>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/dashboard/boards/new">
            <Plus className="w-4 h-4 mr-2" />
            New Board
          </Link>
        </Button>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative hidden md:block max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search boards..."
            className="pl-10 bg-input border-border/30"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="border-border/50 bg-transparent">
            <Grid className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="border-border/50 bg-transparent">
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Boards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards.map((board) => (
          <Link key={board.id} href={`/dashboard/boards/${board.id}`}>
            <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-border/80 transition cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{board.icon}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={(e) => {
                      e.preventDefault()
                    }}
                  >
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>

                <h3 className="font-bold text-lg mb-1">{board.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{board.description}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{board.cards} cards</span>
                  <span>{board.members} members</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}

        {/* New Board CTA */}
        <Link href="/dashboard/boards/new">
          <Card className="border-border/50 bg-card/30 backdrop-blur hover:border-border/80 transition cursor-pointer h-full flex items-center justify-center">
            <CardContent className="p-6 text-center">
              <Plus className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="font-medium">Create New Board</p>
              <p className="text-xs text-muted-foreground mt-1">
                Build a new Kanban board
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
