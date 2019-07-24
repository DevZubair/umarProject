import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: InAppBrowserOptions = {
    location: 'no',//Or 'no'
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    footer: 'yes',
    footercolor: '#25a9b6',
    zoom: 'yes',//Android only ,shows browser zoom controls
    hardwareback: 'no',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only
    toolbar: 'yes', //iOS only
    enableViewportScale: 'no', //iOS only
    allowInlineMediaPlayback: 'no',//iOS only
    presentationstyle: 'pagesheet',//iOS only
    fullscreen: 'yes',//Windows only
  };

  constructor(public navCtrl: NavController,private iab: InAppBrowser) {

  }

openQueno() {
    let target = "_blank";
    this.iab.create("http://www.thequeno.com/", target, this.options);
  }
}
