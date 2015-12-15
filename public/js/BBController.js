//something
appBB.controller("BBController", BBController);


function BBController() {
    // var tb = document.getElementById('Apt2')
    // tb.addEventListener("click", function(event){
    //     console.log("pressed")
    // })

    console.log("here");
    //
    var self = this;

    self.test = {
        one: "yes",
        two: "no"
    };

    self.myObject = {objectOne:[{
        three: "why"},
        {four:"not"}]
    };

    self.apartments = { apartmentList:[{

            name: "Suite Nord",
            images_url: ["../../images/card_salone.jpg"],
            description: "This suite, approximately 45 m2 in size, consists of a living/dining area with fully-equipped kitchenette and a double bedroom with bath, furnished with antiques from the original inn.",
            amenities: ["2 rooms", "kitchenette", "Parking", "Air conditioning", "Laundry"],
            map: {},
            address: {
                street: "Via Carducci 25/C",
                Zip: "37129",
                City: "Verona",
                Country: "Italia",
                Tel: "0039 045 8034501",
                Cell: "0039 347 8545386",
                Email: 'info@residenzacarducci.com'
            }
        },

        {
            name: "Suite Sud",
            images_url: ["../../images/card_salone.jpg"],
            description: "This suite, approximately 45 m2 in size, consists of a living/dining area with fully-equipped kitchenette and a double bedroom with bath, furnished with antiques from the original inn.",
            amenities: ["2 rooms", "kitchenette", "Parking", "Air conditioning", "Laundry"],
            map: {},
            address: {
                street: "Via Carducci 25/C",
                Zip: "37129",
                City: "Verona",
                Country: "Italia",
                Tel: "0039 045 8034501",
                Cell: "0039 347 8545386",
                Email: 'info@residenzacarducci.com'
            }
        },

        {
            name: "VGDV",
            images_url: ["../../images/card_salone.jpg"],
            description: "This suite, approximately 45 m2 in size, consists of a living/dining area with fully-equipped kitchenette and a double bedroom with bath, furnished with antiques from the original inn.",
            amenities: ["2 rooms", "kitchenette", "Parking", "Air conditioning", "Laundry"],
            map: {},
            address: {
                street: "Via Carducci 25/C",
                Zip: "37129",
                City: "Verona",
                Country: "Italia",
                Tel: "0039 045 8034501",
                Cell: "0039 347 8545386",
                Email: 'info@residenzacarducci.com'
            }
        }
    ]}
}
