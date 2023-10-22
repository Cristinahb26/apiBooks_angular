import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refCodigo'
})
export class RefCodigoPipe implements PipeTransform {

  transform(value: string): string {
    return `Ref: ` + value;
  }

}
