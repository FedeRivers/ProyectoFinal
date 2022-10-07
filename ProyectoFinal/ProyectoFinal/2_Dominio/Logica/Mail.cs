using QRCoder;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Drawing;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web.Configuration;

namespace ProyectoFinal._2_Dominio.Logica
{
    public class Mail
    {
        public void Enviar(string email, string usuario, string contrasena)
        {
            var apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY", EnvironmentVariableTarget.Machine);
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress(WebConfigurationManager.AppSettings["Email"], WebConfigurationManager.AppSettings["Usuario"]);
            var subject = WebConfigurationManager.AppSettings["Asunto"];
            var to = new EmailAddress(email, usuario);
            var plainTextContent = contrasena;
            var htmlContent = "<strong>" + contrasena + "</strong>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = client.SendEmailAsync(msg);

           
        }
    }
}