import InternetCustomer from '../../models/crmsystem/internetcustomer';
import { OpaqueToken, Inject, Injectable } from '@angular/core';

const NOTIFICATION_SERVICE_URL: OpaqueToken =
    new OpaqueToken('notificationServiceUrl');

const NOTIFICATION_EVENT: string = 'NewCustomerRecord';

@Injectable()
class NotificationService {
    private socketIO: any;
    private callbacks: any[] = [];

    constructor(
        @Inject(NOTIFICATION_SERVICE_URL)
        private notificationServiceUrl: string) {

        if (io) {
            this.socketIO = (<any>io);
        }

        this.initializeSocketConnection();
    }

    private initializeSocketConnection() {
        let socketClient = this.socketIO.connect(this.notificationServiceUrl);

        socketClient.on(NOTIFICATION_EVENT,
            (message: any) => {
                if (message) {
                    for (let callback of this.callbacks) {
                        callback(message);
                    }
                }
            });
    }

    registerCallback(callback: (message: InternetCustomer) => void) {
        if (callback) {
            this.callbacks.push(callback);
        }
    }
}

export default NotificationService;
