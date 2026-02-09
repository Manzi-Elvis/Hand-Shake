'use client'

import React from "react"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

export default function NewDocumentPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: create document in database
    router.push('/dashboard/documents')
  }

  return (
    <div className="max-w-2xl space-y-6">
      <Link href="/dashboard/documents" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
        <ArrowLeft className="w-4 h-4" />
        Back to Documents
      </Link>

      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle>Create a new document</CardTitle>
          <CardDescription>Start writing a collaborative document</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Document Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Q1 Planning Notes"
                className="bg-input border-border/30"
                required
                autoFocus
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Create Document
              </Button>
              <Button asChild variant="outline" className="border-border/50 bg-transparent">
                <Link href="/dashboard/documents">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
