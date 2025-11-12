import { BrandCard } from '@/components/BrandCard';
import { StatusChip } from '@/components/StatusChip';
import { Progress as ProgressBar } from '@/components/ui/progress';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Trophy, Calendar, Clock, TrendingUp } from 'lucide-react';

export default function Progress() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight-50/30 to-background dark:from-midnight-950/20">
      <div className="container mx-auto py-8 px-4 max-w-6xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Progression Planner</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Plan your martial arts journey and see projected advancement dates
          </p>
        </div>

        {/* Set Your Goal */}
        <BrandCard className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-midnight-700" />
            <h2 className="text-lg font-semibold text-foreground">Set Your Goal</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Choose your target belt to see your projected timeline
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Target Belt</label>
              <Select defaultValue="cho-dan">
                <SelectTrigger>
                  <SelectValue placeholder="Select target belt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cho-dan">Black Belt (1st Dan)</SelectItem>
                  <SelectItem value="ee-dan">Black Belt (2nd Dan)</SelectItem>
                  <SelectItem value="sam-dan">Black Belt (3rd Dan)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Training Intensity</label>
              <Select defaultValue="standard">
                <SelectTrigger>
                  <SelectValue placeholder="Select intensity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relaxed">Relaxed Pace</SelectItem>
                  <SelectItem value="standard">Standard Pace</SelectItem>
                  <SelectItem value="intensive">Intensive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border-2 border-warning/30 bg-warning/5 p-4">
              <Calendar className="h-8 w-8 text-warning mb-2" />
              <div className="text-2xl font-semibold text-foreground">4/21/2026</div>
              <div className="text-sm text-muted-foreground">Target Date</div>
            </div>

            <div className="rounded-xl border-2 border-warning/30 bg-warning/5 p-4">
              <Clock className="h-8 w-8 text-warning mb-2" />
              <div className="text-2xl font-semibold text-foreground">8 months</div>
              <div className="text-sm text-muted-foreground">Time Remaining</div>
            </div>

            <div className="rounded-xl border-2 border-success/30 bg-success/5 p-4">
              <TrendingUp className="h-8 w-8 text-success mb-2" />
              <div className="text-2xl font-semibold text-foreground">75%</div>
              <div className="text-sm text-muted-foreground">Current Progress</div>
            </div>
          </div>
        </BrandCard>

        {/* Progression Timeline */}
        <BrandCard className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-midnight-700" />
            <h2 className="text-lg font-semibold text-foreground">Progression Timeline</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Your path from current belt to Black Belt (1st Dan)
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Overall Progress</span>
              <span className="text-sm text-muted-foreground">3 of 5 belts completed</span>
            </div>
            <ProgressBar value={60} className="h-3" />
          </div>

          <div className="space-y-4">
            {/* White Belt */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 border-2 border-success flex-shrink-0">
                <Trophy className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-foreground">White Belt</h3>
                  <StatusChip status="mastered" />
                </div>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">1/14/2024</span>
            </div>

            {/* Orange Belt */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 border-2 border-success flex-shrink-0">
                <Trophy className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-foreground">Orange Belt</h3>
                  <StatusChip status="mastered" />
                </div>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">4/14/2024</span>
            </div>

            {/* Green Belt */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 border-2 border-success flex-shrink-0">
                <Trophy className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-foreground">Green Belt</h3>
                  <StatusChip status="mastered" />
                </div>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">7/14/2024</span>
            </div>

            {/* Red Belt */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-warning/5 border-2 border-warning/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/10 border-2 border-warning flex-shrink-0">
                <Trophy className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">Red Belt</h3>
                  <StatusChip status="in-progress" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Current focus: Master Jang Gun Hyung and complete one-step requirements
                </p>
                <ProgressBar value={75} className="h-2" />
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">10/21/2025</span>
            </div>

            {/* Black Belt */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-border flex-shrink-0">
                <Trophy className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-foreground">Black Belt (1st Dan)</h3>
                  <StatusChip status="future" />
                </div>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">4/21/2026</span>
            </div>
          </div>
        </BrandCard>

        {/* Advancement Requirements */}
        <BrandCard className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Advancement Requirements</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Standard time requirements for belt progression
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-midnight-50/50 dark:bg-midnight-950/30 border border-midnight-100 dark:border-midnight-900">
                <div>
                  <h3 className="font-semibold text-foreground">Color Belts</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Standard progression for colored belts
                  </p>
                </div>
                <span className="text-lg font-semibold text-midnight-700 dark:text-midnight-300">3 months</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-midnight-50/50 dark:bg-midnight-950/30 border border-midnight-100 dark:border-midnight-900">
                <div>
                  <h3 className="font-semibold text-foreground">First Dan</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Minimum time to 1st Dan Black Belt
                  </p>
                </div>
                <span className="text-lg font-semibold text-midnight-700 dark:text-midnight-300">24 months</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-midnight-50/50 dark:bg-midnight-950/30 border border-midnight-100 dark:border-midnight-900">
                <div>
                  <h3 className="font-semibold text-foreground">Red Belt</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Red belt with stripe progression
                  </p>
                </div>
                <span className="text-lg font-semibold text-midnight-700 dark:text-midnight-300">6 months</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-midnight-50/50 dark:bg-midnight-950/30 border border-midnight-100 dark:border-midnight-900">
                <div>
                  <h3 className="font-semibold text-foreground">Dan Progression</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Between Dan levels (2nd+)
                  </p>
                </div>
                <span className="text-lg font-semibold text-midnight-700 dark:text-midnight-300">36 months</span>
              </div>
            </div>
          </div>
        </BrandCard>
      </div>
    </div>
  );
}
