(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Oshri-MAC/Downloads/Oshri-Bowling-Angular/Oshri-Bowling/src/main.ts */"zUnb");


/***/ }),

/***/ "3aAA":
/*!****************************************************!*\
  !*** ./src/app/dashboard/frame/frame.component.ts ***!
  \****************************************************/
/*! exports provided: FrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameComponent", function() { return FrameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FrameComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](frame_r2.rolls[0]);
} }
function FrameComponent_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", frame_r2.rolls[1], "");
} }
function FrameComponent_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
} }
function FrameComponent_div_1_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
function FrameComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FrameComponent_div_1_div_4_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FrameComponent_div_1_div_4_div_2_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FrameComponent_div_1_div_4_div_3_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", frame_r2.active && frame_r2.bonus == "" && frame_r2.rolls[1] >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", frame_r2.active && frame_r2.bonus == "strike");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", frame_r2.active && frame_r2.bonus == "spare");
} }
function FrameComponent_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", frame_r2.rolls[1], "");
} }
function FrameComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FrameComponent_div_1_div_5_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", frame_r2.active && frame_r2.bonus == "" && frame_r2.rolls[1] >= 0);
} }
function FrameComponent_div_1_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", frame_r2.rolls[1], "");
} }
function FrameComponent_div_1_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} }
function FrameComponent_div_1_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 24);
} }
function FrameComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FrameComponent_div_1_div_6_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FrameComponent_div_1_div_6_div_2_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FrameComponent_div_1_div_6_div_3_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", frame_r2.active && frame_r2.bonus == "" && frame_r2.rolls[1] >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", frame_r2.active && frame_r2.bonus == "strike");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", frame_r2.active && frame_r2.bonus == "spare");
} }
function FrameComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", frame_r2.rolls[2], "");
} }
function FrameComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](frame_r2.totalPoints);
} }
function FrameComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FrameComponent_div_1_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FrameComponent_div_1_div_4_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FrameComponent_div_1_div_5_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FrameComponent_div_1_div_6_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FrameComponent_div_1_div_7_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FrameComponent_div_1_div_9_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx_r0.currentFrame == i_r3 ? "mainSquare active" : "mainSquare inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", frame_r2.active && frame_r2.rolls[0] != 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 != 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 == 9 && frame_r2.bonus == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 == 9 && frame_r2.bonus != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 == 9 && frame_r2.active && frame_r2.bonus != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", frame_r2.active);
} }
function FrameComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrameComponent_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onResetGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your total score is ", ctx_r1.totalScore, "");
} }
class FrameComponent {
    constructor() {
        this.framesArr = [];
        this.currentFrame = 0;
        this.totalScore = 0;
        this.gameOver = false;
        this.restGame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        console.log(this.framesArr[0].active);
    }
    onResetGame() {
        this.restGame.emit();
    }
}
FrameComponent.ɵfac = function FrameComponent_Factory(t) { return new (t || FrameComponent)(); };
FrameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrameComponent, selectors: [["app-frame"]], inputs: { framesArr: "framesArr", currentFrame: "currentFrame", totalScore: "totalScore", gameOver: "gameOver" }, outputs: { restGame: "restGame" }, decls: 3, vars: 2, consts: [[1, "row", "frimes"], ["class", "frime", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "frime"], [3, "className"], [1, "squareUpper"], ["class", "firstRound", 4, "ngIf"], ["class", "secondRound", 4, "ngIf"], ["class", "secondRoundLast", 4, "ngIf"], ["class", "secondRoundNoBonusLast", 4, "ngIf"], [1, "squareBottom"], ["class", "pointsSummary", 4, "ngIf"], [1, "firstRound"], [1, "secondRound"], ["class", "secondRoundNoBonus", 4, "ngIf"], ["class", "strike", 4, "ngIf"], ["class", "spare", 4, "ngIf"], [1, "secondRoundNoBonus"], [1, "strike"], [1, "spare"], [1, "secondRoundLast"], ["class", "strikeLast", 4, "ngIf"], ["class", "spareLast", 4, "ngIf"], [1, "strikeLast"], [1, "spareLast"], [1, "secondRoundNoBonusLast"], [1, "pointsSummary"], [1, "totalScore"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function FrameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FrameComponent_div_1_Template, 10, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FrameComponent_div_2_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.framesArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameOver);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".spare[_ngcontent-%COMP%] {\n    width: 0;\n    height: 0;\n    border-top: 40px solid transparent;\n    border-right: 43px solid #055160;\n  }\n  .spareLast[_ngcontent-%COMP%] {\n    width: 0;\n    height: 0;\n    border-top: 40px solid transparent;\n    border-right: 20px solid #055160;\n  }\n  .strike[_ngcontent-%COMP%]{\n    width: 43px;\n    height: 39px;\n    background-color: #055160;\n}\n  .strikeLast[_ngcontent-%COMP%]{\n    width: 21px;\n    height: 39px;\n    background-color: #055160;\n}\n  .mainSquare[_ngcontent-%COMP%]{\n    height: 100px;\n    width: 100px;\n    border-style: solid;\n    \n  }\n  .frime[_ngcontent-%COMP%]{\n    display: contents;\n}\n  .secondRound[_ngcontent-%COMP%]{\n    height: 40px;\n    border-style: solid;\n    width: 44px;\n    border-width: 1px;\n    float: right;\n    border-top: none;\n    border-right: none;\n  }\n  .secondRoundLast[_ngcontent-%COMP%]{\n    height: 40px;\n    border-style: solid;\n    width: 22px;\n    border-width: 1px;\n    float: left;\n    border-top: none;\n    border-right-style: solid;\n}\n  .lastFrame[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: 30px;\n    float:right;\n}\n  .squareUpper[_ngcontent-%COMP%]{\n      height: 50%;\n  }\n  .firstRound[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: 30px;\n    width: 40px;\n    float: left;\n  }\n  .secondRoundNoBonus[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: 30px;\n  }\n  .secondRoundNoBonusLast[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: 30px;\n    width: 32px;\n    float: right;\n  }\n  .pointsSummary[_ngcontent-%COMP%]{\n  \n    font-size: 33px;\n    text-align: center;\n  }\n  .mainSquare[_ngcontent-%COMP%]:nth-of-type(3) {\n    border: none;\n}\n  .mainSquare.active[_ngcontent-%COMP%]{\n    border-bottom-color: red;\n}\n  .totalScore[_ngcontent-%COMP%]{\n    font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLGdDQUFnQztFQUNsQztFQUNGO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7RUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjs7RUFFckI7RUFDRjtJQUNJLGlCQUFpQjtBQUNyQjtFQUNFO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBRUY7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztBQUNmO0VBQ0U7TUFDSSxXQUFXO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBOztJQUVFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLFlBQVk7QUFDaEI7RUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtFQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJmcmFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYXJlIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDQzcHggc29saWQgIzA1NTE2MDtcbiAgfVxuICAuc3BhcmVMYXN0IHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgIzA1NTE2MDtcbiAgfVxuLnN0cmlrZXtcbiAgICB3aWR0aDogNDNweDtcbiAgICBoZWlnaHQ6IDM5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1NTE2MDtcbn1cbi5zdHJpa2VMYXN0e1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMzlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1MTYwO1xufVxuICAubWFpblNxdWFyZXtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIFxuICB9XG4uZnJpbWV7XG4gICAgZGlzcGxheTogY29udGVudHM7XG59XG4gIC5zZWNvbmRSb3VuZHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB3aWR0aDogNDRweDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4uc2Vjb25kUm91bmRMYXN0e1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbn1cbi5sYXN0RnJhbWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmbG9hdDpyaWdodDtcbn1cbiAgLnNxdWFyZVVwcGVye1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gIH1cbiAgLmZpcnN0Um91bmR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuc2Vjb25kUm91bmROb0JvbnVze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLnNlY29uZFJvdW5kTm9Cb251c0xhc3R7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLnBvaW50c1N1bW1hcnl7XG4gIFxuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubWFpblNxdWFyZTpudGgtb2YtdHlwZSgzKSB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubWFpblNxdWFyZS5hY3RpdmV7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmVkO1xufVxuXG4udG90YWxTY29yZXtcbiAgICBmb250LXNpemU6IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-frame',
                templateUrl: './frame.component.html',
                styleUrls: ['./frame.component.css']
            }]
    }], function () { return []; }, { framesArr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalScore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gameOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], restGame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EBGq":
/*!**********************************************!*\
  !*** ./src/app/initial/initial.component.ts ***!
  \**********************************************/
