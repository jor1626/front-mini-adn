import * as $ from 'jquery';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FullComponent } from './full/full.component';
import { BlankComponent } from './blank/blank.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavigationComponent } from './header-navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpinnerComponent } from './spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { MatButtonToggleModule, 
  MatButtonModule, 
  MatDatepickerModule, 
  MatInputModule, 
  MatAutocompleteModule, 
  MatFormFieldModule, 
  MatNativeDateModule, 
  MatSelectModule, 
  MatIconModule 
} from '@angular/material';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonToggleModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatInputModule, 
    MatAutocompleteModule, 
    MatFormFieldModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatIconModule,
    PerfectScrollbarModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule
  ],
  declarations: [
    SpinnerComponent, BreadcrumbComponent, NavigationComponent, SidebarComponent, FullComponent, BlankComponent
  ],
  exports: [
    SpinnerComponent, BreadcrumbComponent, NavigationComponent, SidebarComponent, FullComponent, BlankComponent,
    MatButtonToggleModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatInputModule, 
    MatAutocompleteModule, 
    MatFormFieldModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatIconModule,
    NgMultiSelectDropDownModule,
    PerfectScrollbarModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
