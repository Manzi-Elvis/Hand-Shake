'use client'

import React, { Suspense, useEffect } from 'react'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CommandPalette } from '@/components/command-palette'
import { NotificationsPanel } from '@/components/notifications-panel'
import { LayoutDashboard, LayoutDashboard as LayoutBoard, FileText, MessageSquare, Settings, LogOut, Menu, X, Bell, Search, MoreVertical, ShieldHalfIcon as ShieldAdmin } from 'lucide-react'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Home', href: '/dashboard' },
  { icon: LayoutBoard, label: 'Boards', href: '/dashboard/boards' },
  { icon: FileText, label: 'Documents', href: '/dashboard/documents' },
  { icon: MessageSquare, label: 'Chat', href: '/dashboard/chat' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

const adminItems = [
  { icon: ShieldAdmin, label: 'Admin Panel', href: '/dashboard/admin' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAdmin] = useState(true) // Mock - would check user role
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  // Command palette keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setPaletteOpen(!paletteOpen)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [paletteOpen])

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b border-border/50 bg-card/50 backdrop-blur flex items-center justify-between px-4 z-40">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm text-primary-foreground">
            H
          </div>
          <span className="hidden sm:inline">Handshake</span>
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 lg:hidden z-30" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 border-r border-border/50 bg-card/30 backdrop-blur transform transition-transform lg:transform-none lg:relative lg:translate-x-0 z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } pt-4 lg:pt-6 overflow-y-auto`}
      >
        <div className="px-4 mb-8 hidden lg:block">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg text-primary-foreground">
              H
            </div>
            <span>Handshake</span>
          </Link>

          {/* Organization Switcher */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm font-semibold">Acme Corp</div>
            <Button variant="outline" size="sm" className="h-7 w-7 p-0 bg-transparent">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 px-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive
                    ? 'bg-secondary text-primary font-medium'
                    : 'text-muted-foreground hover:bg-secondary/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Admin Section */}
        {isAdmin && (
          <div className="mt-8 border-t border-border/50 pt-4 px-3">
            <div className="text-xs font-semibold text-muted-foreground uppercase mb-3 px-3">
              Admin
            </div>
            <nav className="space-y-1">
              {adminItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                      isActive
                        ? 'bg-secondary text-primary font-medium'
                        : 'text-muted-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        )}

        {/* User Section */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 p-4 bg-card/50 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
              DU
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Demo User</p>
              <p className="text-xs text-muted-foreground truncate">user@example.com</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-3 text-xs h-8 bg-transparent"
            onClick={() => {
              // Sign out
            }}
          >
            <LogOut className="w-3 h-3 mr-1" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        {/* Top Bar */}
        <div className="sticky top-16 lg:top-0 z-30 border-b border-border/50 bg-card/50 backdrop-blur h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="hidden md:flex items-center gap-2 flex-1 max-w-md cursor-pointer" onClick={() => setPaletteOpen(true)}>
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search... (Cmd+K)"
                className="flex-1 bg-transparent text-sm outline-none placeholder-muted-foreground"
                readOnly
                onClick={() => setPaletteOpen(true)}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground cursor-pointer">
              DU
            </div>
          </div>
        </div>

        {/* Page Content */}
        <Suspense fallback={null}>
          <div className="px-4 sm:px-6 lg:px-8 py-8">{children}</div>
        </Suspense>
      </main>

      {/* Command Palette */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />

      {/* Notifications Panel */}
      <NotificationsPanel isOpen={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
    </div>
  )
}
