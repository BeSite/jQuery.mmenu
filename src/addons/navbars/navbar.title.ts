import Mmenu from '../../core/oncanvas/mmenu.oncanvas';
import * as DOM from '../../_modules/dom';
import * as sr from '../../_modules/screenreader';

export default function (this: Mmenu, navbar: HTMLElement) {
    /** The title node in the navbar. */
    const title = DOM.create('a.mm-navbar__title') as HTMLAnchorElement;

    /** Text in the title. */
    const titleText = DOM.create('span');
    
    //	Add title to the navbar.
    title.append(titleText);
    navbar.append(title);

    //	Update the title to the opened panel.
    this.bind('openPanel:before', (panel: HTMLElement) => {

        //	Do nothing in a vertically expanding panel.
        if (panel.parentElement.matches('.mm-listitem--vertical')) {
            return;
        }

        //	Find the original title in the opened panel.
        const original = DOM.find(panel, '.mm-navbar__title')[0];

        //	Get the URL for the title.
        let href = original?.getAttribute('href') || '';
        if (href) {
            title.href = href;
        } else {
            title.removeAttribute('href');
        }

        //	Get the text for the title.
        titleText.innerHTML = DOM.children(original, 'span')[0]?.innerHTML || '';
    });

    //	Add screenreader  support
    let prev: HTMLElement;
    this.bind('openPanel:before', (panel: HTMLElement) => {

        if (this.opts.screenReader.text) {
            if (!prev) {
                var navbars = DOM.children(
                    this.node.menu,
                    '.mm-navbars'
                );
                navbars.forEach((navbar) => {
                    let btn = DOM.find(navbar, '.mm-btn--prev')[0];
                    if (btn) {
                        prev = btn;
                    }
                });
            }

            if (prev) {
                var hidden = true;
                if (this.opts.navbar.titleLink == 'parent') {
                    hidden = !prev.matches('.mm-hidden');
                }
                sr.aria(title, 'hidden', hidden);
            }
        }
    });
}