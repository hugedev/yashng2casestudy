import { Component, OnInit, OnDestroy } from '@angular/core';

let navigationComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'navigation.component.html',
    selector: 'navigation-component'
};

@Component(navigationComponentDef)
class NavigationComponent implements OnInit, OnDestroy {
    constructor() {
        console.log('Navigation Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }
}

export default NavigationComponent;
