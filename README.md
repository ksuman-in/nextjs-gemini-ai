# Next.js Gemini AI Project

This project is a Next.js application integrating Google Gemini AI via the `@ai-sdk/google` and `ai` packages. It uses React 19, TypeScript, and Tailwind CSS for rapid development and modern UI.

## Features

- **AI Integration:** Chat, completion, and streaming endpoints powered by Gemini AI.
- **Modern Stack:** Next.js, React 19, TypeScript, Tailwind CSS.
- **API Routes:** Located in `src/app/api` for AI interactions.
- **UI Components:** Modular UI in `src/app/ui`.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `src/app/page.tsx` — Main entry point.
- `src/app/api` — API routes for AI features.
- `src/app/ui` — UI components and pages.

## Environment Variables

Set up your Google Gemini API key in a `.env.local` file:

```
GOOGLE_API_KEY=your-api-key-here
```

## License

MIT
