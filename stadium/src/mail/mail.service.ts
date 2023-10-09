import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Admin } from 'src/admin/models/admin.model';
import { User } from 'src/users/models/user.model';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User): Promise<void> {
    const url = `${process.env.API_HOST}/api/users/activate/${user.activation_link}`;
    console.log(url);
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Stadium App! Confirm your Email!',
      template: './confirmation',
      context: {
        name: user.first_name,
        url,
      },
    });
  }

  async sendAdminConfirmation(admin: Admin): Promise<void> {
    const url = `${process.env.API_HOST}/api/admin/activate${admin.activation_link}`;
    console.log(url);
    await this.mailerService.sendMail({
      to: admin.email,
      subject: 'Welcome to Stadium App! Confirm your Email!',
      template: './confirmation',
      context: {
        name: admin.username,
        url,
      },
    });
  }
}
