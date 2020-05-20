import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('nameInput')  nameInpuRef:ElementRef;
    @ViewChild('amountInput')  amountRef:ElementRef;

   // ingredientAdded=new EventEmitter<{name: string ,amount: number}>(); or 
  @Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
      const ingName=this.nameInpuRef.nativeElement.value;
      const ingAmount=this.amountRef.nativeElement.value;
      const newIngredient=new Ingredient(ingName,ingAmount);
      this.ingredientAdded.emit(newIngredient);
  }
}
