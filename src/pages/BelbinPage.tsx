/** @source belbin-page */

import PageNavigation from '@/components/PageNavigation';




export default function BelbinPage() {
  // verwijderde BELBIN_DATA/topRoles en screenshot state
  const strengths = [
    "Betrouwbaar en taakgericht: Ik vind het belangrijk dat we iets van kwaliteit leveren.",
    "Initiatiefrijk: Ik zoek altijd naar een innovatief idee om een probleem op te lossen",
    "Samenwerkingsgericht: Ik werk graag samen en neem daarin wel het voortouw.",
  ];
  const developmentPoints = [
    "Prioriteren en plannen: Niet te veel tegelijk willen doen.",
    "Structuur houden: Doordat ik graag nieuwe dingen verzin kan het zijn dat ik de kern van de opdracht verlies, dus ik moet goed de hoofdzaak scherp houden.",
    "Luisteren naar groepsgenoten: Niet te snel in een focus op je eigen idee ingaan, daardoor lijken andere ideëen minder.",
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-heading mb-4">Belbin Teamrollen</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ik heb de Belbin test gedaan op 123test.nl en daaruit kwam dat ik een bedrijfsman en een brondonderzoeker ben. Dit komt overeen met mijn Disc en 360 graden feedback. De punten die ik hier vooral uit haal staan hieronder.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Key Insights */}
          <section>
            <div className="grid gap-6">
              <div className="rounded-lg border p-6 bg-card">
                <h2 className="text-2xl font-semibold font-heading">Kerninzichten</h2>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Sterke punten</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {strengths.map((s) => (
                        <li key={s}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Ontwikkelpunten</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {developmentPoints.map((s) => (
                        <li key={s}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-6 bg-card">
                <h2 className="text-2xl font-semibold font-heading mb-2">Persoonlijke Reflectie</h2>
                <p className="text-muted-foreground">
                  Ik herken mezelf als Bedrijfsman en Brononderzoeker. Ik wil graag
                  dingen in gang zetten en afronden. Mijn valkuil is dat ik soms te veel
                  tegelijk wil aanpakken. Daarom wil ik met duidelijke prioriteiten en
                  een gestructureerde uitvoer gaan werken, zodat ik niet teveel tegelijk doe
                  en focus houd op wat echt belangrijk is.
                </p>
              </div>
            </div>
          </section>
        </div>

        <PageNavigation
          previousPage={{ title: "DISC", href: "/disc" }}
          nextPage={{ title: "360° Feedback", href: "/feedback" }}
        />
      </div>
    </div>
  );
}