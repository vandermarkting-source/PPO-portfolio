/** @source timeline4 */

import PageNavigation from '@/components/PageNavigation';





const PopPage = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold font-heading mb-4">Ontwikkelvragen & Persoonlijk Ontwikkelplan</h1>
            <div className="text-left text-muted-foreground space-y-4">
              <p>
                De afgelopen periode, door de DISC-test en de feedback die ik kreeg, ben ik beter gaan nadenken over wat ik wil ontwikkelen. Er kwamen een paar dingen naar voren die ik zelf ook herken. Het belangrijkste is dat ik soms te snel wil. Als ik ergens enthousiast over ben, wil ik het liefst dat het direct gebeurt. Daardoor schiet de planning er nog wel eens bij in. Ik begin vaak gewoon en zie daarna wel waar het schip strandt. Dat werkt soms prima, maar ik merk dat ik meer rust krijg als ik van tevoren beter nadenk over hoe ik iets ga aanpakken.
              </p>
              <p>
                Daarnaast kwam in de feedback en de test terug dat ik vaak de leiding neem. Dat klopt ook wel. Ik merk dat ik snel initiatief neem als iets stilvalt of als er geen duidelijke richting is. Dat doe ik niet omdat ik de baas wil spelen, maar omdat ik graag wil dat dingen goed lopen. In volleybal herken ik dat ook: als aanvoerder probeer ik het team scherp te houden en elkaar aan te moedigen. Tegelijk merk ik dat ik daarin soms wat te veel wil sturen. Niet iedereen werkt hetzelfde, en soms is het beter om even af te wachten of anderen de ruimte te laten om iets op te pakken. Dat is iets waar ik me meer bewust van ben geworden en waarin ik wil groeien.
              </p>
              <p>
                Tot slot wil ik beter leren omgaan met mijn energie. Ik steek graag tijd in van alles tegelijk, maar daardoor is het soms teveel en verlies ik een beetje wat echt belangrijk is. Ik wil leren om beter te kiezen waar ik mijn aandacht op richt, zodat ik focus houd op wat echt belangrijk is.
              </p>
            </div>
          </div>

          {/* Ontwikkelvragen */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-heading mb-6">Ontwikkelvragen</h2>
            <div className="rounded-lg border p-6 bg-card">
              <ul className="space-y-2 text-foreground list-disc pl-6">
                <li>Hoe kan ik leren om niet te snel te beginnen, maar eerst beter te plannen wat ik wil doen?</li>
                <li>Hoe kan ik anderen meer ruimte geven als ik leiding neem, in plaats van alles zelf te willen doen?</li>
                <li>Hoe kan ik beter omgaan met mijn energie, zodat ik me focus op wat echt belangrijk is?</li>
              </ul>
            </div>
          </section>



          {/* POP Items */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-heading mb-6">Persoonlijk Ontwikkelplan (POP)</h2>
            <div className="rounded-lg border p-6 bg-card">
              <div className="overflow-x-auto">
                <table className="w-full text-sm rounded-xl overflow-hidden border border-blue-100">
                  <thead className="bg-blue-50 text-slate-700">
                    <tr>
                      <th className="text-left p-3 font-semibold">Ontwikkelpunt</th>
                      <th className="text-left p-3 font-semibold">Plan</th>
                      <th className="text-left p-3 font-semibold">Succes zichtbaar als…</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    <tr className="hover:bg-blue-50/40 transition">
                      <td className="p-3 font-medium">Beter plannen en vooruitdenken</td>
                      <td className="p-3">
                        <div className="space-y-2 text-muted-foreground">
                          <div>Waarom: Ik werk vaak op gevoel en begin te laat</div>
                          <div>Acties: Wekelijkse planning met vaste werkmomenten</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-xs border border-blue-200">Tijd: 2 maanden</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">Ik begin op tijd en hoef minder te haasten</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition">
                      <td className="p-3 font-medium">Leiding leren delen</td>
                      <td className="p-3">
                        <div className="space-y-2 text-muted-foreground">
                          <div>Waarom: Ik neem vaak de leiding, ook als dat niet hoeft</div>
                          <div>Acties: Taken bewust verdelen en anderen verantwoordelijkheid geven</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-xs border border-blue-200">Tijd: tijdens schoolprojecten</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">Teamleden voelen zich meer betrokken en verantwoordelijk</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition">
                      <td className="p-3 font-medium">Energie beter verdelen</td>
                      <td className="p-3">
                        <div className="space-y-2 text-muted-foreground">
                          <div>Waarom: Ik wil te veel tegelijk doen</div>
                          <div>Acties: Maximaal 3 actieve projecten en rustmomenten plannen</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-xs border border-blue-200">Tijd: 3 maanden</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">Ik voel me niet gestresst doordat niet alles tegelijk moet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>


        </div>

        <PageNavigation
          previousPage={{
            title: "360° Feedback",
            href: "/feedback"
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

export default PopPage;
