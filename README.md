# typescript-poc
A simple POC to teach how tyo use [TypeScript](https://www.typescriptlang.org/index.html).


## Table of contents

* [Prerequis](#prerequis)
* [Ressources installation](#ressources-installation) (In progress)
* [Helpfull Typescript command](#helpfull-typescript-command)
* [List of poc](#list-of-poc)
* [Mistakes](#mistakes)

## Prerequis

To use this you will need:

1) A [Node.js](https://nodejs.org/en/) installed on your computer with npm (A package manager of nodejs).

2) A text editor or IDE (vscode, netbeans, eclipse).

## Ressources installation


## Running

To test this, Into your source project type:
```
gulp
```
```
npm test
```


## Command helpfull

1) Watch modification and recompile file automatically.

```bash
tsc -w app.ts
```

2) Generate typescript configuration file named tsconfig.json into your project.

```bash
tsc --init
```
This generate a simple typescript configuration file.

## All POC 
1) Build typescript with gulp.

You can retrieve the sources into subfolder typescript-gulp.

2) 


## Mistakes

1) error TS2304: Cannot find name 'process'.
This error occur when you try to use the process object of nodjs without install it explicitely.

To sole this type:

```bash
npm install --save-dev @types/nod
```
