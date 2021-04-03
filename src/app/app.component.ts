import {
  ApplicationRef, ChangeDetectionStrategy, ComponentFactory, ComponentFactoryResolver, EventEmitter, Input, NgZone,
  OnInit,
  Output, SecurityContext
} from '@angular/core';
import {WebSocketAPI} from './websocket/websocketapi';
import {WebsiteService} from './service/websiteservice';
import { Component, ChangeDetectorRef } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {

  title = 'Car Presentation';
  greeting: boolean;
  // value: ComponentFactory<boolean>;
  value: string;
  // @Output()
  // testEmitter$ = new BehaviorSubject<boolean>(this.greeting);

  // @Input() message: string;
  constructor(private websiteService: WebsiteService, private webSocketAPI: WebSocketAPI, private cdr: ChangeDetectorRef, private appRef: ApplicationRef, private zone: NgZone, private componentFactoryResolver: ComponentFactoryResolver, private sanitizer: DomSanitizer) {
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
      this.value = this.sanitizer.sanitize(SecurityContext.NONE, this.greeting.toString());
      // this.value = this.componentFactoryResolver.resolveComponentFactory<boolean>(this.greeting);
      // this.value = this.greeting;
    });

  //     this.greeting = isRunning;
  //     this.value = this.greeting;
  //   this.cdr.detectChanges();
  //     this.appRef.tick();
  //   this.zone.run(() => this.value = this.greeting);
  // }
}

  // this.websiteService.running.subscribe(
  //   (isRunning) => {
  //     this.greeting = isRunning;
  //     console.log(this.greeting + '345234234');
  //   },
  //   (error) => console.log('error', error),
  //   () => {
  //     // this.greeting += '-bar';
  //     console.log(this.greeting);
  //     this.testEmitter$.next(this.greeting);
  //   }
  // );

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
}
