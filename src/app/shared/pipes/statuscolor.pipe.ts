import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statuscolor'
})

export class StatuscolorPipe implements PipeTransform {
  transform(value: string): string {
    switch (value.toLowerCase()) {
      case 'true':
      case 'active':
        return 'green';
      case 'false':
      case 'inactive':
        return 'red';
      case 'pending':
        return 'orange';
      default:
        return 'default';
    }
  }
}
