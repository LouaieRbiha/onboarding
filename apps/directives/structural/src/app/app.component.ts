import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomIfDirective } from './directives/CustomIf.directive';
import { CustomForDirective } from './directives/CustomFor.directive';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule, CustomIfDirective, CustomForDirective],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'structural';
  isClicked = false;
  items = ["item1", "item2", "item3"];
}
