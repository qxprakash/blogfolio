# Personal Portfolio & Blog

Modern portfolio website with integrated blog system built with Next.js 14 and MDX.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Blog System:** MDX + Velite
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics


## Blog System

Content processing workflow:
1. Write posts in MDX (`content/posts/`)
2. Velite processes content into type-safe data
3. Generated content available through `.velite/generated`
4. Statically generated pages with optimal performance

## Getting Started

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```
