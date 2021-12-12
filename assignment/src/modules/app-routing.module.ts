import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mainRoutes } from '../routes/app.routes';

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(mainRoutes,
            {
                useHash: true
            })
    ],
    exports: [RouterModule],
})

export class AppRoutingModule {}