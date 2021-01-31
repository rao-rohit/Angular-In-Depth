/*
  Component - It is a decorator. A decorator, is a function which annotates a set of functions,
   Here we are using component decorator against typescript class, to tell Angular some specific metadata like template, 
   selector for this class we need.
*/
import {Component} from '@angular/core' //#1 - 

/*
Now we can use a component decorator to implement metadata for the component we created,
 It should be above your AppComponent class
 @ - prefix for decorators
*/
@Component(                          //#3
{
  /*
    selector creates a element in HTML.
     app-root -> if you open index.html, you could see <app-root> , which is a base root component for each aangular app.
  */
  selector:'app-root', 

  /*
    Instead of template, we could use template URL which points to a HTML file
    ticks - To have multiple line html block here
  */
  template:`
    <div class="app">
    {{header}}
    </div>
  
  `,

  //For your stylesheet
  styleUrls:['app.component.scss']
})

/*
Create a class with one property as Header
*/
export class AppComponent //#2
{
  header:string;
  constructor()
  {
    this.header = 'Angular Basic Flow & Bootstrapping'
  }

}