import { Directive, Input, TemplateRef, ViewContainerRef, inject } from "@angular/core";

@Directive({
    standalone: true,
    selector: "[customIf]",
})
export class CustomIfDirective {
    _isTrue!: boolean;
    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

    @Input()
    set customIf(condition: boolean) {
        this._isTrue = condition;
        this.updateView();
    } 

    updateView(): void {
        if (this._isTrue) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else {
            this.viewContainer.clear();
        }
    }
}