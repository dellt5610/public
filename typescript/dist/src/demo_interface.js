"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = { name: "John Doe", age: 50 };
var b = { name: "William", age: 35 };
var MyComponent = /** @class */ (function () {
    function MyComponent(type) {
        this.type = type;
    }
    MyComponent.prototype.ngOnInit = function () {
        console.log("calling ngOnInit()");
    };
    return MyComponent;
}());
exports.MyComponent = MyComponent;
