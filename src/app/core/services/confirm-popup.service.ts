import { Injectable, Injector, InjectionToken } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef } from '@angular/core/src/render3';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { ConfirmPopupOverlayRef } from './confirm-popup.ref';
import { CONFIRM_POPUP_DATA } from '../confirm-popup/confirm-popup.tokens';

export interface IConfirmPopupData {
  message: string;
  title: string;
  cancelButton?: string | null;
  confirmationButton?: string | null;
  component?: any;
  componentToken?: InjectionToken<any>;
  componentData?: any;
}

export interface IConfirmPopupConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  data?: IConfirmPopupData;
}

const DEFAULT_CONFIRM_POPUP_CONFIG: IConfirmPopupConfig = {
  panelClass: 'confirm-popup',
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  data: {
    title: '',
    message: '',
    cancelButton: 'Cancel',
    confirmationButton: 'Confirm'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmPopupService {

  constructor(private _injector: Injector, private _overlay: Overlay) { }

  private getConfirmPopupOverlayConfig(config: IConfirmPopupConfig): OverlayConfig {
    const scrollStrategy = this._overlay.scrollStrategies.block();
    const positionStrategy = this._overlay.position()
    .global()
    .centerHorizontally()
    .centerVertically();


    return new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy,
      positionStrategy
    });
  }

  confirm(params) {
    const confirmPopup = this.openConfirmPopup({
      data: {
        ...params
      }
    });

    return confirmPopup.confirmed.pipe(take(1), filter( (confirmed) => !!confirmed ));

  }

  private createConfirmPopupInjector(config: IConfirmPopupConfig, confirmPopupRef: ConfirmPopupOverlayRef): PortalInjector {
    
    const injectionTokens = new WeakMap();

    injectionTokens.set(ConfirmPopupOverlayRef, confirmPopupRef);
    injectionTokens.set(CONFIRM_POPUP_DATA, config.data);

    return new PortalInjector(this._injector, injectionTokens);
  }

  private createConfirmPopupOverlay(config: IConfirmPopupConfig) {
    const overlayConfig = this.getConfirmPopupOverlayConfig(config);
    return this._overlay.create(overlayConfig);
  }


  private attachConfirmPopupContainer(overlayRef: OverlayRef,
                                      config: IConfirmPopupConfig,
                                      confirmPopupRef: ConfirmPopupOverlayRef) {
      const injector = this.createConfirmPopupInjector(config, confirmPopupRef);
      const containerPortal = new ComponentPortal(ConfirmPopupComponent, null, injector);
      const containerRef = overlayRef.attach(containerPortal);

      containerRef.changeDetectorRef.detectChanges();

      return containerRef.instance;
        
      }

      openConfirmPopup(config: IConfirmPopupConfig = {}) {
        const confirmPopupConfig = {...DEFAULT_CONFIRM_POPUP_CONFIG, ...config};
        const overlayRef = this.createConfirmPopupOverlay(confirmPopupConfig);
        const confirmPopupRef = new ConfirmPopupOverlayRef(overlayRef);

        confirmPopupConfig.data = {...DEFAULT_CONFIRM_POPUP_CONFIG.data, ...(config.data ? config.data : {})};

        const componentInstance = this.attachConfirmPopupContainer(overlayRef, confirmPopupConfig, confirmPopupRef);

        confirmPopupRef.componentInstance = componentInstance;

        return componentInstance;
      }

}
