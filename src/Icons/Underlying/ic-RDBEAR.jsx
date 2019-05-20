import React      from 'react';
import Icon from './../../icon.jsx';

const SVGRDBEAR = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>icons/underlying assets/volatility/bear market/ic-marketbear</title><defs><circle id="a" cx="10" cy="10" r="10"/><circle id="c" cx="10" cy="10" r="10"/></defs><g transform="translate(6 6)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#D20000" xlinkHref="#a"/><path d="M9.718 4.296a64.16 64.16 0 0 0 1.601-.172c.394.203.605.56.635 1.072 2.138 2.058 3.207 3.599 3.207 4.621a28.905 28.905 0 0 1 2.864 2.5.339.339 0 0 1 .017.462c-.597.687-1.21 1.03-1.836 1.03.03.17.034.322.01.456-.03.175-.417.402-.596.384-1.353-.13-2.464-.532-3.78-.998-3.8-.474-6.696.683-7.025 3.096-.22 1.608-.22 3.943 0 7.003C.932 16.254-.872 10.548-.598 6.63c.274-3.917 2.125-5.048 5.553-3.392 1.088.462 1.92.758 2.499.886.578.129 1.332.186 2.264.172z" fill="#FFF" mask="url(#b)"/><circle stroke="#D20000" stroke-width="1.25" cx="10" cy="10" r="9.375"/></g></svg>
);

const IconRDBEAR = () => <Icon icon={SVGRDBEAR}/>

IconRDBEAR.displayName = 'IconRDBEAR';
SVGRDBEAR.displayName = 'SVGRDBEAR';

export { IconRDBEAR, SVGRDBEAR };