import { NgModule } from '@angular/core';

import commonModulDef from './common.module.def';

@NgModule(commonModulDef)
class CommonModule {
    constructor() {
        console.log('Common Module Initialized!');
    }
}

export default CommonModule;
