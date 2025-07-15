export interface Algorithm {
  sectionId: string;
  heading: string;
  steps: string;
}

export interface SearchResults {
  searchPattern: string;
  totalOccurrencesFound: number;
  occurrences: Array<{
    sectionId: string;
    heading: string;
    matches: string[];
  }>;
}
