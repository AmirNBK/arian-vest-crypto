import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../assets/Fonts/iranyekanwebregular_0.ttf' })
import {
    PaginatorNextPageLinkOptions, PaginatorPageLinksOptions, PaginatorPrevPageLinkOptions,
} from 'primereact/paginator';
import { classNames } from 'primereact/utils';
import { Ripple } from 'primereact/ripple';

const template1 = {
    layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
    PrevPageLink: (options: PaginatorPrevPageLinkOptions) => {
        return (
            <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                <span className={`${myFontIran.className} p-3 text-white`}>قبلی</span>
                <Ripple />
            </button>
        );
    },
    NextPageLink: (options: PaginatorNextPageLinkOptions) => {
        return (
            <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                <span className={`${myFontIran.className} p-3 text-main-orange`}>بعدی</span>
                <Ripple />
            </button>
        );
    },
    PageLinks: (options: PaginatorPageLinksOptions) => {
        if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
            const className = classNames(options.className, { 'p-disabled': true });

            return (
                <span className={className} style={{ userSelect: 'none' }}>
                    ...
                </span>
            );
        }

        return (
            <button type="button" className={options.className} onClick={options.onClick}>
                {options.page + 1}
                <Ripple />
            </button>
        );
    },
};

export default template1