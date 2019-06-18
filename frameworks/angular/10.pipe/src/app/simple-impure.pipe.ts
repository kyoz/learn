import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleImpurePipe',
  pure: false
})
export class SimpleImpurePipe implements PipeTransform {

  transform(value: 'string', args?: any): any {
    console.log('impure pure pipe run');
    return value + (args || 'Hihi');
  }
}
