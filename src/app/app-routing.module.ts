// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

// Définition des routes
export const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent},
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'create', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '' } // Route pour les chemins non trouvés
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration du routeur
  exports: [RouterModule]
})
export class AppRoutingModule { }
