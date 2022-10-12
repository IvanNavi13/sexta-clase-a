import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  public characterObser$!: Observable<any>; 

  constructor(private activatedRoute: ActivatedRoute) { 
    this.characterObser$ = this.activatedRoute.data.pipe(
      tap((resp) => {
        console.log("ActivatedRoute",resp);
        return resp;
      })
    )
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (resp) => {
        console.log('ComponenteOne', resp)
      }
    })
  }

}
