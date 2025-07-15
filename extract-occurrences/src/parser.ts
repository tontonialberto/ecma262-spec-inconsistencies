import { JSDOM } from 'jsdom';
import { writeFileSync } from 'fs';
import { Algorithm } from './types';

/**
 * Module 1: Parse ECMA-262 specification DOM to extract algorithm data
 */
export class SpecificationParser {
  /**
   * Parse ECMA-262 specification HTML content to extract algorithms
   * @param htmlContent Complete HTML specification content
   * @param outputPath Path to write the parsed results JSON file
   * @returns Array of algorithm objects
   */
  public parseSpecification(htmlContent: string, outputPath?: string): Algorithm[] {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    
    const algorithms: Algorithm[] = [];
    
    // Find all emu-alg elements
    const emuAlgElements = document.querySelectorAll('emu-alg');
    
    for (const emuAlg of emuAlgElements) {
      try {
        const algorithm = this.extractAlgorithm(emuAlg);
        if (algorithm) {
          algorithms.push(algorithm);
        }
      } catch (error) {
        console.warn(`Failed to extract algorithm from emu-alg element:`, error);
      }
    }
    
    // Write to file if output path is provided
    if (outputPath) {
      writeFileSync(outputPath, JSON.stringify(algorithms, null, 2));
      console.log(`Parsed ${algorithms.length} algorithms and saved to ${outputPath}`);
    }
    
    return algorithms;
  }
  
  /**
   * Extract algorithm data from a single emu-alg element
   */
  private extractAlgorithm(emuAlgElement: Element): Algorithm | null {
    // Extract steps content from emu-alg
    const steps = emuAlgElement.textContent?.trim() || '';
    
    // Find the closest parent emu-clause or emu-annex that contains this emu-alg
    let parentClause = emuAlgElement.parentElement;
    while (parentClause 
        && (parentClause.tagName.toLowerCase() !== 'emu-clause' 
            && parentClause.tagName.toLowerCase() !== 'emu-annex')
    ) {
      parentClause = parentClause.parentElement;
    }
    
    if (!parentClause) {
      return null;
    }
    
    // Extract section ID from parent
    const sectionId = parentClause.getAttribute('id') || '';
    
    // Find h1 element at the same DOM depth level as emu-alg
    const heading = this.findHeadingForAlgorithm(emuAlgElement, parentClause);
    
    if (!heading || !sectionId) {
      return null;
    }
    
    return {
      sectionId,
      heading,
      steps
    };
  }
  
  /**
   * Find the appropriate heading for an algorithm
   */
  private findHeadingForAlgorithm(emuAlgElement: Element, parentClause: Element): string {
    // Look for h1 element within the same parent clause
    const h1Element = parentClause.querySelector('h1');
    if (h1Element) {
      return h1Element.textContent?.trim() || '';
    }
    
    // Fallback: look for any heading element
    const headingElements = parentClause.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headingElements.length > 0) {
      return headingElements[0].textContent?.trim() || '';
    }
    
    return '';
  }
}
