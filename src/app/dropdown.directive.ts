import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
	@HostListener('click') open(){
		this.isOpened = true;
	}
	@HostListener('mouseleave') close(){
		this.isOpened = false;
	}
	private isOpened = false;

  @HostBinding('class.open') get opened(){
  	return this.isOpened;
  }



}
