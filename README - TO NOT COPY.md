Remove the default content of src folder EXCEPT vite-end.d.ts (keep this one)
Copy the content of src folder from react-base to your project
Copy .prettierrc, .prettierignore, .env.development and .env.production to the root of your new React project
Update the content of the .env files
Add "baseUrl": "src" in tsconfig.json > compilerOptions
Add tsconfigPaths() as element in the array "defineConfig" > "plugins" in the file vite.config.ts (plugins: [react(), tsconfigPaths()])
Ignore .env.development ONLY (do not ignore .env.production) in your .gitignore file (use "# Dotenv" as header comment)
In index.html > Update <title> tag and <script type="module" src="/src/[main.tsx INTO index.tsx]"></script>

Run these pnpm commands:
pnpm add @tanstack/react-query
pnpm add recoil
pnpm add @mui/material
pnpm add @mui/icons-material
pnpm add react-router-dom
pnpm add json-schema
pnpm add @types/json-schema
pnpm add @rjsf/mui
pnpm add @rjsf/core
pnpm add @rjsf/validator-ajv8
pnpm add @rjsf/utils
pnpm add lodash
pnpm add @types/lodash
pnpm add axios
pnpm add sass
pnpm add vite-tsconfig-paths
