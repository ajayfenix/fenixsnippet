// FIRST GET YOUR tenantId and delEstUrl from FENIX TEAM
// Which would remain to constant 

let sessionId = Math.random().toString(36).substr(2, 25); // Unique request 
let zipcode = getCookie('location') || 90001; // pass default zipcode

const tenantId = "FENIX_PROVIDED_TENANT_ID"; // tenantID
const apiurl = "FENIX_PROVIDED_API_ENDPOINT_URL"; // API ENDPOINT URL


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function validateZipCode(e) {
    return /^\d{5}(-\d{4})?$/.test(e)
}



function opencloseshowall() {
    $(".allestimates").toggle();
}

function getShippingPopoverTemplate(shippingRows) {
    let popoverTemplate = `<div class="fenix-provided-options">
    <div class="fenix-showalltitle">
    Shipping Options <a href="javascript:void(0)" class="closeshipping" onclick="opencloseshowall()"></a> 
    </div>
            <div class="fenix-logo" style="display: block !important;">Powered by <svg viewBox="0 0 222 48" xmlns="http://www.w3.org/2000/svg" style="width:100px">
<path d="m38.961 33.26h2.5213v-8.4419h6.0623v-2.153h-6.0623v-5.9206h6.2039l0.7366-2.153h-9.4618v18.668z" fill="#9D9D9D"></path>
<path d="m61.823 27.113v-0.6232c0-4.2776-2.0113-6.9688-5.524-6.9688-3.4278 0-5.6657 2.8612-5.6657 6.9405 0 3.8243 2.0396 7.0821 6.4872 7.0821 1.5297 0 3.1445-0.4249 4.3909-1.2181l-0.7648-1.7281c-0.9349 0.5099-2.0397 0.9065-3.3428 0.9065-2.6346 0-4.1926-1.8696-4.221-4.3909h8.6402zm-8.6402-1.8697c0.0284-2.0396 1.1898-3.7393 3.1162-3.7393 2.0113 0 2.9178 1.8696 2.9461 3.7393h-6.0623z" fill="#9D9D9D"></path>
<path d="m64.674 33.26h2.4929v-9.7167c1.1898-1.0198 2.4929-1.813 3.8527-1.813 1.8413 0 2.2946 1.4731 2.2946 3.3711v8.1586h2.4929v-8.9801c0-3.5128-1.9547-4.7592-4.0793-4.7592-1.6997 0-3.2011 0.7932-4.6459 1.983l-0.3116-1.6431h-2.0963v13.399z" fill="#9D9D9D"></path>
<path d="m79.508 33.26h2.4929v-13.399h-2.4929v13.399zm1.2465-16.147c0.9348 0 1.643-0.7082 1.643-1.6147s-0.6799-1.5864-1.643-1.5864c-0.9349 0-1.5864 0.7082-1.5864 1.5864 0 0.9065 0.6515 1.6147 1.5864 1.6147z" fill="#9D9D9D"></path>
<path d="m84.253 33.26h2.7195l3.5411-5.0141 3.5127 5.0141h2.6912l-4.7592-6.7705 4.7876-6.6289h-2.6629l-3.4844 4.9292-3.3995-4.9292h-2.7478l4.7025 6.6855-4.9008 6.7139z" fill="#9D9D9D"></path>
<path d="m112.51 30.172c-1.303 0.7082-2.72 1.2181-4.476 1.2181-4.108 0-6.686-3.0028-6.686-7.3654 0-4.0793 2.607-7.4504 6.856-7.4504 1.87 0 3.314 0.4816 4.646 1.1898v-2.3513c-0.992-0.5382-2.691-0.9915-4.703-0.9915-5.665 0-9.4615 4.3059-9.4615 9.7167 0 5.4674 3.3425 9.4051 9.0655 9.4051 1.756 0 3.597-0.3683 5.467-1.3598l-0.708-2.0113z" fill="#D0D0D0"></path>
<path d="m121.32 33.543c3.852 0 6.373-3.0595 6.373-6.9972 0-3.966-2.549-7.0255-6.345-7.0255-3.853 0-6.374 3.0595-6.374 7.0255 0 3.9377 2.521 6.9972 6.346 6.9972zm0-2.068c-2.352 0-3.768-2.068-3.768-4.9292 0-2.8895 1.416-4.9575 3.796-4.9575 2.351 0 3.768 2.068 3.768 4.9575 0 2.8612-1.417 4.9292-3.796 4.9292z" fill="#D0D0D0"></path>
<path d="m130.54 33.26h2.493v-9.745c1.162-0.9915 2.465-1.7847 3.796-1.7847 1.842 0 2.238 1.4447 2.238 3.3144v8.2153h2.493v-9.0368c0-0.2266-0.028-0.4816-0.028-0.7082 1.161-0.9915 2.464-1.7847 3.796-1.7847 1.841 0 2.238 1.4447 2.238 3.2861v8.2436h2.493v-8.9802c0-3.3994-1.898-4.7592-4.108-4.7592-1.643 0-3.343 0.8216-4.929 2.238-0.652-1.5014-1.926-2.238-3.484-2.238-1.7 0-3.23 0.8499-4.618 1.983l-0.283-1.643h-2.097v13.399z" fill="#D0D0D0"></path>
<path d="m153.52 33.26h2.493v-9.745c1.161-0.9915 2.464-1.7847 3.796-1.7847 1.841 0 2.238 1.4447 2.238 3.3144v8.2153h2.492v-9.0368c0-0.2266-0.028-0.4816-0.028-0.7082 1.162-0.9915 2.465-1.7847 3.796-1.7847 1.842 0 2.238 1.4447 2.238 3.2861v8.2436h2.493v-8.9802c0-3.3994-1.898-4.7592-4.108-4.7592-1.643 0-3.342 0.8216-4.929 2.238-0.651-1.5014-1.926-2.238-3.484-2.238-1.7 0-3.23 0.8499-4.618 1.983l-0.283-1.643h-2.096v13.399z" fill="#D0D0D0"></path>
<path d="m187.05 27.113v-0.6232c0-4.2776-2.011-6.9689-5.524-6.9689-3.428 0-5.666 2.8612-5.666 6.9405 0 3.8244 2.04 7.0822 6.488 7.0822 1.529 0 3.144-0.425 4.391-1.2182l-0.765-1.728c-0.935 0.5099-2.04 0.9065-3.343 0.9065-2.635 0-4.193-1.8697-4.221-4.3909h8.64zm-8.64-1.8697c0.028-2.0396 1.19-3.7394 3.116-3.7394 2.011 0 2.918 1.8697 2.946 3.7394h-6.062z" fill="#D0D0D0"></path>
<path d="m189.9 33.26h2.492v-9.745c1.247-1.2182 2.125-1.7281 3.06-1.7281 0.453 0 0.878 0.1133 1.303 0.34l0.878-2.2097c-0.396-0.2549-1.02-0.3966-1.586-0.3966-1.247 0-2.351 0.4816-3.768 1.983l-0.283-1.643h-2.096v13.399z" fill="#D0D0D0"></path>
<path d="m204.78 33.543c1.7 0 3.286-0.5666 4.278-1.2465l-0.737-1.7564c-0.878 0.4816-1.841 0.9349-3.201 0.9349-2.578 0-4.249-1.7847-4.249-4.9292 0-2.8328 1.671-4.9575 4.419-4.9575 1.303 0 2.323 0.3683 3.229 0.9632v-2.1813c-0.793-0.4533-1.983-0.8499-3.427-0.8499-4.08 0-6.799 3.1728-6.799 7.1672 0 3.796 2.294 6.8555 6.487 6.8555z" fill="#D0D0D0"></path>
<path d="m221.74 27.113v-0.6232c0-4.2776-2.012-6.9689-5.525-6.9689-3.427 0-5.665 2.8612-5.665 6.9405 0 3.8244 2.039 7.0822 6.487 7.0822 1.53 0 3.144-0.425 4.391-1.2182l-0.765-1.728c-0.935 0.5099-2.04 0.9065-3.343 0.9065-2.634 0-4.192-1.8697-4.221-4.3909h8.641zm-8.641-1.8697c0.029-2.0396 1.19-3.7394 3.116-3.7394 2.012 0 2.918 1.8697 2.947 3.7394h-6.063z" fill="#D0D0D0"></path>
<path d="m40.876 37.4-0.0599-0.06c-0.8391-0.9589-2.2776-1.2586-3.2365-0.4195l-0.8991 0.5993-0.0599 0.2398-1.3186 1.1987-0.1798 0.1798c-3.2365 2.5173-7.2522 3.8359-11.568 3.8359-10.669 0-19.239-8.5708-19.239-19.239-0.05994-10.549 8.5707-19.179 19.239-19.179 4.1355 0 7.9114 1.4384 11.088 3.4763 0.06 0.05994 0.06 0.05994 0.1199 0.11987l2.3974 1.858c1.0189 0.7792 2.4574 0.5994 3.1766-0.41952l0.0599-0.05993c0.7792-1.0189 0.5994-2.4574-0.4195-3.1766l-1.0189-0.8391c-4.0756-3.4163-9.4099-5.5141-15.164-5.5141-13.126 0-23.794 10.668-23.794 23.854 0 13.126 10.668 23.734 23.794 23.734 6.3532 0 12.107-2.4574 16.362-6.533l0.4795-0.4195c0.959-0.7792 1.0788-2.2776 0.2397-3.2365z" fill="#D0D0D0"></path>
<path d="m32.783 25.952-14.924 9.9493c-1.3186 0.8391-3.0567 0.4795-3.9558-0.7792-0.8391-1.3186-0.4795-3.0567 0.7792-3.9557l14.924-9.9493c1.3186-0.8391 3.0567-0.4795 3.9558 0.7791 0.899 1.3186 0.5394 3.0568-0.7792 3.9558z" fill="#9D9D9D"></path>
<path d="m30.865 17.501-14.924 9.9493c-1.3186 0.8391-3.0567 0.4795-3.9557-0.7792-0.8391-1.3186-0.4795-3.0567 0.7791-3.9557l14.924-9.9493c1.3185-0.8391 3.0567-0.4795 3.9557 0.7792 0.899 1.3185 0.5394 3.1166-0.7792 3.9557z" fill="#9D9D9D"></path>
</svg></div>
            <table class="table table-striped">
            <thead>
            <tr class="firstrow">
            <th style="border-bottom:0px;font-weight:500">&nbsp; Options</th>
            <th class="" style="border-bottom:0px;font-weight:500">Estimated Time</th>
        </tr>
        </thead>
        <tbody>${shippingRows}</tbody>
        </table>
        </div>
        `;
    $(".allestimates").empty();
    $(".allestimates").html(popoverTemplate);
}



