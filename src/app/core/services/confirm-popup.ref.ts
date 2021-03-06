import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import {ENTER, ESCAPE} from '@angular/cdk/keycodes';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';


export class ConfirmPopupOverlayRef {

    private _areKeyboardEventsDisabled = false;
    private _beforeClose = new Subject<void>();
    private _afterClosed = new Subject<void>();

    componentInstance: ConfirmPopupComponent;

    get overlayRef(): OverlayRef {
        return this._overlayRef;
    }

    constructor(private _overlayRef: OverlayRef){}
    
    keyDownEvents$: Observable<number> = this._overlayRef.keydownEvents().pipe(
        map((event: KeyboardEvent) => event.keyCode),
        filter((keyCode: number) => (keyCode === ESCAPE || keyCode === ENTER)));

        close(): void {
            this.componentInstance.animationStateChanged.pipe(
                filter(event => event.phaseName === 'start'),
                take(1)
            ).subscribe(() => {
                this._beforeClose.next();
                this._beforeClose.complete();
                this.overlayRef.detachBackdrop();
            });

            this.componentInstance.animationStateChanged.pipe(
            filter(event => event.phaseName === 'done' && event.toState === 'leave'),
            take(1)
        ).subscribe(() => {
            this.overlayRef.dispose();
            this._afterClosed.next();
            this._afterClosed.complete();

            this.componentInstance = null;
        });

            this.componentInstance.startExitAnimation();

        }
    
        afterClosed(): Observable<void> {
            return this._afterClosed.asObservable();
        }

        beforeClose(): Observable<void> {
            return this._beforeClose.asObservable();
        }
}