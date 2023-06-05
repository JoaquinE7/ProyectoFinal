import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'doomPipe'
})
export class DoomPipePipe implements PipeTransform {

  constructor(private doom:DomSanitizer){

  }

  transform(value: string, url: string): any {
    return this.doom.bypassSecurityTrustResourceUrl(url+value);
  }

}
