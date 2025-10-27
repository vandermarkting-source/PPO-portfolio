/** @source content2 */
import React from 'react';
import { FileText, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageNavigation from '@/components/PageNavigation';

const CvPage = () => {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Curriculum Vitae
          </Badge>
          <h1 className="text-4xl font-bold font-heading mb-4">CV</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mijn curriculum vitae en afsluitende gedachten over dit portfolio 
            en mijn toekomstplannen.
          </p>
        </div>

        {/* Personal Info */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">T</span>
              </div>
              <div>
                <CardTitle className="text-3xl font-heading">Thom van der Mark</CardTitle>
                <CardDescription className="text-lg">Student HBO Organisatie, Recht & Management</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span>thom.vandermark@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <span>+31 6 12345678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span>Nederland</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span>Geboren in 2006</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />
              Opleiding
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold">HBO Organisatie, Recht & Management</h3>
                <Badge variant="outline" className="bg-green-500/10 text-green-700">
                  Huidig
                </Badge>
              </div>
              <p className="text-muted-foreground mb-2">2025 - Heden</p>
              <p className="text-sm text-muted-foreground">
                Overstap naar HBO ORM voor betere aansluiting bij mijn interesses 
                en toekomstplannen in management en organisatie.
              </p>
            </div>
            <div className="border-l-2 border-muted pl-6">
              <h3 className="text-lg font-semibold mb-2">VWO</h3>
              <p className="text-muted-foreground mb-2">2018 - 2024</p>
              <p className="text-sm text-muted-foreground">
                Afgerond in 2024. Brede algemene vorming met focus op 
                maatschappelijke vakken en talen.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Briefcase className="w-6 h-6" />
              Ervaring
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-lg font-semibold mb-2">Eerste Ondernemerschap</h3>
              <p className="text-muted-foreground mb-2">2016</p>
              <p className="text-sm text-muted-foreground">
                Eerste ervaring met ondernemerschap op jonge leeftijd. 
                Leerde over initiatief nemen, verantwoordelijkheid en 
                zakelijke principes.
              </p>
            </div>
            <div className="border-l-2 border-muted pl-6">
              <h3 className="text-lg font-semibold mb-2">Projectleiding & Teamwerk</h3>
              <p className="text-muted-foreground mb-2">Schoolperiode</p>
              <p className="text-sm text-muted-foreground">
                Verschillende leiderschapsrollen in schoolprojecten en 
                groepswerk. Ontwikkeling van organisatorische vaardigheden.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Award className="w-6 h-6" />
              Vaardigheden
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-3">Sterke Punten</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Betrouwbaarheid</Badge>
                  <Badge variant="outline">Analytisch denken</Badge>
                  <Badge variant="outline">Leiderschap</Badge>
                  <Badge variant="outline">Communicatie</Badge>
                  <Badge variant="outline">Initiatief</Badge>
                  <Badge variant="outline">Teamwork</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Ontwikkelgebieden</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Digitale Marketing</Badge>
                  <Badge variant="outline">Financiële Kennis</Badge>
                  <Badge variant="outline">Netwerken</Badge>
                  <Badge variant="outline">Presenteren</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CV PDF Link */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="w-6 h-6" />
              CV (PDF)
            </CardTitle>
            <CardDescription>Open mijn CV als PDF in een nieuw tabblad</CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href="/CV Thom van der Mark 2025 copy.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border bg-background hover:bg-muted text-foreground"
            >
              <FileText className="w-4 h-4" /> Open CV
            </a>
          </CardContent>
        </Card>

        <PageNavigation
          previousPage={{
            title: "Ontwikkelplan",
            href: "/pop"
          }}
          nextPage={{
            title: "Reflectie moduul 1",
            href: "/reflectie-moduul-1"
          }}
        />
      </div>
    </div>
  );
};

export default CvPage;
