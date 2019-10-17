import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                 {
                    "account": "85225264",
                    "accountName": "Savings Account",
                    "mask": "0124",
                    "amount": 588.59,
                    "transactionType": "deposit",
                    "currencyCode": "PAB USD",
                    "currencyName": "Liberian Dollar",
                    "currencySymbol": "лв",
                    "iban": "NO2607790970023",
                    "bic": "YWGIGPX1"
                },
                {
                    "account": "67442173",
                    "accountName": "Checking Account",
                    "mask": "9572",
                    "amount": 890.66,
                    "transactionType": "withdrawal",
                    "currencyCode": "DKK",
                    "currencyName": "Codes specifically reserved for testing purposes",
                    "currencySymbol": "₫",
                    "iban": "PS828FY1714093005050080097054",
                    "bic": "JFEOIEQ1"
                }
            ],
            filterParams : [
                {'accountName': ['Savings Account']},
                {'transactionType': ['deposit']}
            ]
        }
     
    }
    
    filter(data, params) {
        return params.map(param => {
            return param
        })
    }
  
    render() {
        return (
        <div>data</div>
        )
    }
}

export default Home;