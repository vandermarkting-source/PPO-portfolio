/** @source timeline4 */
import React from 'react';
import { User, FileText, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PageNavigation from '@/components/PageNavigation';



const DiscPage = () => {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            <User className="w-4 h-4 mr-2" />
            Persoonlijkheidsanalyse
          </Badge>
          <h1 className="text-4xl font-bold font-heading mb-4">DISC – Persoonlijkheidsprofiel</h1>
        </div>

        {/* Jouw eigen DISC-tekst */}
        <div className="mb-16">
          <div className="text-muted-foreground space-y-6 max-w-4xl mx-auto text-base">
            <p>
              De DISC-test liet veel dingen zien die ik bij mezelf herken. Volgens de test ben ik een Avonturier, iemand die graag initiatief neemt, snel beslist en het tempo graag hoog houdt. Dat klopt wel met hoe ik ben. Als ik ergens aan begin, wil ik niet te lang blijven praten over hoe het moet, maar gewoon beginnen. Ik hou van actie, van vooruitgang en van het gevoel dat er iets gebeurt.
            </p>
            <p>
              Wat ik ook duidelijk terugzag, is dat ik veel waarde hecht aan structuur en kwaliteit. Ik wil dat dingen kloppen, dat afspraken worden nagekomen en dat het resultaat goed is. Dat herken ik sterk bij mezelf. Als ik iets doe, wil ik het goed doen. Soms iets té goed. Dan blijf ik maar sleutelen, ook al is het eigenlijk al prima. Ik merk dat ik dat vooral doe omdat ik graag wil dat wat ik oplever klopt met wat ik in mijn hoofd heb.
            </p>
            <p>
              De test liet ook zien dat ik wat lager scoor op invloed en stabiliteit. Dat klopt ook wel. Ik hoef niet per se in het middelpunt van de aandacht te staan, en ik hou niet van eindeloos herhalen of wachten. Ik heb snel behoefte aan iets nieuws, iets wat beweegt. Dat zorgt ervoor dat ik makkelijk initiatief neem, maar het maakt het soms ook lastig om dingen echt rustig af te ronden.
            </p>
            <p>
              In de beschrijving van mijn profiel stonden ook wat valkuilen, en die herkende ik eigenlijk meteen. Ik kan ongeduldig worden als iets te langzaam gaat of als mensen het anders doen dan ik had bedacht. Dan wil ik het overnemen, gewoon omdat ik denk dat het sneller of beter kan. Het is niet uit irritatie, maar meer omdat ik graag wil dat het goed gaat. Toch weet ik dat het beter is om anderen de ruimte te geven om het op hun manier te doen. Dat is iets waar ik nog aan wil werken.
            </p>
            <p>
              De test heeft me niet echt verrast, maar hij heeft me wel geholpen om mezelf beter te begrijpen. Ik zie nu beter waarom ik in sommige situaties goed tot mijn recht kom, maar ook waarom ik soms bots met mensen die rustiger zijn of meer tijd nodig hebben. Dat inzicht helpt me om daar bewuster mee om te gaan en mezelf wat meer af te stemmen op anderen, zonder dat ik daarbij iets verlies van wie ik ben.
            </p>
          </div>
        </div>

        {/* Scorecard: DISC Profiel */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border bg-card p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Scorecard: DISC Profiel (PDF)</p>
                  <p className="text-xs text-muted-foreground">Klik om te openen in een nieuw tabblad.</p>
                </div>
              </div>
              <a
                href="/PROFILES.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border bg-background hover:bg-muted text-foreground"
              >
                <Download className="w-4 h-4" /> Open scorecard
              </a>
            </div>
          </div>
        </section>

       

        <PageNavigation
          previousPage={{
            title: "Levensloop",
            href: "/levensloop"
          }}
          nextPage={{
            title: "Belbin Teamrollen",
            href: "/belbin"
          }}
        />
      </div>
    </div>
  );
};

export default DiscPage;
