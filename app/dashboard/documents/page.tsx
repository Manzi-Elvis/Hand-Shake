'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FileText, Plus, Search, MoreVertical, Clock } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function DocumentsPage() {
  const documents = [
    {
      id: '1',
      title: 'Design System Guidelines',
      modified: '2 hours ago',
      modifiedBy: 'Sarah Chen',
      avatar: 'SC',
      preview: 'Complete guide to our design system including colors, typography...',
    },
    {
      id: '2',
      title: 'Q1 Planning Notes',
      modified: '5 hours ago',
      modifiedBy: 'You',
      avatar: 'YO',
      preview: 'Strategic planning document for Q1 initiatives and goals...',
    },
    {
      id: '3',
      title: 'API Documentation',
      modified: '1 day ago',
      modifiedBy: 'Alex Johnson',
      avatar: 'AJ',
      preview: 'RESTful API endpoints and integration guide for developers...',
    },
    {
      id: '4',
      title: 'Brand Guidelines',
      modified: '3 days ago',
      modifiedBy: 'Emma Davis',
      avatar: 'ED',
      preview: 'Brand identity, logo usage, and visual standards...',
    },
    {
      id: '5',
      title: 'Customer Success Stories',
      modified: '5 days ago',
      modifiedBy: 'Mike Wong',
      avatar: 'MW',
      preview: 'Case studies and testimonials from our happy customers...',
    },
    {
      id: '6',
      title: 'Engineering Best Practices',
      modified: '1 week ago',
      modifiedBy: 'Alex Johnson',
      avatar: 'AJ',
      preview: 'Code standards, testing practices, and deployment procedures...',
    },
    {
      id: '7',
      title: 'Marketing Strategy 2026',
      modified: '1 week ago',
      modifiedBy: 'Emma Davis',
      avatar: 'ED',
      preview: 'Annual marketing plan, channels, and campaign calendar...',
    },
    {
      id: '8',
      title: 'Meeting Notes',
      modified: '2 weeks ago',
      modifiedBy: 'Sarah Chen',
      avatar: 'SC',
      preview: 'Compiled meeting notes from monthly all-hands meetings...',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FileText className="w-8 h-8" />
            Documents
          </h1>
          <p className="text-muted-foreground">Collaborative documents and notes</p>
        </div>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/dashboard/documents/new">
            <Plus className="w-4 h-4 mr-2" />
            New Document
          </Link>
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            className="pl-10 bg-input border-border/30"
          />
        </div>
      </div>

      {/* Documents List */}
      <div className="space-y-3">
        {documents.map((doc) => (
          <Link key={doc.id} href={`/dashboard/documents/${doc.id}`}>
            <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-border/80 transition cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <FileText className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1 truncate">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-1">{doc.preview}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="text-[10px]">{doc.avatar}</AvatarFallback>
                          </Avatar>
                          <span>{doc.modifiedBy}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {doc.modified}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex-shrink-0"
                    onClick={(e) => {
                      e.preventDefault()
                    }}
                  >
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {documents.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">No documents yet</h3>
          <p className="text-muted-foreground mb-6">Create your first document to get started</p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/dashboard/documents/new">
              <Plus className="w-4 h-4 mr-2" />
              New Document
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
