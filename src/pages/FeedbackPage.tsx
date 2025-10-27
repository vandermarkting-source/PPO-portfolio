/** @source timeline4 */
import { useEffect, useState } from 'react';
import { MessageSquare, Users, Heart, ChevronLeft, ChevronRight, Quote, FileSpreadsheet, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import PageNavigation from '@/components/PageNavigation';

const FEEDBACK_DATA = [
  {
    category: "Collega's",
    icon: Users,
    color: "bg-blue-500/10 text-blue-700 border-blue-200",
    feedback: [
      {
        trait: "Betrouwbaarheid",
        description: "Altijd op tijd met projecten en houdt afspraken. Collega's kunnen op mij rekenen.",
        rating: 5
      },
      {
        trait: "Samenwerking",
        description: "Werkt goed in teamverband en helpt anderen waar nodig. Goede communicator.",
        rating: 4
      },
      {
        trait: "Initiatief",
        description: "Neemt graag het voortouw bij nieuwe projecten en komt met creatieve oplossingen.",
        rating: 5
      }
    ]
  },
  {
    category: "Vrienden",
    icon: Heart,
    color: "bg-green-500/10 text-green-700 border-green-200",
    feedback: [
      {
        trait: "Loyaliteit",
        description: "Een trouwe vriend die er altijd is wanneer je hem nodig hebt. Betrouwbaar en eerlijk.",
        rating: 5
      },
      {
        trait: "Humor",
        description: "Heeft een goed gevoel voor humor en kan de sfeer altijd opvrolijken.",
        rating: 4
      },
      {
        trait: "Luisterend oor",
        description: "Luistert goed naar anderen en geeft doordachte adviezen. Empathisch en begripvol.",
        rating: 5
      }
    ]
  },
  {
    category: "Familie",
    icon: Heart,
    color: "bg-purple-500/10 text-purple-700 border-purple-200",
    feedback: [
      {
        trait: "Verantwoordelijkheid",
        description: "Neemt verantwoordelijkheid serieus en helpt graag mee met familiezaken.",
        rating: 5
      },
      {
        trait: "Ambitie",
        description: "Heeft duidelijke doelen en werkt hard om deze te bereiken. Inspirerend voor anderen.",
        rating: 4
      },
      {
        trait: "Zorgzaamheid",
        description: "Denkt aan anderen en toont interesse in het welzijn van familieleden.",
        rating: 5
      }
    ]
  }
];

const FeedbackPage = () => {




  // Roterende quotes
  const QUOTES = [
    { text: 'Neemt snel initiatief en zorgt dat dingen gebeuren.', author: 'Vriend' },
    { text: 'Wil het graag goed doen, soms té.', author: 'Familie' },
    { text: 'Een fijne teamgenoot die het overzicht houdt.', author: 'Teamgenoot' }
  ];

  const [activeQuote, setActiveQuote] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % QUOTES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    // Referentie zodat FEEDBACK_DATA als gelezen geldt voor TS
    void FEEDBACK_DATA.length;
  }, []);

  return (
  <div className="py-16">
    <div className="container">
      {/* Header */}
      <div className="mb-16 text-center">
        <Badge variant="outline" className="mb-4">
          <MessageSquare className="w-4 h-4 mr-2" />
          360° Feedback
        </Badge>
        <h1 className="text-4xl font-bold font-heading mb-4">360° Feedback</h1>

      </div>

      {/* Citaten Carousel */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto rounded-lg border bg-card p-6">
          <div className="flex items-start gap-3">
            <Quote className="w-8 h-8 text-primary shrink-0" />
            <div className="flex-1">
              <p className="text-lg font-medium text-foreground">{QUOTES[activeQuote].text}</p>
              <p className="text-sm text-muted-foreground mt-2">— {QUOTES[activeQuote].author}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border bg-background hover:bg-muted"
              onClick={() => setActiveQuote((prev) => (prev - 1 + QUOTES.length) % QUOTES.length)}
              aria-label="Vorige citaat"
            >
              <ChevronLeft className="w-4 h-4" /> Vorige
            </button>
            <div className="flex items-center gap-2">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuote(i)}
                  aria-label={`Ga naar citaat ${i + 1}`}
                  className={i === activeQuote ? 'w-2.5 h-2.5 rounded-full bg-primary' : 'w-2.5 h-2.5 rounded-full bg-muted'}
                />
              ))}
            </div>
            <button
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border bg-background hover:bg-muted"
              onClick={() => setActiveQuote((prev) => (prev + 1) % QUOTES.length)}
              aria-label="Volgende citaat"
            >
              Volgende <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Jouw eigen 360° feedback-tekst */}
      <div className="mb-16">
        <div className="text-muted-foreground space-y-6 max-w-4xl mx-auto">
          <p>
            De 360° feedback die ik kreeg, was eigenlijk een mooie bevestiging van wat ik uit andere testen terug kreeg. Ik had vrienden, familie, teamgenoten en een klasgenoot gevraagd om eerlijk te zeggen hoe zij mij zien, en wat ze vinden dat ik goed doe of nog kan verbeteren. Wat ze schreven, kwam opvallend goed overeen bijvoorbeeld de DISC test maar ook hoe ik mezelf zie.
          </p>
          <p>
            Veel mensen noemden dat ik makkelijk het initiatief neem en snel de leiding pak. Dat ik iemand ben die dingen regelt en niet bang is om beslissingen te nemen. Ze zien me als iemand die doorzet, die dingen afmaakt en die zorgt dat er wat gebeurt. Dat ik betrouwbaar ben, doelgericht en graag alles goed wil doen. Dat klopt ook met wat er uit de disc test kwam.
          </p>
          <p>
            Tegelijk kwam er ook een andere kant naar voren. Meerdere mensen gaven aan dat ik misschien iets te veel zelf wil doen of te snel denk dat ik het beter kan. Dat ik mag leren om wat meer los te laten, eerder te beginnen of anderen meer mee te nemen in het proces.
          </p>
          <p>
            In de reacties over stress en tegenslag herkende ik ook veel. De meesten zeiden dat ik rustig blijf of in elk geval niet snel panikeer, al zei iemand dat ik in lastige situaties juist stil kan vallen. Dat klopt wel: ik ben niet iemand die dan meteen reageert of uit zijn dak gaat. Ik denk liever eerst even na over wat er aan de hand is.
          </p>
          <p>
            Wat me vooral opviel, was dat bijna iedereen zei dat ze het prettig vinden om met mij samen te werken. Dat ik duidelijk ben, zeg wat ik vind. Dit kan er aan de andere kant ook voor zorgen dat ik snel over mensen heen loop. Ook dit werd benoemd in de feedback en dit is iets waar ik aan wil werken.
          </p>
          <p>
            Als ik alles bij elkaar neem, laat de feedback goed zien wie ik ben. Een harde werker die graag de touwtjes in handen heeft, die doorzet en dingen voor elkaar krijgt, maar die af en toe wat meer mag vertrouwen op anderen.
          </p>
        </div>
      </div>

      {/* Antwoorden: 360° Feedback (CSV) */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border bg-card p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Antwoorden: 360° Feedback (CSV)</p>
                <p className="text-xs text-muted-foreground">Klik om te openen in een nieuw tabblad.</p>
              </div>
            </div>
            <a
              href="/360° Feedbackformulier – Thom van der Mark 3.csv"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border bg-background hover:bg-muted text-foreground"
            >
              <Download className="w-4 h-4" /> Open antwoorden
            </a>
          </div>
        </div>
      </section>

      <PageNavigation
        previousPage={{
          title: "Belbin Teamrollen",
          href: "/belbin"
        }}
        nextPage={{
          title: "Ontwikkelplan",
          href: "/pop"
        }}
      />
    </div>
  </div>
);
};

export default FeedbackPage;
