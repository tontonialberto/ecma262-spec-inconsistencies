#!/usr/bin/env node

import { Command } from 'commander';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { SpecificationParser } from './parser';
import { OccurrenceFinder } from './finder';
import { ReportGenerator } from './reporter';
import { Algorithm, SearchResults } from './types';

const program = new Command();

program
  .name('ecma262-analysis')
  .description('ECMA-262 Specification Pattern Analysis Tool')
  .version('1.0.0');

// Parse command
program
  .command('parse')
  .description('Parse ECMA-262 specification HTML to extract algorithms')
  .requiredOption('-i, --input <file>', 'Input HTML specification file')
  .option('-o, --output <file>', 'Output JSON file (default: algorithms.json)')
  .action((options) => {
    const inputFile = options.input;
    const outputFile = options.output || 'algorithms.json';
    
    if (!existsSync(inputFile)) {
      console.error(`Error: Input file not found: ${inputFile}`);
      process.exit(1);
    }
    
    try {
      console.log(`Reading HTML specification from ${inputFile}...`);
      const htmlContent = readFileSync(inputFile, 'utf-8');
      
      const parser = new SpecificationParser();
      const algorithms = parser.parseSpecification(htmlContent, outputFile);
      
      console.log(`Successfully parsed ${algorithms.length} algorithms`);
    } catch (error) {
      console.error('Error parsing specification:', error);
      process.exit(1);
    }
  });

// Find command
program
  .command('find')
  .description('Find pattern occurrences in parsed algorithms')
  .requiredOption('-i, --input <file>', 'Input JSON file with parsed algorithms')
  .requiredOption('-p, --pattern <regex>', 'Regular expression pattern to search for')
  .option('-o, --output <file>', 'Output JSON file (default: search-results.json)')
  .action((options) => {
    const inputFile = options.input;
    const pattern = options.pattern;
    const outputFile = options.output || 'search-results.json';
    
    if (!existsSync(inputFile)) {
      console.error(`Error: Input file not found: ${inputFile}`);
      process.exit(1);
    }
    
    try {
      console.log(`Reading algorithms from ${inputFile}...`);
      const algorithmsData = readFileSync(inputFile, 'utf-8');
      const algorithms: Algorithm[] = JSON.parse(algorithmsData);
      
      console.log(`Searching for pattern: ${pattern}`);
      const finder = new OccurrenceFinder();
      const results = finder.findOccurrences(algorithms, pattern, outputFile);
      
      console.log(`Found ${results.totalOccurrencesFound} matches in ${results.occurrences.length} sections`);
    } catch (error) {
      console.error('Error finding occurrences:', error);
      process.exit(1);
    }
  });

// Report command
program
  .command('report')
  .description('Generate markdown report from search results')
  .requiredOption('-i, --input <file>', 'Input JSON file with search results')
  .option('-o, --output <file>', 'Output markdown file (default: report.md)')
  .action((options) => {
    const inputFile = options.input;
    const outputFile = options.output || 'report.md';
    
    if (!existsSync(inputFile)) {
      console.error(`Error: Input file not found: ${inputFile}`);
      process.exit(1);
    }
    
    try {
      console.log(`Reading search results from ${inputFile}...`);
      const resultsData = readFileSync(inputFile, 'utf-8');
      const searchResults: SearchResults = JSON.parse(resultsData);
      
      const reporter = new ReportGenerator();
      const markdown = reporter.generateReport(searchResults, outputFile);
      
      console.log(`Generated report with ${searchResults.occurrences.length} sections`);
    } catch (error) {
      console.error('Error generating report:', error);
      process.exit(1);
    }
  });

// Full pipeline command
program
  .command('analyze')
  .description('Run complete analysis pipeline: parse → find → report')
  .requiredOption('-i, --input <file>', 'Input HTML specification file')
  .requiredOption('-p, --pattern <regex>', 'Regular expression pattern to search for')
  .option('--algorithms <file>', 'Intermediate algorithms JSON file (default: algorithms.json)')
  .option('--results <file>', 'Intermediate search results JSON file (default: search-results.json)')
  .option('-o, --output <file>', 'Output markdown report file (default: report.md)')
  .action((options) => {
    const inputFile = options.input;
    const pattern = options.pattern;
    const algorithmsFile = options.algorithms || 'algorithms.json';
    const resultsFile = options.results || 'search-results.json';
    const outputFile = options.output || 'report.md';
    
    if (!existsSync(inputFile)) {
      console.error(`Error: Input file not found: ${inputFile}`);
      process.exit(1);
    }
    
    try {
      // Step 1: Parse
      console.log(`Step 1/3: Parsing HTML specification from ${inputFile}...`);
      const htmlContent = readFileSync(inputFile, 'utf-8');
      const parser = new SpecificationParser();
      const algorithms = parser.parseSpecification(htmlContent, algorithmsFile);
      console.log(`Parsed ${algorithms.length} algorithms`);
      
      // Step 2: Find
      console.log(`Step 2/3: Searching for pattern: ${pattern}`);
      const finder = new OccurrenceFinder();
      const results = finder.findOccurrences(algorithms, pattern, resultsFile);
      console.log(`Found ${results.totalOccurrencesFound} matches in ${results.occurrences.length} sections`);
      
      // Step 3: Report
      console.log(`Step 3/3: Generating markdown report...`);
      const reporter = new ReportGenerator();
      const markdown = reporter.generateReport(results, outputFile);
      
      console.log(`\\nAnalysis complete!`);
      console.log(`- Algorithms: ${algorithmsFile}`);
      console.log(`- Search results: ${resultsFile}`);
      console.log(`- Report: ${outputFile}`);
      
    } catch (error) {
      console.error('Error during analysis:', error);
      process.exit(1);
    }
  });

program.parse();
