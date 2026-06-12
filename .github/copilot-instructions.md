# GitHub Copilot Instructions

## Project Context

This repository contains the **Canada.ca Design System Library** ("Bibliothèque de conception Canada.ca"), which provides evidence-based design patterns, templates, and configuration guidance for Canadian government digital services.

### Key Characteristics:
- **Bilingual documentation**: All content must be provided in both French and English
- **Jekyll-based site**: Uses Jekyll static site generator with YAML front matter
- **Government standards**: Follows Canadian government digital service standards and accessibility requirements
- **Design system**: Contains reusable design patterns, page templates, and implementation guidance

## Development Guidelines

### Language and Localization
- Always provide content in both French and English when creating or modifying documentation
- French content comes first, followed by English (following Canadian government language policy)
- Use appropriate language codes: `fr` for French, `en` for English
- Maintain consistent terminology across both languages
- Reference existing bilingual content patterns in the repository for consistency

### File Structure and Naming
- Documentation files use `.md` extension for Markdown content
- Page templates and layouts use `.html` extension
- Follow the existing directory structure:
  - `configurations-conception-communes/` - Common design configurations
  - `modeles-obligatoire/` - Mandatory page templates  
  - `modeles-recommandes/` - Recommended page templates
  - `guide-redaction/` - Content writing guidance
  - `communaute/` - Community and contribution guidance

### Content Standards
- Use clear, accessible language appropriate for government content
- Follow the existing content patterns and documentation structure
- Include implementation examples with working code snippets
- Provide visual examples where appropriate
- Reference official government sources and policies
- Maintain consistency with Canada.ca style guide

### Technical Requirements
- Ensure HTML validation passes (uses vnu-jar for testing)
- Follow Jekyll conventions for front matter and templating
- Use semantic HTML markup
- Maintain accessibility standards (WCAG compliance)
- Test content with the existing build process

### Code Style
- Use consistent indentation (2 spaces for YAML, as per existing files)
- Follow existing patterns for Jekyll includes and layouts
- Use appropriate CSS classes matching the GC Web theme
- Maintain clean, readable HTML structure

### Design System Principles
- Follow established design patterns from the Canada.ca design system
- Maintain visual consistency across templates and components
- Provide clear usage guidelines for each design pattern
- Include "when to use" and "when not to use" guidance
- Document implementation details for developers

### Contribution Process
- Reference the existing CONTRIBUTING.md for contribution guidelines
- Follow the established workflow for design system changes
- Consider the experimental → beta → stable progression for new patterns
- Engage with the design system community for significant changes

When working on this repository, always consider the broader impact on Canadian government digital services and maintain the high standards expected for official design system documentation.