import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from 'src/pages/pages.module';
import { PrincipalComponent } from 'src/pages/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: '**', component: PrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }