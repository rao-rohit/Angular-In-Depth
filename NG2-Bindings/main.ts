//Tell Angular how to bootstrap this - Compile in broswer, import platformBrowserDynamic
/*
It contains all client side code that actually process templates, binding, DI -
Needed dynamic version which allows compile our application in browser.
*/
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; // #14

//Import the App module we have created
import {AppModule} from './app/app.module'; // #13

/*
platFormBrowserDynamic is a function not component.
 We need to call the bootstarpModule function and tell it which module we need to bootstrap
*/
platformBrowserDynamic().bootstrapModule(AppModule); //#15