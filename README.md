# Binary Common Icons

This is a package that provide binary common icons.

## Installation

```bash
npm install binary-common-icons
```
## Usage

```python
import Icon from 'binary-common-icons';
import { IconArrow } from 'binary-common-icons';

<Icon icon={ IconArrow } className='datepicker__arrowhead' />
```

We can pass other attribute as a props:

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
<Icon icon={ IconArrow } className={icon_className} />
```