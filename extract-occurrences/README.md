# ECMA-262 Specification Pattern Analysis Tool

A Node.js TypeScript CLI tool that finds regex pattern occurrences in ECMA-262 specification abstract operations and generates markdown reports.

## Installation

```bash
npm install
npm run build
```

## Usage

The tool provides several commands that can be used individually or as part of a complete pipeline.

### Individual Commands

#### 1. Parse Specification
Extract algorithms from ECMA-262 HTML specification:

```bash
npm run dev parse -i spec.html -o algorithms.json
```

#### 2. Find Pattern Occurrences
Search for regex patterns in parsed algorithms:

```bash
npm start -- find -i algorithms.json -p "your-regex-pattern" -o search-results.json
```

#### 3. Generate Report
Create markdown report from search results:

```bash
npm start -- report -i search-results.json -o report.md
```

### Complete Pipeline

Run all three steps in sequence:

```bash
npm start -- analyze -i spec.html -p "your-regex-pattern" -o report.md
```

## Command Options

### `parse`
- `-i, --input <file>` - Input HTML specification file (required)
- `-o, --output <file>` - Output JSON file (default: algorithms.json)

### `find`
- `-i, --input <file>` - Input JSON file with parsed algorithms (required)
- `-p, --pattern <regex>` - Regular expression pattern to search for (required)
- `-o, --output <file>` - Output JSON file (default: search-results.json)

### `report`
- `-i, --input <file>` - Input JSON file with search results (required)
- `-o, --output <file>` - Output markdown file (default: report.md)

### `analyze`
- `-i, --input <file>` - Input HTML specification file (required)
- `-p, --pattern <regex>` - Regular expression pattern to search for (required)
- `--algorithms <file>` - Intermediate algorithms JSON file (default: algorithms.json)
- `--results <file>` - Intermediate search results JSON file (default: search-results.json)
- `-o, --output <file>` - Output markdown report file (default: report.md)

## Output Format

### Algorithms JSON
```json
[
  {
    "sectionId": "sec-example",
    "heading": "Example Algorithm",
    "steps": "1. If condition is true, then..."
  }
]
```

### Search Results JSON
```json
{
  "searchPattern": "\\\\bif\\\\b.*\\\\belse\\\\b",
  "totalOccurrencesFound": 42,
  "occurrences": [
    {
      "sectionId": "sec-example",
      "heading": "Example Algorithm",
      "matches": ["if condition else"]
    }
  ]
}
```

### Markdown Report
```markdown
# Pattern Analysis: `\\bif\\b.*\\belse\\b`

## Summary
- **Sections with matches:** 15
- **Total matches:** 42

## Results

- [Example Algorithm](https://tc39.es/ecma262/#sec-example)
  - `if condition else`
```

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev <command>

# Run compiled version
npm start <command>
```
