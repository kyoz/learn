import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplePipe'
})
export class SimplePipe implements PipeTransform {

  transform(value: 'string', args?: any): any {
    console.log('pure pipe run');
    return value + (args || 'Hihi');
  }
}
