import { writeFileSync } from 'fs';
import { SearchResults } from './types';

/**
 * Module 3: Generate Markdown Report
 */
export class ReportGenerator {
  /**
   * Generate markdown report from search results
   * @param searchResults Search results object from Module 2
   * @param outputPath Path to write the markdown report
   * @returns Generated markdown content
   */
  public generateReport(searchResults: SearchResults, outputPath?: string): string {
    const { searchPattern, totalOccurrencesFound, occurrences } = searchResults;
    
    let markdown = `# Pattern Analysis: \`${searchPattern}\`\n\n`;
    
    // Summary section
    markdown += `## Summary\n`;
    markdown += `- **Sections with matches:** ${occurrences.length}\n`;
    markdown += `- **Total matches:** ${totalOccurrencesFound}\n\n`;
    
    // Results section
    markdown += `## Results\n\n`;
    
    for (const occurrence of occurrences) {
      const specUrl = this.generateSpecUrl(occurrence.sectionId);
      markdown += `- [${occurrence.heading}](${specUrl})\n`;
      
      for (const match of occurrence.matches) {
        markdown += `  - \`${match}\`\n`;
      }
      
      markdown += '\n';
    }
    
    // Write to file if output path is provided
    if (outputPath) {
      writeFileSync(outputPath, markdown);
      console.log(`Generated markdown report and saved to ${outputPath}`);
    }
    
    return markdown;
  }
  
  /**
   * Generate specification URL from section ID
   */
  private generateSpecUrl(sectionId: string): string {
    return `https://tc39.es/ecma262/#${sectionId}`;
  }
}
