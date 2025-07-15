# Trading Risk Calculator

This project is an Electron application built with React and Vite. It helps manage and visualize trading risk based on user configured settings.

## Getting Started

Install dependencies and launch the app in development mode:

```bash
npm install
npm run dev
```

This runs both the Vite development server and the Electron process.

## Building for Production

To package the application for distribution run:

```bash
npm run build
```

The packaged application will be placed in the `dist/` directory (platform specific subfolders may be created).

## Running a Packaged Build

After building you can run the packaged version with:

```bash
npm start
```

## Project Structure

- `electron-main.js` – Electron main process entry.
- `preload.js` – Preload script exposing APIs to the renderer.
- `src/` – React components and application logic.
- `public/` – HTML entry point and React bootstrap files.

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.
