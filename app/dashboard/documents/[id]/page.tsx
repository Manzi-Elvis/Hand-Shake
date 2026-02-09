'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Bold,
  Italic,
  Underline,
  List,
  Share2,
  Users,
  Clock,
  MoreVertical,
  ChevronDown,
} from 'lucide-react'

export default function DocumentDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      {/* Toolbar */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <input
              type="text"
              defaultValue="Design System Guidelines"
              className="text-2xl font-bold bg-transparent outline-none w-full"
              placeholder="Document title..."
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-border/50 bg-transparent">
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="border-border/50 bg-transparent">
              <Users className="w-4 h-4 mr-1" />
              Comments
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Last edited 2 hours ago by Sarah Chen
          </span>
        </div>

        {/* Editor Toolbar */}
        <div className="flex items-center gap-1 bg-secondary/30 rounded-lg p-1 w-fit">
          <select className="bg-transparent border-0 outline-none text-sm px-2 py-1 rounded">
            <option>Normal</option>
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Heading 3</option>
            <option>Code</option>
          </select>

          <div className="w-px h-6 bg-border/30 mx-1" />

          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Bold className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Italic className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Underline className="w-4 h-4" />
          </Button>

          <div className="w-px h-6 bg-border/30 mx-1" />

          <Button variant="ghost" size="icon" className="h-7 w-7">
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8">
          <div className="prose prose-invert max-w-none space-y-4">
            <h1 className="text-3xl font-bold">Design System Guidelines</h1>

            <p className="text-muted-foreground">
              Last edited 2 hours ago by Sarah Chen
            </p>

            <h2 className="text-xl font-bold mt-6">Overview</h2>
            <p>
              This document outlines the complete design system for our application,
              including color palettes, typography, component specifications, and
              usage guidelines.
            </p>

            <h2 className="text-xl font-bold mt-6">Color System</h2>
            <p>
              Our design system uses a carefully curated palette of 3-5 colors to
              maintain visual harmony and ensure accessibility across all
              interfaces.
            </p>

            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="p-4 rounded-lg bg-primary">
                <p className="text-xs text-primary-foreground font-mono">Primary</p>
              </div>
              <div className="p-4 rounded-lg bg-accent">
                <p className="text-xs text-accent-foreground font-mono">Accent</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary">
                <p className="text-xs text-secondary-foreground font-mono">Secondary</p>
              </div>
            </div>

            <h2 className="text-xl font-bold mt-6">Typography</h2>
            <p>
              We use a maximum of two font families: Geist for headings and body
              text. This ensures consistency and reduces cognitive load.
            </p>

            <h3 className="text-lg font-bold">Heading 3</h3>
            <p>Regular paragraph text explaining more details about the topic.</p>

            <h2 className="text-xl font-bold mt-6">Components</h2>
            <p>
              All components follow consistent design principles and use the
              established color system and typography guidelines.
            </p>

            <h2 className="text-xl font-bold mt-6">Usage Guidelines</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Always respect the spacing scale</li>
              <li>Use semantic color tokens</li>
              <li>Maintain consistent border radius</li>
              <li>Follow accessibility standards</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Active Users */}
      <div className="border-t border-border/50 bg-card/50 backdrop-blur p-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Editing:</span>
          <div className="flex -space-x-2">
            {[
              { initials: 'SC', name: 'Sarah' },
              { initials: 'AJ', name: 'Alex' },
            ].map((user) => (
              <Avatar key={user.initials} className="h-6 w-6 border border-card" title={user.name}>
                <AvatarFallback className="text-[10px]">{user.initials}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
