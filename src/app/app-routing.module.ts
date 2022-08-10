import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './dashboard/help/help.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { StockComponent } from './dashboard/stock/stock.component';
import { SupportComponent } from './dashboard/support/support.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'access', component:AccessComponent},
  {path: 'dashboard', component:DashboardComponent, children:
  [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path:'stock', component:StockComponent},
    {path:'stats', component:StatsComponent},
    {path:'support', component:SupportComponent},
    {path:'profile', component:ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



  
}
