import { Component, OnInit } from '@angular/core';
import { NgForm, FORM_DIRECTIVES, Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';




@Component({
     selector: 'ct-dashboard',
     templateUrl: 'views/Dashboard/index.html',
     directives: [ FORM_DIRECTIVES ],
     providers: [ Location ]
})




export class DashboardComponent implements OnInit  {


     public Title: string = "DASHBOARD MAIN MENU";


     constructor(private _router: Router, private _location: Location){
         


     }


     ngOnInit(){




     }




}