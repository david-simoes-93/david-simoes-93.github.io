# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
npm run ng -- build --configuration development --base-href=.
```
This will compile your project and store the build artifacts in the `dist/` directory. On FireFox, go to `about:config` and set `security.fileuri.strict_origin_policy` to `false`.

For production, run

```bash
npm run ng -- build --configuration production --base-href=https://david-simoes.org/
```

Then copy the files in `dist/Portfolio/browser` to the `main` branch
