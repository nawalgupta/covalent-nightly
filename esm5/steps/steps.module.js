/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { CovalentCommonModule } from '@covalent/core/common';
// Steps
import { TdStepsComponent } from './steps.component';
import { TdStepHeaderComponent } from './step-header/step-header.component';
import { TdStepBodyComponent } from './step-body/step-body.component';
import { TdStepComponent, TdStepLabelDirective, TdStepActionsDirective, TdStepSummaryDirective, } from './step.component';
// Nav Steps
import { TdNavStepsHorizontalComponent } from './nav/nav-steps-horizontal/nav-steps-horizontal.component';
import { TdNavStepsVerticalComponent } from './nav/nav-steps-vertical/nav-steps-vertical.component';
import { TdNavStepLinkComponent } from './nav/nav-step-link/nav-step-link.component';
/** @type {?} */
var TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
    TdNavStepsHorizontalComponent,
    TdNavStepsVerticalComponent,
    TdNavStepLinkComponent,
];
var CovalentStepsModule = /** @class */ (function () {
    function CovalentStepsModule() {
    }
    CovalentStepsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, MatIconModule, MatRippleModule, PortalModule, ScrollingModule, CovalentCommonModule],
                    declarations: [TD_STEPS],
                    exports: [TD_STEPS],
                },] }
    ];
    return CovalentStepsModule;
}());
export { CovalentStepsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvIiwic291cmNlcyI6WyJzdGVwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUNMLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLHNCQUFzQixHQUN2QixNQUFNLGtCQUFrQixDQUFDOztBQUcxQixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7SUFFL0UsUUFBUSxHQUFnQjtJQUM1QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBO0lBS2tDLENBQUM7O2dCQUxsQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQztvQkFDNUcsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUN4QixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3BCOztJQUNpQywwQkFBQztDQUFBLEFBTG5DLElBS21DO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgQ292YWxlbnRDb21tb25Nb2R1bGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG4vLyBTdGVwc1xuaW1wb3J0IHsgVGRTdGVwc0NvbXBvbmVudCB9IGZyb20gJy4vc3RlcHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcEJvZHlDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtYm9keS9zdGVwLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFRkU3RlcENvbXBvbmVudCxcbiAgVGRTdGVwTGFiZWxEaXJlY3RpdmUsXG4gIFRkU3RlcEFjdGlvbnNEaXJlY3RpdmUsXG4gIFRkU3RlcFN1bW1hcnlEaXJlY3RpdmUsXG59IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuXG4vLyBOYXYgU3RlcHNcbmltcG9ydCB7IFRkTmF2U3RlcHNIb3Jpem9udGFsQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYvbmF2LXN0ZXBzLWhvcml6b250YWwvbmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcHNWZXJ0aWNhbENvbXBvbmVudCB9IGZyb20gJy4vbmF2L25hdi1zdGVwcy12ZXJ0aWNhbC9uYXYtc3RlcHMtdmVydGljYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcExpbmtDb21wb25lbnQgfSBmcm9tICcuL25hdi9uYXYtc3RlcC1saW5rL25hdi1zdGVwLWxpbmsuY29tcG9uZW50JztcblxuY29uc3QgVERfU1RFUFM6IFR5cGU8YW55PltdID0gW1xuICBUZFN0ZXBzQ29tcG9uZW50LFxuICBUZFN0ZXBDb21wb25lbnQsXG4gIFRkU3RlcEhlYWRlckNvbXBvbmVudCxcbiAgVGRTdGVwQm9keUNvbXBvbmVudCxcbiAgVGRTdGVwTGFiZWxEaXJlY3RpdmUsXG4gIFRkU3RlcEFjdGlvbnNEaXJlY3RpdmUsXG4gIFRkU3RlcFN1bW1hcnlEaXJlY3RpdmUsXG4gIFRkTmF2U3RlcHNIb3Jpem9udGFsQ29tcG9uZW50LFxuICBUZE5hdlN0ZXBzVmVydGljYWxDb21wb25lbnQsXG4gIFRkTmF2U3RlcExpbmtDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGUsIFBvcnRhbE1vZHVsZSwgU2Nyb2xsaW5nTW9kdWxlLCBDb3ZhbGVudENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1REX1NURVBTXSxcbiAgZXhwb3J0czogW1REX1NURVBTXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRTdGVwc01vZHVsZSB7fVxuIl19