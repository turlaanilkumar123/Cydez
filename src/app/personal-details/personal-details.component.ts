import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  
  constructor(private tS:TaskService){

  }

  ngOnInit(){
    this.tS.getPersonalDetails().subscribe((result)=>{
      console.log(result)
    })
  }

  personalForm = new FormGroup ({
    servicemen : new FormControl('', [Validators.required]),
    scavenger : new FormControl('',[Validators.required]),
  });

  onSubmit(data:any){
      this.tS.addPersonalDetails(data).subscribe((result)=>{
        console.log(result)
      })
    
  }
}
