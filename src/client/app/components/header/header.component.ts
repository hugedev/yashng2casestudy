import { Component, OnInit, OnDestroy } from '@angular/core';

let headerComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'header.component.html',
    selector: 'header-component'
};

@Component(headerComponentDef)
class HeaderComponent implements OnInit, OnDestroy {
    constructor() {
        console.log('Header Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }
}

export default HeaderComponent;
