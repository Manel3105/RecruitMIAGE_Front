import {RouterModule, Routes} from '@angular/router';
import {PagesSignInComponent} from "./pages/pages-sign-in/pages-sign-in.component";
import {PagesLoginComponent} from "./pages/pages-login/pages-login.component";
import {PagesAccueilComponent} from "./pages/pages-accueil/pages-accueil.component";
import {PagesTableauDeBordComponent} from "./pages/pages-tableau-de-bord/pages-tableau-de-bord.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'register', component: PagesSignInComponent},
  { path: 'login', component: PagesLoginComponent },
  { path: 'accueil', component: PagesAccueilComponent },
  { path: 'tableaudebord', component: PagesTableauDeBordComponent}, // Cette ligne doit venir avant le wildcard '**'
  { path: '**', redirectTo: 'accueil' } // Redirect to 'accueil' or show a 404 page component if you have one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}


