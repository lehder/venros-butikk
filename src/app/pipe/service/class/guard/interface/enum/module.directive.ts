import { Directive } from '@angular/core';

@Directive({
  selector: '[appModule]',
  standalone: true
})
export class ModuleDirective {

  constructor() { }

}
