using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Mail;
using System.Configuration;
using System.Web.Configuration;
using System.Net.Configuration;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Net.Security;
using System.Threading.Tasks;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class Mail
    {
        public async Task EnviarMail(string destinatario, string asunto, string mensaje)
        {
            var Mensaje = new MailMessage();
            Mensaje.To.Add(new MailAddress(destinatario));
            Mensaje.From = new MailAddress(WebConfigurationManager.AppSettings["Email"]);
            Mensaje.Subject = asunto;
            Mensaje.Body = mensaje;
            Mensaje.IsBodyHtml = true;

            using (var smtp = new SmtpClient())
            {
                var credencial = new NetworkCredential
                {
                    UserName = WebConfigurationManager.AppSettings["Email"],
                    Password = WebConfigurationManager.AppSettings["Contrasena"],
                };

                smtp.Credentials = credencial;
                smtp.Host = WebConfigurationManager.AppSettings["SMTPName"];
                smtp.Port = int.Parse(WebConfigurationManager.AppSettings["SMTPPort"]);
                smtp.EnableSsl = true;
                await smtp.SendMailAsync(Mensaje);

            }
        }
    }
}