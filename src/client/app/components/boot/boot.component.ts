import { Component } from '@angular/core';

import bootComponentDef from './boot.component.def';

@Component(bootComponentDef)
class BootComponent {
    constructor() {
        console.log('Boot Component Initialized!');
    }
}

export default BootComponent;