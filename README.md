[![NPM version](https://img.shields.io/npm/v/@webacad/one-click-button.svg?style=flat-square)](https://www.npmjs.com/package/@webacad/one-click-button)
[![Build Status](https://img.shields.io/travis/Web-ACAD/angular-one-click-button.svg?style=flat-square)](https://travis-ci.org/Web-ACAD/angular-one-click-button)

# WebACAD/OneClickButton

Angular directive for disabling buttons after first click

## Installation

```bash
$ npm install --save @webacad/one-click-button
```

or with yarn

```bash
$ yarn add @webacad/one-click-button
```

## Register module

```typescript
import {NgModule} from '@angular/core';
import {WaOneClickButtonDirective} from '@webacad/one-click-button';

@NgModule({
    imports: [
        WaOneClickButtonDirective,
    ],
})
export class AppModule {}
```

## Usage

```html
<button waOneClickButton (click)="doSomething()">Click and disable</button>
```

Now when you click on that button, your `doSomething()` method will be normally called, but after that the button will 
receive the `disabled` state.

## Re-enable button

```html
<button #btn="oneClickBtn" waOneClickButton (click)="doSomething()">Click and disable</button>
<button (click)="btn.enable()">Re-enable</button>
```

## Available methods

* `enable()`: Enable disabled button
* `disable()`: Disable enabled button
