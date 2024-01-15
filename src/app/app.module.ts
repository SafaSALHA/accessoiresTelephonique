import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProudctsComponent } from './products/component/proudcts/proudcts.component';
import { HelmentsComponent } from './products/component/helments/helments.component';
import { FormsModule } from '@angular/forms';
import { EarphoneComponent } from './products/component/earphone/earphone.component';
import { CasesAndCoversComponent } from './products/component/cases-and-covers/cases-and-covers.component';
import { PowerBankComponent } from './products/component/Power_bank/Power_bank.component';
import { FoterComponent } from './foter/foter.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CaseComponent } from './products/component/case/case.component';
import { CartComponent } from './cart/cart.component';
import { EarpComponent } from './products/component/earp/earp.component';
import { HelmentComponent } from './products/component/helment/helment.component';
import { PowerComponent } from './products/component/power/power.component';
import { SmartphoneHolderComponent } from './products/component/smartphone-holder/smartphone-holder.component';
import { SmartphonesHoldersComponent } from './products/component/smartphones-holders/smartphones-holders.component';
import { HelmentDetailleComponent } from './products/component/helment-detaille/helment-detaille.component';
import { EarphoneDetailleComponent } from './products/component/earphone-detaille/earphone-detaille.component';
import { CasesDetailleComponent } from './products/component/cases-detaille/cases-detaille.component';
import { SmartphoneHolderDetailleComponent } from './products/component/smartphone-holder-detaille/smartphone-holder-detaille.component';
import { PowerBankDetailleComponent } from './products/component/power-bank-detaille/power-bank-detaille.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProudctsComponent,
    HelmentsComponent,
    EarphoneComponent,
    CasesAndCoversComponent,
    PowerBankComponent,
    FoterComponent,
    RegisterComponent,
    LoginComponent,
    CaseComponent,
    CartComponent,
    EarpComponent,
    HelmentComponent,
    PowerComponent,
    SmartphoneHolderComponent,
    SmartphonesHoldersComponent,
    HelmentDetailleComponent,
    EarphoneDetailleComponent,
    CasesDetailleComponent,
    SmartphoneHolderDetailleComponent,
    PowerBankDetailleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
