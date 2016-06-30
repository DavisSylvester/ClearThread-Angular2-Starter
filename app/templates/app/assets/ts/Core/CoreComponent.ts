import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";
import {Location} from '@angular/common';

@Component({
    selector: "ct-app",
    templateUrl: "/views/shared/index.html",
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ ]
})




export class CoreComponent {

    constructor(private _location: Location, private _router: Router){

    }

    Title: string = "This is my Title";
}