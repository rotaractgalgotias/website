# Rotaract Galgotias Website

This repository contains the codebase for the Rotaract Galgotias website built with Next.js and Prisma.

## Features

- **Next.js**
- **Prisma ORM**
- **TypeScript Support**
- **Rotaract Integration**
- **Supabase**

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/rotaract-galgotias-website.git
   cd rotaract-galgotias-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   Rename `.env.example` to `.env` and update the values.

   ```env
   DATABASE_URL="your db url"
   CURRENT_YEAR="Current Year"
   ROTARACT_API_KEY="your rotaract api key"
   GEMINI_API_KEY="Your GEMINI API Key"
   ```

4. **Run Prisma migrations**

   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## License

MIT
