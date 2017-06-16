import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core';

import './operators';

import BootModule from './modules/boot/boot.module';

const PRODUCTION_BUILD: string = 'prod';

if (String('<%= BUILD_TYPE %>') === PRODUCTION_BUILD) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BootModule);