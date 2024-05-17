import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomIfDirective } from './directives/CustomIf.directive';
import { CustomForDirective } from './directives/CustomFor.directive';
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';
import { CommonModule } from '@angular/common';
import { SwapDirective } from './directives/Swap.directive';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule, CustomIfDirective, CustomForDirective, SwapDirective, FirstComponent, SecondComponent, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'structural';
  isClicked = false;
  items = ["item1", "item2", "item3"];
}
