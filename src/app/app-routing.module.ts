import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrivacyPolicyComponent} from "./privacy-policy.component";
import {HomeComponent} from "./home.component"; // CLI imports router

const routes: Routes = [
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', component: HomeComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
