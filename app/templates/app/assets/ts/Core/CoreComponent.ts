import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: "ct-app",
    templateUrl: "/views/shared/index.html",
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ ]
})




export class AppComponent {
    Title: string = "This is my Title";
}