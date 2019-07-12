import { Component } from '@angular/core';
// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'stdng03FreeBoard';
}
