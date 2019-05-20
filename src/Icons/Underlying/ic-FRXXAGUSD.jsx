import React      from 'react';
import Icon from './../../icon.jsx';

const SVGFRXXAGUSD = () => (
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#E1E1E1" offset="0%"/><stop stop-color="silver" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(2 8)"><use fill="silver"/><path stroke-opacity=".08" stroke="#000" d="M11.118.5a.5.5 0 0 0-.447.276l-2.5 5a.5.5 0 0 0 .447.724h10.764a.5.5 0 0 0 .447-.724l-2.5-5A.5.5 0 0 0 16.882.5h-5.764z" stroke-linejoin="square" fill="url(#a)"/></g><g transform="translate(2 8)"><use fill="silver"/><path stroke-opacity=".08" stroke="#000" d="M4.118 8.5a.5.5 0 0 0-.447.276l-2.5 5a.5.5 0 0 0 .447.724h10.764a.5.5 0 0 0 .447-.724l-2.5-5a.5.5 0 0 0-.447-.276H4.118z" stroke-linejoin="square" fill="url(#a)"/></g><g transform="translate(2 8)"><use fill="silver"/><path stroke-opacity=".08" stroke="#000" d="M18.118 8.5a.5.5 0 0 0-.447.276l-2.5 5a.5.5 0 0 0 .447.724h10.764a.5.5 0 0 0 .447-.724l-2.5-5a.5.5 0 0 0-.447-.276h-5.764z" stroke-linejoin="square" fill="url(#a)"/></g></g></svg>
);

const IconFRXXAGUSD = () => <Icon icon={SVGFRXXAGUSD}/>

IconFRXXAGUSD.displayName = 'IconFRXXAGUSD';
SVGFRXXAGUSD.displayName = 'SVGFRXXAGUSD';

export { IconFRXXAGUSD, SVGFRXXAGUSD };