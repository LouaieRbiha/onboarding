import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    standalone: true,
    selector: "[customFor][customForOf]"
})
export class CustomForDirective {
    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

    @Input()
    set customForOf(collection: any) {
        this.updateView(collection);
    }

    updateView(collection: any): void {
        collection.forEach((item: any, index: any) => {
            console.log(item)
            this.viewContainer.createEmbeddedView( this.template, { $implicit: item, index} );
        });
    }
}