var requestData = {
    "sessionTrackId": sessionId,
    "buyerZipCode": zipcode,
    "monetaryValue": "41.99",
    "pageType": "PDP",
    "responseFormat": "json",
    "skus": [{
            "sku": "OCTW181M",
            "quantity": 1
        }
    ]
}


function getPDPEstimate(event) {
    if (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    zipcode = getCookie('location');
    $('#zipcode-holder').text(zipcode);
    ___fenixRecallApi(requestData);
}



function pincodechange() {
    zipcode = $('#fenix-zip').val();
    if (validateZipCode(zipcode)) {
        zipcode = setCookie('location', zipcode, 14);
    } else {
        // error handling here.
    }
    $('#zipcode-holder').text(zipcode);
    var requestData = {
        "sessionTrackId": sessionId,
        "buyerZipCode": getCookie('location'),
        "monetaryValue": "41.99",
        "pageType": "PDP",
        "responseFormat": "json",
        "skus": [{
                "sku": "OCTW181M",
                "quantity": 1
            }
        ]
    }
    ___fenixRecallApi(requestData);


}

function fenixChangeZip() {
    $('#change-zip-container').show();
}

// hide div initially
$('#fenix-pdp-estimate').hide();

$(document).ready(function() {
    if (zipcode) {
        getPDPEstimate(); // initiate Fenix 
    }
});


function ___fenixRecallApi(requestData) {
    $.ajax({
        url: apiurl,
        type: "POST",
        headers: {
            tenantId: tenantId,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(requestData),
        success: function(data) {
            let message = '';
            let chooseShippingMsg = '';
            let truckSvg = `<svg style="vertical-align: middle;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>`;
            if (data && data.length > 0 && data[data.length - 1].guaranteedDeliveryDate) {
                message = data[0].response;
                localStorage.setItem('fenix_zipcode', data[0].buyerZipCode);
            }
            chooseShippingMsg += `<strong>${data[data.length-1].buyerZipCode}</strong>`;
            let shippingRows = ``;
            if (data && data.length > 1) {
                for (let dIndx = 0; dIndx < data.length; dIndx++) {
                    let shippingOption = data[dIndx];
                    shippingRows += `<tr style="border-bottom:1px solid #ddd;font-size:12px"><td>${shippingOption.shippingMethodDesc}</td><td class="text-right">${shippingOption.guaranteedDeliveryDate}.</td></tr>`
                }
                getShippingPopoverTemplate(shippingRows);
            } else {
                $("#view-all-shipping").hide();
            }
            $('#estimate-text').html(message);
            $('#zipcode-holder').html(chooseShippingMsg);
            $('#fenix-zip').val(data[data.length - 1].buyerZipCode);
            $('#fenix-pdp-estimate').show();
            $('.estimate-help-text').hide();
            $('#change-zip-container').hide();
            $('#fenix-estimates').attr("style", "display: block !important;");
        },
        error: function(e) {
            console.log(e);
        }
    });
}
