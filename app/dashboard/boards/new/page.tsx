'use client'

import React from "react"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

export default function NewBoardPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: create board in database
    router.push('/dashboard/boards')
  }

  return (
    <div className="max-w-2xl space-y-6">
      <Link href="/dashboard/boards" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
        <ArrowLeft className="w-4 h-4" />
        Back to Boards
      </Link>

      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle>Create a new board</CardTitle>
          <CardDescription>Set up a Kanban board for your team</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Board Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Q1 Roadmap"
                className="bg-input border-border/30"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is this board for?"
                className="w-full px-3 py-2 bg-input border border-border/30 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Create Board
              </Button>
              <Button asChild variant="outline" className="border-border/50 bg-transparent">
                <Link href="/dashboard/boards">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
