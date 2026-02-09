'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  BarChart3,
  Users,
  Building2,
  TrendingUp,
  AlertTriangle,
  Activity,
  Server,
  Shield,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminPanel() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Shield className="w-8 h-8 text-primary" />
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          System overview, user management, and analytics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-3xl font-bold mt-2">2,847</p>
              </div>
              <Users className="w-10 h-10 text-primary/50" />
            </div>
            <p className="text-xs text-green-500 mt-3">+124 this month</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Organizations</p>
                <p className="text-3xl font-bold mt-2">342</p>
              </div>
              <Building2 className="w-10 h-10 text-primary/50" />
            </div>
            <p className="text-xs text-green-500 mt-3">+18 this week</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Sessions</p>
                <p className="text-3xl font-bold mt-2">584</p>
              </div>
              <Activity className="w-10 h-10 text-primary/50" />
            </div>
            <p className="text-xs text-muted-foreground mt-3">Real-time</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">System Health</p>
                <p className="text-3xl font-bold mt-2">99.9%</p>
              </div>
              <Zap className="w-10 h-10 text-green-500/50" />
            </div>
            <p className="text-xs text-green-500 mt-3">Healthy</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Growth Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                User Growth
              </CardTitle>
              <CardDescription>Monthly signups and activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end gap-2">
                {[65, 78, 82, 71, 88, 92, 85, 88, 92, 95, 98, 102].map((value, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t opacity-70 hover:opacity-100 transition"
                    style={{ height: `${(value / 102) * 100}%` }}
                    title={`${value}%`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-4">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dec</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Users */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
              <CardDescription>Latest account registrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: 'Jessica Taylor',
                  email: 'jessica.taylor@company.com',
                  date: '2 hours ago',
                  org: 'Taylor & Co',
                },
                {
                  name: 'David Martinez',
                  email: 'david.m@startup.io',
                  date: '5 hours ago',
                  org: 'StartupIO',
                },
                {
                  name: 'Lisa Anderson',
                  email: 'lisa@techcorp.com',
                  date: '1 day ago',
                  org: 'TechCorp',
                },
              ].map((user, i) => (
                <div key={i} className="flex items-start justify-between pb-4 border-b border-border/30 last:border-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{user.org}</p>
                    <p className="text-xs text-muted-foreground mt-1">{user.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* System Events */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>System Events</CardTitle>
              <CardDescription>Recent system-wide activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { type: 'deploy', msg: 'v2.4.1 deployed to production', time: '3 hours ago' },
                { type: 'alert', msg: 'Memory usage spike detected (78%)', time: '5 hours ago' },
                { type: 'maintenance', msg: 'Database backup completed', time: '12 hours ago' },
                { type: 'deploy', msg: 'v2.4.0 released', time: '1 day ago' },
              ].map((event, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-border/30 last:border-0">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      event.type === 'alert'
                        ? 'bg-red-500'
                        : event.type === 'deploy'
                          ? 'bg-green-500'
                          : 'bg-blue-500'
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm">{event.msg}</p>
                    <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Server Status */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                Server Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'API Server', status: 'online', uptime: '99.99%' },
                { name: 'Database', status: 'online', uptime: '100%' },
                { name: 'Cache (Redis)', status: 'online', uptime: '99.95%' },
                { name: 'Message Queue', status: 'online', uptime: '99.98%' },
              ].map((server, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{server.name}</p>
                    <p className="text-xs text-muted-foreground">{server.uptime} uptime</p>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      server.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Storage Usage */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg">Storage Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Database', used: 156, total: 500 },
                { name: 'File Storage', used: 342, total: 1000 },
                { name: 'Backups', used: 89, total: 200 },
              ].map((storage, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium">{storage.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {storage.used}GB / {storage.total}GB
                    </p>
                  </div>
                  <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      style={{ width: `${(storage.used / storage.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="border-border/50 bg-card/50 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { msg: 'High API response time', severity: 'warning' },
                { msg: '2 failed login attempts detected', severity: 'info' },
              ].map((alert, i) => (
                <div key={i} className="text-sm p-3 rounded bg-secondary/30 border border-border/50">
                  {alert.msg}
                </div>
              ))}
              <Button variant="outline" className="w-full text-xs h-8 border-border/50 bg-transparent">
                View all alerts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
