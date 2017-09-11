import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, TemplateRef, ViewContainerRef, ChangeDetectorRef, forwardRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { mixinDisabled } from '../../common/common.module';
var noop = function () {
    // empty method
};
export var FILE_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TdFileInputComponent; }),
    multi: true,
};
var TdFileInputLabelDirective = (function (_super) {
    tslib_1.__extends(TdFileInputLabelDirective, _super);
    function TdFileInputLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdFileInputLabelDirective;
}(TemplatePortalDirective));
TdFileInputLabelDirective = tslib_1.__decorate([
    Directive({
        selector: '[td-file-input-label]ng-template',
    }),
    tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], TdFileInputLabelDirective);
export { TdFileInputLabelDirective };
var TdFileInputBase = (function () {
    function TdFileInputBase() {
    }
    return TdFileInputBase;
}());
export { TdFileInputBase };
/* tslint:disable-next-line */
export var _TdFileInputMixinBase = mixinDisabled(TdFileInputBase);
var TdFileInputComponent = (function (_super) {
    tslib_1.__extends(TdFileInputComponent, _super);
    function TdFileInputComponent(_renderer, _changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._changeDetectorRef = _changeDetectorRef;
        /**
         * Implemented as part of ControlValueAccessor.
         */
        _this._value = undefined;
        _this._multiple = false;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         */
        _this.onSelect = new EventEmitter();
        _this.onChange = function (_) { return noop; };
        _this.onTouched = function () { return noop; };
        return _this;
    }
    Object.defineProperty(TdFileInputComponent.prototype, "value", {
        // get/set accessor (needed for ControlValueAccessor)
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
        get: function () {
            return this._inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
         */
        set: function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when a file is selected.
     */
    TdFileInputComponent.prototype.handleSelect = function (files) {
        this.writeValue(files);
        this.onSelect.emit(files);
    };
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     */
    TdFileInputComponent.prototype.clear = function () {
        this.writeValue(undefined);
        this._renderer.setProperty(this.inputElement, 'value', '');
    };
    /** Method executed when the disabled value changes */
    TdFileInputComponent.prototype.onDisabledChange = function (v) {
        if (v) {
            this.clear();
        }
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    TdFileInputComponent.prototype.writeValue = function (value) {
        this.value = value;
        this._changeDetectorRef.markForCheck();
    };
    TdFileInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TdFileInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return TdFileInputComponent;
}(_TdFileInputMixinBase));
tslib_1.__decorate([
    ViewChild('fileInput'),
    tslib_1.__metadata("design:type", ElementRef)
], TdFileInputComponent.prototype, "_inputElement", void 0);
tslib_1.__decorate([
    Input('color'),
    tslib_1.__metadata("design:type", String)
], TdFileInputComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input('multiple'),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], TdFileInputComponent.prototype, "multiple", null);
tslib_1.__decorate([
    Input('accept'),
    tslib_1.__metadata("design:type", String)
], TdFileInputComponent.prototype, "accept", void 0);
tslib_1.__decorate([
    Output('select'),
    tslib_1.__metadata("design:type", EventEmitter)
], TdFileInputComponent.prototype, "onSelect", void 0);
TdFileInputComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [FILE_INPUT_CONTROL_VALUE_ACCESSOR],
        selector: 'td-file-input',
        inputs: ['disabled'],
        styles: [":host { /** * Class that is added ondragenter by the [TdFileDrop] directive. */ } :host .td-file-input { padding-left: 8px; padding-right: 8px; } :host input.td-file-input-hidden { display: none; } :host .drop-zone { border-radius: 3px; } :host .drop-zone * { pointer-events: none; } /*# sourceMappingURL=file-input.component.css.map */ "],
        template: "<div> <button md-raised-button class=\"td-file-input\" type=\"button\" [color]=\"color\"  [multiple]=\"multiple\"  [disabled]=\"disabled\" (keyup.enter)=\"fileInput.click()\" (click)=\"fileInput.click()\" (fileDrop)=\"handleSelect($event)\" tdFileDrop> <ng-content></ng-content> </button> <input #fileInput  class=\"td-file-input-hidden\"  type=\"file\" [attr.accept]=\"accept\"                 (fileSelect)=\"handleSelect($event)\" [multiple]=\"multiple\"  [disabled]=\"disabled\" tdFileSelect> </div>",
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2, ChangeDetectorRef])
], TdFileInputComponent);
export { TdFileInputComponent };
//# sourceMappingURL=file-input.component.js.map