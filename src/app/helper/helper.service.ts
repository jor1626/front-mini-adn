import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

constructor(private notifier: NotifierService) { }

  public showNotification( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }

}
