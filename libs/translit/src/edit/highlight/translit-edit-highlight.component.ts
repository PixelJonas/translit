import {
  AfterViewChecked,
  AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Input, OnChanges, OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { LIT_CONFIG, TranslitConfig } from '../../model/translit.config';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged, startWith, switchMap, withLatestFrom, } from "rxjs/operators";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { of } from "rxjs/observable/of";
import { Translation } from "../../model/translation";

@Component({
  selector: 'lit-edit-highlight',
  templateUrl: './translit-edit-highlight.component.html',
  styleUrls: ['./translit-edit-highlight.component.scss'],
})
export class TranslitEditHighlightComponent implements AfterViewInit {
  @Input()
  text: string;

  @Input()
  translationKey: string;

  @Output()
  submit = new EventEmitter<Translation>();

  private debug = true;
  showInput = false;

  @HostBinding('class.lit-highlight-active') myField = true;

  private active$ = new BehaviorSubject<boolean>(false);
  private display$: Observable<boolean>;
  private editable$: Observable<boolean>;

  height: number;
  width: number;

  constructor(@Inject(LIT_CONFIG) private config$: Observable<TranslitConfig>,
              private elementRef: ElementRef) {
    this.editable$ = this.config$.pipe(
      switchMap((resolvedConfig: TranslitConfig) => resolvedConfig.isEditable ? resolvedConfig.isEditable : of(true)),
      startWith(false),
    );

    this.display$ = this.active$.pipe(
      withLatestFrom(this.editable$, ((active, editable) => (active && editable) || this.debug)),
      distinctUntilChanged(),
    );

    this.display$.subscribe((display) => this.myField = display);
  }

  ngAfterViewInit() {
    this.width = this.elementRef.nativeElement.offsetWidth;
    this.height = this.elementRef.nativeElement.offsetHeight;
  }

  onClick() {
    this.show();
  }

  show() {
    this.showInput = true;
  }

  hide() {
    this.showInput = false;

  }

  handleSubmit(translation: Translation){
    this.submit.emit(translation);
    this.hide();
  }

  @HostListener('mouseover') onHover() {
    this.active$.next(true);
  }

  @HostListener('mouseleave') onLeave() {
    this.active$.next(false);
  }

}
