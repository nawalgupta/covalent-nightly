import { Directive, Component, ContentChildren, ViewChild, Injectable, Inject, RendererFactory2, EventEmitter, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogConfig, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { __spread } from 'tslib';
import { DragDrop } from '@angular/cdk/drag-drop';
import { Subject, fromEvent, merge } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdDialogTitleDirective = /** @class */ (function () {
    function TdDialogTitleDirective() {
    }
    TdDialogTitleDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-title' },] }
    ];
    return TdDialogTitleDirective;
}());
var TdDialogContentDirective = /** @class */ (function () {
    function TdDialogContentDirective() {
    }
    TdDialogContentDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-content' },] }
    ];
    return TdDialogContentDirective;
}());
var TdDialogActionsDirective = /** @class */ (function () {
    function TdDialogActionsDirective() {
    }
    TdDialogActionsDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-actions' },] }
    ];
    return TdDialogActionsDirective;
}());
var TdDialogComponent = /** @class */ (function () {
    function TdDialogComponent() {
    }
    /**
     * @return {?}
     */
    TdDialogComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.dialogTitle.length > 1) {
            throw new Error('Duplicate td-dialog-title component at in td-dialog.');
        }
        if (this.dialogContent.length > 1) {
            throw new Error('Duplicate td-dialog-content component at in td-dialog.');
        }
        if (this.dialogActions.length > 1) {
            throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
        }
    };
    TdDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-dialog',
                    template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>\n",
                    styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"]
                }] }
    ];
    TdDialogComponent.propDecorators = {
        dialogTitle: [{ type: ContentChildren, args: [TdDialogTitleDirective, { descendants: true },] }],
        dialogContent: [{ type: ContentChildren, args: [TdDialogContentDirective, { descendants: true },] }],
        dialogActions: [{ type: ContentChildren, args: [TdDialogActionsDirective, { descendants: true },] }]
    };
    return TdDialogComponent;
}());
if (false) {
    /** @type {?} */
    TdDialogComponent.prototype.dialogTitle;
    /** @type {?} */
    TdDialogComponent.prototype.dialogContent;
    /** @type {?} */
    TdDialogComponent.prototype.dialogActions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdAlertDialogComponent = /** @class */ (function () {
    function TdAlertDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    /**
     * @return {?}
     */
    TdAlertDialogComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close();
    };
    TdAlertDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-alert-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{ closeButton }}</button>\n  </td-dialog-actions>\n</td-dialog>\n",
                    styles: [".td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdAlertDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    return TdAlertDialogComponent;
}());
if (false) {
    /** @type {?} */
    TdAlertDialogComponent.prototype.title;
    /** @type {?} */
    TdAlertDialogComponent.prototype.message;
    /** @type {?} */
    TdAlertDialogComponent.prototype.closeButton;
    /**
     * @type {?}
     * @private
     */
    TdAlertDialogComponent.prototype._dialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdConfirmDialogComponent = /** @class */ (function () {
    function TdConfirmDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
        this.isDestructive = false;
    }
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(false);
    };
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(true);
    };
    TdConfirmDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-confirm-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      [color]=\"isDestructive ? 'warn' : 'accent'\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                    styles: [".td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdConfirmDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    return TdConfirmDialogComponent;
}());
if (false) {
    /** @type {?} */
    TdConfirmDialogComponent.prototype.title;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.message;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.cancelButton;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.acceptButton;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.isDestructive;
    /**
     * @type {?}
     * @private
     */
    TdConfirmDialogComponent.prototype._dialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdPromptDialogComponent = /** @class */ (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // focus input once everything is rendered and good to go
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            ((/** @type {?} */ (_this._input.nativeElement))).focus();
        }));
    };
    /**
     * Method executed when input is focused
     * Selects all text
     */
    /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    TdPromptDialogComponent.prototype.handleInputFocus = /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this._input.nativeElement))).select();
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close();
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(this.value);
    };
    TdPromptDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-prompt-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input\n            matInput\n            #input\n            (focus)=\"handleInputFocus()\"\n            (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n            [(ngModel)]=\"value\"\n            name=\"value\"\n            required\n          />\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      color=\"accent\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      [disabled]=\"!form.valid\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                    styles: [".td-dialog-input-wrapper{-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-ms-flex:1;flex:1;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdPromptDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    TdPromptDialogComponent.propDecorators = {
        _input: [{ type: ViewChild, args: ['input', { static: true },] }]
    };
    return TdPromptDialogComponent;
}());
if (false) {
    /** @type {?} */
    TdPromptDialogComponent.prototype.title;
    /** @type {?} */
    TdPromptDialogComponent.prototype.message;
    /** @type {?} */
    TdPromptDialogComponent.prototype.value;
    /** @type {?} */
    TdPromptDialogComponent.prototype.cancelButton;
    /** @type {?} */
    TdPromptDialogComponent.prototype.acceptButton;
    /** @type {?} */
    TdPromptDialogComponent.prototype._input;
    /**
     * @type {?}
     * @private
     */
    TdPromptDialogComponent.prototype._dialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IDialogConfig() { }
if (false) {
    /** @type {?|undefined} */
    IDialogConfig.prototype.title;
    /** @type {?} */
    IDialogConfig.prototype.message;
}
/**
 * @record
 */
function IAlertConfig() { }
if (false) {
    /** @type {?|undefined} */
    IAlertConfig.prototype.closeButton;
}
/**
 * @record
 */
function IConfirmConfig() { }
if (false) {
    /** @type {?|undefined} */
    IConfirmConfig.prototype.acceptButton;
    /** @type {?|undefined} */
    IConfirmConfig.prototype.cancelButton;
    /** @type {?|undefined} */
    IConfirmConfig.prototype.isDestructive;
}
/**
 * @record
 */
function IPromptConfig() { }
if (false) {
    /** @type {?|undefined} */
    IPromptConfig.prototype.value;
}
/**
 * @record
 * @template T
 */
function IDraggableConfig() { }
if (false) {
    /** @type {?} */
    IDraggableConfig.prototype.component;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.config;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.dragHandleSelectors;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.draggableClass;
}
/**
 * @record
 * @template T
 */
function IDraggableRefs() { }
if (false) {
    /** @type {?} */
    IDraggableRefs.prototype.matDialogRef;
    /** @type {?} */
    IDraggableRefs.prototype.dragRefSubject;
}
var TdDialogService = /** @class */ (function () {
    function TdDialogService(_document, _dialogService, _dragDrop, rendererFactory) {
        this._document = _document;
        this._dialogService = _dialogService;
        this._dragDrop = _dragDrop;
        this.rendererFactory = rendererFactory;
        this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
    }
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     */
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    TdDialogService.prototype.open = /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    function (component, config) {
        return this._dialogService.open(component, config);
    };
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     */
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    TdDialogService.prototype.closeAll = /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    function () {
        this._dialogService.closeAll();
    };
    /**
     * params:
     * - config: IAlertConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     closeButton?: string;
     * }
     *
     * Opens an alert dialog with the provided config.
     * Returns an MatDialogRef<TdAlertDialogComponent> object.
     */
    /**
     * params:
     * - config: IAlertConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     closeButton?: string;
     * }
     *
     * Opens an alert dialog with the provided config.
     * Returns an MatDialogRef<TdAlertDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openAlert = /**
     * params:
     * - config: IAlertConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     closeButton?: string;
     * }
     *
     * Opens an alert dialog with the provided config.
     * Returns an MatDialogRef<TdAlertDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = this._createConfig(config);
        /** @type {?} */
        var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        /** @type {?} */
        var alertDialogComponent = dialogRef.componentInstance;
        alertDialogComponent.title = config.title;
        alertDialogComponent.message = config.message;
        if (config.closeButton) {
            alertDialogComponent.closeButton = config.closeButton;
        }
        return dialogRef;
    };
    /**
     * params:
     * - config: IConfirmConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     *     isDestructive?: boolean;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     */
    /**
     * params:
     * - config: IConfirmConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     *     isDestructive?: boolean;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openConfirm = /**
     * params:
     * - config: IConfirmConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     *     isDestructive?: boolean;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = this._createConfig(config);
        /** @type {?} */
        var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
        /** @type {?} */
        var confirmDialogComponent = dialogRef.componentInstance;
        confirmDialogComponent.title = config.title;
        confirmDialogComponent.message = config.message;
        if (config.acceptButton) {
            confirmDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.isDestructive) {
            confirmDialogComponent.isDestructive = config.isDestructive;
        }
        if (config.cancelButton) {
            confirmDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    };
    /**
     * params:
     * - config: IPromptConfig {
     *     message: string;
     *     title?: string;
     *     value?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a prompt dialog with the provided config.
     * Returns an MatDialogRef<TdPromptDialogComponent> object.
     */
    /**
     * params:
     * - config: IPromptConfig {
     *     message: string;
     *     title?: string;
     *     value?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a prompt dialog with the provided config.
     * Returns an MatDialogRef<TdPromptDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openPrompt = /**
     * params:
     * - config: IPromptConfig {
     *     message: string;
     *     title?: string;
     *     value?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a prompt dialog with the provided config.
     * Returns an MatDialogRef<TdPromptDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = this._createConfig(config);
        /** @type {?} */
        var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
        /** @type {?} */
        var promptDialogComponent = dialogRef.componentInstance;
        promptDialogComponent.title = config.title;
        promptDialogComponent.message = config.message;
        promptDialogComponent.value = config.value;
        if (config.acceptButton) {
            promptDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            promptDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    };
    /**
     * Opens a draggable dialog containing the given component.
     */
    /**
     * Opens a draggable dialog containing the given component.
     * @template T
     * @param {?} __0
     * @return {?}
     */
    TdDialogService.prototype.openDraggable = /**
     * Opens a draggable dialog containing the given component.
     * @template T
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var component = _a.component, config = _a.config, dragHandleSelectors = _a.dragHandleSelectors, draggableClass = _a.draggableClass;
        /** @type {?} */
        var matDialogRef = this._dialogService.open(component, config);
        /** @type {?} */
        var dragRefSubject = new Subject();
        /** @type {?} */
        var CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
        /** @type {?} */
        var CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
        matDialogRef.afterOpened().subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var dialogElement = (/** @type {?} */ (_this._document.getElementById(matDialogRef.id)));
            /** @type {?} */
            var draggableElement = _this._dragDrop.createDrag(dialogElement);
            if (draggableClass) {
                /** @type {?} */
                var childComponent = dialogElement.firstElementChild;
                _this._renderer2.addClass(childComponent, draggableClass);
            }
            if (dragHandleSelectors && dragHandleSelectors.length) {
                /** @type {?} */
                var dragHandles = dragHandleSelectors.reduce((/**
                 * @param {?} acc
                 * @param {?} curr
                 * @return {?}
                 */
                function (acc, curr) { return __spread(acc, Array.from(dialogElement.querySelectorAll(curr))); }), []);
                if (dragHandles.length > 0) {
                    draggableElement.withHandles((/** @type {?} */ (dragHandles)));
                }
            }
            /** @type {?} */
            var rootElement = dialogElement.closest(CDK_OVERLAY_PANE_SELECTOR);
            if (rootElement) {
                draggableElement.withRootElement((/** @type {?} */ (rootElement)));
            }
            /** @type {?} */
            var boundaryElement = dialogElement.closest(CDK_OVERLAY_CONTAINER_SELECTOR);
            if (boundaryElement) {
                draggableElement.withBoundaryElement((/** @type {?} */ (boundaryElement)));
            }
            dragRefSubject.next(draggableElement);
        }));
        return { matDialogRef: matDialogRef, dragRefSubject: dragRefSubject };
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype._createConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        Object.assign(dialogConfig, config);
        return dialogConfig;
    };
    TdDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdDialogService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: MatDialog },
        { type: DragDrop },
        { type: RendererFactory2 }
    ]; };
    return TdDialogService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._renderer2;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._document;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._dialogService;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._dragDrop;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype.rendererFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdWindowDialogComponent = /** @class */ (function () {
    function TdWindowDialogComponent() {
        this.docked = false;
        this.dockToggled = new EventEmitter();
        this.closed = new EventEmitter();
        this.toolbarHeight = 56;
    }
    /**
     * @return {?}
     */
    TdWindowDialogComponent.prototype.toggleDockedState = /**
     * @return {?}
     */
    function () {
        this.dockToggled.emit(this.docked);
    };
    TdWindowDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-window-dialog',
                    template: "<mat-toolbar\n  [color]=\"toolbarColor\"\n  class=\"td-window-dialog-toolbar\"\n  [style.min-height.px]=\"toolbarHeight\"\n  [style.cursor]=\"docked ? 'inherit' : 'move'\"\n>\n  <mat-toolbar-row [style.height.px]=\"toolbarHeight\">\n    <div layout=\"row\" layout-align=\"start center\" flex>\n      <span class=\"mat-title td-window-dialog-title truncate\" flex>\n        {{ title }}\n      </span>\n      <!-- TODO: Resizing a drag-and-drop element was not working so removed docking/undocking for now-->\n      <!-- <button mat-icon-button [matTooltip]=\"toggleDockedStateLabel\" (click)=\"toggleDockedState()\">\n        <mat-icon [attr.aria-label]=\"toggleDockedStateLabel\">\n          {{ docked ? 'unfold_more' : 'unfold_less' }}\n        </mat-icon>\n      </button> -->\n\n      <button\n        mat-icon-button\n        [matTooltip]=\"closeLabel\"\n        (click)=\"closed.emit()\"\n        class=\"td-window-dialog-close\"\n        [attr.data-test]=\"'close-button'\"\n      >\n        <mat-icon [attr.aria-label]=\"closeLabel\">close</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.truncate{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.td-window-dialog-title{margin-bottom:0}.td-window-dialog-close{margin-right:-8px}::ng-deep .td-window-dialog .mat-dialog-container{padding:0}"]
                }] }
    ];
    TdWindowDialogComponent.propDecorators = {
        toolbarColor: [{ type: Input }],
        docked: [{ type: Input }],
        title: [{ type: Input }],
        toggleDockedStateLabel: [{ type: Input }],
        closeLabel: [{ type: Input }],
        dockToggled: [{ type: Output }],
        closed: [{ type: Output }]
    };
    return TdWindowDialogComponent;
}());
if (false) {
    /** @type {?} */
    TdWindowDialogComponent.prototype.toolbarColor;
    /** @type {?} */
    TdWindowDialogComponent.prototype.docked;
    /** @type {?} */
    TdWindowDialogComponent.prototype.title;
    /** @type {?} */
    TdWindowDialogComponent.prototype.toggleDockedStateLabel;
    /** @type {?} */
    TdWindowDialogComponent.prototype.closeLabel;
    /** @type {?} */
    TdWindowDialogComponent.prototype.dockToggled;
    /** @type {?} */
    TdWindowDialogComponent.prototype.closed;
    /** @type {?} */
    TdWindowDialogComponent.prototype.toolbarHeight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
    TdWindowDialogComponent,
];
/** @type {?} */
var TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
var CovalentDialogsModule = /** @class */ (function () {
    function CovalentDialogsModule() {
    }
    CovalentDialogsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule,
                        MatDialogModule,
                        MatInputModule,
                        MatButtonModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatIconModule,
                    ],
                    declarations: [TD_DIALOGS],
                    exports: [TD_DIALOGS],
                    providers: [TdDialogService],
                },] }
    ];
    return CovalentDialogsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var corners = {
    topRight: 'topRight',
    bottomRight: 'bottomRight',
    bottomLeft: 'bottomLeft',
    topLeft: 'topLeft',
};
/** @enum {string} */
var cursors = {
    nesw: 'nesw-resize',
    nwse: 'nwse-resize',
};
/** @enum {string} */
var verticalAlignment = {
    top: 'top',
    bottom: 'bottom',
};
/** @enum {string} */
var horizontalAlignment = {
    right: 'right',
    left: 'left',
};
/** @type {?} */
var cornerWidth = '16px';
/** @type {?} */
var offset = '0px';
/** @type {?} */
var minWidth = 200;
/** @type {?} */
var minHeight = 200;
/**
 * @param {?} sizeString
 * @return {?}
 */
