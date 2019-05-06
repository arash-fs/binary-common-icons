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
import { IconArrow } from 'binary-common-icons';
import { SVGArrow } from 'binary-common-icons';

<IconArrow className='datepicker__arrowhead' />
<SVGArrow className='datepicker__arrowhead' />
```

We can pass other attributes as a props:

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
<IconArrow className={icon_className} />
```