import { useState } from 'react';
import { BrandCard, CardTitle, CardDescription } from '@/components/BrandCard';
import { BrandButton } from '@/components/BrandButton';
import { BeltPill } from '@/components/BeltPill';
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/BrandTabs';
import { EmptyState } from '@/components/EmptyState';
import { KeyboardHints } from '@/components/KeyboardHints';
import { 
  Play, 
  Target, 
  Video, 
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  X
} from 'lucide-react';

export default function Train() {
  const [showLineDrillModal, setShowLineDrillModal] = useState(false);
  const [showOneStepModal, setShowOneStepModal] = useState(false);
  const [oneStepMode, setOneStepMode] = useState<'basic' | 'intermediate'>('basic');

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BeltPill />
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Training Hub</h1>
            <p className="text-sm text-muted-foreground">Practice, learn, and grow</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <TabsRoot defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="theory">Theory</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Line Drill Practice */}
            <BrandCard hover className="p-6" onClick={() => setShowLineDrillModal(true)}>
              <Target className="h-8 w-8 text-accent mb-3" strokeWidth={1.5} />
              <CardTitle className="text-base mb-2">Line Drill Practice</CardTitle>
              <CardDescription className="mb-4">
                Practice fundamental techniques with randomized drills
              </CardDescription>
              <BrandButton variant="outline" size="sm">
                <Play className="h-4 w-4" />
                Start Practice
              </BrandButton>
            </BrandCard>

            {/* One Step Practice */}
            <BrandCard hover className="p-6" onClick={() => setShowOneStepModal(true)}>
              <Shuffle className="h-8 w-8 text-success mb-3" strokeWidth={1.5} />
              <CardTitle className="text-base mb-2">One Step Practice</CardTitle>
              <CardDescription className="mb-4">
                Randomized one step sparring drills with Korean names
              </CardDescription>
              <BrandButton variant="outline" size="sm">
                <Play className="h-4 w-4" />
                Start Practice
              </BrandButton>
            </BrandCard>

            {/* Forms Library */}
            <BrandCard hover className="p-6">
              <Video className="h-8 w-8 text-midnight-600 mb-3" strokeWidth={1.5} />
              <CardTitle className="text-base mb-2">Forms Library</CardTitle>
              <CardDescription className="mb-4">
                Watch video demonstrations of all forms
              </CardDescription>
              <BrandButton variant="outline" size="sm">
                <Video className="h-4 w-4" />
                Browse Videos
              </BrandButton>
            </BrandCard>

            {/* Theory */}
            <BrandCard hover className="p-6">
              <BookOpen className="h-8 w-8 text-warning mb-3" strokeWidth={1.5} />
              <CardTitle className="text-base mb-2">Knowledge Base</CardTitle>
              <CardDescription className="mb-4">
                Study theory, terminology, and history
              </CardDescription>
              <BrandButton variant="outline" size="sm">
                <BookOpen className="h-4 w-4" />
                Start Reading
              </BrandButton>
            </BrandCard>
          </div>
        </TabsContent>

        <TabsContent value="video">
          <EmptyState
            icon={Video}
            title="Video Library"
            description="Browse form demonstrations and instructional videos"
            actionLabel="Coming Soon"
          />
        </TabsContent>

        <TabsContent value="practice">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BrandCard hover className="p-6" onClick={() => setShowLineDrillModal(true)}>
              <Target className="h-8 w-8 text-accent mb-3" strokeWidth={1.5} />
              <CardTitle className="text-base mb-2">Line Drill Practice</CardTitle>
              <CardDescription className="mb-4">
                Practice fundamental techniques with randomized drills
              </CardDescription>
              <BrandButton variant="outline" size="sm">
                <Play className="h-4 w-4" />
                Start Practice
              </BrandButton>
            </BrandCard>

            <BrandCard hover className="p-6" onClick={() => setShowOneStepModal(true)}>
              <Shuffle className="h-8 w-8 text-success mb-3" strokeWidth={1.5} />
              <CardTitle className="text-base mb-2">One Step Practice</CardTitle>
              <CardDescription className="mb-4">
                Randomized one step sparring drills with Korean names
              </CardDescription>
              <BrandButton variant="outline" size="sm">
                <Play className="h-4 w-4" />
                Start Practice
              </BrandButton>
            </BrandCard>
          </div>
        </TabsContent>

        <TabsContent value="theory">
          <EmptyState
            icon={BookOpen}
            title="Theory & Concepts"
            description="Learn terminology, history, and key concepts"
            actionLabel="Coming Soon"
          />
        </TabsContent>
      </TabsRoot>

      {/* Line Drill Modal */}
      {showLineDrillModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl max-h-[70vh] rounded-2xl bg-card shadow-card overflow-hidden flex flex-col">
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold">Line Drill Practice</h2>
              <button
                onClick={() => setShowLineDrillModal(false)}
                className="rounded-xl p-2 hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="text-center mb-8">
                <div className="text-4xl font-semibold text-foreground mb-2">중단 정권 지르기</div>
                <div className="text-xl text-muted-foreground">Joong Dan Kong Kyuck</div>
                <div className="text-sm text-muted-foreground mt-1">(Middle Section Punch)</div>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <BrandButton variant="outline">
                  <ChevronLeft className="h-5 w-5" />
                  Previous
                </BrandButton>
                <BrandButton>
                  <Shuffle className="h-5 w-5" />
                  Random
                </BrandButton>
                <BrandButton variant="outline">
                  Next
                  <ChevronRight className="h-5 w-5" />
                </BrandButton>
              </div>
              <div className="flex justify-center">
                <KeyboardHints hints={[
                  { key: '←', label: 'Previous' },
                  { key: 'Space', label: 'Random' },
                  { key: '→', label: 'Next' },
                ]} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* One Step Modal */}
      {showOneStepModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl max-h-[70vh] rounded-2xl bg-card shadow-card overflow-hidden flex flex-col">
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold">One Step Practice</h2>
              <button
                onClick={() => setShowOneStepModal(false)}
                className="rounded-xl p-2 hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex justify-center mb-6">
                <div className="inline-flex rounded-2xl bg-muted p-1">
                  <button
                    onClick={() => setOneStepMode('basic')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      oneStepMode === 'basic'
                        ? 'bg-midnight-700 text-white shadow-sm'
                        : 'text-midnight-700 hover:bg-midnight-50 dark:text-midnight-300 dark:hover:bg-midnight-900/30'
                    }`}
                  >
                    Basic
                  </button>
                  <button
                    onClick={() => setOneStepMode('intermediate')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      oneStepMode === 'intermediate'
                        ? 'bg-midnight-700 text-white shadow-sm'
                        : 'text-midnight-700 hover:bg-midnight-50 dark:text-midnight-300 dark:hover:bg-midnight-900/30'
                    }`}
                  >
                    Intermediate
                  </button>
                </div>
              </div>
              <div className="text-center mb-8">
                <div className="text-4xl font-semibold text-foreground mb-2">일수식 대련</div>
                <div className="text-xl text-muted-foreground">Il Soo Sik #3</div>
                <div className="text-sm text-muted-foreground mt-1">(One Step Sparring #3)</div>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <BrandButton>
                  <Shuffle className="h-5 w-5" />
                  Next Random
                </BrandButton>
              </div>
              <div className="flex justify-center">
                <KeyboardHints hints={[
                  { key: 'Space', label: 'Next' },
                  { key: 'N', label: 'Random' },
                ]} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
