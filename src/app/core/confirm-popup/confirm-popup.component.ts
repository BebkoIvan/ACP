import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef, Inject, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmPopupOverlayRef } from '../services/confirm-popup.ref';
import { IConfirmPopupData } from '../services/confirm-popup.service';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { CONFIRM_POPUP_DATA } from './confirm-popup.tokens';
import {ENTER, ESCAPE} from '@angular/cdk/keycodes';
import {AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.pug',
  styleUrls: ['./confirm-popup.component.scss'],
  animations: [
    trigger('confirmPopup', [
      state('void', style({transform: 'scale(0.8) translate3d(0, 150px, 0) rotateZ(-50deg)', opacity: 0})),
      state('enter', style({transform: 'scale(1) translate3d(0, 0, 0) rotateZ(0deg)', opacity: 1})),
      transition('void => enter', animate('250ms')),
      state('leave', style({transform: 'scale(0.8) translate3d(0, 150px, 0) rotateZ(-50deg)', opacity: 0})),
      transition('enter => leave', animate('150ms'))
    ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class ConfirmPopupComponent implements OnInit, OnDestroy {

  animationState: 'void' | 'enter' | 'leave' = 'enter';
  animationStateChanged = new EventEmitter<AnimationEvent> ();
  keydownEventsSubscription: Subscription;

  @Output() confirmed = new EventEmitter<boolean | {confirmed: boolean, payload: any}>();

  constructor(private cdr: ChangeDetectorRef, public confirmPopupRef: ConfirmPopupOverlayRef,
              @Inject(CONFIRM_POPUP_DATA) public data: IConfirmPopupData) { }

  ngOnInit() {
    this.keydownEventsSubscription = this.confirmPopupRef.keyDownEvents$
      .subscribe((keyCode) => {
        switch (keyCode) {
          case ESCAPE:
            this.onCancel();
            break;
          case ENTER:
             this.onConfirm();
             break;
        }
      });
  }

  ngOnDestroy(): void {
    if (this.keydownEventsSubscription) {
      this.keydownEventsSubscription.unsubscribe();
    }
  }

  onCancel(): void {
    this.confirmed.emit(false);
    this.confirmPopupRef.close();
  }

  onConfirm(): void {
    this.confirmed.emit(true);
    this.confirmPopupRef.close();
  }

  onAnimationStart(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  startExitAnimation() {
    this.animationState = 'leave';
    this.cdr.detectChanges();
  }
}
