import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { AmountComponent } from './amount/amount.component';

const routes: Routes = [
  {path:'personal-details', component:PersonalDetailsComponent},
  {path:'propertydetails', component:PropertydetailsComponent},
  {path:'amount', component:AmountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
