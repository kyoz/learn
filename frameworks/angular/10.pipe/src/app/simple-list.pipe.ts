import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleListPipe'
})
export class SimpleListPipe implements PipeTransform {

  transform(list: any, suffix?: any): any {
    return list.map(d => d + (suffix ? ` - ${suffix}` : ' - None'));
  }
}
