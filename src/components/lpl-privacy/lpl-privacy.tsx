import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lpl-privacy',
  styleUrl: 'lpl-privacy.scss',
  shadow: false,
})
export class LplPrivacy {

  render() {
    return (
      <Host>
        <h1>
          Privacy Policy
        </h1>
        <p>
          Mercury uses the camera to capture frames, but never sends images, video, or audio to external servers.
        </p>
        <p>
          If you'd like to see your work featured on our facebook page, send it to us at <a href='mailto:josh@lightpaintlive.com'>josh@lightpaintlive.com</a>
        </p>
      </Host>
    );
  }

}
