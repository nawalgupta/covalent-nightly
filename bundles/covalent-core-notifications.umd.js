(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/core/notifications', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.notifications = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var TdNotificationCountPositionY = {
    Top: 'top',
    Bottom: 'bottom',
    Center: 'center',
};
var TdNotificationCountPositionX = {
    Before: 'before',
    After: 'after',
    Center: 'center',
};
var DEFAULT_NOTIFICATION_LIMIT = 99;
var TdNotificationCountComponent = /** @class */ (function () {
    function TdNotificationCountComponent() {
        this._notifications = 0;
        this._limit = DEFAULT_NOTIFICATION_LIMIT;
        this.color = 'warn';
    }
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionX", {
        get: function () {
            return this._positionX;
        },
        set: function (positionX) {
            this._positionX = positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
        get: function () {
            return this._positionY;
        },
        set: function (positionY) {
            this._positionY = positionY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
        set: function (notifications) {
            this._notifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "limit", {
        set: function (limit) {
            this._limit = limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
        get: function () {
            return !this.show && !this._hasContent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
        get: function () {
            return this._notifications === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
        get: function () {
            if (this._notifications > this._limit) {
                return this._limit + "+";
            }
            return this._notifications.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
        get: function () {
            return this._notifications === true || (!isNaN((this._notifications)) && this._notifications > 0);
        },
        enumerable: true,
        configurable: true
    });
    TdNotificationCountComponent.prototype.ngAfterContentInit = function () {
        if (!this._positionX) {
            this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
        }
        if (!this._positionY) {
            this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
        }
    };
    TdNotificationCountComponent.prototype._hasContent = function () {
        if (this.content) {
            var contentElement = this.content.nativeElement;
            return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
        }
        return false;
    };
    return TdNotificationCountComponent;
}());
TdNotificationCountComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-notification-count',
                styles: [":host{position:relative;display:block;text-align:center;min-width:40px;height:40px}:host.td-notification-hidden{min-width:0}.td-notification-count{line-height:21px;width:20px;height:20px;position:absolute;font-size:10px;font-weight:600;border-radius:50%;z-index:1}.td-notification-count.td-notification-center-x{margin-left:auto;margin-right:auto;left:0;right:0}.td-notification-count.td-notification-center-y{margin-top:auto;margin-bottom:auto;top:0;bottom:0}.td-notification-count.td-notification-top{top:0}.td-notification-count.td-notification-bottom{bottom:0}.td-notification-count.td-notification-before{left:0}.td-notification-count.td-notification-after{right:0}.td-notification-count.td-notification-no-count{width:8px;height:8px}.td-notification-count.td-notification-no-count.td-notification-top{top:8px}.td-notification-count.td-notification-no-count.td-notification-bottom{bottom:8px}.td-notification-count.td-notification-no-count.td-notification-before{left:8px}.td-notification-count.td-notification-no-count.td-notification-after{right:8px}::ng-deep [dir=rtl] .td-notification-count.td-notification-before{right:0;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-after{left:0;right:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-before{right:8px;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-after{left:8px;right:auto}.td-notification-content,.td-notification-content ::ng-deep>*{line-height:40px}"],
                template: "<div #content class=\"td-notification-content\">\n  <ng-content></ng-content>\n</div>\n<div *ngIf=\"show\"\n     class=\"td-notification-count mat-{{color}}\"\n     [class.td-notification-top]=\"positionY === 'top'\"\n     [class.td-notification-bottom]=\"positionY === 'bottom'\"\n     [class.td-notification-before]=\"positionX === 'before'\"\n     [class.td-notification-after]=\"positionX === 'after'\"\n     [class.td-notification-center-y]=\"positionY === 'center'\"\n     [class.td-notification-center-x]=\"positionX === 'center'\"\n     [class.td-notification-no-count]=\"noCount\">\n  {{noCount ? '' : notificationsDisplay}}\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdNotificationCountComponent.ctorParameters = function () { return []; };
TdNotificationCountComponent.propDecorators = {
    "content": [{ type: core.ViewChild, args: ['content',] },],
    "color": [{ type: core.Input },],
    "positionX": [{ type: core.Input },],
    "positionY": [{ type: core.Input },],
    "notifications": [{ type: core.Input },],
    "limit": [{ type: core.Input },],
    "hideHost": [{ type: core.HostBinding, args: ['class.td-notification-hidden',] },],
};
var TD_NOTIFICATIONS = [
    TdNotificationCountComponent,
];
var CovalentNotificationsModule = /** @class */ (function () {
    function CovalentNotificationsModule() {
    }
    return CovalentNotificationsModule;
}());
CovalentNotificationsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                ],
                declarations: [
                    TD_NOTIFICATIONS,
                ],
                exports: [
                    TD_NOTIFICATIONS,
                ],
            },] },
];
CovalentNotificationsModule.ctorParameters = function () { return []; };

exports.CovalentNotificationsModule = CovalentNotificationsModule;
exports.TdNotificationCountPositionY = TdNotificationCountPositionY;
exports.TdNotificationCountPositionX = TdNotificationCountPositionX;
exports.DEFAULT_NOTIFICATION_LIMIT = DEFAULT_NOTIFICATION_LIMIT;
exports.TdNotificationCountComponent = TdNotificationCountComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-notifications.umd.js.map
