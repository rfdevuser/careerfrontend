import emailjs from 'emailjs-com';



const USER_ID = 'user_QBs08JbvqdXivIagZeWFH';
const SERVICE_ID = 'service_7r8sia9';
const TEMPLATE_ID = 'template_bt4jm5e';
interface EmailData {
  to_email: string;
  to_name: String;
  to_jobid: String;
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}

export async function sendEmail(formData: EmailData): Promise<void> {
    try {
        const templateParams: Record<string, unknown> = {
          to_email: formData.to_email,
          to_name: formData.to_name,
          to_jobid: formData.to_jobid,
          from_name: formData.from_name,
          reply_to: formData.reply_to,
          subject: formData.subject,
          message: formData.message,
        };
    
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    // throw new Error('Failed to send email. Please try again later.');
  }
}
