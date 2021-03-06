const db = require("../models");
const sgMail = require('@sendgrid/mail');

module.exports = {
  send: function (req, res) {

    const htmlOut = `
        <!doctype html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
            <title>
              
            </title>
            <!--[if !mso]><!-- -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
              #outlook a { padding:0; }
              .ReadMsgBody { width:100%; }
              .ExternalClass { width:100%; }
              .ExternalClass * { line-height:100%; }
              body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
              table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
              img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
              p { display:block;margin:13px 0; }
            </style>
            <!--[if !mso]><!-->
            <style type="text/css">
              @media only screen and (max-width:480px) {
                @-ms-viewport { width:320px; }
                @viewport { width:320px; }
              }
            </style>
            <!--<![endif]-->
            <!--[if mso]>
            <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <!--[if lte mso 11]>
            <style type="text/css">
              .outlook-group-fix { width:100% !important; }
            </style>
            <![endif]-->
            
            
        <style type="text/css">
          @media only screen and (min-width:480px) {
            .mj-column-per-100 { width:100% !important; max-width: 100%; }
    .mj-column-per-50 { width:50% !important; max-width: 50%; }
          }
        </style>
        
      
            <style type="text/css">
            
            
            </style>
            
          </head>
          <body style="background-color:${req.body.business.colorTwo};">
            
            
          <div
             style="background-color:${req.body.business.colorTwo};"
          >
            
          
          <!--[if mso | IE]>
          <table
             align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
          >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]-->
        
          
          <div  style="background:${req.body.business.colorTwo};background-color:${req.body.business.colorTwo};Margin:0px auto;max-width:600px;">
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:${req.body.business.colorTwo};background-color:${req.body.business.colorTwo};width:100%;"
            >
              <tbody>
                <tr>
                  <td
                     style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"
                  >
                    <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    
            <tr>
          
            </tr>
          
                      </table>
                    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        
          
          <!--[if mso | IE]>
              </td>
            </tr>
          </table>
          
          <table
             align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
          >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]-->
        
          
          <div  style="background:${req.body.business.colorOne};background-color:${req.body.business.colorOne};Margin:0px auto;max-width:600px;">
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:${req.body.business.colorOne};background-color:${req.body.business.colorOne};width:100%;"
            >
              <tbody>
                <tr>
                  <td
                     style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"
                  >
                    <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    
            <tr>
          
                <td
                   class="" style="vertical-align:top;width:600px;"
                >
              <![endif]-->
                
          <div
             class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
          >
            
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
          >
            
                <tr>
                  <td
                     align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >
                    
          <div
             style="font-family:Verdana;font-size:32px;line-height:1;text-align:center;color:#000000;"
          >
            ${req.body.business.businessName}
          </div>
        
                  </td>
                </tr>
              
                <tr>
                  <td
                     style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >
                    
          <p
             style="border-top:solid 2px ${req.body.business.colorTwo};font-size:1;margin:0px auto;width:100%;"
          >
          </p>
          
          <!--[if mso | IE]>
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px ${req.body.business.colorTwo};font-size:1;margin:0px auto;width:550px;" role="presentation" width="550px"
            >
              <tr>
                <td style="height:0;line-height:0;">
                  &nbsp;
                </td>
              </tr>
            </table>
          <![endif]-->
        
        
                  </td>
                </tr>
              
                <tr>
                  <td
                     align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >
                    
          <div
             style="font-family:Verdana;font-size:32px;line-height:1;text-align:center;color:#000000;"
          >
            ${req.body.giftTitle}
          </div>
        
                  </td>
                </tr>
              
                <tr>
                  <td
                     align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >
                    
          <div
             style="font-family:Verdana;font-size:15px;line-height:1;text-align:center;color:#000000;"
          >
            ${req.body.giftMessage}
          </div>
        
                  </td>
                </tr>
              
          </table>
        
          </div>
        
              <!--[if mso | IE]>
                </td>
              
            </tr>
          
                      </table>
                    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        
          
          <!--[if mso | IE]>
              </td>
            </tr>
          </table>
          
          <table
             align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
          >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]-->
        
          
          <div  style="background:${req.body.business.colorOne};background-color:${req.body.business.colorOne};Margin:0px auto;max-width:600px;">
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:${req.body.business.colorOne};background-color:${req.body.business.colorOne};width:100%;"
            >
              <tbody>
                <tr>
                  <td
                     style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"
                  >
                    <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    
            <tr>
          
                <td
                   class="" style="vertical-align:top;width:300px;"
                >
              <![endif]-->
                
          <div
             class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
          >
            
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
          >
            
                <tr>
                  <td
                     align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >
                    
          <div
             style="font-family:Verdana;font-size:15px;line-height:1;text-align:left;color:#000000;"
          >
            To: ${req.body.giftTo}
          </div>
        
                  </td>
                </tr>
              
          </table>
        
          </div>
        
              <!--[if mso | IE]>
                </td>
              
                <td
                   class="" style="vertical-align:top;width:300px;"
                >
              <![endif]-->
                
          <div
             class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
          >
            
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
          >
            
                <tr>
                  <td
                     align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >
                    
          <div
             style="font-family:Verdana;font-size:15px;line-height:1;text-align:left;color:#000000;"
          >
            From: ${req.body.giftFrom}
          </div>
        
                  </td>
                </tr>
              
          </table>
        
          </div>
        
              <!--[if mso | IE]>
                </td>
              
            </tr>
          
                      </table>
                    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        
          
          <!--[if mso | IE]>
              </td>
            </tr>
          </table>
          
          <table
             align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
          >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]-->
        
          
          <div  style="background:${req.body.business.colorOne};background-color:${req.body.business.colorOne};Margin:0px auto;max-width:600px;">
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:${req.body.business.colorOne};background-color:${req.body.business.colorOne};width:100%;"
            >
              <tbody>
                <tr>
                  <td
                     style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"
                  >
                    <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    
            <tr>
          
                <td
                   class="" style="vertical-align:top;width:600px;"
                >
              <![endif]-->
                
          <div
             class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
          >
            
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
          >
            
                <tr>
                  <td
                     align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                  >
                    
          <div
             style="font-family:Verdana;font-size:32px;line-height:1;text-align:center;color:#000000;"
          >
            ${req.body.gift}
          </div>
        
                  </td>
                </tr>
              
          </table>
        
          </div>
        
              <!--[if mso | IE]>
                </td>
              
            </tr>
          
                      </table>
                    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        
          
          <!--[if mso | IE]>
              </td>
            </tr>
          </table>
          
          <table
             align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
          >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          
            <v:rect  style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
            <v:fill  origin="0.5, 0" position="0.5, 0" src="https://i.imgur.com/oDwzfuj.jpg" color="${req.body.business.colorOne}" type="tile" />
            <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
          <![endif]-->
              
          <div  style="background:${req.body.business.colorOne} url(https://i.imgur.com/oDwzfuj.jpg) top center / auto repeat;Margin:0px auto;max-width:600px;">
            <div  style="line-height:0;font-size:0;">
            <table
               align="center" background="https://i.imgur.com/oDwzfuj.jpg" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:${req.body.business.colorOne} url(https://i.imgur.com/oDwzfuj.jpg) top center / auto repeat;width:100%;"
            >
              <tbody>
                <tr>
                  <td
                     style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"
                  >
                    <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    
            <tr>
          
                <td
                   class="" style="vertical-align:top;width:600px;"
                >
              <![endif]-->
                
          <div
             class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
          >
            
          <table
             border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
          >
            
                <tr>
                  <td
                     align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;padding-top:60px;padding-bottom:60px;word-break:break-word;"
                  >
                    
          <table
             align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"
          >
            <tr>
              <td
                 align="center" bgcolor=${req.body.business.colorThree} role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:10px 25px;" valign="middle"
              >
                <p
                   style="background:${req.body.business.colorThree};color:#ffffff;font-family:Verdana;font-size:13px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;"
                >
                  Your Code Is: ${req.body.code}
                </p>
              </td>
            </tr>
          </table>
        
                  </td>
                </tr>
              
          </table>
        
          </div>
        
              <!--[if mso | IE]>
                </td>
              
            </tr>
          
                      </table>
                    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        
            <!--[if mso | IE]>
            </v:textbox>
          </v:rect>
        
              </td>
            </tr>
          </table>
          
          <table
             align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
          >
            <tr>
              <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
          <![endif]-->
        
          
          <div  style="background:${req.body.business.colorTwo};background-color:${req.body.business.colorTwo};Margin:0px auto;max-width:600px;">
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:${req.body.business.colorTwo};background-color:${req.body.business.colorTwo};width:100%;"
            >
              <tbody>
                <tr>
                  <td
                     style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"
                  >
                    <!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    
            <tr>
          
            </tr>
          
                      </table>
                    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        
          
          <!--[if mso | IE]>
              </td>
            </tr>
          </table>
          <![endif]-->
        
        
          </div>
        
          </body>
        </html>
      `

    sgMail.setApiKey("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");
    const msg = {
      to: req.body.recipientEmail,
      from: {
        email: 'gift@ugift.online.com',
        name: req.body.business.businessName
      },
      subject: `Someone just gave you a gift for: ${req.body.business.businessName}`,
      text: 'Your Gift Has Arrived!',
      html: htmlOut,
    };
    sgMail.send(msg), console.log("sent");

    db.Gift
    .create({
      dollar: req.body.gift,
      recipientEmail: req.body.recipientEmail,
      recipientName: req.body.recipientName,
      giftTitle: req.body.giftTitle,
      giftMessage: req.body.giftMessage,
      giftTo: req.body.giftTo,
      giftFrom: req.body.giftFrom,
      business: req.body.business._id
    })
    .then(dbModel => res.json(dbModel)
    ).catch(err => res.status(422).json(err))

    console.log(req.body);

  }

}