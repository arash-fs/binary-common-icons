# Binary Common Icons

This is a package that provide binary common icons.

## Installation

```bash
npm install binary-common-icons
```
## Usage

You can import 2 types of an icons: Icon or SVG.
It depends on your usage.

SVGIcon provide a svg file that will not pure component and will re render.
IconIcon provide in a wrapped pure component that will not re render,

```python
import { IconFRXAUDCAD } from 'binary-common-icons/build/Icons/Underlying/ic-FRXAUDCAD';
import { SVGFRXAUDCAD } from 'binary-common-icons/build/Icons/Underlying/ic-FRXAUDCAD';

<IconFRXAUDCAD />
<SVGFRXAUDCAD />
```
It is better to handle these in parent component (For example Use ```onClick``` on parent component) but also we can use it in package component.

category as {string}

className as { string }

classNamePath as { string }

classNameRect as { string }

is_disabled as { bool }

onClick as { func }

type as { string }

Also we can use `classnames` package:
```python
import classNames from 'classnames';

const icon_className = classNames(
    'advanced-simple-toggle__icon',
    'select-arrow',
)
<IconFRXAUDCAD className={icon_className} />
```