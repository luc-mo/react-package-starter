# React Package Starter - A starter template for creating React packages with Vite, TypeScript, and TailwindCSS

This is a starter template to help you quickly bootstrap React packages with a modern development environment. It uses Vite for local development environment, TypeScript for type safety and TailwindCSS for styling. Additionally, it uses tsup for an efficient build process.

## Installation

1. Clone the repository
2. Run `pnpm install` to install dependencies
3. Run `pnpm run dev` to start the development server

## Usage

This package includes an example `Counter` component located in `src/components/counter`. You can use this component as a starting point for building your own reusable components.

## Building the package

Most of the files in this project will be used for local environment. Everything you want to export from your library (e.g., components, hooks, types, etc.) must be exported from the `src/bundler/index.ts` file.

If you want to modify the entry point (or define multiple files), you can do so from the `tsup.config.ts` file.

## Publishing the package

**Note**: Before proceeding with this section, ensure you have an npm account.

To publish your first package with this project, you only need to give it a correct name and a version (see: [package name](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#name) and [package version](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#version)).

If you want to publish the package under your user [scope](https://docs.npmjs.com/cli/v10/using-npm/scope), you can do so by naming it `@username/your-package`, with "username" being your npm account username.

Next, run the following commands. You will need to log in to your console to publish:

```bash
npm login
npm publish
```

## Package usage

To use your package, you'll need to install it in the project where you want to use it, just like you would with any other

```bash
npm install your-package-name
yarn add your-package-name
pnpm add your-package-name
```

### Packages used

This package uses React and Tailwind as peer dependencies, so you'll need to have the following packages installed in your project

#### Dependencies
- react
- react-dom

#### Dev dependencies
- tailwindcss
- postcss
- autoprefixer

### Tailwind configuration

If you choose to use Tailwind in this package, to utilize it, you'll need to add it to the Tailwind configuration file of the project where you'll use it.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@snowdrive/react-package-starter/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Additional configuration

### package.json

You can add additional metadata that will be used by consumers or by npm to display details about your package. Here we'll list some, but you can see the complete list at [package.json handling](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) and [npm publish command](https://docs.npmjs.com/cli/v10/commands/npm-publish)

#### Package metadata
- `description`: Provides a brief overview of what the package does. It's a concise summary of its functionality.
- `author`: Specifies the individual or organization responsible for creating and maintaining the package.
- `license`: Indicates the type of license under which the package is distributed, outlining permissions and restrictions for users.
- `keywords`: Lists relevant keywords or phrases that help users discover the package when searching in package repositories.
- `files`: Specifies which files and directories should be included when the package is published, ensuring only necessary files are distributed.
- `exports`: Defines the entry points for the package, allowing developers to specify which modules or files are accessible when the package is imported by other code.
- `publishConfig`: Contains configuration settings for publishing the package to a package registry. It can include details like the registry URL, access permissions, and other publishing-related options
- `repository`: Specifies the location and version control details of the package's source code repository, typically in a URL format pointing to platforms like GitHub, GitLab, or Bitbucket.
- `engines`: Specifies the runtime environments and their versions that are compatible with the package, ensuring it runs correctly in specific environments.

### tsup

Tsup is a zero-configuration TypeScript bundler, so you won't need much additional setup besides what's already added in the tsup.config.ts file. You can see the full configuration of the tool [here](https://tsup.egoist.dev/#using-custom-configuration).

#### Minimal configuration
- `entry`: Specifies the main entry file (or files) to be used for building the package.
- `format`: Defines the format in which you want the final package to be generated. It can be CommonJS, ES module, UMD, etc., depending on how you plan to use the package.
- `tsconfig`: Allows specifying a custom TypeScript configuration file to be used during the compilation process to control how TypeScript files are compiled.

**Note**: In case you don't want to use TypeScript for compilation but still want to retain some properties (such as path aliases), you can define a `jsconfig.json` file instead.
