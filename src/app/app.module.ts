import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  DialogDeleteEmployee
} from './components/employees/employee-list/employee-list.component';
import {CreateEmployeeComponent, DialogCreateEmployee} from './components/employees/create-employee/create-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  DialogUpdateEmployee,
  UpdateEmployeeComponent
} from './components/employees/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employees/employee-details/employee-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DialogCreateEmployee,
    DialogDeleteEmployee,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule
  ],
  entryComponents: [CreateEmployeeComponent, DialogCreateEmployee, DialogUpdateEmployee, DialogDeleteEmployee],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