/*! exports provided: InitialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialComponent", function() { return InitialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InitialComponent {
    constructor() { }
    ngOnInit() {
    }
}
InitialComponent.ɵfac = function InitialComponent_Factory(t) { return new (t || InitialComponent)(); };
InitialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InitialComponent, selectors: [["app-initial"]], decls: 2, vars: 0, template: function InitialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "initial works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbml0aWFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-initial',
                templateUrl: './initial.component.html',
                styleUrls: ['./initial.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frame */ "kbnP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frame/frame.component */ "3aAA");






function DashboardComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_7_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const pointNumber_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onUserSelectPoint(pointNumber_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pointNumber_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pointNumber_r2);
} }
function DashboardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_7_div_1_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.points);
} }
class DashboardComponent {
    constructor(route) {
        this.route = route;
        this.points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.frames = [];
        this.currentFrame = 0;
        this.currentRoll = 0;
        this.totalPoints = 0;
        this.gameOver = false;
        this.userName = '';
    }
    ngOnInit() {
        this.userName = this.route.snapshot.params['player'];
        for (let index = 0; index < 10; index++) {
            this.frames.push(new _frame__WEBPACK_IMPORTED_MODULE_1__["Frame"]([0, 0, 0], 0, '', 0, false));
        }
        console.log(this.frames);
    }
    onUserSelectPoint(userNumberSelected) {
        this.frames[this.currentFrame].active = true;
        this.frames[this.currentFrame].rolls[this.currentRoll] = userNumberSelected;
        this.checkBonus();
        this.checkPointsToShow();
        this.totalPointsCalculator();
        this.goForward();
    }
    goForward() {
        //for the last frame and last roll(bonus roll)
        if (this.currentRoll == 2) {
            this.gameOver = true;
        }
        if (this.currentRoll < 1) {
            this.currentRoll++;
        }
        else {
            if (this.currentFrame == 9 && this.frames[this.currentFrame - 1].bonus == '') {
                this.gameOver = true;
                return;
            }
            else if (this.currentFrame == 9 && this.frames[this.currentFrame].bonus == '') {
                this.gameOver = true;
                return;
            }
            else if (this.currentFrame != 9) {
                this.currentRoll = 0;
            }
            if (this.currentFrame < 9) {
                this.currentFrame++;
            }
        }
        if (this.frames[this.currentFrame].bonus == 'strike') {
            if (this.currentFrame < 9) {
                this.currentRoll = 0;
                this.currentFrame++;
            }
            else if (this.currentFrame == 9) {
                this.currentRoll = 2;
            }
        }
        if (this.currentFrame == 9 && this.frames[this.currentFrame].bonus == 'spare') {
            this.currentRoll = 2;
        }
    }
    checkBonus() {
        if ((this.currentRoll == 1) && (this.frames[this.currentFrame].rolls[0] + this.frames[this.currentFrame].rolls[1]) == 10) {
            this.frames[this.currentFrame].bonus = 'spare';
        }
        else if (this.frames[this.currentFrame].rolls[0] == 10) {
            this.frames[this.currentFrame].bonus = 'strike';
        }
    }
    checkPointsToShow() {
        this.points = [];
        for (let index = 0; index < 10; index++) {
            if ((this.frames[this.currentFrame].rolls[this.currentRoll] + index) < 11) {
                this.points.push(index);
            }
        }
        if (this.currentRoll > 0 || this.frames[this.currentFrame].bonus == 'strike') {
            this.points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        }
    }
    totalPointsCalculator() {
        //previous bonus Calculation
        if ((this.currentFrame - 1) >= 0) {
            if (this.frames[this.currentFrame - 1].bonus != '') {
                if ((this.currentRoll == 0) && this.frames[this.currentFrame - 1].bonus == 'spare') {
                    this.frames[this.currentFrame - 1].totalPoints = this.frames[this.currentFrame - 1].totalPoints + this.frames[this.currentFrame].rolls[0];
                    this.totalPoints = this.frames[this.currentFrame - 1].totalPoints;
                }
                if (((this.currentRoll == 1) && this.frames[this.currentFrame - 1].bonus == 'strike') || ((this.currentRoll == 0) && (this.frames[this.currentFrame].bonus == 'strike') && (this.frames[this.currentFrame - 1].bonus == 'strike'))) {
                    this.frames[this.currentFrame - 1].totalPoints = this.frames[this.currentFrame - 1].totalPoints + this.frames[this.currentFrame].rolls[0] + this.frames[this.currentFrame].rolls[1];
                    this.totalPoints = this.frames[this.currentFrame - 1].totalPoints;
                }
            }
        }
        if (this.currentRoll == 1 || this.frames[this.currentFrame].bonus == 'strike') {
            this.frames[this.currentFrame].totalPoints = this.totalPoints + this.frames[this.currentFrame].rolls[0] + this.frames[this.currentFrame].rolls[1];
            this.totalPoints = this.frames[this.currentFrame].totalPoints;
        }
        else if (this.currentRoll == 2 || this.frames[this.currentFrame].bonus == 'spare') {
            this.frames[this.currentFrame].totalPoints = this.totalPoints + this.frames[this.currentFrame].rolls[2];
            this.totalPoints = this.frames[this.currentFrame].totalPoints;
        }
    }
    newGame() {
        this.frames = [];
        this.currentFrame = 0;
        this.currentRoll = 0;
        this.totalPoints = 0;
        this.gameOver = false;
        for (let index = 0; index < 10; index++) {
            this.frames.push(new _frame__WEBPACK_IMPORTED_MODULE_1__["Frame"]([0, 0, 0], 0, '', 0, false));
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 9, vars: 6, consts: [[1, "row", "dashboard"], ["class", "pointsContainer", 4, "ngIf"], [3, "currentFrame", "framesArr", "totalScore", "gameOver", "restGame"], [1, "pointsContainer"], ["class", "points", 4, "ngFor", "ngForOf"], [1, "points"], [1, "pin", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bowling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select the number of pins you knocked down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_7_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-frame", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("restGame", function DashboardComponent_Template_app_frame_restGame_8_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("hi ", ctx.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameOver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentFrame", ctx.currentFrame)("framesArr", ctx.frames)("totalScore", ctx.totalPoints)("gameOver", ctx.gameOver);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _frame_frame_component__WEBPACK_IMPORTED_MODULE_4__["FrameComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".row[_ngcontent-%COMP%]{\n    padding: 20px;\n}\n.points[_ngcontent-%COMP%]{\n    margin-left: 5px;\n    padding: 5px;\n    border-style: solid;\n    width: 35px;\n    text-align: center;\n}\n.dashboard[_ngcontent-%COMP%]{\n   text-align: center;\n        position: absolute;\n        top: 10%;\n        left: 50%;\n        margin-top: -50px;\n        margin-left: -500px;\n        width: 1051px;\n\n}\n.pointsContainer[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    margin-bottom: 50px;\n    margin-left: -8px;\n    display: flex;   \n    align-items: center;\n    align-content: space-around;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: center;\n}\n.pin[_ngcontent-%COMP%]{\n    cursor: pointer;\n    \n}\n.points[_ngcontent-%COMP%]:hover {\n    background-color: rgba(5, 5, 5, 0.233);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0dBQ0csa0JBQWtCO1FBQ2Isa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixhQUFhOztBQUVyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxzQ0FBc0M7RUFDeEMiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4ucG9pbnRze1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRhc2hib2FyZHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01MDBweDtcbiAgICAgICAgd2lkdGg6IDEwNTFweDtcblxufVxuLnBvaW50c0NvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgZGlzcGxheTogZmxleDsgICBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBpbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG59XG4ucG9pbnRzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDUsIDUsIDAuMjMzKTtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Oshri-Bowling';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial/initial.component */ "EBGq");
/* harmony import */ var _dashboard_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/frame/frame.component */ "3aAA");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/user/user.component */ "tD6c");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__["InitialComponent"],
        _dashboard_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__["FrameComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _initial_initial_component__WEBPACK_IMPORTED_MODULE_4__["InitialComponent"],
                    _dashboard_frame_frame_component__WEBPACK_IMPORTED_MODULE_5__["FrameComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kbnP":
/*!************************************!*\
  !*** ./src/app/dashboard/frame.ts ***!
  \************************************/
/*! exports provided: Frame, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class Frame {
    constructor(rolls, score, bonus, totalPoints, active) {
        this.rolls = rolls,
            this.score = score,
            this.bonus = bonus,
            this.totalPoints = totalPoints;
        this.active = active;
    }
}
class User {
    constructor(fullName) {
        this.fullName = fullName;
    }
}


/***/ }),

/***/ "tD6c":
/*!**************************************************!*\
  !*** ./src/app/dashboard/user/user.component.ts ***!
  \**************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class UserComponent {
    constructor(router) {
        this.router = router;
        this.userName = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.userName != '') {
            setTimeout(() => {
                this.router.navigate(['Game', this.userName]);
            }, 600);
        }
        else {
            alert('The field Name cannot be empty');
        }
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 9, vars: 1, consts: [[1, "row", "bowlingLogIn", "center"], [1, "form-group"], ["for", "userName"], ["type", "text", "placeholder", "Enter name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bowling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please enter your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_6_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".bowlingLogIn[_ngcontent-%COMP%]{\n    text-align: center;\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    \n    margin-left: -200px;\n    width: 400px;\n        \n}\n.bowlingLogIn[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .bowlingLogIn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    text-align: center;\n\n}\nlabel[_ngcontent-%COMP%]{\n\n    margin-bottom: 15px;\n    text-align: center;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7QUFDQTs7SUFFSSxtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm93bGluZ0xvZ0lue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC8qIG1hcmdpbi10b3A6IC01MHB4OyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBcbn1cbi5ib3dsaW5nTG9nSW4gaDEsIC5ib3dsaW5nTG9nSW4gLmJ0bntcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5sYWJlbHtcblxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/user/user.component */ "tD6c");






const routes = [
    { path: '', component: _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'Game', component: _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'Game/:player', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map