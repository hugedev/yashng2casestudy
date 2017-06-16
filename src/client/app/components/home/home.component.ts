import { Component, OnInit, OnDestroy } from '@angular/core';

let homeComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'home.component.html',
    selector: 'home-component'
};

@Component(homeComponentDef)
class HomeComponent implements OnInit, OnDestroy {
    constructor() {
        console.log('Home Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }
}

export default HomeComponent;
