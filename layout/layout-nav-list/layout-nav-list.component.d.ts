import { Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenav, MdSidenavToggleResult } from '@angular/material';
import { LayoutToggle, ILayoutTogglable } from '../layout-toggle.class';
export declare class TdLayoutNavListToggleDirective extends LayoutToggle {
    constructor(layout: TdLayoutNavListComponent, renderer: Renderer2, elementRef: ElementRef);
}
export declare class TdLayoutNavListComponent implements ILayoutTogglable {
    private _router;
    _sideNav: MdSidenav;
    /**
     * toolbarTitle?: string
     *
     * Title set in toolbar.
     */
    toolbarTitle: string;
    /**
     * icon?: string
     * icon name to be displayed before the title
     */
    icon: string;
    /**
     * logo?: string
     *
     * logo icon name to be displayed before the title.
     * If [icon] is set, then this will not be shown.
     */
    logo: string;
    /**
     * color?: string
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, primary is used.
     */
    color: string;
    /**
     * mode?: 'side', 'push' or 'over'
     *
     * The mode or styling of the sidenav.
     * Defaults to "side".
     * See "MdSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    mode: 'side' | 'push' | 'over';
    /**
     * opened?: boolean
     * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
     * Defaults to "true".
     *
     * See "MdSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    opened: boolean;
    /**
     * sidenavWidth?: string
     *
     * Sets the "width" of the sidenav in either "px" or "%" ("%" is not well supported yet as stated in the layout docs)
     * Defaults to "350px".
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    sidenavWidth: string;
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and toolbarTitle.
     */
    navigationRoute: string;
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     */
    readonly disableClose: boolean;
    /**
     * Checks if router was injected.
     */
    readonly routerEnabled: boolean;
    constructor(_router: Router);
    handleNavigationClick(): void;
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    toggle(): Promise<MdSidenavToggleResult>;
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    open(): Promise<MdSidenavToggleResult>;
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    close(): Promise<MdSidenavToggleResult>;
}
