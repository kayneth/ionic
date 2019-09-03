
import { JSX as LocalJSX } from '@ionic/core';
import React from 'react';

import { NavContext } from '../contexts/NavContext';

import { ReactProps } from './ReactProps';
import { IonRouterOutletInner } from './inner-proxies';
import { createForwardRef } from './utils';

type Props = LocalJSX.IonRouterOutlet & {
  ref?: React.RefObject<any>;
};

type InternalProps = Props & {
  forwardedRef: any;
};

const IonRouterOutletContainer = /*@__PURE__*/(() => class extends React.Component<InternalProps> {
  context!: React.ContextType<typeof NavContext>;

  render() {

    const ViewManager = this.context.getPageManager();

    return (
      this.context.hasIonicRouter() ? (
        <ViewManager>
          <IonRouterOutletInner ref={this.props.forwardedRef} {...this.props}>
            {this.props.children}
          </IonRouterOutletInner>
        </ViewManager>
      ) : (
          <IonRouterOutletInner ref={this.props.forwardedRef} {...this.props}>
            {this.props.children}
          </IonRouterOutletInner>
        )
    );
  }

  static get contextType() {
    return NavContext;
  }
})();

export const IonRouterOutlet = createForwardRef<Props & ReactProps, HTMLIonRouterOutletElement>(IonRouterOutletContainer, 'IonRouterOutlet');
