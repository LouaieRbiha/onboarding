/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'nav-button',
  standalone: true,
  template: `
    <a [routerLink]="href" [fragment]="section">
      <ng-content></ng-content>
    </a>
  `,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2',
  },
  imports: [RouterLink, RouterLinkWithHref]
})
export class NavButtonComponent {
  @Input() href = '';
  @Input() section!: string;
}
