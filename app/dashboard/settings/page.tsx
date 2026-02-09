'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Building2,
  Users,
  Lock,
  Bell,
  CreditCard,
  LogOut,
  Trash2,
  Plus,
  X,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your workspace and preferences</p>
      </div>

      <Tabs defaultValue="workspace" className="space-y-6">
        <TabsList className="bg-secondary/30">
          <TabsTrigger value="workspace" className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Workspace
          </TabsTrigger>
          <TabsTrigger value="members" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Members
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        {/* Workspace Settings */}
        <TabsContent value="workspace" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>Workspace Information</CardTitle>
              <CardDescription>Manage your workspace details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Workspace Name</label>
                <Input
                  defaultValue="Acme Corp"
                  className="bg-input border-border/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Workspace Slug</label>
                <Input
                  defaultValue="acme-corp"
                  className="bg-input border-border/30"
                  disabled
                />
                <p className="text-xs text-muted-foreground">Used in workspace URL</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <textarea
                  defaultValue="Building the future of work"
                  className="w-full px-3 py-2 bg-input border border-border/30 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Workspace Logo</label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    A
                  </div>
                  <Button variant="outline" className="border-border/50 bg-transparent">
                    Upload New Logo
                  </Button>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-red-500">Danger Zone</CardTitle>
              <CardDescription>Irreversible actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="border-red-500/50 text-red-500 hover:bg-red-500/10 w-full justify-start bg-transparent">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Workspace
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Members */}
        <TabsContent value="members" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage workspace members and permissions</CardDescription>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Invite
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'You', email: 'you@acme.com', role: 'Owner', avatar: 'YO' },
                { name: 'Sarah Chen', email: 'sarah@acme.com', role: 'Admin', avatar: 'SC' },
                { name: 'Alex Johnson', email: 'alex@acme.com', role: 'Member', avatar: 'AJ' },
                { name: 'Mike Wong', email: 'mike@acme.com', role: 'Member', avatar: 'MW' },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between pb-4 border-b border-border/30 last:border-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <select className="text-sm bg-secondary/30 border border-border/50 rounded px-2 py-1">
                      <option>Owner</option>
                      <option>Admin</option>
                      <option>Member</option>
                      <option>Guest</option>
                    </select>
                    {i !== 0 && (
                      <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-500/10">
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your account password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Password</label>
                <Input
                  type="password"
                  className="bg-input border-border/30"
                  placeholder="••••••••"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">New Password</label>
                <Input
                  type="password"
                  className="bg-input border-border/30"
                  placeholder="••••••••"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Confirm Password</label>
                <Input
                  type="password"
                  className="bg-input border-border/30"
                  placeholder="••••••••"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">Update Password</Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="border-border/50 bg-transparent">
                Enable 2FA
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>Sessions</CardTitle>
              <CardDescription>Manage your active sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { device: 'Chrome on MacOS', ip: '192.168.1.1', time: 'Last active now' },
                { device: 'Safari on iPhone', ip: '192.168.1.5', time: 'Last active 2 hours ago' },
              ].map((session, i) => (
                <div key={i} className="flex items-center justify-between pb-3 border-b border-border/30 last:border-0">
                  <div>
                    <p className="font-medium text-sm">{session.device}</p>
                    <p className="text-xs text-muted-foreground">{session.ip}</p>
                    <p className="text-xs text-muted-foreground mt-1">{session.time}</p>
                  </div>
                  {i !== 0 && (
                    <Button variant="outline" size="sm" className="border-border/50 bg-transparent">
                      Sign out
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control what notifications you receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { title: 'Mentions', desc: 'When someone mentions you' },
                { title: 'Assignments', desc: 'When you\'re assigned a task' },
                { title: 'Comments', desc: 'When someone comments on your items' },
                { title: 'Team Activity', desc: 'Summary of team activity' },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between pb-4 border-b border-border/30 last:border-0">
                  <div>
                    <p className="font-medium text-sm">{pref.title}</p>
                    <p className="text-xs text-muted-foreground">{pref.desc}</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
