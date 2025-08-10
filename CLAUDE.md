# CLAUDE.md
永远中文回复我
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 application using Vue 3. The project is a minimal starter with basic configuration.

## Project Structure

- `app/app.vue` - Main application component
- `nuxt.config.ts` - Nuxt configuration file
- `package.json` - Dependencies and scripts
- `eslint.config.js` - ESLint configuration using @antfu/eslint-config

## Development Commands

### Setup
```bash
# Install dependencies (using pnpm as specified in packageManager field)
pnpm install
```

### Development
```bash
# Start development server on http://localhost:3000
pnpm dev
```

### Build and Deployment
```bash
# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

### Code Quality
```bash
# Lint code
pnpm lint
```

## Project Architecture

This is a minimal Nuxt 4 application with Vue 3. The architecture follows standard Nuxt conventions:

1. **Nuxt App** - Pages-based routing with automatic code splitting
2. **Vue 3** - Composition API and SFC (Single File Components)
3. **TypeScript** - Type-safe development
4. **ESLint** - Code linting with @antfu/eslint-config

## Key Dependencies

- nuxt: ^4.0.1
- vue: ^3.5.18
- vue-router: ^4.5.1

## Configuration

- Nuxt configuration in `nuxt.config.ts` with devtools enabled
- ESLint configuration using @antfu/eslint-config
- Package manager is pnpm (as specified in package.json)

## Development Workflow

1. Make changes to components in the `app/` directory
2. Run `pnpm dev` to start development server with hot reloading
3. Run `pnpm lint` to check code quality
4. Run `pnpm build` to create production build
