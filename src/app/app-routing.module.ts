import { NotFoundComponent } from './components/not-found/not-found.component';
import { ViewNumbersComponent } from './pages/view-numbers/view-numbers.component';
import { SelectNumberComponent } from './pages/select-number/select-number.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'number', component: SelectNumberComponent },
  { path: 'view-number', component: ViewNumbersComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
