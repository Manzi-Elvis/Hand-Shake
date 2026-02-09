'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LayoutDashboard as LayoutBoard, FileText, MessageSquare, Clock, CheckCircle, AlertCircle, ArrowRight, Plus } from 'lucide-react'

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome back, Demo</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your workspace today.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4">
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground h-auto py-6 flex-col gap-2">
          <Link href="/dashboard/boards/new">
            <LayoutBoard className="w-6 h-6" />
            <span>New Board</span>
          </Link>
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground h-auto py-6 flex-col gap-2">
          <Link href="/dashboard/documents/new">
            <FileText className="w-6 h-6" />
            <span>New Document</span>
          </Link>
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground h-auto py-6 flex-col gap-2">
          <Link href="/dashboard/chat">
            <MessageSquare className="w-6 h-6" />
            <span>Chat</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-auto py-6 flex-col gap-2 border-border/50 bg-transparent">
          <Plus className="w-6 h-6" />
          <span>Create</span>
        </Button>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Updates from your workspace</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  type: 'board',
                  title: 'Q1 Product Roadmap',
                  user: 'Sarah Chen',
                  action: 'updated a card in',
                  time: '2 hours ago',
                  avatar: 'SC',
                },
                {
                  type: 'document',
                  title: 'Design System Guidelines',
                  user: 'Alex Johnson',
                  action: 'commented on',
                  time: '4 hours ago',
                  avatar: 'AJ',
                },
                {
                  type: 'message',
                  title: 'product-team channel',
                  user: 'Mike Wong',
                  action: 'sent a message in',
                  time: '6 hours ago',
                  avatar: 'MW',
                },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-border/30 last:border-0">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{activity.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-muted-foreground">{activity.action}</span>{' '}
                      <span className="font-medium">{activity.title}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Active Tasks */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Active Tasks</CardTitle>
                <CardDescription>Assigned to you</CardDescription>
              </div>
              <Link href="/dashboard/boards">
                <Button variant="ghost" size="sm">
                  View all
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'Design new landing page', priority: 'high', due: 'Today', board: 'Design' },
                { title: 'Review PR #142', priority: 'medium', due: 'Tomorrow', board: 'Engineering' },
                {
                  title: 'Update marketing copy',
                  priority: 'low',
                  due: 'Friday',
                  board: 'Marketing',
                },
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 pb-4 border-b border-border/30 last:border-0"
                >
                  <input type="checkbox" className="mt-1" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{task.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          task.priority === 'high'
                            ? 'bg-red-500/20 text-red-400'
                            : task.priority === 'medium'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {task.priority}
                      </span>
                      <span className="text-xs text-muted-foreground">{task.board}</span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{task.due}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <LayoutBoard className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Boards</p>
                    <p className="text-xl font-bold">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Documents</p>
                    <p className="text-xl font-bold">24</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">Completed</p>
                    <p className="text-xl font-bold">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">In Progress</p>
                    <p className="text-xl font-bold">5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Members */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg">Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Sarah Chen', role: 'Designer', avatar: 'SC' },
                { name: 'Alex Johnson', role: 'Engineer', avatar: 'AJ' },
                { name: 'Mike Wong', role: 'Product', avatar: 'MW' },
                { name: 'Emma Davis', role: 'Marketing', avatar: 'ED' },
              ].map((member, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border-border/50 bg-card/50 border-yellow-500/30">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Upgrade available</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Premium features are waiting for your team.
                  </p>
                  <Button variant="link" size="sm" className="text-primary h-auto p-0 mt-2">
                    Learn more
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
