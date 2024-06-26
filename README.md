# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

    ```js
    export default {
        // other rules...
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            project: ['./tsconfig.json', './tsconfig.node.json'],
            tsconfigRootDir: __dirname,
        },
    }
    ```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Local Development

### Building the Website Locally

To build the website locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/jenkins-infra/stats.jenkins.io.git
    cd stats.jenkins.io
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    ```

    This will start the development server and open the website in your default browser. Any changes you make to the code will be automatically reflected in the browser thanks to Vite's HMR.

4. **Build for production:**

    ```sh
    npm run build
    ```

    This will create an optimized production build of your application in the `dist` directory.

5. **Preview the build locally:**

    After building the site, you can preview it locally to ensure everything is working as expected. Run the following command:

    ```sh
    npm run preview
    ```

    This will start a local static web server that serves the files from the `dist` directory. Open your browser and navigate to the provided URL to see the preview.

### Inspiration and References

For additional inspiration and detailed instructions, refer to the following documentation and resources:

-   [Vite Documentation](https://vitejs.dev/guide/)
-   [React Documentation](https://reactjs.org/docs/getting-started.html)
-   [TypeScript Documentation](https://www.typescriptlang.org/docs/)
-   [Previous Issues and Pull Requests](https://github.com/jenkins-infra/stats.jenkins.io/issues)
