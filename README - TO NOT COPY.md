Remove the default content of src folder EXCEPT vite-end.d.ts (keep this one)
Copy the content of src folder from react-base to your project
Copy .prettierrc, .prettierignore, .env.development and .env.production to the root of your new React project
Update the content of the .env files
Add "baseUrl": "src" in tsconfig.json > compilerOptions
Ignore .env.development ONLY (do not ignore .env.production) in your .gitignore file (use "# Dotenv" as header comment)
In index.html > Update <title> tag and <script type="module" src="/src/[main.tsx INTO index.tsx]"></script>

Run this long pnpm commands:
pnpm add @tanstack/react-query recoil @mui/material @mui/icons-material @mui/x-data-grid @mui/lab react-router-dom json-schema @types/json-schema @rjsf/mui @rjsf/core @rjsf/validator-ajv8 @rjsf/utils lodash @types/lodash axios sass vite-tsconfig-paths tslib

Add tsconfigPaths() as element in the array "defineConfig" > "plugins" in the file vite.config.ts (plugins: [react(), tsconfigPaths()])
import tsconfigPaths from "vite-tsconfig-paths"; (if not detected)
