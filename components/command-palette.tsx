'use client'

import React from "react"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Search, LayoutDashboard, LayoutDashboard as LayoutBoard, FileText, MessageSquare, Settings, Bell, Users, Building2, Zap, X } from 'lucide-react'

interface CommandItem {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  href: string
  category: string
}

const commands: CommandItem[] = [
  {
    id: '1',
    title: 'Home',
    description: 'Go to dashboard home',
    icon: <LayoutDashboard className="w-4 h-4" />,
    href: '/dashboard',
    category: 'Navigation',
  },
  {
    id: '2',
    title: 'Boards',
    description: 'View all boards',
    icon: <LayoutBoard className="w-4 h-4" />,
    href: '/dashboard/boards',
    category: 'Navigation',
  },
  {
    id: '3',
    title: 'Documents',
    description: 'View all documents',
    icon: <FileText className="w-4 h-4" />,
    href: '/dashboard/documents',
    category: 'Navigation',
  },
  {
    id: '4',
    title: 'Chat',
    description: 'Open chat',
    icon: <MessageSquare className="w-4 h-4" />,
    href: '/dashboard/chat',
    category: 'Navigation',
  },
  {
    id: '5',
    title: 'Settings',
    description: 'Workspace settings',
    icon: <Settings className="w-4 h-4" />,
    href: '/dashboard/settings',
    category: 'Navigation',
  },
  {
    id: '6',
    title: 'New Board',
    description: 'Create a new board',
    icon: <LayoutBoard className="w-4 h-4" />,
    href: '/dashboard/boards/new',
    category: 'Create',
  },
  {
    id: '7',
    title: 'New Document',
    description: 'Create a new document',
    icon: <FileText className="w-4 h-4" />,
    href: '/dashboard/documents/new',
    category: 'Create',
  },
  {
    id: '8',
    title: 'Notifications',
    description: 'View all notifications',
    icon: <Bell className="w-4 h-4" />,
    href: '/dashboard/notifications',
    category: 'View',
  },
  {
    id: '9',
    title: 'Team Members',
    description: 'Manage team members',
    icon: <Users className="w-4 h-4" />,
    href: '/dashboard/settings?tab=members',
    category: 'View',
  },
  {
    id: '10',
    title: 'Workspace',
    description: 'Workspace settings',
    icon: <Building2 className="w-4 h-4" />,
    href: '/dashboard/settings?tab=workspace',
    category: 'View',
  },
]

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filtered = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(search.toLowerCase()) ||
      cmd.description.toLowerCase().includes(search.toLowerCase())
  )

  const grouped = filtered.reduce(
    (acc, cmd) => {
      if (!acc[cmd.category]) {
        acc[cmd.category] = []
      }
      acc[cmd.category].push(cmd)
      return acc
    },
    {} as Record<string, CommandItem[]>
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
      }

      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((prev) =>
            prev < filtered.length - 1 ? prev + 1 : prev
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0))
          break
        case 'Enter':
          e.preventDefault()
          const selected = filtered[selectedIndex]
          if (selected) {
            window.location.href = selected.href
            onClose()
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filtered, selectedIndex, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur"
        onClick={onClose}
      />

      {/* Palette */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl">
        <div className="bg-card border border-border/50 rounded-lg shadow-xl overflow-hidden">
          {/* Search */}
          <div className="p-4 border-b border-border/50 bg-card/50">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input
                autoFocus
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setSelectedIndex(0)
                }}
                placeholder="Search for anything..."
                className="border-0 bg-transparent outline-none text-lg"
              />
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {Object.keys(grouped).length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <p>No results found.</p>
              </div>
            ) : (
              Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase bg-background/50">
                    {category}
                  </div>
                  {items.map((cmd, i) => {
                    const globalIndex = filtered.findIndex((c) => c.id === cmd.id)
                    return (
                      <Link key={cmd.id} href={cmd.href} onClick={onClose}>
                        <div
                          className={`px-4 py-3 flex items-center gap-3 cursor-pointer transition ${
                            globalIndex === selectedIndex
                              ? 'bg-secondary text-primary'
                              : 'hover:bg-secondary/50'
                          }`}
                        >
                          <div className="text-muted-foreground">{cmd.icon}</div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">{cmd.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {cmd.description}
                            </p>
                          </div>
                          <kbd className="hidden md:inline-flex items-center gap-1 text-xs bg-background/50 border border-border/50 rounded px-2 py-1">
                            <Zap className="w-3 h-3" />
                          </kbd>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-border/50 bg-background/50 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex gap-2">
              <kbd className="px-2 py-1 bg-card border border-border/50 rounded">↑↓</kbd>
              <span>Navigate</span>
            </div>
            <div className="flex gap-2">
              <kbd className="px-2 py-1 bg-card border border-border/50 rounded">Enter</kbd>
              <span>Select</span>
            </div>
            <div className="flex gap-2">
              <kbd className="px-2 py-1 bg-card border border-border/50 rounded">Esc</kbd>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
