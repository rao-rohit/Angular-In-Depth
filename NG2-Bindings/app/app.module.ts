/*
  NgModule is a root module.
*/

import {NgModule} from '@angular/core'; //#6
import {FormsModule} from '@angular/forms'
/*
  Angular is splited in multiple modules,
  So each piece of angular like forms, http lives inside different modules

  As we are building browser app, we need to import BrowserModule from @angular/platform-browser

  For browser modules, we also need to import commonModule from @angular/common
*/
import {BrowserModule} from '@angular/platform-browser'; //#10

//Needed for browser module, gives us directive which will be used later in module
import {CommonModule} from '@angular/common'; //#11 

//Your custom component, imported AppComponent from app.component
import {AppComponent} from './app.component'; //#5



/*
  NgModule is container that contains all of our components and depedencies such as services for http requests etc

  Here we are telling NgModule to bootstrap our component
*/
@NgModule({ //#7

//To register this AppComponent in module, We need to create decalration, its an Array
declarations:[AppComponent] ,//#9

/*
  We need to import browser module and common module in NgModule decorator
*/
imports:[ BrowserModule, 
          CommonModule,
        FormsModule], //#12

//Starting point which instatntiate the angular app
bootstrap:[AppComponent] //#8

})


/*
It tells this AppModule is a NGModule - The decorator
*/
export class AppModule{} //#6


/*
#5  to #9 - If we see whole picture , We are importing AppComponent,
            We are registering it and we are telling angular to bootstrap this component
*/

/*
Fina;l - Angular will grab this NGModule, 
find imports, 
then boootstrap application based on appComponent,
any further component lives inside this declaration section

*/