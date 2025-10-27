/** @source hero196 */

import { Link } from 'react-router-dom';
import { ArrowRight, User, Calendar, MessageSquare, Target, Home, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageNavigation from '@/components/PageNavigation';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted bg-[url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center bg-no-repeat py-20 relative">
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container relative">
          <div className="flex w-full flex-col gap-14">
            <div className="flex w-full max-w-[80rem] flex-col items-center gap-6">
              <Badge
                asChild
                variant="outline"
                className="bg-background px-3 gap-2.5 rounded-full py-1.5 text-sm font-medium leading-[1.2]"
              >
                <span>
                  Professionele & Persoonlijke Ontwikkeling
                  <ArrowRight className="size-base" />
                </span>
              </Badge>
              <h1 className="text-center text-[2.5rem] font-bold leading-[.97] sm:text-[3.5rem] md:text-[4rem] font-heading">
                Portfolio • Thom van der Mark
              </h1>
              <div className="flex w-full max-w-[36rem] flex-col items-center justify-center gap-6 pt-5">
                <p className="text-foreground text-center text-[1.25rem] font-medium leading-snug">
                  De vraag in PPO Module 1 is: Wie ben ik? Ik beschrijf mijn
                  levensloop en de gebeurtenissen die mij vormen. Met DISC en
                  Belbin kijk ik naar mijn manier van samenwerken, en met
                  feedback leer ik hoe anderen mij zien. Het doel: begrijpen wat
                  mij drijft, mijn sterke kanten benutten en dat meenemen in wat
                  ik ga doen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-32">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Levensloop</CardTitle>
                <CardDescription>
                  Mijn reis van 2006 tot 2025, met belangrijke mijlpalen en ervaringen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/levensloop">
                    Bekijk tijdlijn
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>DISC Analyse</CardTitle>
                <CardDescription>
                  Inzicht in mijn persoonlijkheid en werkstijl volgens het DISC-model.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/disc">
                    Lees meer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Belbin Teamrollen</CardTitle>
                <CardDescription>
                  Analyse van mijn natuurlijke teamrollen en bijdrage in groepswerk.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/belbin">
                    Bekijk analyse
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>360° Feedback</CardTitle>
                <CardDescription>
                  Feedback van collega's, vrienden en familie over mijn sterke punten.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/feedback">
                    Bekijk feedback
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Ontwikkelplan (POP)</CardTitle>
                <CardDescription>
                  Mijn persoonlijke ontwikkelingsplan met doelen en actiepunten.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/pop">
                    Bekijk plan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Reflectie moduul 1</CardTitle>
                <CardDescription>
                  Mijn reflectie op Module 1 en afsluiting van dit portfolio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/reflectie-moduul-1">
                    Bekijk reflectie
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <PageNavigation
            nextPage={{
              title: "Levensloop",
              href: "/levensloop"
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
