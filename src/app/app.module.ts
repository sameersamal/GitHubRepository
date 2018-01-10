import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AirtimecardsComponent } from './shop/airtimecards/airtimecards.component';
import { PhonesComponent } from './shop/phones/phones.component';
import { BuysimcardsComponent } from './shop/buysimcards/buysimcards.component';
import { ProtectyourphoneComponent } from './shop/protectyourphone/protectyourphone.component';
import { RefillComponent } from './refill/refill.component';
import { RefilloneComponent } from './refill/refillone/refillone.component';
import { AutorefillComponent } from './refill/autorefill/autorefill.component';
import { ActivateComponent } from './activate/activate.component';
import { HelpComponent } from './help/help.component';
import { DealsComponent } from './deals/deals.component';
import { MyaccountComponent } from './myaccount/myaccount.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    AirtimecardsComponent,
    PhonesComponent,
    BuysimcardsComponent,
    ProtectyourphoneComponent,
    RefillComponent,
    RefilloneComponent,
    AutorefillComponent,
    ActivateComponent,
    HelpComponent,
    MyaccountComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
     [
       { path: 'home', component: HomeComponent },
       { path: '', redirectTo: 'home', pathMatch: 'full' },
       { path: 'shop', component: ShopComponent },
       { path: 'shop/airtimecards', component: AirtimecardsComponent },
       { path: 'shop/buysimcards', component: BuysimcardsComponent },
       { path: 'shop/phones', component: PhonesComponent },
       { path: 'refill', component: RefillComponent },
       { path: 'refill/refillone', component: RefilloneComponent },
       { path: 'refill/autorefill', component: AutorefillComponent },
       { path: 'activate', component: ActivateComponent },
       { path: 'help', component: HelpComponent },
       { path: 'myaccount', component: MyaccountComponent },
       { path: 'deals', component: DealsComponent }
     ]
  )
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
