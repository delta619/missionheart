import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CausesComponent } from './causes/causes.component';
import { DonateComponent } from './donate/donate.component';
import { FaqComponent } from './faq/faq.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  { path: 'index', pathMatch: 'full', component: IndexComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'causes',pathMatch: 'full',  component: CausesComponent },
  { path: 'faq', pathMatch: 'full', component: FaqComponent },
  { path: 'testimonials',pathMatch: 'full',  component: TestimonialsComponent },
  { path: 'register',pathMatch: 'full',  component: RegisterComponent },
  { path: 'donate', pathMatch: 'full', component: DonateComponent },

  { path: '**', redirectTo:'index' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  

}
