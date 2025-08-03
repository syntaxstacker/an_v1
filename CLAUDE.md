# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Nuxt 4 application using Vue 3. It's a minimal starter project with the basic Nuxt configuration.

## Key Commands
- **Install dependencies**: `pnpm install`
- **Development server**: `pnpm dev` (starts on http://localhost:3000)
- **Build for production**: `pnpm build`
- **Preview production build**: `pnpm preview`

## Project Structure
- `app/` - Main application files (app.vue is the root component)
- `nuxt.config.ts` - Nuxt configuration file
- `public/` - Static assets (favicon.ico, robots.txt)

## Architecture Notes
- Uses Nuxt 4 with Vue 3 and vue-router
- File-based routing (pages go in `app/pages/` directory when added)
- Nuxt devtools are enabled by default
- TypeScript is configured for development

## Common Development Tasks
- Add new pages by creating Vue components in `app/pages/`
- Add components in `app/components/`
- Configure modules in `nuxt.config.ts`
- Add global styles in `app/assets/`