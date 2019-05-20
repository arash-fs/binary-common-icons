import React      from 'react';
import Icon from './../../icon.jsx';

const SVGRDBULL = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>icons/underlying assets/volatility/bull market/ic-marketbull</title><defs><circle id="a" cx="10" cy="10" r="10"/><circle id="c" cx="10" cy="10" r="10"/></defs><g transform="translate(6 6)" fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#FF9C00" xlinkHref="#a"/><path d="M9.608 8.261a6.781 6.781 0 0 1 2.58 2.308c.383.575.013 1.945.527 3.061.206.45.66 1.045 1.363 1.787a.609.609 0 0 1-.081.908c-.538.396-.881.662-1.03.796-.43.387-.524.837-.843.943-.611.205-1.36-.11-2.249-.943-1.141.072-2 .072-2.575 0-.382-.048-.751-.288-1.345-.458-.2-.057-.566-.115-1.098-.174l-1.102 1.263c-1.74-.62-2.742-1.13-3.01-1.527-.267-.398-1.557-3.3-3.87-8.707 2.544-.997 5.635-1.08 9.273-.247 4.696-2.628 4.417.73 7.633-.403.906-.32 1.683-1.243 2.33-2.772.182 1.694-.285 2.981-1.403 3.862-1.202.834-2.354.914-3.33.622-.473-.141-1.063-.248-1.77-.319z" fill="#FFF" mask="url(#b)"/><circle stroke="#FF9C00" stroke-width="1.25" cx="10" cy="10" r="9.375"/></g></svg>
);

const IconRDBULL = () => <Icon icon={SVGRDBULL}/>

IconRDBULL.displayName = 'IconRDBULL';
SVGRDBULL.displayName = 'SVGRDBULL';

export { IconRDBULL, SVGRDBULL };