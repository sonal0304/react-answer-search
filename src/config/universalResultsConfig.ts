import { StandardCard } from '../components/cards/StandardCard';
import { VerticalConfig } from '../components/UniversalResults';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {

  faqs: {
    label: 'FAQs',
    viewAllButton: true,
    cardConfig: {
      CardComponent: StandardCard,
      showOrdinal: false
    }
  },
  
  locations: {
    label: 'Locations',
  },

  expertise: {
    label: 'Expertise',
  },
  technology_: {
    label: 'Technology',
  },
  industries: {
    label: 'Industries',
  },
  services: {
    label: 'Services',
  }
}