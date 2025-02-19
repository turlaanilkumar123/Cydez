import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.component.html',
  styleUrls: ['./propertydetails.component.css']
})
export class PropertydetailsComponent {

  constructor(private tS:TaskService){}

  propertyForm = new FormGroup({
    apartmenttype : new FormControl('',[Validators.required])
  })

  onSubmit(data:any){
    this.tS.addPropertyDetails(data).subscribe((result)=>{
      console.log(result)
    })
  
}


}
