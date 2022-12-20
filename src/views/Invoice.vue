<template>
<div>
    <button onclick="window.history.back()" id="printPageButtons" class="btn btn-primary pull-left " style="margin-right:20px;">Back</button>
    <button onclick="window.print()" id="printPageButton" class="btn btn-primary pull-right ">Save PDF</button>
    <button class="btn btn-primary pull-right" id="printPageButtonp" onclick="window.print()">Print</button>
    <div style="" class="container w-receipt receipt-border my-5 px-5 py-5" id="invoiceContent" ref="invoiceContent">
        <div class="row align-items-center">
            <div class="col-4 ">
                <!-- <h2>{{LinksDetails.Site_Name}}</h2> -->
                <img :src="$root.URL_ROOT+'uploads/Content/'+site_logo.image" width="150" />
            </div>
            <div class="invoice-details col-4 offset-4  text-right">
                <h6>Invoice No. # {{orderDetailData.oid}} </h6>
                <!-- <p> GST Number : {{LinksDetails.gst_number}}  </p> -->
                <h6>Issued at: {{orderDetailData.odate}} </h6>
            </div>
        </div>
        <div class="container  mt-50">
            <div class="row">
                <div class="col-4 pos-relative">
                    <span class="tofrom"> To </span>
                    <div class="leftmargin" v-if="orderDetailData.addrss">
                        <strong> {{orderDetailData.addrss.add_title}} </strong>
                        <p> {{orderDetailData.addrss.add1}} </p>
                        <p> {{orderDetailData.addrss.add2}} </p>
                        <p> {{orderDetailData.addrss.mobile_no}} </p>
                        <p> {{orderDetailData.addrss.email}} </p>
                        <p>{{orderDetailData.odate}} </p>
                    </div>
                </div>
                <div class="col-4 offset-4 pos-relative">
                    <span class="fromto"> From </span>
                    <div class="leftmargin">
                        <strong> {{LinksDetails.Site_Name}} </strong>
                        <h6> {{LinksDetails.mobile}} </h6>
                        <p v-html="LinksDetails.address"> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row table mt-5">
            <table class="invoice table table-hover">
                <thead class="thead">
                    <tr>
                        <th scope="col">NO.</th>
                        <th scope="col">Item</th>
                        <th scope="col">Name</th>
                        <th scope="col">Qty.</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order,key) in orderDetailData.order" :key="key">
                        <th scope="row"> {{key+1}} </th>
                        <td class="item">
                            <img :src="$root.URL_ROOT+'uploads/Product/'+order.front_image" width="50">
                        </td>
                        <td> {{order.name}} </td>
                        <td> {{order.qty}} </td>
                        <td> INR {{order.price / order.qty}} </td>
                        <td> INR {{order.price }} </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="row">
            <!-- invoiced to details -->
            <div class=" offset-2 col-4">
                <!-- <div class="to text-right">
                <h5 class="effect-color pt-4">Invoiced to:</h5>
                <h4 class="theme-color"><strong> {{orderDetailData.addrss.add_title}} </strong></h4>
                <h6>Address of issuer</h6>
                <p> {{orderDetailData.addrss.add1}} </p>
                <p> {{orderDetailData.addrss.add2}} </p>
                <p> {{orderDetailData.addrss.mobile_no}} </p>
                <p> {{orderDetailData.addrss.email}} </p>
                <h5>Due date: {{orderDetailData.odate}} </h5>
            </div> -->
            </div>
            <!-- Invoice assets and total -->
            <div class="col-6 pr-5">
                <table class="table table-borderless text-right">

                    <tbody>
                        <!-- <tr>
                            <th scope="row">Subtotal</th>
                            <td></td>
                            <td> INR {{subTotal}}
                                 {{orderDetailData.total - parseFloat((this.orderDetailData.total_gst / 100) * this.orderDetailData.total)}} -->
                        <!-- </td>
                        </tr> -->
                        <tr v-if="orderDetailData.shipping && orderDetailData.shipping>0">
                            <th scope="row" style="width: 30%;text-align:left;">Shipping</th>
                            <td> </td>
                            <td>INR {{shipping}} </td>
                        </tr>
                        <tr v-if="orderDetailData.coupon && orderDetailData.coupon>0">
                            <th scope="row" style="width: 30%;text-align:left;">Coupon</th>
                            <td> </td>
                            <td>- {{orderDetailData.coupon}}% </td>
                        </tr>
                         <tr >


                            <th scope="row" style="width: 30%;text-align:left;">Total</th>
                            <td>  </td>
                            <td> {{ (orderDetailData.total).toFixed(0) }} </td>
                        </tr>
                        <tr >
                            <th scope="row" style="width: 30%;text-align:left;">Taxable Amount</th>
                            <td> <span style="display:none;"> {{ ttotal = (orderDetailData.total).toFixed(0) }}
                                {{ totalWithoutGst = (ttotal / 105)*100}}
                                 </span> </td>
                            <td> {{ totalWithoutGst = (totalWithoutGst).toFixed(0) }} </td>
                        </tr>

                        <tr v-if="orderDetailData.addrss && orderDetailData.addrss.c_state=='karnataka'">
                            <th scope="row" style="width: 30%;text-align:left;">CGST</th>
                            <td> 2.5% </td>
                            <td> INR <!-- {{orderDetailData.total}} -->
                                 {{(parseFloat((2.5 / 100)*totalWithoutGst)).toFixed(2) }} 
                                 <!-- {{ parseFloat((5 / orderDetailData.total)*100)}} -->
                                  </td>
                        </tr>
                        <tr v-if="orderDetailData.addrss && orderDetailData.addrss.c_state=='karnataka'">
                            <th scope="row" style="width: 30%;text-align:left;">SGST</th>
                            <td> 2.5% </td>
                            <td>INR {{(parseFloat((2.5 / 100)*totalWithoutGst)).toFixed(2) }}  </td>
                        </tr>
                        <tr v-else>
                            <th scope="row" style="width: 30%;text-align:left;">IGST</th>
                            <th > 5% </th>
                            <td>INR {{parseFloat((5 / 100)*totalWithoutGst)}} </td>
                        </tr>
                        <tr class="last-row">
                            <th scope="row" style="width: 30%;text-align:left;">
                                <h4>Total</h4>
                            </th>
                            <td></td>
                            <td>
                                <h4>INR {{(orderDetailData.total).toFixed(0)}}</h4>
                                <span style="    font-weight: bold;color: #11da5c;text-align: right;margin-left: auto;" class="text-right"><strong>Note: </strong> Inclusive of GST</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <p class="text-center mt-3"><em>* Thank You for Shopping with us</em></p>
    </div>
    <div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import jsPDF from 'jspdf'
