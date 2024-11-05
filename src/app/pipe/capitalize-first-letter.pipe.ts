import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // Si la valeur est vide ou undefined, retourne la valeur inchangée.
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}
