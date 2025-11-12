import { BrandCard } from '@/components/BrandCard';
import { BrandButton } from '@/components/BrandButton';
import { BeltPill } from '@/components/BeltPill';
import { CircularProgress } from '@/components/CircularProgress';
import { StatusChip } from '@/components/StatusChip';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Play, 
  Shuffle, 
  BookOpen, 
  Trophy,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight-50/30 to-background dark:from-midnight-950/20">
      <div className="container mx-auto py-8 px-4 max-w-6xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BeltPill />
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back to training</p>
            </div>
          </div>
        </div>

        {/* Next Belt Test Alert */}
        <div className="rounded-2xl border-2 border-warning/30 bg-gradient-to-r from-warning/5 to-warning/10 p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/20">
                <Calendar className="h-6 w-6 text-warning" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Next Belt Test</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  December 15, 2024 • 28 days remaining
                </p>
              </div>
            </div>
            <BrandButton variant="outline" className="border-warning/40 hover:bg-warning/10">
              View Details
            </BrandButton>
          </div>
        </div>

        {/* Belt Progress & Training Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Belt Progress Card */}
          <BrandCard className="lg:col-span-2 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-midnight-700" />
              <h2 className="text-lg font-semibold text-foreground">Belt Progress</h2>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <CircularProgress value={75} size={140} strokeWidth={10} />
              <div className="text-center mt-4">
                <p className="text-sm font-medium text-foreground">Current: Green Belt</p>
                <p className="text-xs text-muted-foreground">Next: Red Belt</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Forms Mastered</span>
                  <span className="font-medium text-foreground">4/5</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">One-Steps</span>
                  <span className="font-medium text-foreground">8/10</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </BrandCard>

          {/* Training Overview Card */}
          <BrandCard className="lg:col-span-3 p-0 overflow-hidden">
            <div className="bg-midnight-700 p-4 text-white">
              <h2 className="text-lg font-semibold">Training Overview</h2>
              <p className="text-sm text-midnight-100 mt-0.5">
                Your current belt requirements and progress
              </p>
            </div>
            
            <div className="p-6">
              <div className="rounded-xl bg-gradient-to-br from-midnight-100/50 to-midnight-50/30 dark:from-midnight-900/30 dark:to-midnight-950/20 p-4 mb-4 border border-midnight-200/50 dark:border-midnight-800/50">
                <h3 className="font-semibold text-foreground mb-1">Green Belt Requirements</h3>
                <p className="text-sm text-muted-foreground">Master all forms and techniques to advance</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-foreground">Forms (Hyung)</h4>
                    <StatusChip status="learning" />
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Sae Kye Hyung II Bu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Sae Kye Hyung E Bu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Sae Kye Hyung Sam Bu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Jin Do Hyung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                      <span className="text-warning font-medium">Jang Gun Hyung</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-foreground">One-Step Sparring</h4>
                      <StatusChip status="learning" />
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">Basic Hand Techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">Kicking Combinations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                        <span className="text-warning font-medium">Advanced Counters</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-foreground">Theory</h4>
                      <StatusChip status="ready" />
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">Belt History</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">Korean Terminology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">Philosophy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </BrandCard>
        </div>

        {/* Train Now Section */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Train Now</h2>
          <p className="text-sm text-muted-foreground mb-6">Jump into practice with these quick training options</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-midnight-300 dark:hover:border-midnight-700">
              <div className="absolute inset-0 bg-gradient-to-br from-midnight-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-midnight-100 dark:bg-midnight-900/50 mb-4 group-hover:bg-midnight-700 transition-colors">
                  <Play className="h-6 w-6 text-midnight-700 dark:text-midnight-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Practice Forms</h3>
                <p className="text-xs text-muted-foreground">Follow along with videos</p>
              </div>
            </button>

            <button className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-midnight-300 dark:hover:border-midnight-700">
              <div className="absolute inset-0 bg-gradient-to-br from-midnight-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-midnight-100 dark:bg-midnight-900/50 mb-4 group-hover:bg-midnight-700 transition-colors">
                  <Shuffle className="h-6 w-6 text-midnight-700 dark:text-midnight-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Random Drill</h3>
                <p className="text-xs text-muted-foreground">Line drills & techniques</p>
              </div>
            </button>

            <button className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-midnight-300 dark:hover:border-midnight-700">
              <div className="absolute inset-0 bg-gradient-to-br from-midnight-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-midnight-100 dark:bg-midnight-900/50 mb-4 group-hover:bg-midnight-700 transition-colors">
                  <BookOpen className="h-6 w-6 text-midnight-700 dark:text-midnight-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Study Cards</h3>
                <p className="text-xs text-muted-foreground">Review terminology</p>
              </div>
            </button>

            <button className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-midnight-300 dark:hover:border-midnight-700">
              <div className="absolute inset-0 bg-gradient-to-br from-midnight-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-midnight-100 dark:bg-midnight-900/50 mb-4 group-hover:bg-midnight-700 transition-colors">
                  <Trophy className="h-6 w-6 text-midnight-700 dark:text-midnight-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Take Quiz</h3>
                <p className="text-xs text-muted-foreground">Test your knowledge</p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <BrandCard className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-4 rounded-xl bg-success/5 p-4 border border-success/10">
              <div className="flex h-2 w-2 mt-2 rounded-full bg-success flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">Quiz Completed</p>
                <p className="text-sm text-muted-foreground mt-0.5">Green Belt Theory - Score: 95%</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">2 hours ago</span>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-warning/5 p-4 border border-warning/10">
              <div className="flex h-2 w-2 mt-2 rounded-full bg-warning flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">Form Practice</p>
                <p className="text-sm text-muted-foreground mt-0.5">Practiced Jang Gun Hyung</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">Yesterday</span>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-midnight-50/50 dark:bg-midnight-950/30 p-4 border border-midnight-100 dark:border-midnight-900">
              <div className="flex h-2 w-2 mt-2 rounded-full bg-midnight-700 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">Flashcard Session</p>
                <p className="text-sm text-muted-foreground mt-0.5">Korean Terminology - 20 cards reviewed</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">3 days ago</span>
            </div>
          </div>
        </BrandCard>
      </div>
    </div>
  );
}
