//something
appBB.controller("BBController", BBController);



function BBController($state, $stateParams) {
    // var tb = document.getElementById('Apt2')
    // tb.addEventListener("click", function(event){
    //     console.log("pressed")
    // })



    console.log("here");

    var self = this;


    self.myParams = parseInt($stateParams.id) - 1;


    self.apartments = [{

            name: "Suite Nord",
            images_url: ["images/card_salone.jpg"],
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
            images_url: ["images/card_salone.jpg"],
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
            images_url: ["images/card_salone.jpg"],
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
    ]

    self.currentIndex = 0

    self.next = function() {
        self.currentIndex < self.apartments[0].images_url.length - 1 ? self.currentIndex++ : self.currentIndex = 0;
    };

    self.prev = function() {
        self.currentIndex > 0 ? self.currentIndex-- : self.currentIndex = self.apartments[0].images_url.length - 1;
    };
}
