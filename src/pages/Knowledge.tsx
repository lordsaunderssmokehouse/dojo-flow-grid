import { BrandCard, CardTitle, CardDescription } from '@/components/BrandCard';
import { BrandButton } from '@/components/BrandButton';
import { BookOpen, Lightbulb, History, Languages } from 'lucide-react';

export default function Knowledge() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Knowledge Base</h1>
        <p className="text-muted-foreground">Study theory, terminology, and history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Eight Key Concepts */}
        <BrandCard hover className="p-6">
          <Lightbulb className="h-10 w-10 text-warning mb-4" strokeWidth={1.5} />
          <CardTitle className="text-lg mb-2">Eight Key Concepts</CardTitle>
          <CardDescription className="mb-4">
            Master the fundamental principles that guide Tang Soo Do practice
          </CardDescription>
          <div className="space-y-2 mb-4">
            <div className="text-sm">
              <span className="font-medium">1.</span> Yong Gi (Courage)
            </div>
            <div className="text-sm">
              <span className="font-medium">2.</span> Chung Shin Tong Il (Concentration)
            </div>
            <div className="text-sm">
              <span className="font-medium">3.</span> In Neh (Endurance)
            </div>
            <div className="text-sm text-muted-foreground">+ 5 more concepts...</div>
          </div>
          <BrandButton variant="outline" size="sm">
            <BookOpen className="h-4 w-4" />
            Study All
          </BrandButton>
        </BrandCard>

        {/* Terminology */}
        <BrandCard hover className="p-6">
          <Languages className="h-10 w-10 text-accent mb-4" strokeWidth={1.5} />
          <CardTitle className="text-lg mb-2">Book Study - Terminology</CardTitle>
          <CardDescription className="mb-4">
            Learn Korean terminology for techniques, stances, and commands
          </CardDescription>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">중단 (Joong Dan)</span>
              <span className="font-medium">Middle Section</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">정권 (Jung Kwon)</span>
              <span className="font-medium">Straight Punch</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">지르기 (Jirugi)</span>
              <span className="font-medium">Thrust/Strike</span>
            </div>
          </div>
          <BrandButton variant="outline" size="sm">
            <Languages className="h-4 w-4" />
            Browse Terms
          </BrandButton>
        </BrandCard>

        {/* History */}
        <BrandCard hover className="p-6">
          <History className="h-10 w-10 text-success mb-4" strokeWidth={1.5} />
          <CardTitle className="text-lg mb-2">Book Study - History & Foundations</CardTitle>
          <CardDescription className="mb-4">
            Understand the rich history and philosophical foundations of Tang Soo Do
          </CardDescription>
          <div className="space-y-2 mb-4">
            <div className="text-sm">
              <span className="font-medium">Origins:</span> Ancient Korean martial arts
            </div>
            <div className="text-sm">
              <span className="font-medium">Founder:</span> Grandmaster Hwang Kee (1914-2002)
            </div>
            <div className="text-sm">
              <span className="font-medium">Philosophy:</span> Mind, body, spirit harmony
            </div>
          </div>
          <BrandButton variant="outline" size="sm">
            <History className="h-4 w-4" />
            Learn More
          </BrandButton>
        </BrandCard>

        {/* General Study */}
        <BrandCard hover className="p-6">
          <BookOpen className="h-10 w-10 text-midnight-600 mb-4" strokeWidth={1.5} />
          <CardTitle className="text-lg mb-2">General Study Materials</CardTitle>
          <CardDescription className="mb-4">
            Additional resources, belt requirements, and study guides
          </CardDescription>
          <div className="space-y-2 mb-4">
            <div className="text-sm">Belt Requirements by Rank</div>
            <div className="text-sm">Testing Procedures</div>
            <div className="text-sm">Dojang Etiquette</div>
          </div>
          <BrandButton variant="outline" size="sm">
            <BookOpen className="h-4 w-4" />
            View All
          </BrandButton>
        </BrandCard>
      </div>

      {/* Example detailed content section */}
      <div className="mt-12">
        <BrandCard className="p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Eight Key Concepts of Tang Soo Do</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. 용기 (Yong Gi) - Courage</h3>
              <p className="text-muted-foreground mb-2">
                The ability to face fear, danger, or adversity with confidence and bravery. In Tang Soo Do, courage extends beyond physical confrontation to include moral courage and the strength to do what is right.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. 충신통일 (Chung Shin Tong Il) - Concentration</h3>
              <p className="text-muted-foreground mb-2">
                The unification of mind and body. This principle emphasizes complete focus and presence in every technique, form, and moment of practice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. 인내 (In Neh) - Endurance</h3>
              <p className="text-muted-foreground mb-2">
                The capacity to persist through challenges, both physical and mental. Tang Soo Do training builds stamina and the will to continue despite difficulty.
              </p>
            </div>

            <div className="text-sm text-muted-foreground pt-4 border-t">
              <p>Continue studying to learn about: Honesty/Integrity, Respect/Obedience, Self-Control, Humility, and Indomitable Spirit</p>
            </div>
          </div>
        </BrandCard>
      </div>
    </div>
  );
}
