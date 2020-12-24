import Mmenu from '../../core/oncanvas/mmenu.oncanvas';
import * as DOM from '../../_modules/dom';
import * as sr from '../../_modules/screenreader';

export default function (this: Mmenu, navbar: HTMLElement) {
    //	Add content
    var close = DOM.create('a.mm-btn.mm-btn--close.mm-navbar__btn');
    navbar.append(close);

    //	Update to page node
    this.bind('setPage:after', (page: HTMLElement) => {
        close.setAttribute('href', '#' + page.id);
    });

    //	Add screenreader support
    close.append(sr.text(
        this.i18n(this.conf.screenReader.text.closeMenu)
    ));
}