<h1 align="center">Nodejs Config Logging</h1>

Nodejs config api is package to make easier configuration nodejs configuration intergration with moment.

## Getting started

Lets install nodco-moment with npm

```bash
npm install --save @musasutisna/nodco-moment
```

## How to initialize

```js
const nodcoMomentConfig = require('@musasutisna/nodco-moment');

nodcoMomentConfig(
  {
    // default config here
  }
)
```

| Method | Type | Description |
|:--|:--|:--|
| config | object | Moment pre defined configuration items. |
| m | function | Moment instance. |
| utc | function | Identify datetime string in utc timezone then configurable timezone. |
| format | function | Formating datetime moment with config. |
| formatm | function | Formating datetime string with config. |
| formatutc | function | Formating datetime utc string with config. |

```js
utc(
  datetime, // string, datetime will be identify
  utcOffset // number, utcoffset config
)

format(
  datetime, // object, datetime in moment
  format // string, config datetime format or moment datetime format
)

formatm(
  datetime, // string, datetime will be identify
  format // string, config datetime format or moment datetime format
)

formatutc(
  datetime, // string, datetime utc will be identify
  format // string, config datetime format or moment datetime format
)
```
