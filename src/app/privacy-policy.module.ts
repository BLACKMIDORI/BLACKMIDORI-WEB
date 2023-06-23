import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {PrivacyPolicyComponent} from "./privacy-policy.component";

@NgModule({
  declarations: [
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [PrivacyPolicyComponent]
})
export class AppModule { }
