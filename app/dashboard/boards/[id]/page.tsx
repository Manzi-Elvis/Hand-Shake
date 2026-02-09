'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  MoreVertical,
  Plus,
  Filter,
  Settings,
  Users,
  Calendar,
  Flag,
} from 'lucide-react'

interface KanbanCard {
  id: string
  title: string
  priority: 'low' | 'medium' | 'high'
  assignees: string[]
  dueDate?: string
  description?: string
}

interface KanbanColumn {
  id: string
  title: string
  cards: KanbanCard[]
}

export default function BoardDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const columns: KanbanColumn[] = [
    {
      id: 'todo',
      title: 'To Do',
      cards: [
        {
          id: '1',
          title: 'Design landing page',
          priority: 'high',
          assignees: ['SC', 'ED'],
          dueDate: 'Today',
          description: 'Create new landing page design',
        },
        {
          id: '2',
          title: 'Update documentation',
          priority: 'medium',
          assignees: ['AJ'],
          dueDate: 'Friday',
        },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      cards: [
        {
          id: '3',
          title: 'Fix bug #142',
          priority: 'high',
          assignees: ['AJ', 'MW'],
          dueDate: 'Today',
        },
        {
          id: '4',
          title: 'Review design system',
          priority: 'medium',
          assignees: ['SC'],
          dueDate: 'Tomorrow',
        },
        {
          id: '5',
          title: 'API integration',
          priority: 'low',
          assignees: ['MW'],
        },
      ],
    },
    {
      id: 'review',
      title: 'In Review',
      cards: [
        {
          id: '6',
          title: 'Pull request #156',
          priority: 'high',
          assignees: ['AJ'],
          dueDate: 'Today',
        },
        {
          id: '7',
          title: 'Design review',
          priority: 'medium',
          assignees: ['SC', 'ED'],
        },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [
        {
          id: '8',
          title: 'Setup CI/CD pipeline',
          priority: 'high',
          assignees: ['MW'],
        },
        {
          id: '9',
          title: 'Database migration',
          priority: 'medium',
          assignees: ['AJ'],
        },
      ],
    },
  ]

  const avatarMap: Record<string, string> = {
    SC: { name: 'Sarah Chen', color: 'bg-blue-500' },
    AJ: { name: 'Alex Johnson', color: 'bg-green-500' },
    MW: { name: 'Mike Wong', color: 'bg-purple-500' },
    ED: { name: 'Emma Davis', color: 'bg-pink-500' },
    YO: { name: 'You', color: 'bg-cyan-500' },
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default:
        return ''
    }
  }

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Q1 Product Roadmap</h1>
          <p className="text-muted-foreground">Features and initiatives for Q1</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-border/50 bg-transparent">
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="border-border/50 bg-transparent">
            <Users className="w-4 h-4 mr-1" />
            Share
          </Button>
          <Button variant="outline" size="icon" className="border-border/50 bg-transparent">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Board */}
      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-min h-full">
          {columns.map((column) => (
            <div
              key={column.id}
              className="flex flex-col w-80 bg-card/30 rounded-lg border border-border/50"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <h2 className="font-bold text-sm">{column.title}</h2>
                <span className="text-xs text-muted-foreground bg-secondary/30 px-2 py-1 rounded">
                  {column.cards.length}
                </span>
              </div>

              {/* Cards */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {column.cards.map((card) => (
                  <Card
                    key={card.id}
                    className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition cursor-grab active:cursor-grabbing"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="font-medium text-sm leading-snug flex-1">
                          {card.title}
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 flex-shrink-0"
                        >
                          <MoreVertical className="w-3 h-3 text-muted-foreground" />
                        </Button>
                      </div>

                      {card.description && (
                        <p className="text-xs text-muted-foreground mb-3">
                          {card.description}
                        </p>
                      )}

                      {/* Card Meta */}
                      <div className="space-y-2">
                        {/* Priority & Due Date */}
                        <div className="flex items-center gap-2 text-xs">
                          <span className={`px-2 py-1 rounded border ${getPriorityColor(card.priority)}`}>
                            {card.priority}
                          </span>
                          {card.dueDate && (
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {card.dueDate}
                            </span>
                          )}
                        </div>

                        {/* Assignees */}
                        {card.assignees.length > 0 && (
                          <div className="flex items-center -space-x-2">
                            {card.assignees.map((assignee) => (
                              <Avatar key={assignee} className="h-6 w-6 border border-card">
                                <AvatarFallback className="text-[10px]">
                                  {assignee}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Add Card Button */}
              <div className="p-3 border-t border-border/50">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-border/50 text-muted-foreground hover:text-foreground bg-transparent"
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Add card
                </Button>
              </div>
            </div>
          ))}

          {/* Add Column */}
          <div className="w-80 flex-shrink-0">
            <Card className="border-border/50 bg-card/30 h-full flex items-center justify-center">
              <Button
                variant="outline"
                className="border-border/50 text-muted-foreground hover:text-foreground bg-transparent"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Column
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
