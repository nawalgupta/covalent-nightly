import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TdMenuComponent = (function () {
    function TdMenuComponent() {
    }
    TdMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'td-menu',
            template: "<div layout=\"column\"> <ng-content select=\"[td-menu-header]\"></ng-content> <md-divider></md-divider> <div class=\"td-menu-content\"> <ng-content></ng-content> </div> <md-divider></md-divider> <ng-content select=\"[td-menu-footer]\"></ng-content> </div>",
            styles: [":host { display: block; margin-top: -8px; margin-bottom: -8px; } :host /deep/ [td-menu-header] { padding: 8px; text-align: center; } :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content, :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content, :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content, :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content, :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content { height: auto; padding: 8px; } :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content .mat-list-text { padding-right: 0px; } [dir='rtl'] :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl'] :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content .mat-list-text { padding-left: 0px; padding-right: 16px; } :host /deep/ md-list a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-list md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-list[dense] a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-list[dense] md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list[dense] a[md-list-item].mat-2-line .mat-list-item-content [md-line] + [md-line], :host /deep/ md-nav-list[dense] md-list-item.mat-2-line .mat-list-item-content [md-line] + [md-line] { margin-top: 4px; } .td-menu-content { max-height: calc(50vh); overflow-y: auto; } /*# sourceMappingURL=menu.component.css.map */ "],
        })
    ], TdMenuComponent);
    return TdMenuComponent;
}());
export { TdMenuComponent };
//# sourceMappingURL=menu.component.js.map