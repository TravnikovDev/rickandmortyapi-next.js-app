# Rick and Morty Character Explorer

This project is a web application that allows users to explore characters from the Rick and Morty TV series. It uses Next.js, Chakra UI, and GraphQL with Apollo Client to create an interactive and responsive user interface.

## Features

- Explore Rick and Morty characters with filter options (Name, Status, Gender, Species, Type)
- Clear filters functionality
- Character details page
- Pagination support
- Responsive design
- Dark mode

## Demo

Project is deployed on [GitHub pages](https://travnikovdev.github.io/rickandmortyapi-next.js-app/)

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:TravnikovDev/rickandmortyapi-next.js-app.git
    ```

2. Change to the project directory:

    ```bash
    cd rickandmortyapi-next.js-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Running the Development Server

To start the development server, run:

```bash
npm run dev
```

The application will be available at <http://localhost:3000>.

## Building and Running in Production Mode

To build the application for production, run:

```bash
npm run build
```

This command will generate a .next folder containing the optimized production build.

To start the production server, run:

```bash
npm run start
```

The application will be available at <http://localhost:3000>.

## Running Tests

### Unit Tests

To run unit tests with Jest, run:

```bash
npm run test
```

### End-to-End Tests

To run end-to-end tests with Playwright, first ensure that the development server is running in a separate terminal, then run:

```bash
npm run test:e2e
```

### Code generation

The `generate` script runs `graphql-codegen` with the configuration specified in the `codegen.yml` file. This tool generates TypeScript types, React hooks, and other utilities based on the GraphQL schema and operations used in the application. Running this script ensures that the application's GraphQL queries, mutations, and subscriptions are correctly typed and up-to-date with the schema.

To run the `generate` script, simply execute the following command in your terminal:

```bash
npm run generate
```

## Pre-Commit Hook

The project uses Husky and lint-staged to automatically run tests and linting before each commit. If the tests or linting fail, the commit will be blocked.
The prepare script installs Husky, a Git hooks manager. This script sets up the pre-commit hooks to run tasks such as code formatting, linting, and testing before a commit is made. By running the prepare script, you ensure that your code is consistent and adheres to the project's standards.

To run the prepare script, execute the following command in your terminal:

```bash
npm run prepare
```

When the script finishes, Husky will be installed, and the pre-commit hooks will be set up. 

## Project Structure

This project follows a modular structure with clear separation of components, pages, and other necessary files. Here is a brief overview of the main folders and files in the project:

- `components`: Contains all the reusable components used throughout the application.
  - [`CharacterCard`](components/CharacterCard): Component to display character information in a card format.
  - [`Filters`](components/Filters): Component that provides filtering options for character search.
  - [`Layout`](components/Layout): Main layout component that wraps the application and includes the header and footer.
  - [`Pagination`](components/Pagination): Component to handle pagination for character listing.
  - [`SearchBar`](components/SearchBar): Component to handle search of characters by Name. Contains debounce
- `pages`: Contains the main pages of the application.
  - [`_app.tsx`](pages/_app.tsx): The main entry point for the application, responsible for initializing global styles and wrappers.
  - [`index.tsx`](pages/index.tsx): The home page component, which lists the characters and provides filtering options.
  - [`characters/[id].tsx`](pages/characters/%5Bid%5D.tsx): The character details page component, displaying information for a specific character.

Other important files:

- `tsconfig.json`: TypeScript configuration file.
- `.eslintrc.js`: ESLint configuration file.
- `package.json`: Lists dependencies, scripts, and other metadata for the project.
- `codegen.yml`: Setup file for `graphql-codegen`
- `jest.config.js`: configuration file for unit tests
- `playwright.config.js`: configuration file for End-2-End tests

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT
