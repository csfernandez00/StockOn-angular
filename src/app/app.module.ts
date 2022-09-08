import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import { MatInputModule} from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { StockComponent } from './dashboard/stock/stock.component';
import { ScrollDirective } from './scroll.directive';
import { AccessComponent } from './access/access.component';
import { LandingComponent } from './landing/landing.component';
import { SupportComponent } from './dashboard/support/support.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { HelpComponent } from './dashboard/help/help.component';
import { ExitdialogComponent } from './dashboard/exitdialog/exitdialog.component';
import { NewProductComponent } from './dashboard/stock/new-product/new-product.component';
import { EditProductComponent } from './dashboard/stock/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './dashboard/confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { WarningComponent } from './components/warning/warning.component';






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    StockComponent,
    ScrollDirective,
    AccessComponent,
    LandingComponent,
    SupportComponent,
    ProfileComponent,
    SidenavComponent,
    StatsComponent,
    HelpComponent,
    ExitdialogComponent,
    NewProductComponent,
    EditProductComponent,
    ConfirmComponent,
    WarningComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    NgChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
