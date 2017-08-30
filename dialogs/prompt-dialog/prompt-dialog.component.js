import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MdDialogRef } from '@angular/material';
var TdPromptDialogComponent = (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    TdPromptDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // focus input once everything is rendered and good to go
        Promise.resolve().then(function () {
            _this._input.nativeElement.focus();
        });
    };
    /**
     * Method executed when input is focused
     * Selects all text
     */
    TdPromptDialogComponent.prototype.handleInputFocus = function () {
        this._input.nativeElement.select();
    };
    TdPromptDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(undefined);
    };
    TdPromptDialogComponent.prototype.accept = function () {
        this._dialogRef.close(this.value);
    };
    tslib_1.__decorate([
        ViewChild('input'),
        tslib_1.__metadata("design:type", ElementRef)
    ], TdPromptDialogComponent.prototype, "_input", void 0);
    TdPromptDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'td-prompt-dialog',
            template: "<td-dialog> <td-dialog-title *ngIf=\"title\"> {{title}} </td-dialog-title> <td-dialog-content class=\"md-subhead tc-grey-700\"> {{message}} <form #form=\"ngForm\" novalidate> <div layout=\"row\"> <md-input-container flex> <input mdInput #input (focus)=\"handleInputFocus()\" (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\" [(ngModel)]=\"value\" name=\"value\" required/> </md-input-container> </div> </form> </td-dialog-content> <td-dialog-actions> <button md-button #closeBtn  (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{cancelButton}}</button> <button md-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" [disabled]=\"!form.valid\" (click)=\"accept()\">{{acceptButton}}</button> </td-dialog-actions> </td-dialog>",
            styles: ["@media (min-width: 600px) { td-dialog { width: 400px; } } @media (max-width: 599px) { td-dialog { width: 250px; } } /*# sourceMappingURL=prompt-dialog.component.css.map */ "],
        }),
        tslib_1.__metadata("design:paramtypes", [MdDialogRef])
    ], TdPromptDialogComponent);
    return TdPromptDialogComponent;
}());
export { TdPromptDialogComponent };
//# sourceMappingURL=prompt-dialog.component.js.map