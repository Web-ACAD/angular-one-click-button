import {NgModule} from '@angular/core';

import {WaOneClickButtonDirective} from './one-click-button.directive';


@NgModule({
	declarations: [
		WaOneClickButtonDirective,
	],
	exports: [
		WaOneClickButtonDirective,
	],
})
export class WaOneClickButtonModule {}
