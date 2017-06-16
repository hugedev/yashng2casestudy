import { Component, OnInit, OnDestroy } from '@angular/core';

let layoutComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'layout.component.html',
    selector: 'layout-component'
};

@Component(layoutComponentDef)
class LayoutComponent implements OnInit, OnDestroy {
    constructor() {
        console.log('Layout Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }
}

export default LayoutComponent;
