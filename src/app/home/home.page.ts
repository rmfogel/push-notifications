import { Component } from '@angular/core';
import { MessagingService } from 'src/shared/services/messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
message
  constructor(private messagingService: MessagingService
) {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
}

}
