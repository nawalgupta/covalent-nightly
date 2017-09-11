import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { StepState } from '../step.component';
import { TdCollapseAnimation } from '../../common/common.module';
var TdStepBodyComponent = (function () {
    function TdStepBodyComponent() {
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of body.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = StepState.None;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    TdStepBodyComponent.prototype.isComplete = function () {
        return this.state === StepState.Complete;
    };
    return TdStepBodyComponent;
}());
tslib_1.__decorate([
    Input('active'),
    tslib_1.__metadata("design:type", Boolean)
], TdStepBodyComponent.prototype, "active", void 0);
tslib_1.__decorate([
    Input('state'),
    tslib_1.__metadata("design:type", Number)
], TdStepBodyComponent.prototype, "state", void 0);
TdStepBodyComponent = tslib_1.__decorate([
    Component({
        selector: 'td-step-body',
        styles: [".td-step-body { overflow-x: hidden; } .td-step-body .td-step-content { overflow-x: auto; } /*# sourceMappingURL=step-body.component.css.map */ "],
        template: "<div layout=\"row\" flex> <ng-content></ng-content> <div class=\"td-step-body\" flex> <div class=\"td-step-content-wrapper\" [@tdCollapse]=\"!active\"> <div #contentRef cdkScrollable [class.td-step-content]=\"contentRef.children.length || contentRef.textContent.trim()\"> <ng-content select=\"[td-step-body-content]\"></ng-content> </div> <div #actionsRef layout=\"row\" [class.td-step-actions]=\"actionsRef.children.length || actionsRef.textContent.trim()\"> <ng-content select=\"[td-step-body-actions]\"></ng-content> </div> </div> <div #summaryRef [@tdCollapse]=\"active || !isComplete()\" [class.td-step-summary]=\"summaryRef.children.length || summaryRef.textContent.trim()\"> <ng-content select=\"[td-step-body-summary]\"></ng-content> </div> </div> </div>",
        animations: [
            TdCollapseAnimation(),
        ],
    })
], TdStepBodyComponent);
export { TdStepBodyComponent };
//# sourceMappingURL=step-body.component.js.map