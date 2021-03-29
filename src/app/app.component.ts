import {ApplicationRef, Component, Input, OnInit} from '@angular/core';
import {WebSocketAPI} from './websocket/websocketapi';
import {WebsiteService} from './service/websiteservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Car Presentation';
  greeting: boolean;
  name: string;
  value: any;

  // @Input() message: string;
  constructor(private websiteService: WebsiteService, private webSocketAPI: WebSocketAPI) {
    // this.webSocketAPI = new WebSocketAPI(new AppComponent());
    this.webSocketAPI.connect();
    // this.clone1Service.getCloneStatus().subscribe(
    //   (data) => {
    //     // console.log('##', data);
    //     this.greeting = data;
    //   });
  }

  ngOnInit(): void {
    this.websiteService.running.subscribe((isRunning) => {
      this.greeting = isRunning;
      console.log('running', this.greeting);
    });
  }
    // this.webSocketAPI = new WebSocketAPI(new AppComponent());
    // this.webSocketAPI.connect();
    // this.clone1Service.getCloneStatus().subscribe(
    //   (data) => {
    //     // console.log('##', data);
    //     this.greeting = data;
    //   });
    // this.clone1Service.getList().subscribe(data => {
    //   this.result = this.handleMessage(data);
    // });

  }
  // getStatus(): any {
  //   return this.clone1Service.getCloneStatus();
  // }


  // connect(): void {
  //   this.webSocketAPI.connect();
  // }
  //
  // disconnect(): void {
  //   this.webSocketAPI.disconnect();
  // }

  // sendMessage(): void {
  //   this.webSocketAPI.send(this.name);
  // }

  // handleMessage(message: boolean): any {
  //   console.log('&&', message);
  //   this.greeting = message;
  //   console.log(this.greeting);
  //   return this.greeting;
  // }

  // postStatus(): any{
  //   console.log(this.result);
  //   return this.httpClient.post<Clone1[]>(this.baseURLclone, ).pipe();
  // }

  // onChange(UpdatedValue: string): void
  // {
  //   this.text = UpdatedValue;
  // }