import html2pdf from "html2pdf"
import $ from "jquery"
import html2canvas from "html2canvas"

export default {
    components: {},
    data() {
        return {
            LinksDetails: [],
            site_logo: [],
            orderDetailData: [],
            shipping: 0,
            min: 0,
            subTotal: 0
        };
    },
    mounted() {
        this.site_setting()
        this.site_logos()
        this.myInvoice()
        this.shippingCharge()
        // var doc = new jsPDF();
        // $('#printMe').click(function () {
        //     doc.fromHTML($('#invoiceContent').html(), 15, 15, {
        //         // 'width': 170,
        //         // 'elementHandlers': specialElementHandlers
        //     });
        //     doc.save('pdf-version.pdf');
        // });
    },
    methods: {
        // downloadsss() {
        //     // Default export is a4 paper, portrait, using millimeters for units
        //     const doc = new jsPDF();
        //     const contentHtml = this.$refs.invoiceContents.innerHTML;
        //     //    console.log(contentHtml);
        //     doc.HTML(contentHtml, 15, 15, {
        //         // width: 170
        //     });
        //     // console.log(doc);
        //     doc.save("invoice.pdf");
        // },
        // download() {
        //     var doc = new jsPDF();
        //     var specialElementHandlers = {
        //         '#editor': function (element, renderer) {
        //             return true;
        //         }
        //     };

        //     doc.fromHTML($('#invoiceContents').html(), 15, 15, {
        //         'width': 170,
        //         'elementHandlers': specialElementHandlers
        //     });
        //     doc.save('sample-file.pdf');
        // },
        myInvoice() {
            var ev = this;
            axios({
                method: 'POST',
                url: this.$root.URL_ROOT + 'api.php',
                data: {
                    type: 'myinvoice',
                    oid: ev.$route.params.id
                }
            }).then(function (response) {
                var data = response.data.data
                ev.orderDetailData = data
                $.each(data.order, function (i, getsubtotal) {
                    ev.subTotal += getsubtotal.price
                    // console.log(getsubtotal);
                });
            })
        },
        showMe() {
            console.log('invoiceData', this.invoiceData)
        }
    },
};
</script>

<style scoped>
.w-receipt {
    /* width:80%; */
}

@media print {
    #printPageButton {
        display: none;
    }

    #printPageButtonp {
        display: none;
    }

    #printPageButtons {
        display: none;

    }
}

tbody,
td,
tfoot,
th,
thead,
tr {
    border: 1px solid #f1f1f1;
}

.mt-50 {
    margin-top: 50px;
}

.leftmargin {
    margin-left: 30px;
}

.tofrom {
    position: absolute;
    left: 0px;
    font-weight: bold;
}

.fromto {
    position: absolute;
    left: -20px;
    font-weight: bold;
}

/*
Colors
rgb(249, 99, 50); orange flame
rgb(255, 77, 77); red
rgb(198, 89, 99); red'ish
*/
.color-white {
    color: #fff;
}

.color-grey {
    color: #f1f1f1;
}

@media print {
    .page {
        margin: 0;
        border: initial;
        border-radius: initial;
        width: initial;
        min-height: initial;
        box-shadow: initial;
        background: initial;
        page-break-after: always;
    }
}

body {
    font-family: 'roboto';
    background: #eee;
    -webkit-print-color-adjust: exact !important;
}

.receipt-border {
    border: 1px solid #f1f1f1;
}

div.container {
    /* border-radius: 15px; */
    background: white;
    /* box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); */
}

div.invoice-letter {
    width: auto;
    position: relative;
    min-height: 150px;
    background-color: #04617B;
    margin-right: -48px;
    margin-left: -48px;
    box-shadow: 0 4px 3px rgba(0, 0, 0, 0.4);
}

div.letter-title {
    margin-top: 10px;
    height: 130px;
    border-right: 2px solid #eee;
}

div.letter-content {
    margin-top: 10px;
}

table.invoice thead th {
    /* background-color: rgba(4, 97, 123, 0.2); */
    border-top: none;
}

table.invoice thead tr:first-child th:first-child {
    border-top-left-radius: 25px;
}

table.invoice thead tr:first-child th:last-child {
    border-top-right-radius: 25px;
}

tr.last-row {
    background-color: rgba(4, 97, 123, 0.2);

}

tr.last-row th {
    border-bottom-left-radius: 0px;
    width: 30px;
}

tr.last-row td {
    border-bottom-right-radius: 0px;
}

div.row div.to {
    height: 260px;
    padding-right: 25px;
    border-right: 2px solid rgba(4, 97, 123, 0.2);
}

.pos-relative {
    position: relative;
}
</style>
