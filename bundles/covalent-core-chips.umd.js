(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/cdk/portal'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('@angular/material/chips'), require('@angular/material/input'), require('@angular/material/core'), require('@angular/material/autocomplete'), require('rxjs'), require('rxjs/operators'), require('@covalent/core/common'), require('@angular/common'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/chips', ['exports', '@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/cdk/portal', '@angular/cdk/coercion', '@angular/cdk/keycodes', '@angular/material/chips', '@angular/material/input', '@angular/material/core', '@angular/material/autocomplete', 'rxjs', 'rxjs/operators', '@covalent/core/common', '@angular/common', '@angular/material/icon'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.chips = {}),global.ng.core,global.ng.platformBrowser,global.ng.forms,global.ng.cdk.portal,global.ng.cdk.coercion,global.ng.cdk.keycodes,global.ng.material.chips,global.ng.material.input,global.ng.material.core,global.ng.material.autocomplete,global.rxjs,global.rxjs.operators,global.covalent.core.common,global.ng.common,global.ng.material.icon));
}(this, (function (exports,core,platformBrowser,forms,portal,coercion,keycodes,chips,input,core$1,autocomplete,rxjs,operators,common,common$1,icon) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdChipDirective = /** @class */ (function (_super) {
        __extends(TdChipDirective, _super);
        function TdChipDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdChipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-chip]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdChipDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        return TdChipDirective;
    }(portal.TemplatePortalDirective));
    var TdAutocompleteOptionDirective = /** @class */ (function (_super) {
        __extends(TdAutocompleteOptionDirective, _super);
        function TdAutocompleteOptionDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdAutocompleteOptionDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-autocomplete-option]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdAutocompleteOptionDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        return TdAutocompleteOptionDirective;
    }(portal.TemplatePortalDirective));
    var TdChipsBase = /** @class */ (function () {
        function TdChipsBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdChipsBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdChipsMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(TdChipsBase), []);
    var TdChipsComponent = /** @class */ (function (_super) {
        __extends(TdChipsComponent, _super);
        function TdChipsComponent(_elementRef, _renderer, _document, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._elementRef = _elementRef;
            _this._renderer = _renderer;
            _this._document = _document;
            _this._outsideClickSubs = rxjs.Subscription.EMPTY;
            _this._inputValueChangesSubs = rxjs.Subscription.EMPTY;
            _this._isMousedown = false;
            _this._length = 0;
            _this._stacked = false;
            _this._requireMatch = false;
            _this._color = 'primary';
            _this._inputPosition = 'after';
            _this._chipAddition = true;
            _this._chipRemoval = true;
            _this._focused = false;
            _this._required = false;
            _this._tabIndex = 0;
            _this._touchendDebounce = 100;
            _this._internalClick = false;
            _this._internalActivateOption = false;
            /**
             * FormControl for the matInput element.
             */
            _this.inputControl = new forms.FormControl();
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 200.
             */
            _this.debounce = 200;
            /**
             * add?: function
             * Method to be executed when a chip is added.
             * Sends chip value as event.
             */
            _this.onAdd = new core.EventEmitter();
            /**
             * remove?: function
             * Method to be executed when a chip is removed.
             * Sends chip value as event.
             */
            _this.onRemove = new core.EventEmitter();
            /**
             * inputChange?: function
             * Method to be executed when the value in the autocomplete input changes.
             * Sends string value as event.
             */
            _this.onInputChange = new core.EventEmitter();
            /**
             * chipFocus?: function
             * Method to be executed when a chip is focused.
             * Sends chip value as event.
             */
            _this.onChipFocus = new core.EventEmitter();
            /**
             * blur?: function
             * Method to be executed when a chip is blurred.
             * Sends chip value as event.
             */
            _this.onChipBlur = new core.EventEmitter();
            _this._renderer.addClass(_this._elementRef.nativeElement, 'mat-' + _this._color);
            return _this;
        }
        Object.defineProperty(TdChipsComponent.prototype, "focused", {
            /**
             * Flag that is true when autocomplete is focused.
             */
            get: /**
             * Flag that is true when autocomplete is focused.
             * @return {?}
             */ function () {
                return this._focused;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "items", {
            get: /**
             * @return {?}
             */ function () {
                return this._items;
            },
            /**
             * items?: any[]
             * Renders the `mat-autocomplete` with the provided list to display as options.
             */
            set: /**
             * items?: any[]
             * Renders the `mat-autocomplete` with the provided list to display as options.
             * @param {?} items
             * @return {?}
             */ function (items) {
                this._items = items;
                this._setFirstOptionActive();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "stacked", {
            get: /**
             * @return {?}
             */ function () {
                return this._stacked;
            },
            /**
             * stacked?: boolean
             * Set stacked or horizontal chips depending on value.
             * Defaults to false.
             */
            set: /**
             * stacked?: boolean
             * Set stacked or horizontal chips depending on value.
             * Defaults to false.
             * @param {?} stacked
             * @return {?}
             */ function (stacked) {
                this._stacked = coercion.coerceBooleanProperty(stacked);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "inputPosition", {
            get: /**
             * @return {?}
             */ function () {
                return this._inputPosition;
            },
            /**
             * inputPosition?: 'before' | 'after'
             * Set input position before or after the chips.
             * Defaults to 'after'.
             */
            set: /**
             * inputPosition?: 'before' | 'after'
             * Set input position before or after the chips.
             * Defaults to 'after'.
             * @param {?} inputPosition
             * @return {?}
             */ function (inputPosition) {
                this._inputPosition = inputPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
            get: /**
             * @return {?}
             */ function () {
                return this._requireMatch;
            },
            /**
             * requireMatch?: boolean
             * Blocks custom inputs and only allows selections from the autocomplete list.
             */
            set: /**
             * requireMatch?: boolean
             * Blocks custom inputs and only allows selections from the autocomplete list.
             * @param {?} requireMatch
             * @return {?}
             */ function (requireMatch) {
                this._requireMatch = coercion.coerceBooleanProperty(requireMatch);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            /**
             * required?: boolean
             * Value is set to true if at least one chip is needed
             * Defaults to false
             */
            set: /**
             * required?: boolean
             * Value is set to true if at least one chip is needed
             * Defaults to false
             * @param {?} required
             * @return {?}
             */ function (required) {
                this._required = coercion.coerceBooleanProperty(required);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "chipAddition", {
            get: /**
             * @return {?}
             */ function () {
                return this._chipAddition;
            },
            /**
             * chipAddition?: boolean
             * Disables the ability to add chips. When setting disabled as true, this will be overriden.
             * Defaults to true.
             */
            set: /**
             * chipAddition?: boolean
             * Disables the ability to add chips. When setting disabled as true, this will be overriden.
             * Defaults to true.
             * @param {?} chipAddition
             * @return {?}
             */ function (chipAddition) {
                this._chipAddition = chipAddition;
                this._toggleInput();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "canAddChip", {
            /**
             * Checks if not in disabled state and if chipAddition is set to 'true'
             * States if a chip can be added and if the input is available
             */
            get: /**
             * Checks if not in disabled state and if chipAddition is set to 'true'
             * States if a chip can be added and if the input is available
             * @return {?}
             */ function () {
                return this.chipAddition && !this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "chipRemoval", {
            get: /**
             * @return {?}
             */ function () {
                return this._chipRemoval;
            },
            /**
             * chipRemoval?: boolean
             * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
             * When setting disabled as true, this will be overriden to false.
             */
            set: /**
             * chipRemoval?: boolean
             * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
             * When setting disabled as true, this will be overriden to false.
             * @param {?} chipRemoval
             * @return {?}
             */ function (chipRemoval) {
                this._chipRemoval = chipRemoval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "canRemoveChip", {
            /**
             * Checks if not in disabled state and if chipRemoval is set to 'true'
             * States if a chip can be removed
             */
            get: /**
             * Checks if not in disabled state and if chipRemoval is set to 'true'
             * States if a chip can be removed
             * @return {?}
             */ function () {
                return this.chipRemoval && !this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "displayPlaceHolder", {
            /**
             * returns the display placeholder
             */
            get: /**
             * returns the display placeholder
             * @return {?}
             */ function () {
                if (!this.canAddChip) {
                    return '';
                }
                return (this._required) ? this.placeholder + " *" : this.placeholder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            /**
             * color?: 'primary' | 'accent' | 'warn'
             * Sets the color for the input and focus/selected state of the chips.
             * Defaults to 'primary'
             */
            set: /**
             * color?: 'primary' | 'accent' | 'warn'
             * Sets the color for the input and focus/selected state of the chips.
             * Defaults to 'primary'
             * @param {?} color
             * @return {?}
             */ function (color) {
                if (color) {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                    this._color = color;
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "tabIndex", {
            /**
             * Hostbinding to set the a11y of the TdChipsComponent depending on its state
             */
            get: /**
             * Hostbinding to set the a11y of the TdChipsComponent depending on its state
             * @return {?}
             */ function () {
                return this.disabled ? -1 : this._tabIndex;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to host focus event to act on it
         */
        /**
         * Listens to host focus event to act on it
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.focusListener = /**
         * Listens to host focus event to act on it
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // should only focus if its not via mousedown to prevent clashing with autocomplete
                if (!this._isMousedown) {
                    this.focus();
                }
                event.preventDefault();
            };
        /**
         * Listens to host mousedown event to act on it
         */
        /**
         * Listens to host mousedown event to act on it
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.mousedownListener = /**
         * Listens to host mousedown event to act on it
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                // sets a flag to know if there was a mousedown and then it returns it back to false
                this._isMousedown = true;
                rxjs.timer().toPromise().then(function () {
                    _this._isMousedown = false;
                });
            };
        /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         */
        /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.clickListener = /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var clickTarget = ( /** @type {?} */(event.target));
                if (clickTarget === this._elementRef.nativeElement ||
                    clickTarget.className.indexOf('td-chips-wrapper') > -1) {
                    this.focus();
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
        /**
         * Listens to host keydown event to act on it depending on the keypress
         */
        /**
         * Listens to host keydown event to act on it depending on the keypress
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.keydownListener = /**
         * Listens to host keydown event to act on it depending on the keypress
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                switch (event.keyCode) {
                    case keycodes.TAB:
                        // if tabing out, then unfocus the component
                        rxjs.timer().toPromise().then(function () {
                            _this.removeFocusedState();
                        });
                        break;
                    case keycodes.ESCAPE:
                        if (this._inputChild.focused) {
                            this._nativeInput.nativeElement.blur();
                            this.removeFocusedState();
                            this._closeAutocomplete();
                        }
                        else {
                            this.focus();
                        }
                        break;
                    default:
                    // default
                }
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._inputValueChangesSubs = this.inputControl.valueChanges.pipe(operators.debounceTime(this.debounce)).subscribe(function (value) {
                    _this.onInputChange.emit(value ? value : '');
                });
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this._watchOutsideClick();
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                // Throw onChange event only if array changes size.
                if (this.value && this.value.length !== this._length) {
                    this._length = this.value.length;
                    this.onChange(this.value);
                }
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._outsideClickSubs.unsubscribe();
                this._inputValueChangesSubs.unsubscribe();
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype._setInternalClick = /**
         * @return {?}
         */
            function () {
                this._internalClick = true;
            };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdChipsComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
            function (v) {
                this._toggleInput();
            };
        /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         * @return {?}
         */
        TdChipsComponent.prototype._handleAddChip = /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var value;
                if (this.requireMatch) {
                    /** @type {?} */
                    var selectedOptions = this._options.toArray().filter(function (option) {
                        return option.active;
                    });
                    if (selectedOptions.length > 0) {
                        value = selectedOptions[0].value;
                        selectedOptions[0].setInactiveStyles();
                    }
                    if (!value) {
                        return false;
                    }
                }
                else {
                    // if there is a selection, then use that
                    // else use the input value as chip
                    if (this._autocompleteTrigger.activeOption) {
                        value = this._autocompleteTrigger.activeOption.value;
                        this._autocompleteTrigger.activeOption.setInactiveStyles();
                    }
                    else {
                        value = this._inputChild.value;
                        if (value.trim() === '') {
                            return false;
                        }
                    }
                }
                return this.addChip(value);
            };
        /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype.addChip = /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /**
                 * add a debounce ms delay when reopening the autocomplete to give it time
                 * to rerender the next list and at the correct spot
                 */
                var _this = this;
                this._closeAutocomplete();
                rxjs.timer(this.debounce).toPromise().then(function () {
                    _this.setFocusedState();
                    _this._setFirstOptionActive();
                    _this._openAutocomplete();
                });
                this.inputControl.setValue('');
                // check if value is already part of the model
                if (this.value.indexOf(value) > -1) {
                    return false;
                }
                this.value.push(value);
                this.onAdd.emit(value);
                this.onChange(this.value);
                this._changeDetectorRef.markForCheck();
                return true;
            };
        /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype.removeChip = /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} index
         * @return {?}
         */
            function (index) {
                /** @type {?} */
                var removedValues = this.value.splice(index, 1);
                if (removedValues.length === 0) {
                    return false;
                }
                /**
                 * Checks if deleting last single chip, to focus input afterwards
                 * Else check if its not the last chip of the list to focus the next one.
                 */
                if (index === (this._totalChips - 1) && index === 0) {
                    this._inputChild.focus();
                }
                else if (index < (this._totalChips - 1)) {
                    this._focusChip(index + 1);
                }
                else if (index > 0) {
                    this._focusChip(index - 1);
                }
                this.onRemove.emit(removedValues[0]);
                this.onChange(this.value);
                this.inputControl.setValue('');
                this._changeDetectorRef.markForCheck();
                return true;
            };
        /**
         * Sets blur of chip and sends out event
         */
        /**
         * Sets blur of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype._handleChipBlur = /**
         * Sets blur of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
            function (event, value) {
                this.onChipBlur.emit(value);
            };
        /**
         * Sets focus of chip and sends out event
         */
        /**
         * Sets focus of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype._handleChipFocus = /**
         * Sets focus of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
            function (event, value) {
                this.setFocusedState();
                this.onChipFocus.emit(value);
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype._handleFocus = /**
         * @return {?}
         */
            function () {
                this.setFocusedState();
                this._setFirstOptionActive();
                return true;
            };
        /**
         * Sets focus state of the component
         */
        /**
         * Sets focus state of the component
         * @return {?}
         */
        TdChipsComponent.prototype.setFocusedState = /**
         * Sets focus state of the component
         * @return {?}
         */
            function () {
                if (!this.disabled) {
                    this._focused = true;
                    this._tabIndex = -1;
                    this._changeDetectorRef.markForCheck();
                }
            };
        /**
         * Removes focus state of the component
         */
        /**
         * Removes focus state of the component
         * @return {?}
         */
        TdChipsComponent.prototype.removeFocusedState = /**
         * Removes focus state of the component
         * @return {?}
         */
            function () {
                this._focused = false;
                this._tabIndex = 0;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         */
        /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         * @return {?}
         */
        TdChipsComponent.prototype.focus = /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         * @return {?}
         */
            function () {
                if (this.canAddChip) {
                    this._inputChild.focus();
                }
                else if (!this.disabled) {
                    this._focusFirstChip();
                }
            };
        /**
         * Passes relevant input key presses.
         */
        /**
         * Passes relevant input key presses.
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype._inputKeydown = /**
         * Passes relevant input key presses.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.keyCode) {
                    case keycodes.UP_ARROW:
                        /**
                         * Since the first item is highlighted on [requireMatch], we need to inactivate it
                         * when pressing the up key
                         */
                        if (this.requireMatch) {
                            /** @type {?} */
                            var length_1 = this._options.length;
                            if (length_1 > 1 && this._options.toArray()[0].active && this._internalActivateOption) {
                                this._options.toArray()[0].setInactiveStyles();
                                this._internalActivateOption = false;
                                // prevent default window scrolling
                                event.preventDefault();
                            }
                        }
                        break;
                    case keycodes.LEFT_ARROW:
                    case keycodes.DELETE:
                    case keycodes.BACKSPACE:
                        this._closeAutocomplete();
                        /** Check to see if input is empty when pressing left arrow to move to the last chip */
                        if (!this._inputChild.value) {
                            this._focusLastChip();
                            // prevent default window scrolling
                            event.preventDefault();
                        }
                        break;
                    case keycodes.RIGHT_ARROW:
                        this._closeAutocomplete();
                        /** Check to see if input is empty when pressing right arrow to move to the first chip */
                        if (!this._inputChild.value) {
                            this._focusFirstChip();
                            // prevent default window scrolling
                            event.preventDefault();
                        }
                        break;
                    default:
                    // default
                }
            };
        /**
         * Passes relevant chip key presses.
         */
        /**
         * Passes relevant chip key presses.
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype._chipKeydown = /**
         * Passes relevant chip key presses.
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
            function (event, index) {
                switch (event.keyCode) {
                    case keycodes.DELETE:
                    case keycodes.BACKSPACE:
                        /** Check to see if we can delete a chip */
                        if (this.canRemoveChip) {
                            this.removeChip(index);
                        }
                        break;
                    case keycodes.UP_ARROW:
                    case keycodes.LEFT_ARROW:
                        /**
                         * Check to see if left/down arrow was pressed while focusing the first chip to focus input next
                         * Also check if input should be focused
                         */
                        if (index === 0) {
                            // only try to target input if pressing left
                            if (this.canAddChip && event.keyCode === keycodes.LEFT_ARROW) {
                                this._inputChild.focus();
                            }
                            else {
                                this._focusLastChip();
                            }
                        }
                        else if (index > 0) {
                            this._focusChip(index - 1);
                        }
                        // prevent default window scrolling
                        event.preventDefault();
                        break;
                    case keycodes.DOWN_ARROW:
                    case keycodes.RIGHT_ARROW:
                        /**
                         * Check to see if right/up arrow was pressed while focusing the last chip to focus input next
                         * Also check if input should be focused
                         */
                        if (index === (this._totalChips - 1)) {
                            // only try to target input if pressing right
                            if (this.canAddChip && event.keyCode === keycodes.RIGHT_ARROW) {
                                this._inputChild.focus();
                            }
                            else {
                                this._focusFirstChip();
                            }
                        }
                        else if (index < (this._totalChips - 1)) {
                            this._focusChip(index + 1);
                        }
                        // prevent default window scrolling
                        event.preventDefault();
                        break;
                    default:
                    // default
                }
            };
        /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         */
        /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         * @return {?}
         */
        TdChipsComponent.prototype._removeInputDisplay = /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         * @return {?}
         */
            function () {
                return '';
            };
        /**
         * Method to open the autocomplete manually if its not already opened
         */
        /**
         * Method to open the autocomplete manually if its not already opened
         * @return {?}
         */
        TdChipsComponent.prototype._openAutocomplete = /**
         * Method to open the autocomplete manually if its not already opened
         * @return {?}
         */
            function () {
                if (!this._autocompleteTrigger.panelOpen) {
                    this._autocompleteTrigger.openPanel();
                    this._changeDetectorRef.markForCheck();
                }
            };
        /**
         * Method to close the autocomplete manually if its not already closed
         */
        /**
         * Method to close the autocomplete manually if its not already closed
         * @return {?}
         */
        TdChipsComponent.prototype._closeAutocomplete = /**
         * Method to close the autocomplete manually if its not already closed
         * @return {?}
         */
            function () {
                if (this._autocompleteTrigger.panelOpen) {
                    this._autocompleteTrigger.closePanel();
                    this._changeDetectorRef.markForCheck();
                }
            };
        Object.defineProperty(TdChipsComponent.prototype, "_totalChips", {
            /**
             * Get total of chips
             */
            get: /**
             * Get total of chips
             * @return {?}
             */ function () {
                /** @type {?} */
                var chips$$1 = this._chipsChildren.toArray();
                return chips$$1.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method to focus a desired chip by index
         */
        /**
         * Method to focus a desired chip by index
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype._focusChip = /**
         * Method to focus a desired chip by index
         * @param {?} index
         * @return {?}
         */
            function (index) {
                /** check to see if index exists in the array before focusing */
                if (index > -1 && this._totalChips > index) {
                    this._chipsChildren.toArray()[index].focus();
                }
            };
        /** Method to focus first chip */
        /**
         * Method to focus first chip
         * @return {?}
         */
        TdChipsComponent.prototype._focusFirstChip = /**
         * Method to focus first chip
         * @return {?}
         */
            function () {
                this._focusChip(0);
            };
        /** Method to focus last chip */
        /**
         * Method to focus last chip
         * @return {?}
         */
        TdChipsComponent.prototype._focusLastChip = /**
         * Method to focus last chip
         * @return {?}
         */
            function () {
                this._focusChip(this._totalChips - 1);
            };
        /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         */
        /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * @return {?}
         */
        TdChipsComponent.prototype._toggleInput = /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * @return {?}
         */
            function () {
                if (this.canAddChip) {
                    this.inputControl.enable();
                }
                else {
                    this.inputControl.disable();
                }
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         */
        /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         * @return {?}
         */
        TdChipsComponent.prototype._setFirstOptionActive = /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.requireMatch) {
                    // need to use a timer here to wait until the autocomplete has been opened (end of queue)
                    rxjs.timer().toPromise().then(function () {
                        if (_this.focused && _this._options && _this._options.length > 0) {
                            // clean up of previously active options
                            _this._options.toArray().forEach(function (option) {
                                option.setInactiveStyles();
                            });
                            // set the first one as active
                            _this._options.toArray()[0].setActiveStyles();
                            _this._internalActivateOption = true;
                            _this._changeDetectorRef.markForCheck();
                        }
                    });
                }
            };
        /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         */
        /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         * @return {?}
         */
        TdChipsComponent.prototype._watchOutsideClick = /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._document) {
                    this._outsideClickSubs = rxjs.merge(rxjs.fromEvent(this._document, 'click'), rxjs.fromEvent(this._document, 'touchend')).pipe(operators.debounceTime(this._touchendDebounce), operators.filter(function (event) {
                        /** @type {?} */
                        var clickTarget = ( /** @type {?} */(event.target));
                        setTimeout(function () {
                            _this._internalClick = false;
                        });
                        return _this.focused &&
                            (clickTarget !== _this._elementRef.nativeElement) &&
                            !_this._elementRef.nativeElement.contains(clickTarget) && !_this._internalClick;
                    })).subscribe(function () {
                        if (_this.focused) {
                            _this._autocompleteTrigger.closePanel();
                            _this.removeFocusedState();
                            _this.onTouched();
                            _this._changeDetectorRef.markForCheck();
                        }
                    });
                }
                return undefined;
            };
        TdChipsComponent.decorators = [
            { type: core.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdChipsComponent; }),
                                multi: true,
                            }],
                        selector: 'td-chips',
                        inputs: ['disabled', 'value'],
                        template: "<div class=\"td-chips-wrapper\"\n     [class.td-chips-stacked]=\"stacked\"\n     [class.td-chips-input-before-position]=\"inputPosition === 'before'\">\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip [class.td-chip-disabled]=\"disabled\"\n                   [class.td-chip-after-pad]=\"!canRemoveChip\"\n                   [disableRipple]=\"true\"\n                   [color]=\"color\"\n                   (keydown)=\"_chipKeydown($event, index)\"\n                   (blur)=\"_handleChipBlur($event, chip)\"\n                   (focus)=\"_handleChipFocus($event, chip)\">\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{chip}}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\">\n          </ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field floatLabel=\"never\"\n                  class=\"td-chips-form-field\"\n                  [style.width.px]=\"canAddChip ? null : 0\"\n                  [style.height.px]=\"canAddChip ? null : 0\"\n                  [color]=\"color\">\n    <input matInput\n            #input\n            [tabIndex]=\"-1\"\n            [matAutocomplete]=\"autocomplete\"\n            [formControl]=\"inputControl\"\n            [placeholder]=\"displayPlaceHolder\"\n            (keydown)=\"_inputKeydown($event)\"\n            (keyup.enter)=\"_handleAddChip()\"\n            (focus)=\"_handleFocus()\">\n  </mat-form-field>\n  <mat-autocomplete #autocomplete=\"matAutocomplete\"\n                   [displayWith]=\"_removeInputDisplay\"\n                   (optionSelected)=\"addChip($event.option.value)\">\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\">\n        </ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\"\n      [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\"\n        [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;max-width:100%;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:start;justify-content:start;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-ms-flex-order:-20;order:-20;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-transform:scaleX(.5);-ms-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host.ng-invalid .mat-form-field-underline .mat-form-field-ripple{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdChipsComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [platformBrowser.DOCUMENT,] }] },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdChipsComponent.propDecorators = {
            _nativeInput: [{ type: core.ViewChild, args: ['input',] }],
            _inputChild: [{ type: core.ViewChild, args: [input.MatInput,] }],
            _autocompleteTrigger: [{ type: core.ViewChild, args: [autocomplete.MatAutocompleteTrigger,] }],
            _chipsChildren: [{ type: core.ViewChildren, args: [chips.MatChip,] }],
            _chipTemplate: [{ type: core.ContentChild, args: [TdChipDirective,] }],
            _autocompleteOptionTemplate: [{ type: core.ContentChild, args: [TdAutocompleteOptionDirective,] }],
            _options: [{ type: core.ViewChildren, args: [core$1.MatOption,] }],
            items: [{ type: core.Input, args: ['items',] }],
            stacked: [{ type: core.Input, args: ['stacked',] }],
            inputPosition: [{ type: core.Input, args: ['inputPosition',] }],
            requireMatch: [{ type: core.Input, args: ['requireMatch',] }],
            required: [{ type: core.Input, args: ['required',] }],
            chipAddition: [{ type: core.Input, args: ['chipAddition',] }],
            chipRemoval: [{ type: core.Input, args: ['chipRemoval',] }],
            placeholder: [{ type: core.Input, args: ['placeholder',] }],
            debounce: [{ type: core.Input, args: ['debounce',] }],
            color: [{ type: core.Input, args: ['color',] }],
            onAdd: [{ type: core.Output, args: ['add',] }],
            onRemove: [{ type: core.Output, args: ['remove',] }],
            onInputChange: [{ type: core.Output, args: ['inputChange',] }],
            onChipFocus: [{ type: core.Output, args: ['chipFocus',] }],
            onChipBlur: [{ type: core.Output, args: ['chipBlur',] }],
            tabIndex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
            focusListener: [{ type: core.HostListener, args: ['focus', ['$event'],] }],
            mousedownListener: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
            clickListener: [{ type: core.HostListener, args: ['click', ['$event'],] }],
            keydownListener: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
        };
        return TdChipsComponent;
    }(_TdChipsMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentChipsModule = /** @class */ (function () {
        function CovalentChipsModule() {
        }
        CovalentChipsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.ReactiveFormsModule,
                            common$1.CommonModule,
                            input.MatInputModule,
                            icon.MatIconModule,
                            chips.MatChipsModule,
                            autocomplete.MatAutocompleteModule,
                        ],
                        declarations: [
                            TdChipsComponent,
                            TdChipDirective,
                            TdAutocompleteOptionDirective,
                        ],
                        exports: [
                            TdChipsComponent,
                            TdChipDirective,
                            TdAutocompleteOptionDirective,
                        ],
                    },] }
        ];
        return CovalentChipsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CovalentChipsModule = CovalentChipsModule;
    exports.TdChipDirective = TdChipDirective;
    exports.TdAutocompleteOptionDirective = TdAutocompleteOptionDirective;
    exports.TdChipsBase = TdChipsBase;
    exports._TdChipsMixinBase = _TdChipsMixinBase;
    exports.TdChipsComponent = TdChipsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1jaGlwcy51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AY292YWxlbnQvY29yZS9jaGlwcy9jaGlwcy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL2NoaXBzL2NoaXBzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiwgRG9DaGVjaywgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsXG4gIEVsZW1lbnRSZWYsIE9wdGlvbmFsLCBJbmplY3QsIERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgVVBfQVJST1csIERPV05fQVJST1csIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIERFTEVURSwgQkFDS1NQQUNFLCBFTlRFUiwgU1BBQ0UsIFRBQiwgSE9NRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBNYXRDaGlwIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgTWF0SW5wdXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRPcHRpb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIHRpbWVyLCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1jaGlwXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGlwRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtYXV0b2NvbXBsZXRlLW9wdGlvbl1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGRDaGlwc0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkQ2hpcHNNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQoVGRDaGlwc0Jhc2UpLCBbXSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGlwc0NvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxuICBzZWxlY3RvcjogJ3RkLWNoaXBzJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ3ZhbHVlJ10sXG4gIHN0eWxlVXJsczogWycuL2NoaXBzLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGlwc0NvbXBvbmVudCBleHRlbmRzIF9UZENoaXBzTWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBEb0NoZWNrLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSUNhbkRpc2FibGUge1xuXG4gIHByaXZhdGUgX291dHNpZGVDbGlja1N1YnM6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfaW5wdXRWYWx1ZUNoYW5nZXNTdWJzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2lzTW91c2Vkb3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdO1xuICBwcml2YXRlIF9sZW5ndGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3N0YWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZU1hdGNoOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcbiAgcHJpdmF0ZSBfaW5wdXRQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInID0gJ2FmdGVyJztcbiAgcHJpdmF0ZSBfY2hpcEFkZGl0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfY2hpcFJlbW92YWw6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3RhYkluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b3VjaGVuZERlYm91bmNlOiBudW1iZXIgPSAxMDA7XG5cbiAgX2ludGVybmFsQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX2ludGVybmFsQWN0aXZhdGVPcHRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIF9uYXRpdmVJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChNYXRJbnB1dCkgX2lucHV0Q2hpbGQ6IE1hdElucHV0O1xuICBAVmlld0NoaWxkKE1hdEF1dG9jb21wbGV0ZVRyaWdnZXIpIF9hdXRvY29tcGxldGVUcmlnZ2VyOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xuICBAVmlld0NoaWxkcmVuKE1hdENoaXApIF9jaGlwc0NoaWxkcmVuOiBRdWVyeUxpc3Q8TWF0Q2hpcD47XG5cbiAgQENvbnRlbnRDaGlsZChUZENoaXBEaXJlY3RpdmUpIF9jaGlwVGVtcGxhdGU6IFRkQ2hpcERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZSkgX2F1dG9jb21wbGV0ZU9wdGlvblRlbXBsYXRlOiBUZEF1dG9jb21wbGV0ZU9wdGlvbkRpcmVjdGl2ZTtcblxuICBAVmlld0NoaWxkcmVuKE1hdE9wdGlvbikgX29wdGlvbnM6IFF1ZXJ5TGlzdDxNYXRPcHRpb24+O1xuXG4gIC8qKlxuICAgKiBGbGFnIHRoYXQgaXMgdHJ1ZSB3aGVuIGF1dG9jb21wbGV0ZSBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICAvKipcbiAgICogRm9ybUNvbnRyb2wgZm9yIHRoZSBtYXRJbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIC8qKlxuICAgKiBpdGVtcz86IGFueVtdXG4gICAqIFJlbmRlcnMgdGhlIGBtYXQtYXV0b2NvbXBsZXRlYCB3aXRoIHRoZSBwcm92aWRlZCBsaXN0IHRvIGRpc3BsYXkgYXMgb3B0aW9ucy5cbiAgICovXG4gIEBJbnB1dCgnaXRlbXMnKVxuICBzZXQgaXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBpdGVtcygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0YWNrZWQ/OiBib29sZWFuXG4gICAqIFNldCBzdGFja2VkIG9yIGhvcml6b250YWwgY2hpcHMgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnc3RhY2tlZCcpXG4gIHNldCBzdGFja2VkKHN0YWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdGFja2VkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHN0YWNrZWQpO1xuICB9XG4gIGdldCBzdGFja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGFja2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIGlucHV0UG9zaXRpb24/OiAnYmVmb3JlJyB8ICdhZnRlcidcbiAgICogU2V0IGlucHV0IHBvc2l0aW9uIGJlZm9yZSBvciBhZnRlciB0aGUgY2hpcHMuXG4gICAqIERlZmF1bHRzIHRvICdhZnRlcicuXG4gICAqL1xuICBASW5wdXQoJ2lucHV0UG9zaXRpb24nKVxuICBzZXQgaW5wdXRQb3NpdGlvbihpbnB1dFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicpIHtcbiAgICB0aGlzLl9pbnB1dFBvc2l0aW9uID0gaW5wdXRQb3NpdGlvbjtcbiAgfVxuICBnZXQgaW5wdXRQb3NpdGlvbigpOiAnYmVmb3JlJyB8ICdhZnRlcicge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVpcmVNYXRjaD86IGJvb2xlYW5cbiAgICogQmxvY2tzIGN1c3RvbSBpbnB1dHMgYW5kIG9ubHkgYWxsb3dzIHNlbGVjdGlvbnMgZnJvbSB0aGUgYXV0b2NvbXBsZXRlIGxpc3QuXG4gICAqL1xuICBASW5wdXQoJ3JlcXVpcmVNYXRjaCcpXG4gIHNldCByZXF1aXJlTWF0Y2gocmVxdWlyZU1hdGNoOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZU1hdGNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVNYXRjaCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVNYXRjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZU1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcXVpcmVkPzogYm9vbGVhblxuICAgKiBWYWx1ZSBpcyBzZXQgdG8gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgY2hpcCBpcyBuZWVkZWRcbiAgICogRGVmYXVsdHMgdG8gZmFsc2VcbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZWQnKVxuICBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXF1aXJlZCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGlwQWRkaXRpb24/OiBib29sZWFuXG4gICAqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIGFkZCBjaGlwcy4gV2hlbiBzZXR0aW5nIGRpc2FibGVkIGFzIHRydWUsIHRoaXMgd2lsbCBiZSBvdmVycmlkZW4uXG4gICAqIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoJ2NoaXBBZGRpdGlvbicpXG4gIHNldCBjaGlwQWRkaXRpb24oY2hpcEFkZGl0aW9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hpcEFkZGl0aW9uID0gY2hpcEFkZGl0aW9uO1xuICAgIHRoaXMuX3RvZ2dsZUlucHV0KCk7XG4gIH1cbiAgZ2V0IGNoaXBBZGRpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpcEFkZGl0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBBZGRpdGlvbiBpcyBzZXQgdG8gJ3RydWUnXG4gICAqIFN0YXRlcyBpZiBhIGNoaXAgY2FuIGJlIGFkZGVkIGFuZCBpZiB0aGUgaW5wdXQgaXMgYXZhaWxhYmxlXG4gICAqL1xuICBnZXQgY2FuQWRkQ2hpcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGlwQWRkaXRpb24gJiYgIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogY2hpcFJlbW92YWw/OiBib29sZWFuXG4gICAqIERpc2FibGVzIHRoZSBhYmlsaXR5IHRvIHJlbW92ZSBjaGlwcy4gSWYgaXQgZG9lc24ndCBleGlzdCBjaGlwIHJlbW1vdmFsIGRlZmF1bHRzIHRvIHRydWUuXG4gICAqIFdoZW4gc2V0dGluZyBkaXNhYmxlZCBhcyB0cnVlLCB0aGlzIHdpbGwgYmUgb3ZlcnJpZGVuIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCdjaGlwUmVtb3ZhbCcpXG4gIHNldCBjaGlwUmVtb3ZhbChjaGlwUmVtb3ZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoaXBSZW1vdmFsID0gY2hpcFJlbW92YWw7XG4gIH1cbiAgZ2V0IGNoaXBSZW1vdmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGlwUmVtb3ZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgbm90IGluIGRpc2FibGVkIHN0YXRlIGFuZCBpZiBjaGlwUmVtb3ZhbCBpcyBzZXQgdG8gJ3RydWUnXG4gICAqIFN0YXRlcyBpZiBhIGNoaXAgY2FuIGJlIHJlbW92ZWRcbiAgICovXG4gIGdldCBjYW5SZW1vdmVDaGlwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoaXBSZW1vdmFsICYmICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGRpc3BsYXkgcGxhY2Vob2xkZXJcbiAgICovXG4gIGdldCBkaXNwbGF5UGxhY2VIb2xkZXIoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY2FuQWRkQ2hpcCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuX3JlcXVpcmVkKSA/IGAke3RoaXMucGxhY2Vob2xkZXJ9ICpgIDogIHRoaXMucGxhY2Vob2xkZXI7XG4gIH1cblxuICAvKipcbiAgICogcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDIwMC5cbiAgICovXG4gIEBJbnB1dCgnZGVib3VuY2UnKSBkZWJvdW5jZTogbnVtYmVyID0gMjAwO1xuXG4gIC8qKlxuICAgKiBjb2xvcj86ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nXG4gICAqIFNldHMgdGhlIGNvbG9yIGZvciB0aGUgaW5wdXQgYW5kIGZvY3VzL3NlbGVjdGVkIHN0YXRlIG9mIHRoZSBjaGlwcy5cbiAgICogRGVmYXVsdHMgdG8gJ3ByaW1hcnknXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJylcbiAgc2V0IGNvbG9yKGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJykge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZD86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyBhZGRlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2FkZCcpIG9uQWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiByZW1vdmU/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhIGNoaXAgaXMgcmVtb3ZlZC5cbiAgICogU2VuZHMgY2hpcCB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ3JlbW92ZScpIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBpbnB1dENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSB2YWx1ZSBpbiB0aGUgYXV0b2NvbXBsZXRlIGlucHV0IGNoYW5nZXMuXG4gICAqIFNlbmRzIHN0cmluZyB2YWx1ZSBhcyBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2lucHV0Q2hhbmdlJykgb25JbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogY2hpcEZvY3VzPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYSBjaGlwIGlzIGZvY3VzZWQuXG4gICAqIFNlbmRzIGNoaXAgdmFsdWUgYXMgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCdjaGlwRm9jdXMnKSBvbkNoaXBGb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogYmx1cj86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGEgY2hpcCBpcyBibHVycmVkLlxuICAgKiBTZW5kcyBjaGlwIHZhbHVlIGFzIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgnY2hpcEJsdXInKSBvbkNoaXBCbHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBIb3N0YmluZGluZyB0byBzZXQgdGhlIGExMXkgb2YgdGhlIFRkQ2hpcHNDb21wb25lbnQgZGVwZW5kaW5nIG9uIGl0cyBzdGF0ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAtMSA6IHRoaXMuX3RhYkluZGV4O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICAgICAgICAgICAgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF0LScgKyB0aGlzLl9jb2xvcik7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IGZvY3VzIGV2ZW50IHRvIGFjdCBvbiBpdFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICBmb2N1c0xpc3RlbmVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgLy8gc2hvdWxkIG9ubHkgZm9jdXMgaWYgaXRzIG5vdCB2aWEgbW91c2Vkb3duIHRvIHByZXZlbnQgY2xhc2hpbmcgd2l0aCBhdXRvY29tcGxldGVcbiAgICBpZiAoIXRoaXMuX2lzTW91c2Vkb3duKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBob3N0IG1vdXNlZG93biBldmVudCB0byBhY3Qgb24gaXRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG1vdXNlZG93bkxpc3RlbmVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgIC8vIHNldHMgYSBmbGFnIHRvIGtub3cgaWYgdGhlcmUgd2FzIGEgbW91c2Vkb3duIGFuZCB0aGVuIGl0IHJldHVybnMgaXQgYmFjayB0byBmYWxzZVxuICAgIHRoaXMuX2lzTW91c2Vkb3duID0gdHJ1ZTtcbiAgICB0aW1lcigpLnRvUHJvbWlzZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5faXNNb3VzZWRvd24gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBjbGlja2luZyBvbiA6aG9zdCBvciBgdGQtY2hpcHMtd3JhcHBlcmAsIHRoZW4gd2Ugc3RvcCB0aGUgY2xpY2sgcHJvcGFnYXRpb24gc28gdGhlIGF1dG9jb21wbGV0ZVxuICAgKiBkb2VzbnQgY2xvc2UgYXV0b21hdGljYWxseS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjbGlja1RhcmdldCA9PT0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IHx8XG4gICAgICAgIGNsaWNrVGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCd0ZC1jaGlwcy13cmFwcGVyJykgPiAtMSkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3Qga2V5ZG93biBldmVudCB0byBhY3Qgb24gaXQgZGVwZW5kaW5nIG9uIHRoZSBrZXlwcmVzc1xuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIGtleWRvd25MaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIC8vIGlmIHRhYmluZyBvdXQsIHRoZW4gdW5mb2N1cyB0aGUgY29tcG9uZW50XG4gICAgICAgIHRpbWVyKCkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFU0NBUEU6XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dENoaWxkLmZvY3VzZWQpIHtcbiAgICAgICAgICB0aGlzLl9uYXRpdmVJbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUZvY3VzZWRTdGF0ZSgpO1xuICAgICAgICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2lucHV0VmFsdWVDaGFuZ2VzU3VicyA9IHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpLFxuICAgICkuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSA/IHZhbHVlIDogJycpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3dhdGNoT3V0c2lkZUNsaWNrKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgLy8gVGhyb3cgb25DaGFuZ2UgZXZlbnQgb25seSBpZiBhcnJheSBjaGFuZ2VzIHNpemUuXG4gICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggIT09IHRoaXMuX2xlbmd0aCkge1xuICAgICAgdGhpcy5fbGVuZ3RoID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5fb3V0c2lkZUNsaWNrU3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5faW5wdXRWYWx1ZUNoYW5nZXNTdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBfc2V0SW50ZXJuYWxDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnRlcm5hbENsaWNrID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl90b2dnbGVJbnB1dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdHJ5aW5nIHRvIGNyZWF0ZSBhIG5ldyBjaGlwIGZyb20gdGhlIGF1dG9jb21wbGV0ZS5cbiAgICogSXQgY2hlY2sgaWYgW3JlcXVpcmVNYXRjaF0gaXMgZW5hYmxlZCwgYW5kIHRyaWVzIHRvIGFkZCB0aGUgZmlyc3QgYWN0aXZlIG9wdGlvblxuICAgKiBlbHNlIGlmIGp1c3QgYWRkcyB0aGUgdmFsdWUgdGhhdHMgb24gdGhlIGlucHV0XG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICBfaGFuZGxlQWRkQ2hpcCgpOiBib29sZWFuIHtcbiAgICBsZXQgdmFsdWU6IGFueTtcbiAgICBpZiAodGhpcy5yZXF1aXJlTWF0Y2gpIHtcbiAgICAgIGxldCBzZWxlY3RlZE9wdGlvbnM6IE1hdE9wdGlvbltdID0gdGhpcy5fb3B0aW9ucy50b0FycmF5KCkuZmlsdGVyKChvcHRpb246IE1hdE9wdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gb3B0aW9uLmFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICBzZWxlY3RlZE9wdGlvbnNbMF0uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhIHNlbGVjdGlvbiwgdGhlbiB1c2UgdGhhdFxuICAgICAgLy8gZWxzZSB1c2UgdGhlIGlucHV0IHZhbHVlIGFzIGNoaXBcbiAgICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIuYWN0aXZlT3B0aW9uLnZhbHVlO1xuICAgICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmFjdGl2ZU9wdGlvbi5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9pbnB1dENoaWxkLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hZGRDaGlwKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdHMgZXhlY3R1dGVkIHdoZW4gdHJ5aW5nIHRvIGFkZCBhIHZhbHVlIGFzIGNoaXBcbiAgICogcmV0dXJucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgJ2ZhbHNlJyBpZiBpdCBmYWlscy5cbiAgICovXG4gIGFkZENoaXAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8qKlxuICAgICAqIGFkZCBhIGRlYm91bmNlIG1zIGRlbGF5IHdoZW4gcmVvcGVuaW5nIHRoZSBhdXRvY29tcGxldGUgdG8gZ2l2ZSBpdCB0aW1lXG4gICAgICogdG8gcmVyZW5kZXIgdGhlIG5leHQgbGlzdCBhbmQgYXQgdGhlIGNvcnJlY3Qgc3BvdFxuICAgICAqL1xuICAgIFxuICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgdGltZXIodGhpcy5kZWJvdW5jZSkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgICAgdGhpcy5fc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTtcbiAgICAgIHRoaXMuX29wZW5BdXRvY29tcGxldGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVsXG4gICAgaWYgKHRoaXMudmFsdWUuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgdGhpcy5vbkFkZC5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdHJ5aW5nIHRvIHJlbW92ZSBhIGNoaXAuXG4gICAqIHJldHVybnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsICdmYWxzZScgaWYgaXQgZmFpbHMuXG4gICAqL1xuICByZW1vdmVDaGlwKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBsZXQgcmVtb3ZlZFZhbHVlczogYW55W10gPSB0aGlzLnZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHJlbW92ZWRWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGRlbGV0aW5nIGxhc3Qgc2luZ2xlIGNoaXAsIHRvIGZvY3VzIGlucHV0IGFmdGVyd2FyZHNcbiAgICAgKiBFbHNlIGNoZWNrIGlmIGl0cyBub3QgdGhlIGxhc3QgY2hpcCBvZiB0aGUgbGlzdCB0byBmb2N1cyB0aGUgbmV4dCBvbmUuXG4gICAgICovXG4gICAgaWYgKGluZGV4ID09PSAodGhpcy5fdG90YWxDaGlwcyAtIDEpICYmIGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLl9pbnB1dENoaWxkLmZvY3VzKCk7ICAgICBcbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKSkge1xuICAgICAgdGhpcy5fZm9jdXNDaGlwKGluZGV4ICsgMSk7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+IDApIHtcbiAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgIH1cblxuICAgIHRoaXMub25SZW1vdmUuZW1pdChyZW1vdmVkVmFsdWVzWzBdKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGJsdXIgb2YgY2hpcCBhbmQgc2VuZHMgb3V0IGV2ZW50XG4gICAqL1xuICBfaGFuZGxlQ2hpcEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hpcEJsdXIuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvZiBjaGlwIGFuZCBzZW5kcyBvdXQgZXZlbnRcbiAgICovXG4gIF9oYW5kbGVDaGlwRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldEZvY3VzZWRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGlwRm9jdXMuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBfaGFuZGxlRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zZXRGb2N1c2VkU3RhdGUoKTtcbiAgICB0aGlzLl9zZXRGaXJzdE9wdGlvbkFjdGl2ZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc2V0Rm9jdXNlZFN0YXRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLl90YWJJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZm9jdXMgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlRm9jdXNlZFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl90YWJJbmRleCA9IDA7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvZ3JhbW1hdGljYWxseSBmb2N1cyB0aGUgaW5wdXQgb3IgZmlyc3QgY2hpcC4gU2luY2UgaXRzIHRoZSBjb21wb25lbnQgZW50cnkgcG9pbnRcbiAgICogZGVwZW5kaW5nIGlmIGEgdXNlciBjYW4gYWRkIG9yIHJlbW92ZSBjaGlwc1xuICAgKi9cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCkge1xuICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlcyByZWxldmFudCBpbnB1dCBrZXkgcHJlc3Nlcy5cbiAgICovXG4gIF9pbnB1dEtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaW5jZSB0aGUgZmlyc3QgaXRlbSBpcyBoaWdobGlnaHRlZCBvbiBbcmVxdWlyZU1hdGNoXSwgd2UgbmVlZCB0byBpbmFjdGl2YXRlIGl0XG4gICAgICAgICAqIHdoZW4gcHJlc3NpbmcgdGhlIHVwIGtleVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5fb3B0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgaWYgKGxlbmd0aCA+IDEgJiYgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uYWN0aXZlICYmIHRoaXMuX2ludGVybmFsQWN0aXZhdGVPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMudG9BcnJheSgpWzBdLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFjdGl2YXRlT3B0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICB0aGlzLl9jbG9zZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAvKiogQ2hlY2sgdG8gc2VlIGlmIGlucHV0IGlzIGVtcHR5IHdoZW4gcHJlc3NpbmcgbGVmdCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBsYXN0IGNoaXAgKi9cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dENoaWxkLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNMYXN0Q2hpcCgpO1xuICAgICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuX2Nsb3NlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIC8qKiBDaGVjayB0byBzZWUgaWYgaW5wdXQgaXMgZW1wdHkgd2hlbiBwcmVzc2luZyByaWdodCBhcnJvdyB0byBtb3ZlIHRvIHRoZSBmaXJzdCBjaGlwICovXG4gICAgICAgIGlmICghdGhpcy5faW5wdXRDaGlsZC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzRmlyc3RDaGlwKCk7XG4gICAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzZXMgcmVsZXZhbnQgY2hpcCBrZXkgcHJlc3Nlcy5cbiAgICovXG4gIF9jaGlwS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBERUxFVEU6XG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgLyoqIENoZWNrIHRvIHNlZSBpZiB3ZSBjYW4gZGVsZXRlIGEgY2hpcCAqL1xuICAgICAgICBpZiAodGhpcy5jYW5SZW1vdmVDaGlwKSB7XG4gICAgICAgICB0aGlzLnJlbW92ZUNoaXAoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiBsZWZ0L2Rvd24gYXJyb3cgd2FzIHByZXNzZWQgd2hpbGUgZm9jdXNpbmcgdGhlIGZpcnN0IGNoaXAgdG8gZm9jdXMgaW5wdXQgbmV4dFxuICAgICAgICAgKiBBbHNvIGNoZWNrIGlmIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAvLyBvbmx5IHRyeSB0byB0YXJnZXQgaW5wdXQgaWYgcHJlc3NpbmcgbGVmdFxuICAgICAgICAgIGlmICh0aGlzLmNhbkFkZENoaXAgJiYgZXZlbnQua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0xhc3RDaGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzQ2hpcChpbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRvIHNlZSBpZiByaWdodC91cCBhcnJvdyB3YXMgcHJlc3NlZCB3aGlsZSBmb2N1c2luZyB0aGUgbGFzdCBjaGlwIHRvIGZvY3VzIGlucHV0IG5leHRcbiAgICAgICAgICogQWxzbyBjaGVjayBpZiBpbnB1dCBzaG91bGQgYmUgZm9jdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5fdG90YWxDaGlwcyAtIDEpKSB7XG4gICAgICAgICAgLy8gb25seSB0cnkgdG8gdGFyZ2V0IGlucHV0IGlmIHByZXNzaW5nIHJpZ2h0XG4gICAgICAgICAgaWYgKHRoaXMuY2FuQWRkQ2hpcCAmJiBldmVudC5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDaGlsZC5mb2N1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0Q2hpcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8ICh0aGlzLl90b3RhbENoaXBzIC0gMSkpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0NoaXAoaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBmcm9tIGRpc3BsYXkgdGhlIHZhbHVlIGFkZGVkIGZyb20gdGhlIGF1dG9jb21wbGV0ZSBzaW5jZSBpdCBnb2VzIGRpcmVjdGx5IGFzIGNoaXAuXG4gICAqL1xuICBfcmVtb3ZlSW5wdXREaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBvcGVuIHRoZSBhdXRvY29tcGxldGUgbWFudWFsbHkgaWYgaXRzIG5vdCBhbHJlYWR5IG9wZW5lZFxuICAgKi9cbiAgX29wZW5BdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5vcGVuUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBtYW51YWxseSBpZiBpdHMgbm90IGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBfY2xvc2VBdXRvY29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZVRyaWdnZXIucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVUcmlnZ2VyLmNsb3NlUGFuZWwoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgb2YgY2hpcHNcbiAgICovXG4gIGdldCBfdG90YWxDaGlwcygpOiBudW1iZXIge1xuICAgIGxldCBjaGlwczogTWF0Q2hpcFtdID0gdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KCk7XG4gICAgcmV0dXJuIGNoaXBzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZm9jdXMgYSBkZXNpcmVkIGNoaXAgYnkgaW5kZXhcbiAgICovXG4gIHByaXZhdGUgX2ZvY3VzQ2hpcChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgLyoqIGNoZWNrIHRvIHNlZSBpZiBpbmRleCBleGlzdHMgaW4gdGhlIGFycmF5IGJlZm9yZSBmb2N1c2luZyAqL1xuICAgIGlmIChpbmRleCA+IC0xICYmIHRoaXMuX3RvdGFsQ2hpcHMgPiBpbmRleCkge1xuICAgICAgdGhpcy5fY2hpcHNDaGlsZHJlbi50b0FycmF5KClbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ldGhvZCB0byBmb2N1cyBmaXJzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzRmlyc3RDaGlwKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZvY3VzQ2hpcCgwKTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgdG8gZm9jdXMgbGFzdCBjaGlwICovXG4gIHByaXZhdGUgX2ZvY3VzTGFzdENoaXAoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNDaGlwKHRoaXMuX3RvdGFsQ2hpcHMgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdG9nZ2xlIHRoZSBkaXNhYmxlIHN0YXRlIG9mIGlucHV0XG4gICAqIENoZWNrcyBpZiBub3QgaW4gZGlzYWJsZWQgc3RhdGUgYW5kIGlmIGNoaXBBZGRpdGlvbiBpcyBzZXQgdG8gJ3RydWUnXG4gICAqL1xuICBwcml2YXRlIF90b2dnbGVJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5BZGRDaGlwKSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dENvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZpcnN0IG9wdGlvbiBhcyBhY3RpdmUgdG8gbGV0IHRoZSB1c2VyIGtub3cgd2hpY2ggb25lIHdpbGwgYmUgYWRkZWQgd2hlbiBwcmVzc2luZyBlbnRlclxuICAgKiBPbmx5IGlmIFtyZXF1aXJlTWF0Y2hdIGhhcyBiZWVuIHNldFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Rmlyc3RPcHRpb25BY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVxdWlyZU1hdGNoKSB7XG4gICAgICAvLyBuZWVkIHRvIHVzZSBhIHRpbWVyIGhlcmUgdG8gd2FpdCB1bnRpbCB0aGUgYXV0b2NvbXBsZXRlIGhhcyBiZWVuIG9wZW5lZCAoZW5kIG9mIHF1ZXVlKVxuICAgICAgdGltZXIoKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGNsZWFuIHVwIG9mIHByZXZpb3VzbHkgYWN0aXZlIG9wdGlvbnNcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKS5mb3JFYWNoKChvcHRpb246IE1hdE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBvbmUgYXMgYWN0aXZlXG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy50b0FycmF5KClbMF0uc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICAgICAgdGhpcy5faW50ZXJuYWxBY3RpdmF0ZU9wdGlvbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlIHRoZSBmb2N1c1xuICAgKiBUaGUgYXV0b2NvbXBsZXRlIHBhbmVsIGlzIGNvbnNpZGVyZWQgaW5zaWRlIHRoZSBjb21wb25lbnQgc28gd2VcbiAgICogbmVlZCB0byB1c2UgYSBmbGFnIHRvIGZpbmQgb3V0IHdoZW4gaXRzIGNsaWNrZWQuXG4gICAqL1xuICBwcml2YXRlIF93YXRjaE91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja1N1YnMgPSBtZXJnZShcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAnY2xpY2snKSxcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAndG91Y2hlbmQnKSxcbiAgICAgICkucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuX3RvdWNoZW5kRGVib3VuY2UpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGlja1RhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNlZCAmJlxuICAgICAgICAgICAgICAgICAgKGNsaWNrVGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpICYmXG4gICAgICAgICAgICAgICAgICAhdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJiAhdGhpcy5faW50ZXJuYWxDbGljaztcbiAgICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlVHJpZ2dlci5jbG9zZVBhbmVsKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGb2N1c2VkU3RhdGUoKTtcbiAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuXG5pbXBvcnQgeyBUZENoaXBzQ29tcG9uZW50LCBUZENoaXBEaXJlY3RpdmUsIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGlwcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkQ2hpcHNDb21wb25lbnQsXG4gICAgVGRDaGlwRGlyZWN0aXZlLFxuICAgIFRkQXV0b2NvbXBsZXRlT3B0aW9uRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRDaGlwc0NvbXBvbmVudCxcbiAgICBUZENoaXBEaXJlY3RpdmUsXG4gICAgVGRBdXRvY29tcGxldGVPcHRpb25EaXJlY3RpdmUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50Q2hpcHNNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIlZpZXdDb250YWluZXJSZWYiLCJUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSIsIm1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IiLCJtaXhpbkRpc2FibGVkIiwiU3Vic2NyaXB0aW9uIiwiRm9ybUNvbnRyb2wiLCJFdmVudEVtaXR0ZXIiLCJjb2VyY2VCb29sZWFuUHJvcGVydHkiLCJ0aW1lciIsIlRBQiIsIkVTQ0FQRSIsImRlYm91bmNlVGltZSIsIlVQX0FSUk9XIiwiTEVGVF9BUlJPVyIsIkRFTEVURSIsIkJBQ0tTUEFDRSIsIlJJR0hUX0FSUk9XIiwiRE9XTl9BUlJPVyIsImNoaXBzIiwibWVyZ2UiLCJmcm9tRXZlbnQiLCJmaWx0ZXIiLCJDb21wb25lbnQiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJPcHRpb25hbCIsIkluamVjdCIsIkRPQ1VNRU5UIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJWaWV3Q2hpbGQiLCJNYXRJbnB1dCIsIk1hdEF1dG9jb21wbGV0ZVRyaWdnZXIiLCJWaWV3Q2hpbGRyZW4iLCJNYXRDaGlwIiwiQ29udGVudENoaWxkIiwiTWF0T3B0aW9uIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0QmluZGluZyIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdENoaXBzTW9kdWxlIiwiTWF0QXV0b2NvbXBsZXRlTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7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