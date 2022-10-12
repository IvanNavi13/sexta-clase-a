import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';

const routes: Routes = [
    {
        path:'',
        redirectTo: 'get-character',
        pathMatch: 'full'
    },
    {
        path:'get-character',
        component: OneComponent
    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[],
})
export class OneRoutingModule{

}
