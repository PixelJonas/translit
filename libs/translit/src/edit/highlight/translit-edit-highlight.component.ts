import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { LIT_CONFIG, TranslitConfig } from '../../model/translit.config';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged, filter, startWith, switchMap, tap, withLatestFrom, } from "rxjs/operators";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { of } from "rxjs/observable/of";
import { Translation } from "../../model/translation";

@Component({
  selector: 'lit-edit-highlight',
  templateUrl: './translit-edit-highlight.component.html',
  styleUrls: ['./translit-edit-highlight.component.scss'],
})
export class TranslitEditHighlightComponent implements AfterViewInit, OnInit {
  @Input() translationKey: string;
  @Input() text: string;

  @Output() translation = new EventEmitter<Translation>();

  @HostBinding('class.lit-highlight-active') activeClass = true;

  @HostBinding('title') hostTitle: string;

  showInput = false;

  height: number;
  width: number;
  private debug = true;
  private active$ = new BehaviorSubject<boolean>(false);
  private display$: Observable<boolean>;
  private editable$: Observable<boolean>;

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

    this.display$.subscribe((display) => {
      this.activeClass = display;
    });
  }

  ngOnInit() {
    this.config$.subscribe((resolvedConfig) => {
      this.hostTitle = resolvedConfig.style ? resolvedConfig.style.tooltipText : 'change translation';
    });
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

  handleSubmit(translation: Translation) {
    this.translation.emit(translation);
    this.hide();
  }

  @HostListener('mouseover') onHover() {
    this.active$.next(true);
  }

  @HostListener('mouseleave') onLeave() {
    this.active$.next(false);
    this.hide();
  }

}
