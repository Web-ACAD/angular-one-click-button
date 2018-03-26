import {Directive} from '@angular/core';


@Directive({
	selector: '[waOneClickButton]',
	exportAs: 'oneClickBtn',
	host: {
		'[disabled]': 'disabled',
		'(click)': 'disable()',
	},
})
export class WaOneClickButtonDirective
{


	public disabled: boolean = false;


	public disable(): void
	{
		// must be processed in next tick, otherwise other attached click events wouldn't be called
		setTimeout(() => {
			this.disabled = true;
		});
	}


	public enable(): void
	{
		this.disabled = false;
	}

}
