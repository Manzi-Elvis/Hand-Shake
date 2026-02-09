'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { LayoutDashboard as LayoutBoard, FileText, MessageSquare, Users, Zap, Lock, BarChart3, Sparkles, ArrowRight, CheckCircle, GitBranch } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-primary-foreground">
              H
            </div>
            <span className="font-bold text-xl">Handshake</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-sm text-muted-foreground hover:text-foreground transition">
              Sign In
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-border/50 text-sm text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            Introducing Handshake
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6">
            The future of team collaboration
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
            One unified workspace for documents, tasks, and communication. Replace your scattered
            tools with Handshake.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/auth">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border/50 bg-transparent">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <p className="text-xs text-muted-foreground">Teams trusting us</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">99.9%</div>
              <p className="text-xs text-muted-foreground">Uptime guarantee</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <p className="text-xs text-muted-foreground">Enterprise support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Everything you need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consolidate your team tools into one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Boards */}
            <Card className="border-border/50 bg-card/50 backdrop-blur group hover:border-border/80 transition">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition">
                  <LayoutBoard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Boards</h3>
                <p className="text-muted-foreground mb-4">
                  Kanban boards with drag-and-drop, customizable columns, and real-time collaboration.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Drag & drop columns and cards
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Priority, assignees, deadlines
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Real-time multi-user presence
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card className="border-border/50 bg-card/50 backdrop-blur group hover:border-border/80 transition">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Documents</h3>
                <p className="text-muted-foreground mb-4">
                  Collaborative rich text editor with live cursors, comments, and version history.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Live collaborative editing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Comments & mentions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Full version history
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chat */}
            <Card className="border-border/50 bg-card/50 backdrop-blur group hover:border-border/80 transition">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Channels, threads, and direct messaging for seamless team communication.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Public & private channels
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Message threads & reactions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    File sharing & integrations
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Teams */}
            <Card className="border-border/50 bg-card/50 backdrop-blur group hover:border-border/80 transition">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Teams</h3>
                <p className="text-muted-foreground mb-4">
                  Manage organizations with roles, permissions, and team channels.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Role-based access control
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Team & channel management
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Invite & permission controls
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Innovation Section */}
          <div className="border-t border-border/50 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Built for the future
              </h3>
              <p className="text-muted-foreground">
                Enterprise-grade security and performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Lightning Fast</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimized for speed with caching, pagination, and lazy loading
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <Lock className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Enterprise Security</h4>
                  <p className="text-sm text-muted-foreground">
                    SOC 2 compliant with RBAC, audit logs, and encryption
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <BarChart3 className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Insights into team productivity and usage patterns
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 border-t border-border/50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Ready to transform your teamwork?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of teams already using Handshake to collaborate better.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/auth">
              Start your free trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                  H
                </div>
                <span className="font-bold">Handshake</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The all-in-one collaboration platform for modern teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2026 Handshake. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition"
                aria-label="Twitter"
              >
                <GitBranch className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
