import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementModule } from './management/management.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ManagementModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: "outline"}
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
