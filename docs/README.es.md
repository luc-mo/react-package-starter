# React Package Starter - Una plantilla de inicio para crear paquetes React con Vite, TypeScript y TailwindCSS

Esta es una plantilla de inicio para ayudarte a arrancar rápidamente paquetes de React con un entorno de desarrollo moderno. Utiliza Vite para el entorno de desarrollo local, TypeScript para la seguridad de tipos y TailwindCSS para el estilo. Además, utiliza tsup para un proceso de construcción eficiente.

[![license](https://img.shields.io/github/license/luc-mo/firebase-handler?color=blue)](https://github.com/luc-mo/react-package-starter/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@snowdrive/react-package-starter/latest?color=blue)](https://www.npmjs.com/package/@snowdrive/react-package-starter)
[![npm downloads](https://img.shields.io/npm/dm/@snowdrive/react-package-starter)](https://www.npmjs.com/package/@snowdrive/react-package-starter)

## Traducciones
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/luc-mo/react-package-starter/blob/HEAD/README.md)
[![es](https://img.shields.io/badge/lang-es-blue.svg)](https://github.com/luc-mo/react-package-starter/blob/HEAD/docs/README.es.md)

## Tabla de Contenidos
- [React Package Starter - Una plantilla de inicio para crear paquetes React con Vite, TypeScript y TailwindCSS](#react-package-starter---una-plantilla-de-inicio-para-crear-paquetes-react-con-vite-typescript-y-tailwindcss)
  - [Traducciones](#traducciones)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Construyendo el paquete](#construyendo-el-paquete)
  - [Publicando el paquete](#publicando-el-paquete)
  - [Uso del paquete](#uso-del-paquete)
    - [Paquetes utilizados](#paquetes-utilizados)
      - [Dependencias](#dependencias)
      - [Dependencias de desarrollo](#dependencias-de-desarrollo)
    - [Configuración de Tailwind](#configuración-de-tailwind)
  - [Configuración adicional](#configuración-adicional)
    - [package.json](#packagejson)
      - [Metadatos del paquete](#metadatos-del-paquete)
    - [tsup](#tsup)
      - [Configuración mínima](#configuración-mínima)

## Instalación

1. Clona el repositorio
2. Ejecuta `pnpm install` para instalar las dependencias
3. Ejecuta `pnpm run dev` para iniciar el servidor de desarrollo

## Uso

Este paquete incluye un componente de ejemplo `Counter` ubicado en `src/components/counter`. Puedes usar este componente como punto de partida para construir tus propios componentes reutilizables.

## Construyendo el paquete

La mayoría de los archivos en este proyecto se utilizarán para el entorno local. Todo lo que quieras exportar desde tu biblioteca (por ejemplo, componentes, hooks, tipos, etc.) debe ser exportado desde el archivo `src/bundler/index.ts`.

Si deseas modificar el punto de entrada (o definir varios archivos), puedes hacerlo desde el archivo `tsup.config.ts`.

## Publicando el paquete

**Nota**: Antes de proceder con esta sección, asegúrate de tener una cuenta de npm.

Para publicar tu primer paquete con este proyecto, solo necesitas darle un nombre correcto y una versión (ver: [nombre del paquete](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#name) y [versión del paquete](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#version)).

Si deseas publicar el paquete bajo tu [scope](https://docs.npmjs.com/cli/v10/using-npm/scope) de usuario, puedes hacerlo nombrándolo `@username/tu-paquete`, donde "username" es tu nombre de usuario de la cuenta de npm.

Luego, ejecuta los siguientes comandos. Necesitarás iniciar sesión en tu consola para publicar:

```bash
npm login
npm publish
```

## Uso del paquete

Para usar tu paquete, necesitarás instalarlo en el proyecto donde deseas usarlo, como lo harías con cualquier otro paquete:

### Paquetes utilizados

Este paquete utiliza React y Tailwind como dependencias peer, por lo que necesitarás tener los siguientes paquetes instalados en tu proyecto:

#### Dependencias
- react
- react-dom

#### Dependencias de desarrollo
- tailwindcss
- postcss
- autoprefixer

### Configuración de Tailwind

Si eliges usar Tailwind en este paquete, para utilizarlo, necesitarás agregarlo al archivo de configuración de Tailwind del proyecto donde lo usarás.


## Configuración adicional

### package.json

Puedes agregar metadatos adicionales que serán utilizados por los consumidores o por npm para mostrar detalles sobre tu paquete. Aquí listaremos algunos, pero puedes ver la lista completa en [manejo de package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) y [comando npm publish](https://docs.npmjs.com/cli/v10/commands/npm-publish).

#### Metadatos del paquete
- `description`: Proporciona una breve descripción de lo que hace el paquete. Es un resumen conciso de su funcionalidad.
- `author`: Especifica la persona u organización responsable de crear y mantener el paquete.
- `license`: Indica el tipo de licencia bajo la cual se distribuye el paquete, describiendo los permisos y restricciones para los usuarios.
- `keywords`: Enumera palabras clave o frases relevantes que ayudan a los usuarios a descubrir el paquete cuando buscan en los repositorios de paquetes.
- `files`: Especifica qué archivos y directorios deben incluirse cuando se publique el paquete, asegurando que solo se distribuyan los archivos necesarios.
- `exports`: Define los puntos de entrada para el paquete, permitiendo a los desarrolladores especificar qué módulos o archivos son accesibles cuando el paquete es importado por otro código.
- `publishConfig`: Contiene configuraciones para publicar el paquete en un registro de paquetes. Puede incluir detalles como la URL del registro, permisos de acceso y otras opciones relacionadas con la publicación.
- `repository`: Especifica la ubicación y detalles de control de versiones del repositorio de código fuente del paquete, típicamente en un formato de URL que apunta a plataformas como GitHub, GitLab o Bitbucket.
- `engines`: Especifica los entornos de ejecución y sus versiones que son compatibles con el paquete, asegurando que se ejecute correctamente en entornos específicos.

### tsup

Tsup es un empaquetador de TypeScript sin configuración, por lo que no necesitarás mucha configuración adicional aparte de lo que ya se ha añadido en el archivo tsup.config.ts. Puedes ver la configuración completa de la herramienta [aquí](https://tsup.egoist.dev/#using-custom-configuration).

#### Configuración mínima
- `entry`: Especifica el archivo de entrada principal (o archivos) que se utilizarán para construir el paquete.
- `format`: Define el formato en el que deseas que se genere el paquete final. Puede ser CommonJS, módulo ES, UMD, etc., dependiendo de cómo planees usar el paquete.
- `tsconfig`: Permite especificar un archivo de configuración de TypeScript personalizado que se utilizará durante el proceso de compilación para controlar cómo se compilan los archivos TypeScript.

**Nota**: En caso de que no quieras usar TypeScript para la compilación pero aún así desees retener algunas propiedades (como alias de rutas), puedes definir un archivo `jsconfig.json` en su lugar.
