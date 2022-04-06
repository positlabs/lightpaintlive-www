import { Host, Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  @State() base: string
  componentWillLoad(){
    this.base = document.querySelector('base').getAttribute('href').match('github') ? '/lightpaintlive-www/' : '/'
    console.log('router root', this.base)
  }
  render() {
    return (
      <Host>
        <stencil-router root={this.base}>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="lpl-landing" exact={true} />
            <stencil-route url="/privacy" component="lpl-privacy" />
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }
}
