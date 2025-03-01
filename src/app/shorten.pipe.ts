import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, limit:any): unknown {
    if(value.length>10)
      return value.substr(0,limit) +' ...';
    return value;
  }

}
