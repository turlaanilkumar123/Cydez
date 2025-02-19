import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent {
  amountLength=10;

  constructor(private tS:TaskService) {}

  amountForm = new FormGroup ({
    loanAmount : new FormControl('',[Validators.required]),
    guaranteedAmount : new FormControl('',[Validators.required]),
    category : new FormControl('',[Validators.required])
  })

  onSubmit(data:any) {
    this.tS.addAmountDetails(data).subscribe((result)=>{
      console.log(result)
    })
  }
}
