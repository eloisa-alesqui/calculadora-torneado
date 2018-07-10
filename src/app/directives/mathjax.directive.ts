import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[MathJax]'
})
export class MathJaxDirective {
    @Input('MathJax') formula: string;

    constructor(private el: ElementRef) {
    }

    ngOnChanges() {
        this.el.nativeElement.innerHTML = this.formula;
        eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement])');
    }
}
