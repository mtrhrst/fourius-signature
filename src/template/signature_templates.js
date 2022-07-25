function get_template_A_str (user_info, logo) {
    return `
    <table style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 11pt;">
        <tr>
            <td style="padding: 0 15px 0 0">
                <img src="${logo}">
            </td>
            
            <td style="padding: 0 15px">
                <p style="margin: 0">
                    <span style="font-weight: bold;">${user_info.name}</span><br/>
                    ${is_valid_data(user_info.job) ? user_info.job + "<br/>" : ""}
                    ${is_valid_data(user_info.phone) ? user_info.phone + "<br/>" : ""}
                    <a style="color:black; text-decoration:none;" href="mailto:${user_info.email}">${user_info.email}</a><br/>
                </p>
                <p style="margin: 10px 0">
                    Fourius Partner Ehlenz Kuhl Schuba Zipse Rechtsanwälte mbB<br/>
                    Thurn-und-Taxis-Platz 6 • 60313 Frankfurt<br/>
                    AG Frankfurt PR 0000<br/>
                    <a style="color:black; text-decoration:none;" href="">www.fourius.com</a><br/>
                </p>
            </td>
        </tr>
        
    </table>

    <div style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 11pt;">
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

function get_template_B_str (user_info, logo) {
    return `
    <table style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 11pt;">
        <tr>
            <td style="padding: 0 15px 0 0">
                <img src="${logo}">
            </td>
            
            <td style="padding: 0 15px">
                <p style="margin: 0">
                    <span style="font-weight: bold;">${user_info.name}</span><br/>
                    ${is_valid_data(user_info.job) ? user_info.job + "<br/>" : ""}
                    ${is_valid_data(user_info.phone) ? user_info.phone + "<br/>" : ""}
                    <a style="color:black; text-decoration:none;" href="mailto:${user_info.email}">${user_info.email}</a><br/>
                </p>
                <p style="margin: 10px 0">
                    Fourius Partner Ehlenz Kuhl Schuba Zipse Rechtsanwälte mbB<br/>
                    Thurn-und-Taxis-Platz 6 • 60313 Frankfurt<br/>
                    AG Frankfurt PR 0000<br/>
                    <a style="color:black; text-decoration:none;" href="">www.fourius.com</a><br/>
                </p>
            </td>
        </tr>
        
    </table>
    `;
}

function get_template_C_str (user_info, logo) {
    return `
    <table style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 11pt;">
        <tr>
            <td style="padding: 0 15px 0 0">
                <img src="${logo}">
            </td>
            
            <td style="padding: 0 15px">
                <p style="margin: 0">
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

const logoFileName = "logo.png";
const logoBase64 = "iVBORw0KGgoAAAANSUhEUgAAAJsAAAAoCAYAAADpP4hXAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGOWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDYtMTdUMTQ6MjU6NTMrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA3LTIxVDE2OjAzOjQwKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA3LTIxVDE2OjAzOjQwKzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOGNjNTc1MC0wNDZmLTQxYzgtODVjMC0zNmI2YThkZjg0MDIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5Y2I0ZWY4MC05YzdkLTRiNDUtYmM2My1jZGYzYThjMDI2OGMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYWQ1ODkyOC00YzhmLTRmZjAtYmFiZC00M2FmYzRhYWMyNWMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVhZDU4OTI4LTRjOGYtNGZmMC1iYWJkLTQzYWZjNGFhYzI1YyIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0xN1QxNDoyNTo1MyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MThjYzU3NTAtMDQ2Zi00MWM4LTg1YzAtMzZiNmE4ZGY4NDAyIiBzdEV2dDp3aGVuPSIyMDIyLTA3LTIxVDE2OjAzOjQwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6lwxbDAAAE70lEQVR4nO2a35XiNhSHv01e8qh04HSgVBBvBetUEKWD2Q6cCiiBSQUkFTBbwdDBTN7yBqmAPNgs8kX/bCzwzOo7h3OwdXXvT9LPxgi+Zz4a4Afg3xlzFgoXGOAI7AF9VyWFd42hM9rpVQxXyELF0GjFcIWsGIrhChnR4thQDFfIgKEz0tpzfmmGU0BtvQpvBMPQSEs2nAa2Hi3tjbUURtLgNtISDVf39Vw6jsDqRjoKE1HAM8s3nCJstCPdt+jCAqms94rlG85Xd9vXljoLC8HQLZSxzimWbbhVpJbKVLdwBYbhohmrTbFcw8kvBZsMNQoz0uA2iLFiFMs0nDRbO3P+wswo/EYyiXH3Mlwx2xuhst4r3qbhitkWygfrvaEzx+/AY39O0S2edvRNjXvsY2UdyQH4COxCgj0YzhfKbwwvmifgizh+cuRQdI8Pv4j+O+BvTx+brTj+GIjVXO712fErhnP5udf3SZz/AvzFec6khs9Wm6GbmxN/cl4/F1KDL77iPG/KOr+z9A0wTLtzpcblvsPJu1no1Tr6PxDfm3uOaJPxIepIvBzPJqDL1iTbaqutJT4PIQ2ueJnTt6Zf+zaeIGMlVSzbcNeYbT2irxyvTU6zhS6AkIbaamtFWxvRGDPb2HlroFvYvSfAWMkVyzXcVLONnTDXIp64h9lMRIOtsxVtbURjyGwu/aHXxk6seduGM3ST0QIvIs/Wams5L0Ad0Nf07caR79ifk9zCbNteU92PRUU01FZbK9raiMaQ2eRFuu91nfRUdI8mL32b1LlIwxnGE5qkUFyonpxcV2xus8k5c3Ers8m2lSeHIvA7tGY5hjNMI8VsKkGPjJfzshExOc32QtrPbLcy28pRa8NwVyAJzf0NZ5hOitlqhxYdySsneC/ac5ot5a7m0lBbbS3xeQlpsOMrRy05NyfzfeU7R5Ed3Z7PwdG2thIc8O+Lrek+s2NxhuFEPgI/Ed7/ycUu0v6fOFZ5ZDj554a1Unil2zs9eNoV3XPvmu6urMFtNpjHcCvORgrFGYaGe/Voyk11p7owbSP71hzE8SPwM/EbQ0V3l6x8ZoN5DGdIN1wd0DI3B8e5WP1P4vgpkrMZkculZ25kDanBRnH5WLFzxL3S3eF+BH4F/sD/64wJy+vQXP8Mt47EJQlJJOWZDS63NEIP4YbLMa1EzEa0P3tyKS7n82HiGCShZzbtaG88eVpHrGSN/wJVuLegktDkM5zdfw5SF6p1aHzmcgIfHHFHLj92jSNmK+Jq3PMjc+UwmyvvnqHRFe55sdcOEdNyeZEqR61ks0EewzVjBCSSulAK94btaRFknpScvj4vgVqrK8YgiZmtnjDePcOLofHEbXudG9w+cY0ziPYkmmq4HIxZKE38B/gx+quR+Z5nGINNzGzg3iMLvYzo347sfzKsShzDAM31htNTCicydqE0fp1Trs7UfBv8C5DTbJD+bw3j6d+QflG9cOV660AxW6Ai75cBF1MXyuA2yZ7ww7CPB9wfnVvic5DbbNCt4drR5zTeKlJL4Z+zY3++xbqgPjAdTTcpytHm+2OlfT4XWmh6ZfzeXX1FX4nifGU/JfbRTBtDLY53pG2rnOql1gnlgPRxji6QeodrcggofFto0gxXKMyCxm+46m6qCu8WzaXhzB31FN45mrPhzF2VFL4JNOXLQMHB/1RxHRapZNJgAAAAAElFTkSuQmCC";

function get_template_A_info(user_info) {

    return {
      signature: get_template_A_str (user_info, "cid:"+logoFileName),
      logoBase64,
      logoFileName,
    };
}

function get_template_B_info(user_info) {

    return {
      signature: get_template_B_str (user_info, "cid:"+logoFileName),
      logoBase64,
      logoFileName,
    };
}

function get_template_C_info(user_info) {

    return {
      signature: get_template_C_str (user_info, "cid:"+logoFileName),
      logoBase64,
      logoFileName,
    };
}