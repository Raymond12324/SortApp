# Preparar el entorno de TypeScript

## Instalación de TypeScript

```bash
npm install -g typescript ts-node
```

## Inicialización de TypeScript

```bash
tsc --init
```

## Configuración de directorios en el tsconfig.json

- `rootDir`
- `outDir`

---

## Inicialización de npm

```bash
npm init -y
```

## Instalación de nodemon y concurrently para la compilación

```bash
npm install nodemon concurrently
```

## Configuración de comandos en el package.json para correr la aplicación con nodemon

```json
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start": "concurrently npm:start:*"
```


## add git ignore
```json
"echo >.gitignore"
```


