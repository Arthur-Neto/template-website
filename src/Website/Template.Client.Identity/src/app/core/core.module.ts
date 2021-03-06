import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SpinnerInterceptor } from './interceptors/spinner-interceptor.service';

@NgModule({
    imports: [CommonModule],
    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SpinnerInterceptor,
            multi: true,
        },
    ],
})
export class CoreModule {}
