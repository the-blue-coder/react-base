Add "baseUrl": "src" in tsconfig.json > compilerOptions
KEEP vite-end.d.ts in src folder when you copy src files from react-base
Copy .prettierrc and .prettierignore to the root of your new React project
Copy .env.development and .env.production as well to the root
Ignore .env.development ONLY (do not ignore .env.production) in your .gitignore file (use "# Dotenv" as header comment)
Update .env.production and .env.development content

Run these pnpm commands:
pnpm add @tanstack/react-query
pnpm add recoil
pnpm add @mui/material
pnpm add react-icons
pnpm add react-router-dom
pnpm add @rjsf/material-ui
pnpm add @rjsf/core
pnpm add @rjsf/validator-ajv8
pnpm add @rjsf/utils
pnpm add lodash
pnpm add @types/lodash
pnpm add axios
pnpm add react-use-cookie
