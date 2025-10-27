import React from 'react';
import PageNavigation from '@/components/PageNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ReflectieModule1Page = () => {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold font-heading mb-4">Reflectie moduul 1</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Terugblik op moduul 1: inzichten, leerpunten en plannen voor vervolg.
          </p>
        </div>


        {/* Content placeholder */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Reflectie</CardTitle>
            <CardDescription>Persoonlijke terugblik en leerpunten uit Module 1</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              De afgelopen periode heb ik veel nagedacht over wie ik ben en hoe ik werk. Door de DISC-test, de Belbin-test, mijn levensloop en de feedback van anderen begon ik mezelf beter te begrijpen. Ik zie nu duidelijker welke kanten van mij sterk zijn, maar ook waar ik nog kan groeien.
            </p>
            <p className="text-muted-foreground mb-4">
              Wat steeds terugkomt, is dat ik iemand ben die graag initiatief neemt en vooruit wil. Als iets vastloopt, wil ik het oplossen. Dat zit gewoon in me. Ik hou ervan als dingen lopen, als er een plan ligt en als we samen ergens naartoe werken. Tegelijk weet ik ook dat ik soms te snel ga. Ik heb de neiging om direct te beginnen zonder goed na te denken over de stappen erna. Dat werkt soms prima, maar het kost me ook rust en overzicht.
            </p>
            <p className="text-muted-foreground mb-4">
              Uit de DISC-test kwam naar voren dat ik iemand ben die resultaatgericht is en graag de controle houdt. Dat herken ik. Ik wil dat dingen goed gaan, en ik leg de lat vaak hoog voor mezelf. De keerzijde daarvan is dat ik het lastig vind om los te laten of om te accepteren dat iets “goed genoeg” is. De feedback van anderen bevestigde dat. Ze zien mij als iemand die veel verantwoordelijkheid neemt, maar die soms ook te veel zelf wil doen. Ik probeer daar bewuster mee om te gaan. Vooral bij groepsopdrachten en in volleybal als aanvoerder merk ik dat ik beter wil leren hoe ik anderen meer ruimte geef, zonder mijn betrokkenheid te verliezen.
            </p>
            <p className="text-muted-foreground mb-4">
              Een ander punt waar ik aan wil werken is het verdelen van mijn energie. Ik wil graag van alles tegelijk en steek daar veel tijd in, maar daardoor raak ik soms het overzicht kwijt over wat echt belangrijk is. De komende periode wil ik leren om beter te kiezen waar ik mijn aandacht op richt, zodat ik meer rust en focus houd.
            </p>
            <p className="text-muted-foreground mb-4">
              In mijn Persoonlijk Ontwikkelplan (POP) ga ik de komende tijd met die punten aan de slag. Ik wil beter leren plannen voor ik ergens aan begin, ik wil oefenen met loslaten en anderen meer betrekken, en ik wil bewust omgaan met mijn tijd en energie. Dat zijn geen dingen die je van de ene op de andere dag verandert, maar het zijn stappen waar ik me de komende maanden op ga richten.
            </p>
            <p className="text-muted-foreground">
              Als ik nu antwoord moet geven op de vraag “Wie ben ik?”, dan zou ik zeggen: Ik ben iemand die graag vooruitgaat, die houdt van uitdaging en van dingen goed doen. Iemand die initiatief neemt, verantwoordelijkheid voelt en energie krijgt van nieuwe ideeën. Tegelijk weet ik van mezelf dat ik soms weinig ruimte laat voor anderen, omdat ik het graag op mijn manier wil doen en snel resultaat wil zien. Dat is iets waar ik de komende tijd bewust aan wil werken — leren loslaten, beter luisteren en anderen meer de kans geven om hun eigen rol te pakken. Ook wil ik meer aandacht besteden aan mijn planning, zodat ik niet alleen hard werk, maar ook slim. Dat zijn stappen die ik nu ga zetten, terwijl ik gewoon mezelf blijf: iemand die wil leren, groeien en vooruit wil.
            </p>
          </CardContent>
        </Card>

        <PageNavigation
          previousPage={{
            title: "Ontwikkelplan",
            href: "/pop"
          }}
          nextPage={{
            title: "Home",
            href: "/"
          }}
        />
      </div>
    </div>
  );
};

export default ReflectieModule1Page;