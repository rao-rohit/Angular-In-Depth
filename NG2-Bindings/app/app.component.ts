import {Component} from '@angular/core' 


@Component(                          
{
   selector:'app-root', 
  //#1
   /*
    Interpolation (#2 to #8) - {{AnyValueHere}} - Interpolation allows angular to bind properties of your typescript class to your UI/ or in template
                                       As it is an expression, so we can perform some operation (mathematical/ternary ) inside this

    Property Binding (One way) (#9 to #13 -) - [javascript Property Name] - Pass data from component class to template on
                         some element of html element. e.g. on input
    

    Event  Binding (#14 to #19)  (event name)- Listen out input changes and update the value of a ts/ js property, Blur, focus, onkeyup etc
                      (From Client to your typescript /js method) = (EventName)

    Two Way Binding (#20 to #24) [(ngModel)] - We need to import Angular forms module, to achieve two way binding.
                       When you emit a change, you should always use one way data changes using event lsiterners.
                      We can use it for input/textarea elements, for others we should try to use one way binding using property/event

                      Note - You need to add Forms module in AppModule.ts file and also import it in @NgModule decorator


    Using Template #ref variable (#25 to ..) - We can achieve passing data from using ref (#variableName) also. We need to give a #name to a html element and 
                      Then we can get its value anywhere in the DOM tree.

  */
 
  template:`
    <div class="app">
    {{header}}          
    </div>

    <div>
    <!-- #4 -->
    <div class="header">
    1. Ingterpolation : 
    </div>
        <div>
        <!-- #5 -->
          Age : {{age}}  
          <br/>
          Height : {{height}}
        </div>

        <div>
        <!-- #6 -->
        Mathematical Experssion : {{age + height}}
        <br/>
        <!-- #8 -->
        Ternary : {{ isAgeGreaterThanFive ? 'Yes' : 'No'}}

        <br/>
        <br/>
        <!-- #9 -->
        <div class="header">
        2. Property Binding (One Way) 
        </div>

        <!-- #11 - Read image path from javascript property, [] brackets means Read from your typescript object -->
          <div> 
            <img [src]="logoPath" /> 
          </div>
                  
       <!-- #13 - Read author name from javascript property, But if you change text box value, it wont get change as it is one way only. -->
          <input type="text" [value]="authorName" /> 
          {{authorName}}


        

        </div>
        <br/> <br/>
        <!-- #14 -->
        <div class="header">
        3. Event Binding (UI to ts)

        </div>

        <div>
        <!-- #17 - Read emailId from javascript property, on KeyUp event, it will pass the event to your ts function and updates emailId value -->
        Enter your email Id : <input type="text" [value]="emailId" (keyup)="onKeyUpOfInput($event)" /> 
        {{emailId}}

        <br/>
        <!-- #19 - Clears the emailId value on click of button (OneWay) -->
        <input type="button" (click)="clearEmailId()" value="clear emailId" >
      </div>

  </div>


  <br/> <br/>
  <!-- #20 -->
  <div class="header">
  4. Two way Binding

  <div>
  <!-- #21 - Read phonenumber from javascript property using [ngModel] (though its a one way property binding) -->
  Enter your phone number ([ngModel] Property Binding) : <input type="text" [ngModel]="phoneNumber" (input)="onPhoneNumberChange($event)" /> 
  {{phone}}
<br/>
<br/>
  <!-- #23 - Update your model value on change event of phonenumber using (ngModelChange) (though its a one way eventBinding binding) -->
  Enter your phone number ((ngModelChange) Event Binding) :  <input type="text" [ngModel]="phoneNumber" (ngModelChange)="onPhoneNumberChangeTwoWay($event)" /> 
  
  <br/>
  <br/>
  <!-- #24 -Final two way Binding (using  [(ngModel)]), Make sure you added FormsModule in app.module.ts file   -->

  Final two way Binding (using  [(ngModel)]) : <input type="text" [(ngModel)]="phoneNumber" /> 




  </div>

  <br/> <br/>
  <!-- #27 -->
  <div class="header">
  5. Template #ref variables



  <div>

 <!-- #28 - Input for date of birth, and provided the template reference name as #dob, So it will available everywhere in Dom tree -->
  Enter your Date of Birth ([ngModel] Property Binding) : <input type="date" #dob /> 
  {{dateOfBirth}}

  <br/>

  <!-- #29 - Button click to change DateOfBirth property, and we are passing the template reference variable here #dob -->
  <input type="button" (click)="changeDate(dob.value)"   value="Change Date Of Birth">
<br/>
  
  `,

  styleUrls:['app.component.scss']
})

export class AppComponent
{
  header:string;
  
  //#2
  age:number= 10;
  height:number = 80; 
  isAgeGreaterThanFive : boolean= false // We can use it in ternary operator

  //#10
  logoPath = "./img/Logo.png";
  //#12
  authorName = "Rohit Rao";

  //#15
  emailId = "";

  //#20
  phoneNumber = 1234567890;

  //#25
  dateOfBirth = (new Date().toDateString());

  constructor()
  {
    this.header = '2. Binding'; 
    //#3
    this.isAgeGreaterThanFive = this.age >5 ? true: false;
  }

  //#16
  onKeyUpOfInput(event:any)
  {
    this.emailId = event.target.value;
  }

  //#18
  clearEmailId()
  {
    this.emailId = '';
  }

  //#20
  onPhoneNumberChange(event: any)
  {
    this.phoneNumber = event.target.value;
  }

  //#22 - for ngModelChange, you will directly get the model value, you dont need to use event.target.value
  onPhoneNumberChangeTwoWay(value:any)
  {
    this.phoneNumber = value;
  }

  //#26 - Update model date value on button click using Template ref
  changeDate(value:any)
  {
    this.dateOfBirth = value;
  }


}