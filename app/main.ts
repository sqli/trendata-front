import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";

const platform = platformBrowserDynamic();

// Uncomment line below when in production
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);