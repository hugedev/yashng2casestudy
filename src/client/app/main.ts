import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core';

import './operators';

import BootModule from './modules/boot/boot.module';

const PRODUCTION_BUILD: string = 'prod';

if (String('<%= BUILD_TYPE %>') === PRODUCTION_BUILD) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BootModule);

let database = new SQL.Database();

database.run('CREATE TABLE test(field1, field2);');
database.run('INSERT INTO test VALUES ( ?, ?), (?, ?)', [1, 11, 2, 22]);

let statement = database.prepare('SELECT * FROM test WHERE field1 between $start and $end');
statement.bind({ $start: 1, $end: 2 });

while (statement.step()) {
    let rows = statement.getAsObject();
    console.log(JSON.stringify(rows));
}