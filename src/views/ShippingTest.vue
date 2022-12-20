<template>
<div class="container" style="margin: 50px">
    <div class="row">
        <div class="col-3">
            <button class="theme-btn" type="button" @click="apiTest1">Testing 1</button>
        </div>
        <div class="col-3">
            <button class="theme-btn" type="button" @click="apiTest2">Testing 2</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import FormData, {
    getHeaders
} from 'form-data';
import $ from "jquery";
export default {
    components: {},
    data() {
        return {};
    },
    mounted() {},
    methods: {
        apiTest1() {
            var form = new FormData();
            form.append("username", "BHRAMARINUTRITIONSPRIVATELIMITED205780");
            form.append("password", "IONSPRIVATELIMITED205780");
            var settings = {
            "url": "https://api.ecomexpress.in/apiv2/pincodes/",
            "method": "POST",
            "timeout": 0,
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
            };
            $.ajax(settings).done(function (response) {
            console.log(response);
            });
        },
        apiTest2() {
            var form = new FormData();
            form.append("username", "BHRAMARINUTRITIONSPRIVATELIMITED205780");
            form.append("password", "IONSPRIVATELIMITED205780");
            form.append('json_input', '[\n{\n"AWB_NUMBER": "2813607209",\n"ORDER_NUMBER": "1213152-01",\n"PRODUCT": "ppd",\n"CONSIGNEE": "Test API User",\n"CONSIGNEE_ADDRESS1": "H. No. A10",\n"CONSIGNEE_ADDRESS2": "Block-T",\n"CONSIGNEE_ADDRESS3": "Sector 39 Test",\n"DESTINATION_CITY": "GURGAON",\n"PINCODE": "122002",\n"STATE": "DL",\n"MOBILE": "1111111111",\n"TELEPHONE": "0123456789",\n"ITEM_DESCRIPTION": "Kids Bicycle",\n"PIECES": 1,\n"COLLECTABLE_VALUE": 0,\n"DECLARED_VALUE": 1000.0,\n"ACTUAL_WEIGHT": 0.5,\n"VOLUMETRIC_WEIGHT": 0,\n"LENGTH": 12,\n"BREADTH": 5,\n"HEIGHT": 2,\n"PICKUP_NAME": "Pickup Name 1",\n"PICKUP_ADDRESS_LINE1": "Pickup Addr 1 Changed",\n"PICKUP_ADDRESS_LINE2": "Pickup Addr 2 Changed",\n"PICKUP_PINCODE": "122001",\n"PICKUP_PHONE": "0123456789",\n"PICKUP_MOBILE": "1234567891",\n"RETURN_NAME": "Test Return Name 1",\n"RETURN_ADDRESS_LINE1": "Test Return Addr 1 Changed",\n"RETURN_ADDRESS_LINE2": "Test Return Addr 2 Changed",\n"RETURN_PINCODE": "122102",\n"RETURN_PHONE": "1111111111",\n"RETURN_MOBILE": "0123456789",\n"ADDONSERVICE": [""],\n"DG_SHIPMENT": "false",\n"ADDITIONAL_INFORMATION": {\n"DELIVERY_TYPE": "",\n"SELLER_TIN": "SELLER_TIN_1234",\n"INVOICE_NUMBER": "INVOICE_1234",\n"INVOICE_DATE": "09-06-2018",\n"ESUGAM_NUMBER": "eSUGAM_1234",\n"ITEM_CATEGORY": "ELECTRONICS",\n"PACKING_TYPE": "Box",\n"PICKUP_TYPE": "WH",\n"RETURN_TYPE": "WH",\n"CONSIGNEE_ADDRESS_TYPE": "WH",\n"PICKUP_LOCATION_CODE": "PICKUP_ADDR_002",\n"SELLER_GSTIN": "GISTN988787",\n"GST_HSN": "123456",\n"GST_ERN": "123456789123",\n"GST_TAX_NAME": "DELHI GST",\n"GST_TAX_BASE": 900.0,\n"DISCOUNT": 0.0,\n"GST_TAX_RATE_CGSTN": 5.0,\n"GST_TAX_RATE_SGSTN": 5.0,\n"GST_TAX_RATE_IGSTN": 0.0,\n"GST_TAX_TOTAL": 100.0,\n"GST_TAX_CGSTN": 50.0,\n"GST_TAX_SGSTN": 50.0,\n"GST_TAX_IGSTN": 0.0 }}]');
            var settings = {
                "url": "http://api.ecomexpress.in/apiv2/manifest_awb/",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "accept": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Request-Headers': 'x-requested-with',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                "processData": false,
                "mimeType": "multipart/form-data",
                "contentType": false,
                "data": form
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        },
        apiTest3() {}
    },
};
</script>
