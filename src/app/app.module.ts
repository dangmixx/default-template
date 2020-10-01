import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './module/core/navigation/navigation.component';
import { ToolbarComponent } from './module/core/toolbar/toolbar.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from './share/share.module';
import {
  CompanyComponent,
  CustomPaginator,
} from './module/company/company.component';
import { AddCompanyComponent } from './module/company/add-company/add-company.component';
import { CompanyTableComponent } from './module/company/company-table/company-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorIntl } from '@angular/material/paginator';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ToolbarComponent,
    DashboardComponent,
    CompanyComponent,
    AddCompanyComponent,
    CompanyTableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useFactory: CustomPaginator,
      deps: [TranslateService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
