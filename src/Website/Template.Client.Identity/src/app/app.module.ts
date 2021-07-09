import { LayoutModule } from '@angular/cdk/layout';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { OAuthModule } from 'angular-oauth2-oidc';

import { CoreModule } from '@core/core.module';

import { CustomLayoutModule } from '@layout/layout.module';
import { userLoggedReducer } from '@layout/nav-bar/nav-bar-login/reducers/user-logged.reducers';

import { environment } from '@env';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        HttpClientModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        CoreModule,
        CustomLayoutModule,
        StoreModule.forRoot({
            userLogged: userLoggedReducer,
        }),
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: [environment.apiUrl],
                sendAccessToken: true,
            },
        }),
    ],
    providers: [
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: { duration: 5000 },
        },
        { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } },
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
