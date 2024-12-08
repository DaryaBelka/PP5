import { Unit } from "../enums/unit";
import { Tax } from "../enums/tax";
export class Invoice{
   constructor(){}

   name: string = '';
   quantity: number = 0;
   unit?: Unit;
   netto?: number;
   tax?: Tax;
   brutto?: number;
}

