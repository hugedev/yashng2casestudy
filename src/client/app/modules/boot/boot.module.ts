import { NgModule } from '@angular/core';

import bootModuleDef from './boot.module.def';

@NgModule(bootModuleDef)
class BootModule {
    constructor() {
        console.log('Boot Module Initialized!');
    }
}

export default BootModule;
