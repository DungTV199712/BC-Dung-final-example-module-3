import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AwesomeComponent} from './awesome/awesome.component';
import {HttpClientModule} from '@angular/common/http';
import {AwesomeDetailComponent} from './awesome-detail/awesome-detail.component';
import {AwesomeEditComponent} from './awesome-edit/awesome-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        AwesomeComponent,
        AwesomeDetailComponent,
        AwesomeEditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
