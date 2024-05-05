import { Routes } from '@angular/router';
import {PagesSignInComponent} from "./pages/pages-sign-in/pages-sign-in.component";
import {PagesLoginComponent} from "./pages/pages-login/pages-login.component";
import {PagesAccueilComponent} from "./pages/pages-accueil/pages-accueil.component";
import {SigninformComponent} from "./components/signinform/signinform.component";


export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full'},
  { path: 'register', component: PagesSignInComponent},
  { path: 'login', component: PagesLoginComponent },
  { path: 'accueil', component: PagesAccueilComponent },
  { path: '**', component: PagesSignInComponent}




];

