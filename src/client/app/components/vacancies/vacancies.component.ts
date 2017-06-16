import { Component, OnInit, OnDestroy } from '@angular/core';

let vacanciesComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'vacancies.component.html',
    selector: 'vacancies-component'
};

@Component(vacanciesComponentDef)
class VacanciesComponent implements OnInit, OnDestroy {
    constructor() {
        console.log('Vacancies Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }
}

export default VacanciesComponent;
