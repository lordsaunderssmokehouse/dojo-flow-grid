import { BrandCard, CardTitle, CardDescription, CardActions } from '@/components/BrandCard';
import { BrandButton } from '@/components/BrandButton';
import { 
  Zap, 
  Shuffle, 
  Printer, 
  BookOpen, 
  Video, 
  GraduationCap,
  Target,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Welcome Back</h1>
        <p className="text-muted-foreground">Continue your Tang Soo Do journey</p>
      </div>

      {/* Quick Actions */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link to="/train">
            <BrandCard hover className="p-6">
              <Zap className="h-8 w-8 text-accent mb-3" strokeWidth={1.5} />
              <CardTitle className="mb-1">Train Now</CardTitle>
              <CardDescription>Start practicing</CardDescription>
            </BrandCard>
          </Link>
          
          <Link to="/train">
            <BrandCard hover className="p-6">
              <Shuffle className="h-8 w-8 text-success mb-3" strokeWidth={1.5} />
              <CardTitle className="mb-1">Random One Step</CardTitle>
              <CardDescription>Quick drill</CardDescription>
            </BrandCard>
          </Link>

          <Link to="/print/gup">
            <BrandCard hover className="p-6">
              <Printer className="h-8 w-8 text-warning mb-3" strokeWidth={1.5} />
              <CardTitle className="mb-1">Print Gup Sheet</CardTitle>
              <CardDescription>Study material</CardDescription>
            </BrandCard>
          </Link>

          <Link to="/knowledge">
            <BrandCard hover className="p-6">
              <BookOpen className="h-8 w-8 text-midnight-600 mb-3" strokeWidth={1.5} />
              <CardTitle className="mb-1">Book Study</CardTitle>
              <CardDescription>Review concepts</CardDescription>
            </BrandCard>
          </Link>
        </div>
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Practice */}
        <BrandCard className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <CardTitle className="text-base mb-1">Practice</CardTitle>
              <CardDescription>Line drills and one steps</CardDescription>
            </div>
            <Target className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <div className="space-y-3 mb-4">
            <Link to="/train" className="block group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors">
                <span className="text-sm font-medium">Line Drill Practice</span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">Start →</span>
              </div>
            </Link>
            <Link to="/train" className="block group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors">
                <span className="text-sm font-medium">One Step Practice</span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">Start →</span>
              </div>
            </Link>
          </div>
        </BrandCard>

        {/* Video Library */}
        <BrandCard className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <CardTitle className="text-base mb-1">Video Library</CardTitle>
              <CardDescription>Forms and one steps</CardDescription>
            </div>
            <Video className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <div className="space-y-3 mb-4">
            <Link to="/train" className="block group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors">
                <span className="text-sm font-medium">Forms Library</span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">Browse →</span>
              </div>
            </Link>
            <Link to="/train" className="block group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors">
                <span className="text-sm font-medium">One Steps Videos</span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">Browse →</span>
              </div>
            </Link>
          </div>
        </BrandCard>

        {/* Knowledge */}
        <BrandCard className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <CardTitle className="text-base mb-1">Knowledge</CardTitle>
              <CardDescription>Theory and concepts</CardDescription>
            </div>
            <GraduationCap className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <div className="space-y-3 mb-4">
            <Link to="/knowledge" className="block group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors">
                <span className="text-sm font-medium">Eight Key Concepts</span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">Review →</span>
              </div>
            </Link>
            <Link to="/knowledge" className="block group">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors">
                <span className="text-sm font-medium">Book Study</span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">Study →</span>
              </div>
            </Link>
          </div>
        </BrandCard>

        {/* Progress */}
        <BrandCard className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <CardTitle className="text-base mb-1">Progress</CardTitle>
              <CardDescription>Track your journey</CardDescription>
            </div>
            <TrendingUp className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Hours Taught</span>
                <span className="text-sm font-semibold text-accent">42.5</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[70%] bg-accent rounded-full" />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Practice sessions: 28</span>
              <span>This month</span>
            </div>
          </div>
        </BrandCard>
      </div>

      {/* Upcoming */}
      <BrandCard className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <CardTitle className="text-base mb-1">Upcoming</CardTitle>
            <CardDescription>Important dates and milestones</CardDescription>
          </div>
          <Calendar className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
            <div className="flex-shrink-0 w-12 text-center">
              <div className="text-xs font-medium text-muted-foreground">MAR</div>
              <div className="text-lg font-semibold text-foreground">15</div>
            </div>
            <div>
              <div className="text-sm font-medium text-foreground mb-0.5">Belt Test</div>
              <div className="text-xs text-muted-foreground">Next advancement opportunity</div>
            </div>
          </div>
        </div>
      </BrandCard>
    </div>
  );
}
