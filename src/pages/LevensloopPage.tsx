/** @source timeline6 */

import { levensloopData } from '@/data/levensloop';
import PageNavigation from '@/components/PageNavigation';

const LevensloopPage = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-heading mb-4">Levensloop</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mijn reis van 2006 tot 2025, met belangrijke mijlpalen en ervaringen 
            die mij hebben gevormd tot wie ik vandaag ben.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Content Column */}
          <div>
            {levensloopData.map((item) => (
              <article
                key={item.id}
                id={item.id}
                data-year={item.year}
                className="relative flex flex-col justify-center overflow-hidden border-b py-12 last:border-b-0 scroll-mt-24"
              >
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {item.year.toString().slice(-2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-semibold text-primary mb-2 font-heading">
                      {item.year} - {item.title}
                    </h2>
                    <div 
                      className="mt-6 text-muted-foreground prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <PageNavigation
          previousPage={{
            title: "Home",
            href: "/"
          }}
          nextPage={{
            title: "DISC",
            href: "/disc"
          }}
        />
      </div>
    </div>
  );
};

export default LevensloopPage;
