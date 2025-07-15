# ECMA-262 Specification Pattern Analysis Tool

Node.js TypeScript CLI project that finds regex pattern occurrences in ECMA-262 specification abstract operations and generates markdown reports.

## Module 1: Parse
**Purpose:** Parse ECMA-262 specification DOM to extract algorithm data.

**Input:** String containing the complete HTML specification content

**Output:** Array of algorithm objects with TypeScript interface:
```typescript
interface Algorithm {
  sectionId: string;
  heading: string;
  steps: string;
}
```

**Algorithm:**
1. For each `<emu-alg>` node in the HTML:
   - Find the `<h1>` node at the same DOM depth level
   - Extract text content from `<h1>` as `heading`
   - Extract text content from `<emu-alg>` as `steps`
   - Find the closest parent `<emu-clause>` node containing both elements. If no such element exists, find the closest parent `<emu-annex>`
   - Extract the `id` attribute value as `sectionId`
2. Write results to JSON file

## Module 2: Find Occurrences
**Input:**
- JSON array of parsed algorithms
- Regular expression pattern string

**Output:** Search results object with TypeScript interface:
```typescript
interface SearchResults {
  searchPattern: string;
  totalOccurrencesFound: number;
  occurrences: Array<{
    sectionId: string;
    heading: string;
    matches: string[];
  }>;
}
```

**Algorithm:**
1. For each algorithm object `{sectionId, heading, steps}`:
   - Apply regex pattern to `steps` content
   - If matches found, collect all match strings
   - Add result object with sectionId, heading, and matches array
2. Count total matches across all algorithms
3. Write results to JSON file

## Module 3: Generate Markdown Report
**Input:** Search results object from Module 2

**Output:** Markdown file with this exact format:

```markdown
# Pattern Analysis: `{regex-pattern}`

## Summary
- **Sections with matches:** {count}
- **Total matches:** {count}

## Results

- [{Heading-Algorithm-1}]({spec-url})
  - `match 1`
  - `match 2`

- [{Heading-Algorithm-2}]({spec-url})
  - `match 3`
```

**URL Generation:**
- Convert `sectionId` to specification URL: `https://tc39.es/ecma262/#${sectionId}`
