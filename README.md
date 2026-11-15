# LFM2 Translate Web (EN↔JP) 🌐

This is a simple web app that demonstrates how to use the [LFM2-350M-ENJP-MT](https://huggingface.co/onnx-community/LFM2-350M-ENJP-MT-ONNX) model in the browser using [Transformers.js](https://huggingface.co/docs/transformers.js) and ONNX Runtime Web. The application allows users to translate text between English and Japanese in both directions — all running locally in the browser via WebGPU.

> **Note:** This app requires a browser with WebGPU support. The Q4F16 quantized model (~316 MB) is downloaded once and cached by the browser, so later visits load it from cache and work offline.

## Features

- **Bidirectional translation**: English → Japanese and Japanese → English, translated automatically as you type.
- **Swap languages**: Flip the source and target languages (and their text) with one click.
- **Shareable links**: The source language, target language, and input text are stored in the URL hash, so the share button copies a link that restores the same translation.
- **Copy translation**: Copy the translated text to the clipboard.
- **Private**: Text never leaves your device; no server is involved after the model is downloaded.

## Project Structure

The project is structured as follows:

- `public/`: Static assets like images and logos.

- `src/`: Core source code for the application.
  - `ai/`: Model logic.
    - `Translator.ts`: Singleton that loads the LFM2-350M-ENJP-MT model with Transformers.js and runs translations.

  - `components/`: Reusable React components for the application.
    - `Introduction.tsx`: Introduction card describing the model and app.
    - `LanguageSelector.tsx`: Dropdown for selecting the source/target language.
    - `ModelLoader.tsx`: Download button and progress bar for loading the model.
    - `Waiting.tsx`: Rotating "Why LFM2?" panel shown while the model downloads.

  - `theme/`: Shared UI primitives.
    - `button/Button.tsx`: Button component with multiple variants.
    - `form/Textarea.tsx`: Textarea component.
    - `misc/Card.tsx`: Card container component.
    - `misc/Loader.tsx`: Spinner component.

  - `types/`: TypeScript type definitions.
    - `transformers.ts`: Type helpers for Transformers.js.

  - `utils/`: Helper functions.
    - `classnames.ts`: Utility for joining CSS class names.
    - `countWords.ts`: Whitespace-based word counter for translation stats.
    - `format.ts`: Number and time formatting helpers.

  - `App.tsx`: Main React component for the application.
  - `Initialize.tsx`: Model download screen (intro card, download button, and progress).
  - `Translate.tsx`: Translator UI (input/output, swap, share, and copy).
  - `constants.ts`: Supported languages.
  - `index.css`: Global CSS styles for the application.
  - `main.tsx`: Entry point for the application.

- `.gitignore`: Specifies which files and directories should be ignored by Git.
- `.prettierrc`: Prettier formatting configuration.
- `README.md`: Project documentation and setup instructions.
- `index.html`: Main HTML file for the application.
- `package.json`: Project dependencies and script configuration.
- `eslint.config.js`: ESLint configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `vercel.json`: Vercel deployment configuration.
- `vite.config.ts`: Vite configuration file for the project.

## Technologies Used

- **HTML**: Standard markup language for creating web pages.
- **Tailwind CSS**: Utility-first CSS framework for styling web applications.
- **TypeScript**: Typed superset of JavaScript for building web applications.
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **Transformers.js**: JavaScript library for running Hugging Face models in the browser.
- **ONNX Runtime Web**: Runs the ONNX model on WebGPU in the browser.
- **Lucide React**: Icon library for the user interface.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository: `git clone https://github.com/sitammeur/lfm2-translate-web.git`
2. Change the directory: `cd lfm2-translate-web`
3. Install the required dependencies: `npm install`
4. Run the application: `npm run dev`

Open your local host to view the web application in your browser at `http://localhost:5173/`.

To create a production build, run `npm run build`; the output is written to the `build/` directory.

## Results

The application allows users to translate between English and Japanese with LFM2-350M-ENJP-MT, a compact 350M parameter machine translation model by LiquidAI specialized for bidirectional English ↔ Japanese translation, running entirely in the browser via 🤗 Transformers.js and ONNX Runtime Web.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please raise an issue to discuss the changes you would like to make. Once the changes are approved, you can create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions regarding the project, feel free to reach out to me on my GitHub profile.

Happy coding! 🚀
