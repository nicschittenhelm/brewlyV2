# BrewlyV1 - Deployment Instructions

[Live unoptimized Demo](https://nicschittenhelm.github.io/brewlyV1/)

## Overview

This document provides instructions for deploying the BrewlyV1 Angular application to GitHub Pages.

## Prerequisites

Before deploying, make sure you have the following:

- [Node.js](https://nodejs.org/) installed.
- [Angular CLI](https://angular.io/cli) installed. You can install it using `npm install -g @angular/cli`.
- [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) installed. You can install it using `npm install -g angular-cli-ghpages`.

## Build and Deploy Instructions

### 1. Build the Angular Project

First, build your Angular project with the appropriate base URL for GitHub Pages. This ensures that your application correctly references static assets and routes when deployed.

```bash
ng build --base-href "https://nicschittenhelm.github.io/brewlyV1/"
```

```bash
npx angular-cli-ghpages --dir=dist/brewlyV1/browser
```
