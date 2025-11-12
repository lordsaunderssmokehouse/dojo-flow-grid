import { BrandCard } from '@/components/BrandCard';
import { BrandButton } from '@/components/BrandButton';
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/BrandTabs';
import { Calendar as CalendarIcon, MapPin, Clock, Users, GraduationCap } from 'lucide-react';

export default function Calendar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight-50/30 to-background dark:from-midnight-950/20">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-foreground">Studio Calendar</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Upcoming classes, tests, and events at Tang Soo Do Studio
          </p>
        </div>

        <TabsRoot defaultValue="upcoming">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="tests">Belt Tests</TabsTrigger>
            <TabsTrigger value="monthly">Monthly View</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Green Belt Test */}
              <BrandCard className="p-6 border-l-4 border-l-warning">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warning/10">
                      <GraduationCap className="h-5 w-5 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Green Belt Test</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Belt advancement testing for Green Belt students
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning border border-warning/20">
                      Test
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                      Invited
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">12/14/2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">10:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">Main Dojang</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">8 participants</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">Instructor:</span> Master Kim
                  </p>
                  <div className="flex gap-3">
                    <BrandButton className="flex-1">Accept</BrandButton>
                    <BrandButton variant="outline" className="flex-1">Decline</BrandButton>
                  </div>
                </div>
              </BrandCard>

              {/* Advanced Forms Class */}
              <BrandCard className="p-6 border-l-4 border-l-success">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10">
                      <GraduationCap className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Advanced Forms Class</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Focus on Jang Gun Hyung and advanced techniques
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                      Class
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                      Registered
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">11/19/2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">Training Hall A</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">15 participants</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">Instructor:</span> Instructor Lee
                  </p>
                  <BrandButton variant="outline" className="w-full">View Details</BrandButton>
                </div>
              </BrandCard>

              {/* Self-Defense Seminar */}
              <BrandCard className="p-6 border-l-4 border-l-midnight-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midnight-100 dark:bg-midnight-900/50">
                      <Users className="h-5 w-5 text-midnight-700 dark:text-midnight-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Self-Defense Seminar</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Practical self-defense applications of Tang Soo Do
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-midnight-100 text-midnight-700 dark:bg-midnight-900/50 dark:text-midnight-300 border border-midnight-200 dark:border-midnight-800">
                      Seminar
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground border border-border">
                      Available
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">11/24/2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">2:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">Main Dojang</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">25 participants</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">Instructor:</span> Master Kim
                  </p>
                  <BrandButton className="w-full">Register</BrandButton>
                </div>
              </BrandCard>

              {/* Black Belt Promotion Ceremony */}
              <BrandCard className="p-6 border-l-4 border-l-warning">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warning/10">
                      <GraduationCap className="h-5 w-5 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Black Belt Promotion Ceremony</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Celebrating our new black belt graduates
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning border border-warning/20">
                      Ceremony
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning border border-warning/20">
                      Invited
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">11/30/2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">Main Dojang</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">50 participants</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">Instructor:</span> Master Kim
                  </p>
                  <div className="flex gap-3">
                    <BrandButton className="flex-1">Accept</BrandButton>
                    <BrandButton variant="outline" className="flex-1">Decline</BrandButton>
                  </div>
                </div>
              </BrandCard>
            </div>
          </TabsContent>

          <TabsContent value="tests">
            <div className="text-center py-12">
              <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Belt Tests View</h3>
              <p className="text-sm text-muted-foreground">Filter and view upcoming belt tests</p>
            </div>
          </TabsContent>

          <TabsContent value="monthly">
            <div className="text-center py-12">
              <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Monthly Calendar</h3>
              <p className="text-sm text-muted-foreground">Full calendar view of all events</p>
            </div>
          </TabsContent>
        </TabsRoot>
      </div>
    </div>
  );
}
