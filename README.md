# Nest Training

A small NestJS training project with AI endpoints powered by the OpenAI API.

## Requirements

- Node.js 20+ or 22+
- npm
- An OpenAI API key stored locally in `.env`

## Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
OPENAI_API_KEY=replace_with_your_openai_api_key
OPENAI_MODEL=gpt-4o-mini
```

Do not commit `.env` or any real API keys, passwords, tokens, or personal credentials.

## Running the App

Start the server:

```bash
npm run start
```

Start in watch mode:

```bash
npm run start:dev
```

The app listens on:

```text
http://localhost:3000
```

## AI Endpoints

The current bootstrap in `src/main.ts` starts `AiModule`.

```http
GET /ai/states
GET /ai/states-abbreviations
GET /ai/users
GET /ai/users?count=5
GET /ai/kpi-data
POST /ai/generate-response
```

Example request body for `POST /ai/generate-response`:

```json
{
  "input": "Give me a short summary of NestJS."
}
```

You can also use the examples in `requests/request.http`.

## Useful Commands

```bash
# Build
npm run build

# Run unit tests
npm run test

# Run end-to-end tests
npm run test:e2e

# Check for dependency vulnerabilities
npm audit
```

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `OPENAI_API_KEY` | Yes | API key used by the OpenAI client. Keep this secret. |
| `OPENAI_MODEL` | No | Model used for AI responses. Defaults to `gpt-4o-mini` in the service. |

## Notes

- `@nestjs/config` loads `.env` in `AiModule` with `ConfigModule.forRoot()`.
- Keep generated data and local secrets out of source control.
- Use placeholder values in documentation and examples.
