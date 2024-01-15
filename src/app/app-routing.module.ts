import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProudctsComponent } from './products/component/proudcts/proudcts.component';
import { HomeComponent } from './home/home.component';
import { HelmentsComponent } from './products/component/helments/helments.component';
import { EarphoneComponent } from './products/component/earphone/earphone.component';
import { CasesAndCoversComponent } from './products/component/cases-and-covers/cases-and-covers.component';
import { PowerBankComponent } from './products/component/Power_bank/Power_bank.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SmartphonesHoldersComponent } from './products/component/smartphones-holders/smartphones-holders.component';
import { HelmentDetailleComponent } from './products/component/helment-detaille/helment-detaille.component';
import { EarphoneDetailleComponent } from './products/component/earphone-detaille/earphone-detaille.component';
import { CasesDetailleComponent } from './products/component/cases-detaille/cases-detaille.component';
import { SmartphoneHolderDetailleComponent } from './products/component/smartphone-holder-detaille/smartphone-holder-detaille.component';
import { PowerBankDetailleComponent } from './products/component/power-bank-detaille/power-bank-detaille.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProudctsComponent },
  { path: 'helmets', component: HelmentsComponent },
  { path: 'helmentDetaille/:id', component:HelmentDetailleComponent},
  { path: 'earphones', component: EarphoneComponent },
  { path: 'earphoneDetaille/:id', component:EarphoneDetailleComponent},
  { path: 'Cases_and_covers', component: CasesAndCoversComponent },
  { path: 'casesDetaille/:id', component:CasesDetailleComponent},
  { path: 'Power_bank', component:PowerBankComponent },
  { path: 'PowerBankDetaille/:id', component:PowerBankDetailleComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'login', component:LoginComponent},
  { path: 'cart', component:CartComponent},
  { path: 'smartphoneHolder', component:SmartphonesHoldersComponent},
  { path: 'smartphoneHolderDetaille/:id', component:SmartphoneHolderDetailleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
