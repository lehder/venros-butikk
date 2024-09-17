import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencypipes',
  standalone: true
})
export class CurrencypipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
