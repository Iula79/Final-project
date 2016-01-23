//something
appBB.controller("BBController", BBController);



function BBController($state, $stateParams, $sce, $rootScope) {
    // var tb = document.getElementById('Apt2')
    // tb.addEventListener("click", function(event){
    //     console.log("pressed")
    // })



    console.log("here");

    var self = this;
    self.map1 = $sce.trustAsResourceUrl("https://maps.google.com/maps?hl=en&q=Residenza Carducci Verona&ie=UTF8&t=roadmap&z=13&iwloc=B&output=embed");
    self.map2 = $sce.trustAsResourceUrl('https://maps.google.com/maps?hl=en&q=Residenza Verazzano Verona&ie=UTF8&t=roadmap&z=14&iwloc=B&output=embed');
    self.active = $stateParams.id;

    self.myParams = parseInt($stateParams.id) - 1;


    self.apartments = [{

            name: "Suite Sud",
            images_url: ["images/33449159.jpg", 'images/33449161.jpg', 'images/33449162.jpg', 'images/33449164.jpg', 'images/33449174.jpg', 'images/33449176.jpg'],
            description: "This suite, approximately 45 m2 in size, consists of a living/dining area with fully-equipped kitchenette and a double bedroom with bath, furnished with antiques from the original inn.The apartment can accomodate a maximum of 3 people and we can provide a crib for infants.",
            amenities: ["2 rooms", "kitchenette", "Parking", "Air conditioning", "Laundry", "Free wifi"],
            pricing: "between 80 and 180 per night depending on the season or events",
            conditions: ["check-in: 8PM", "check-out: 11 AM","no smoking","small pets allowed"],
            map: self.map1,
            directions:["airbus to Stazione Porta Nuova", "72 or 73 minibus lines - Via Carducci stop" , "91 line after 8 PM or during festivities" , "there is a nearby covered parking that charges 10 Euro per day", "we are outside the ZTL area"],
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
            name: "Suite Nord",
            images_url: ["images/Letto dietro.jpg","images/IMG_7693.jpg","images/IMG_7658.jpg","images/IMG_7399.jpg","images/IMG_7338.jpg"],
            description: "This suite, approximately 45 m2 in size, consists of a living/dining area with fully-equipped kitchenette and a double bedroom with bath, furnished with antiques from the original inn. The apartment faces the internal courtyard, it can accomodate a maximum of 3 people and we can provide a crib for infants." ,
            amenities: ["2 rooms", "Kitchenette", "Parking", "Air conditioning", "Laundry", "Free wifi"],
            pricing: "between 80 and 180 per night depending on the season or events",
            conditions: ["check-in: 8PM", "check-out: 11 AM","no smoking","small pets allowed"],
            map:self.map1,
            directions:["airbus to Stazione Porta Nuova", "72 or 73 minibus lines - Via Carducci stop" , "91 line after 8 PM or during festivities" , "there is a nearby covered parking that charges 10 Euro per day", "we are outside the ZTL area"],
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
            name: "Residenza Verazzano",
            images_url: ['images/30453265_v.jpg','images/22846608_v.jpg','images/22846564_v.jpg',
                'images/22846705_v.jpg',
                'images/30453111_v.jpg',
                'images/30453214_v.jpg',
                'images/30453458_v.jpg',
            ],
            description: "This apartment, approximately 120 m2 in size, consists of a sunny living/dining area, with fully-equipped modern kitchen, a master bedroom, a double bedroom, a single bedroom and one bath, furnished with antiques. Guests with automobiles find ample parking next to the apartment and the nearby vicinity of the ring road. Guests without automobiles can easily move around using the city and provincial public transport system.",
            amenities: ["4 rooms", "1 bath", "Kitchen", "Parking", "Air conditioning", "Laundry", "Free wifi"],
            pricing: "between 60 and 160 euro per day depending on the season, the length of the stay and the number of guests",
            conditions: ["check-in: TBD","no smoking","small pets allowed"],
            map: self.map2,
            directions:["airbus to Verona Porta Nuova station", "61 line from platform D - Via Colombo stop","93 or 94 lines after 8 PM or during festivities  - via Colombo stop", "Free Parking is available in the area" ],
            address: {
                street: "Via Giovanni da Verazzano 8",
                Zip: "37138",
                City: "Verona",
                Country: "Italia",
                Tel: "0039 045 8034501",
                Cell: "0039 347 8545386",
                Email: 'info@apartmentsverona.it'
            }
        }
    ];


    var myImages = self.apartments[self.myParams].images_url
    console.log(myImages)

    self.arrayOfImageObj = myImages.map(function(el) {
        myObject = {
            src: el,
            visible: false
        };
        return myObject
    });

    console.log(self.arrayOfImageObj);

}
