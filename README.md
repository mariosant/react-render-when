# react-render-when

Conditionally render a component

[![NPM version](https://img.shields.io/npm/v/@mariosant/react-render-when.svg)](https://www.npmjs.com/package/@mariosant/react-render-when)

## Installation

Add `@mariosant/react-render-when` to your `package.json`.

```bash
$ npm install @mariosant/react-render-when
```

You can now import the module and use it like

```javascript
import {renderWhen, renderUnless} from '@mariosant/react-render-when';
```

## Usage

Both `renderWhen` and `renderUnless` take 2 parameters. A predicate function and a React component.

Check out the following example:

```
import {renderWhen} from '@mariosant/react-render-when';

const needsCowbell = ({cowbells}) => cowbells < 10;

const Advice = renderWhen(needsCowbell, () => <p>Needs more cowbell</p>)

<Advice cowbell={1} />    // will render
<Advice cowbell={100} />  // will not render
```

The predicate inverses when using `renderUnless`:

```
import {renderUnless} from '@mariosant/react-render-when';

const enoughCowbell = ({cowbells}) => cowbells >= 10;

const Advice = renderUnless(enoughCowbell, () => <p>Needs more cowbell</p>)

<Advice cowbell={1} />    // will render
<Advice cowbell={100} />  // will not render
```

## Meta

Marios Antonoudiou – [@marios_ant](https://twitter.com/marios_ant) – mariosant@sent.com

Distributed under the MIT license. [https://github.com/mariosant/react-render-when](https://github.com/mariosant/react-render-when)

## Contributing

1. Fork it (<https://github.com/mariosant/react-render-when/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request