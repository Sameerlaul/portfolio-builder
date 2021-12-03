import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName'
})
export class FirstNamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (!value) { return ''; }
    return value.split(' ')[0];
  }

}
