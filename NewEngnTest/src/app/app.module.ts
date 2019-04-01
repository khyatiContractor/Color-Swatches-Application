import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ColorDetailsComponent } from './color/color-details.component';
import { ColorListComponent } from './color/color-list.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    ColorListComponent,
    ColorDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'colors', component: ColorListComponent},
      {path:  'colors/:id', component: ColorDetailsComponent},
      { path: '', redirectTo: 'colors', pathMatch: 'full' },
      { path: '**', redirectTo: 'colors', pathMatch: 'full' }
    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
