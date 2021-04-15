import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {WebsiteService} from '../service/website.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocket {

  webSocketEndPoint = 'http://localhost:8083/ws';
  stompClient: any;
  topic = '/topic/clone';
  constructor(private websiteService: WebsiteService) {}

  connect(): any {
    const ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const that = this;
    that.stompClient.connect({}, frame => {
      that.stompClient.subscribe(that.topic, sdkEvent =>{
        that.onMessageReceived(sdkEvent);
      });
    });
  }

  onMessageReceived(message): void {
    this.websiteService.setRunning(message.body);
  }
}
