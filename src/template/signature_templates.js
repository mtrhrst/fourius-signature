// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export const get_template_A_str = (user_info, logo) => {
    return `
    <table style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 10pt;">
        <tr>
            <td style="padding: 0 15px 0 0">
                <img src="${logo}">
            </td>
            
            <td style="padding: 0 15px">
                <p>
                    <span style="font-weight: bold;">${user_info.name}</span><br/>
                    ${is_valid_data(user_info.job) ? user_info.job + "<br/>" : ""}
                    ${is_valid_data(user_info.phone) ? user_info.phone + "<br/>" : ""}
                    <a style="color:black; text-decoration:none;" href="mailto:${user_info.email}">${user_info.email}</a><br/>
                </p>
                <p>
                    Fourius Rechtsanwälte Kuhl Schuba Zipse PartG mbB<br/>
                    Thurn-und-Taxis-Platz 6 • 60313 Frankfurt<br/>
                    AG Frankfurt PR 0000<br/>
                    <a style="color:black; text-decoration:none;" href="">www.fourius.com</a><br/>
                </p>
            </td>
        </tr>
        
    </table>

    <div style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 10pt;">
        <p>Datenschutzhinweise unter <a style="color:black;" href="https://www.fourius.com/privacy">www.fourius.com/privacy</a></p>

        <div style="font-size: 9pt;">
            <p>
                Diese E-Mail und alle beigefügten Dateien sind vertraulich und nur für den Adressaten bestimmt. Wenn Sie nicht der richtige Adressat sind, leiten Sie diese E-Mail bitte nicht weiter, öffnen Sie etwaige Anhänge nicht, machen Sie keine Kopien und speichern Sie diese E-Mail nicht. Informieren Sie uns bitte, indem Sie uns eine Antwort-Mail senden oder uns telefonisch unter +49 69 25 73 75 - 207 verständigen. Löschen Sie bitte anschließend die erhaltene E-Mail aus Ihrem System. Vielen Dank!
            </p>

            <p>
                This email is only intended for the addressee. The content of this email, including all attachments is confidential and includes privileged material. If you are not the intended recipient, please do not forward or disclose this email, do not open any attachments or make copies or save this email anywhere. Please inform us about the error by returning this email or by calling us on our phone +49 69 25 73 75 - 207. Please then finally delete this email from your system. Thank you very much.
            </p>
        </div>
    </div>
    `;
}

export const get_template_B_str = (user_info, logo) => {
    return `
    <table style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 10pt;">
        <tr>
            <td style="padding: 0 15px 0 0">
                <img src="${logo}">
            </td>
            
            <td style="padding: 0 15px">
                <p>
                    <span style="font-weight: bold;">${user_info.name}</span><br/>
                    ${is_valid_data(user_info.job) ? user_info.job + "<br/>" : ""}
                    ${is_valid_data(user_info.phone) ? user_info.phone + "<br/>" : ""}
                    <a style="color:black; text-decoration:none;" href="mailto:${user_info.email}">${user_info.email}</a><br/>
                </p>
                <p>
                    Fourius Rechtsanwälte Kuhl Schuba Zipse PartG mbB<br/>
                    Thurn-und-Taxis-Platz 6 • 60313 Frankfurt<br/>
                    AG Frankfurt PR 0000<br/>
                    <a style="color:black; text-decoration:none;" href="">www.fourius.com</a><br/>
                </p>
            </td>
        </tr>
        
    </table>
    `;
}

export const get_template_C_str = (user_info, logo) => {
    return `
    <table style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 10pt;">
        <tr>
            <td style="padding: 0 15px 0 0">
                <img src="${logo}">
            </td>
            
            <td style="padding: 0 15px">
                <p>
                    <span style="font-weight: bold;">${user_info.name}</span><br/>
                    ${is_valid_data(user_info.job) ? user_info.job + "<br/>" : ""}
                    ${is_valid_data(user_info.phone) ? user_info.phone + "<br/>" : ""}
                    <a style="color:black; text-decoration:none;" href="mailto:${user_info.email}">${user_info.email}</a><br/>
                </p>
            </td>
        </tr>
        
    </table>
    `;
}