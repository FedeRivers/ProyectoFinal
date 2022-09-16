﻿using QRCoder;
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
            Estimaciones estimaciones = new Estimaciones();
            estimaciones.EstimarHumedad(15);

            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode("The text which should be encoded.", QRCodeGenerator.ECCLevel.Q);
            Base64QRCode qrCode = new Base64QRCode(qrCodeData);
            string qrCodeImageBase64 = "data:image/png;base64," + qrCode.GetGraphic(5);
        }
    }
}