import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/components/not-found/not-found.component';
import { GetCharacterResolver } from './libs/resolvers/get-character.resolver';

const routes: Routes = [
  {
    path:'',
     resolve: {
       character: GetCharacterResolver
    },
    children:[
      {
        path:'',
        redirectTo:'characters',
        pathMatch:'full'
      },
      {
        path: 'characters',
        loadChildren: () => import('./modules/components/first.module').then(m => m.FirstModule)
      },
    ]  
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
