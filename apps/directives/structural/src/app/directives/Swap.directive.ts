import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { interval } from "rxjs";

@Directive({
    standalone: true,
    selector: "[appAlternating]"
})
export class SwapDirective implements OnInit, OnDestroy {

  @Input('appAlternating') templates: TemplateRef<any>[] = [];
  private currentIndex: number = 0;
  private intervalId: any;

  constructor(private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.startAlternating();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private startAlternating() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templates[this.currentIndex]);

    this.intervalId = setInterval(() => {
      this.viewContainer.clear();
      this.currentIndex = (this.currentIndex + 1) % this.templates.length;
      this.viewContainer.createEmbeddedView(this.templates[this.currentIndex]);
    }, 5000);
  }

}