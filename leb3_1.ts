interface NotificationService {
    getServiceName(): string;
    send(message: string): void;
}
class EmailNotificationService implements NotificationService {
    private serviceName: string = 'การแจ้งเตือนทางอีเมล';
    private recipientEmail: string;
    constructor(recipientEmail: string) {
        this.recipientEmail = recipientEmail;
    }
    public getServiceName(): string {
        return this.serviceName;
    }
    public send(message: string): void {
        console.log('ส่ง email ให้กับ ' + this.recipientEmail + ' : ' + message);
    }
}
const emailService = new EmailNotificationService('684245044@webmail.npru.ac.th');
emailService.send('สวัสดี นาย ภาณุวัฒน์');