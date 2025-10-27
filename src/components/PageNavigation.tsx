import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageNavigationProps {
  previousPage?: {
    title: string;
    href: string;
  };
  nextPage?: {
    title: string;
    href: string;
  };
}

const PageNavigation = ({ previousPage, nextPage }: PageNavigationProps) => {
  return (
    <div className="flex justify-between items-center py-12 border-t">
      <div className="flex-1">
        {previousPage && (
          <Button asChild variant="outline" className="gap-2">
            <Link to={previousPage.href}>
              <ChevronLeft className="w-4 h-4" />
              Vorige: {previousPage.title}
            </Link>
          </Button>
        )}
      </div>
      <div className="flex-1 text-right">
        {nextPage && (
          <Button asChild variant="outline" className="gap-2">
            <Link to={nextPage.href}>
              Volgende: {nextPage.title}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;
