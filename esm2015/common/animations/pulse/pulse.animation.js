/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { trigger, state, style, keyframes, transition, animate, query, animateChild, group } from '@angular/animations';
/**
 * const tdPulseAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a pulse animation.
 *
 * usage: [\@tdPulse]="{ value: true | false, params: { duration: 200 }}"
 * @type {?}
 */
export const tdPulseAnimation = trigger('tdPulse', [
    state('0', style({
        transform: 'scale3d(1, 1, 1)',
    })),
    state('1', style({
        transform: 'scale3d(1, 1, 1)',
    })),
    transition('0 <=> 1', [
        group([
            query('@*', animateChild(), { optional: true }),
            animate('{{ duration }}ms {{ delay }}ms {{ ease }}', keyframes([
                style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
            ])),
        ]),
    ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
]);
/**
 * @deprecated see tdPulseAnimation
 * @param {?=} pulseOptions
 * @return {?}
 */
export function TdPulseAnimation(pulseOptions = {}) {
    return trigger(pulseOptions.anchor || 'tdPulse', [
        state('0', style({
            transform: 'scale3d(1, 1, 1)',
        })),
        state('1', style({
            transform: 'scale3d(1, 1, 1)',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((pulseOptions.duration || 500) + 'ms ' + (pulseOptions.delay || 0) + 'ms', keyframes([
                    style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                    style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                    style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                ])),
            ]),
        ]),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVsc2UuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYW5pbWF0aW9ucy9wdWxzZS9wdWxzZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFDZixLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWV2RyxNQUFNLE9BQU8sZ0JBQWdCLEdBQTZCLE9BQU8sQ0FBQyxTQUFTLEVBQUU7SUFDM0UsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDZixTQUFTLEVBQUUsa0JBQWtCO0tBQzlCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxrQkFBa0I7S0FDOUIsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRTtRQUNwQixLQUFLLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQywyQ0FBMkMsRUFDbkQsU0FBUyxDQUFDO2dCQUNOLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25ELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQzlELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdEQsQ0FBQyxDQUNIO1NBQ0YsQ0FBQztLQUNILEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFDLENBQUM7Q0FDL0QsQ0FBQzs7Ozs7O0FBR0YsTUFBTSxVQUFVLGdCQUFnQixDQUFDLGVBQWtDLEVBQUU7SUFDbkUsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7UUFDL0MsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDZixTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLEVBQUcsS0FBSyxDQUFDO1lBQ2hCLFNBQVMsRUFBRSxrQkFBa0I7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksRUFDL0UsU0FBUyxDQUFDO29CQUNSLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ25ELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQzlELEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3RELENBQUMsQ0FDSDthQUNGLENBQUM7U0FDSCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUsXG4gICAgICAgICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIEFVVE9fU1RZTEUsIHF1ZXJ5LCBhbmltYXRlQ2hpbGQsIGdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBjb25zdCB0ZFB1bHNlQW5pbWF0aW9uXG4gKlxuICogUGFyYW1ldGVyIE9wdGlvbnM6XG4gKiAqIGR1cmF0aW9uOiBEdXJhdGlvbiB0aGUgYW5pbWF0aW9uIHdpbGwgcnVuIGluIG1pbGxpc2Vjb25kcy4gRGVmYXVsdHMgdG8gNTAwIG1zLlxuICogKiBkZWxheTogRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gd2lsbCBydW4gaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0cyB0byAwIG1zLlxuICogKiBlYXNlOiBBbmltYXRpb24gYWNjZWxlcmF0ZSBhbmQgZGVjZWxlcmF0ZSBzdHlsZS4gRGVmYXVsdHMgdG8gZWFzZS1vdXQuXG4gKlxuICogUmV0dXJucyBhbiBbQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXSBvYmplY3Qgd2l0aCBib29sZWFuIHN0YXRlcyBmb3IgYSBwdWxzZSBhbmltYXRpb24uXG4gKlxuICogdXNhZ2U6IFtAdGRQdWxzZV09XCJ7IHZhbHVlOiB0cnVlIHwgZmFsc2UsIHBhcmFtczogeyBkdXJhdGlvbjogMjAwIH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IHRkUHVsc2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3RkUHVsc2UnLCBbXG4gIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICB9KSksXG4gIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyxcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLFxuICAgICAgYW5pbWF0ZSgne3sgZHVyYXRpb24gfX1tcyB7eyBkZWxheSB9fW1zIHt7IGVhc2UgfX0nLFxuICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpJywgb2Zmc2V0OiAwLjUgfSksXG4gICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJywgb2Zmc2V0OiAxLjAgfSksXG4gICAgICAgIF0pLFxuICAgICAgKSxcbiAgICBdKSxcbiAgXSwgeyBwYXJhbXM6IHsgZHVyYXRpb246IDUwMCwgZGVsYXk6ICcwJywgZWFzZTogJ2Vhc2Utb3V0JyB9fSksXG5dKTtcblxuLyoqIEBkZXByZWNhdGVkIHNlZSB0ZFB1bHNlQW5pbWF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gVGRQdWxzZUFuaW1hdGlvbihwdWxzZU9wdGlvbnM6IElBbmltYXRpb25PcHRpb25zID0ge30pOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcihwdWxzZU9wdGlvbnMuYW5jaG9yIHx8ICd0ZFB1bHNlJywgW1xuICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsXG4gICAgfSkpLFxuICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLFxuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcwIDw9PiAxJywgW1xuICAgICAgZ3JvdXAoW1xuICAgICAgICBxdWVyeSgnQConLCBhbmltYXRlQ2hpbGQoKSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcbiAgICAgICAgYW5pbWF0ZSgocHVsc2VPcHRpb25zLmR1cmF0aW9uIHx8IDUwMCkgKyAnbXMgJyArIChwdWxzZU9wdGlvbnMuZGVsYXkgfHwgMCkgKyAnbXMnLFxuICAgICAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknLCBvZmZzZXQ6IDAgfSksXG4gICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSknLCBvZmZzZXQ6IDAuNSB9KSxcbiAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLCAxLCAxKScsIG9mZnNldDogMS4wIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pO1xufVxuIl19