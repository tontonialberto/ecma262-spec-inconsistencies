import { writeFileSync } from 'fs';
import { Algorithm, SearchResults } from './types';

/**
 * Module 2: Find pattern occurrences in algorithms
 */
export class OccurrenceFinder {
  /**
   * Find occurrences of a regex pattern in algorithm steps
   * @param algorithms Array of parsed algorithms
   * @param pattern Regular expression pattern string
   * @param outputPath Path to write the search results JSON file
   * @returns Search results object
   */
  public findOccurrences(
    algorithms: Algorithm[], 
    pattern: string, 
    outputPath?: string
  ): SearchResults {
    const regex = new RegExp(pattern, 'g');
    const occurrences: SearchResults['occurrences'] = [];
    let totalOccurrencesFound = 0;
    
    for (const algorithm of algorithms) {
      const matches = this.findMatches(algorithm.steps, regex);
      
      if (matches.length > 0) {
        occurrences.push({
          sectionId: algorithm.sectionId,
          heading: algorithm.heading,
          matches
        });
        totalOccurrencesFound += matches.length;
      }
    }
    
    const results: SearchResults = {
      searchPattern: pattern,
      totalOccurrencesFound,
      occurrences
    };
    
    // Write to file if output path is provided
    if (outputPath) {
      writeFileSync(outputPath, JSON.stringify(results, null, 2));
      console.log(`Found ${totalOccurrencesFound} total occurrences in ${occurrences.length} sections and saved to ${outputPath}`);
    }
    
    return results;
  }
  
  /**
   * Find all matches of a regex pattern in text
   */
  private findMatches(text: string, regex: RegExp): string[] {
    const matches: string[] = [];
    let match: RegExpExecArray | null;
    
    // Reset regex lastIndex to ensure we start from the beginning
    regex.lastIndex = 0;
    
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[0]);
      
      // Prevent infinite loop if regex doesn't advance
      if (match.index === regex.lastIndex) {
        regex.lastIndex++;
      }
    }
    
    return matches;
  }
}