function getPixels(sizeString) {
    return parseFloat((sizeString || '').replace('px', ''));
}
/**
 * @param {?} min
 * @param {?} num
 * @param {?} max
 * @return {?}
 */
function clamp(min, num, max) {
    return Math.min(Math.max(num, min), max);
}
var ResizableDraggableDialog = /** @class */ (function () {
    function ResizableDraggableDialog(_document, _renderer2, _dialogRef, _dragRef) {
        this._document = _document;
        this._renderer2 = _renderer2;
        this._dialogRef = _dialogRef;
        this._dragRef = _dragRef;
        this.cornerElements = [];
        this.pointerDownSubs = [];
        this._initialPositionReset();
        this._attachCorners();
    }
    /**
     * @return {?}
     */
    ResizableDraggableDialog.prototype.attach = /**
     * @return {?}
     */
    function () {
        this.detach();
        this._attachCorners();
    };
    /**
     * @return {?}
     */
    ResizableDraggableDialog.prototype.detach = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pointerDownSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        function (sub) { return sub.unsubscribe(); }));
        this.pointerDownSubs = [];
        this.cornerElements.forEach((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return _this._renderer2.removeChild(_this._getDialogWrapper(), elem); }));
        this.cornerElements = [];
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._getDialogWrapper = /**
     * @private
     * @return {?}
     */
    function () {
        return ((/** @type {?} */ (this._document.getElementById(this._dialogRef.id))) || {}).parentElement;
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._getViewportDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        return this._getDialogWrapper().parentElement.getBoundingClientRect();
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._getDialogWrapperDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dimensions = getComputedStyle(this._getDialogWrapper());
        return {
            width: getPixels(dimensions.width),
            height: getPixels(dimensions.height),
        };
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._initialPositionReset = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this._getViewportDimensions(), viewportWidth = _a.right, viewportHeight = _a.bottom;
        var _b = this._getDialogWrapperDimensions(), width = _b.width, height = _b.height;
        var _c = this._getDialogWrapper().style, originalDialogRight = _c.marginRight, originalDialogLeft = _c.marginLeft, originalDialogBottom = _c.marginBottom, originalDialogTop = _c.marginTop;
        /** @type {?} */
        var x;
        if (originalDialogLeft) {
            x = getPixels(originalDialogLeft);
        }
        else if (originalDialogRight) {
            x = viewportWidth - getPixels(originalDialogRight) - width;
        }
        else {
            x = (viewportWidth - width) / 2;
        }
        /** @type {?} */
        var y;
        if (originalDialogTop) {
            y = getPixels(originalDialogTop);
        }
        else if (originalDialogBottom) {
            y = viewportHeight - getPixels(originalDialogBottom) - height;
        }
        else {
            y = (viewportHeight - height) / 2;
        }
        // use drag ref's mechanisms for positioning instead of the dialog's
        this._dialogRef.updatePosition({ top: '0px', right: '0px', bottom: '0px', left: '0px' });
        this._dragRef.setFreeDragPosition({ x: x, y: y });
    };
    /**
     * @private
     * @return {?}
     */
    ResizableDraggableDialog.prototype._attachCorners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.values(corners).forEach((/**
         * @param {?} corner
         * @return {?}
         */
        function (corner) {
            /** @type {?} */
            var element = _this._renderer2.createElement('div');
            _this.cornerElements = __spread(_this.cornerElements, [element]);
            _this._renderer2.setStyle(element, 'position', 'absolute');
            _this._renderer2.setStyle(element, 'width', cornerWidth);
            _this._renderer2.setStyle(element, 'height', cornerWidth);
            _this._renderer2.appendChild(_this._getDialogWrapper(), element);
            /** @type {?} */
            var cursor;
            /** @type {?} */
            var topBottom;
            /** @type {?} */
            var rightLeft;
            if (corner === corners.topRight) {
                cursor = cursors.nesw;
                topBottom = verticalAlignment.top;
                rightLeft = horizontalAlignment.right;
            }
            else if (corner === corners.bottomRight) {
                cursor = cursors.nwse;
                topBottom = verticalAlignment.bottom;
                rightLeft = horizontalAlignment.right;
                /** @type {?} */
                var icon = _this._renderer2.createElement('i');
                _this._renderer2.addClass(icon, 'material-icons');
                _this._renderer2.appendChild(icon, _this._renderer2.createText('filter_list'));
                _this._renderer2.appendChild(element, icon);
                _this._renderer2.setStyle(icon, 'transform', "rotate(" + 315 + "deg) translate(0px, " + offset + ")");
                _this._renderer2.setStyle(icon, 'font-size', cornerWidth);
            }
            else if (corner === corners.bottomLeft) {
                cursor = cursors.nesw;
                topBottom = verticalAlignment.bottom;
                rightLeft = horizontalAlignment.left;
            }
            else if (corner === corners.topLeft) {
                cursor = cursors.nwse;
                topBottom = verticalAlignment.top;
                rightLeft = horizontalAlignment.left;
            }
            _this._renderer2.setStyle(element, topBottom, offset);
            _this._renderer2.setStyle(element, rightLeft, offset);
            _this._renderer2.setStyle(element, 'cursor', cursor);
            /** @type {?} */
            var pointerDownSub = fromEvent(element, 'pointerdown').subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this._handleMouseDown(event, corner);
            }));
            _this.pointerDownSubs = __spread(_this.pointerDownSubs, [pointerDownSub]);
        }));
    };
    /**
     * @private
     * @param {?} event
     * @param {?} corner
     * @return {?}
     */
    ResizableDraggableDialog.prototype._handleMouseDown = /**
     * @private
     * @param {?} event
     * @param {?} corner
     * @return {?}
     */
    function (event, corner) {
        var _this = this;
        this._renderer2.setStyle((/** @type {?} */ (this._document.body)), 'user-select', 'none');
        var _a = this._getDialogWrapperDimensions(), originalWidth = _a.width, originalHeight = _a.height;
        /** @type {?} */
        var originalMouseX = event.pageX;
        /** @type {?} */
        var originalMouseY = event.pageY;
        var _b = this._dragRef.getFreeDragPosition(), currentTransformX = _b.x, currentTransformY = _b.y;
        var _c = this._getDialogWrapper().getBoundingClientRect(), distanceFromBottom = _c.bottom, distanceFromRight = _c.right;
        var _d = this._getViewportDimensions(), viewportWidth = _d.right, viewportHeight = _d.bottom;
        /** @type {?} */
        var mouseMoveSub = fromEvent(window, 'pointermove').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault(); // prevent highlighting of text when dragging
            // prevent highlighting of text when dragging
            /** @type {?} */
            var yDelta = clamp(0, e.pageY, viewportHeight) - originalMouseY;
            /** @type {?} */
            var xDelta = clamp(0, e.pageX, viewportWidth) - originalMouseX;
            /** @type {?} */
            var newHeight;
            /** @type {?} */
            var newWidth;
            /** @type {?} */
            var newTransformY = 0;
            /** @type {?} */
            var newTransformX = 0;
            // top right
            if (corner === corners.topRight) {
                newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
                newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
                newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
                newTransformX = currentTransformX;
            }
            // bottom right
            else if (corner === corners.bottomRight) {
                newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
                newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
                newTransformY = currentTransformY;
                newTransformX = currentTransformX;
            }
            // bottom left
            else if (corner === corners.bottomLeft) {
                newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
                newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);
                newTransformY = currentTransformY;
                newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
            }
            // top left
            else if (corner === corners.topLeft) {
                newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
                newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);
                newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
                newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
            }
            _this._dialogRef.updateSize(newWidth + "px", newHeight + "px");
            _this._dragRef.setFreeDragPosition({
                x: newTransformX,
                y: newTransformY,
            });
        }));
        /** @type {?} */
        var mouseUpSub = merge(fromEvent(window, 'pointerup'), fromEvent(window, 'pointercancel')).subscribe((/**
         * @return {?}
         */
        function () {
            _this._renderer2.removeStyle((/** @type {?} */ (_this._document.body)), 'user-select');
            mouseMoveSub.unsubscribe();
            mouseUpSub.unsubscribe();
        }));
    };
    return ResizableDraggableDialog;
}());
if (false) {
    /** @type {?} */
    ResizableDraggableDialog.prototype.cornerElements;
    /** @type {?} */
    ResizableDraggableDialog.prototype.pointerDownSubs;
    /**
     * @type {?}
     * @private
     */
    ResizableDraggableDialog.prototype._document;
    /**
     * @type {?}
     * @private
     */
    ResizableDraggableDialog.prototype._renderer2;
    /**
     * @type {?}
     * @private
     */
    ResizableDraggableDialog.prototype._dialogRef;
    /**
     * @type {?}
     * @private
     */
    ResizableDraggableDialog.prototype._dragRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentDialogsModule, ResizableDraggableDialog, TdAlertDialogComponent, TdConfirmDialogComponent, TdDialogActionsDirective, TdDialogComponent, TdDialogContentDirective, TdDialogService, TdDialogTitleDirective, TdPromptDialogComponent, TdWindowDialogComponent as ɵa };
//# sourceMappingURL=covalent-core-dialogs.js.map
