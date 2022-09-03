import UniversalSearchPage from '../pages/UniversalSearchPage';
import FAQsPage from '../pages/FAQsPage';
import { universalResultsConfig } from './universalResultsConfig';
import LocationsPage from '../pages/LocationsPage'; 
import ServicesPage from '../pages/ServicesPage';
import TechnologyPage from '../pages/TechnologyPage';
import IndustryPage from '../pages/IndustryPage';
import ExpertiesPage from '../pages/ExpertiesPage';

export const routeConfig = [
  {
    path: '/',
    exact: true,
    page: <UniversalSearchPage universalResultsConfig={universalResultsConfig} />
  },
  {
    path: '/faqs',
    page: <FAQsPage verticalKey='faqs'/>
  },
  {
    path: '/locations',
    page: <LocationsPage verticalKey='locations' />
  },

  {
    path: '/expertise',
    page: <ExpertiesPage verticalKey='expertise' />
  },

  {
    path: '/technology_',
    page: <TechnologyPage verticalKey='technology_' />
  },

  {
    path: '/industries',
    page: <IndustryPage verticalKey='industries' />
  },

  {
    path: '/services',
    page: <ServicesPage verticalKey='services' />
  },
];