import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { OneService } from '../../services/one.service';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterResolver implements Resolve<any> {

  constructor(private dataS: OneService, private router: Router){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    //http://localhost:4200/characters/get-character?name=rick
    const name: any = route.queryParams['nombre'];
    console.log("id es:", name);
    // console.log("ROUTE:", route);

    console.log("resolvers:", route);
    return this.dataS.getCharacters().pipe(
      tap((resp) => {
        console.log("Before",resp);
        return resp;
      }),
      concatMap((resp) => {
        console.log("resp:", resp);
        let temp : string = (resp.results as any[]).find( item =>{
          console.log("item", item);
          return item.name.includes(name)
        } )?.name
        if(!temp){
          throw new Error("error temp"); // {status: 404}
        } 
        console.log("find", temp);
        return this.dataS.getCharacter(temp)//resp.results[id].name
      }),
      // tap((resp) => {
      //   console.log("After",resp);
      //   return resp;
      // }),
      catchError((error: any) =>{
        console.log(error);
        if(error.status = 404){ this.router.navigate(['404']) }
        
        return error;
      })
    )
    // console.log("R-state:", state);
    // return of({ //es un resolver
    //   mensaje: "hola"
    // });
  }
}


//Ventaja: controlar los errores. antes de renderizar y no se encuentra manda error
