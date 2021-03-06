//something
appBB.controller("BBController", BBController);



function BBController($state, $stateParams, $sce, $rootScope) {
    // var tb = document.getElementById('Apt2')
    // tb.addEventListener("click", function(event){
    //     console.log("pressed")
    // })
    console.log("here");
    
    var self = this;
    self.map1 = $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.3796219221226!2d11.002030615225646!3d45.4420057429457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f36f889ec79%3A0x368e0dcf1358ac49!2sVia+Giosu%C3%A8+Carducci%2C+25C%2C+37129+Verona+VR%2C+Italy!5e0!3m2!1sen!2sus!4v1498937455719");
    self.map2 = $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.9879349191206!2d10.97646651522595!3d45.44989924241916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e1ffc1c256a9%3A0x451e7a1b99d14fd4!2sVia+Giovanni+da+Verrazzano%2C+8%2C+37138+Verona+VR%2C+Italy!5e0!3m2!1sen!2sus!4v1498937881976"
);
    self.active = $stateParams.id;

    self.myParams = parseInt($stateParams.id) - 1;


    self.apartments = [{

            name: "Suite Sud",
            images_url: ['images/Residenza_Carducci_Suite_SUD.jpg',"images/Residenza_carducci_bedroom_detail.jpg", 'images/Residenza_Carducci_dettaglio_bagno.jpg', 'images/Residenza_Carducci_Suite_Sud_kitchenette.jpg', 'images/Residenza_Carducci_dettaglio_decorativo.jpg', 'images/Residenza_Carducci_salotto.jpg'],
            description: "This suite, approximately 45 m2 in size, consists of a living/dining area with fully-equipped kitchenette and a double bedroom with bath, furnished with antiques from the original inn. The apartment can accomodate a maximum of 3 people, and we can provide a crib for infants.",
            amenities: ["2 rooms", "kitchenette", "Parking", "Air conditioning", "Laundry", "Free wifi"],
            pricing: "between 80 and 180 per night depending on the season or events",
            conditions: ["no smoking","check-in: btw 1PM and 9PM", "check-out: 11 AM","-","please contact us if you plan to arrive outside the regular check-in hours"],
            map: self.map1,
            directions:["AIRBUS to Stazione Porta Nuova - 6,00 Euro - then follow FROM THE STATION instructions" , "TAXI to Via Carducci - 29,00 Euro weekdays and 34,00 Euro weekends ", " MINIBUS 72 or 73 - weekdays - Platform B1 - 'Via Interrato dell'Acqua Morta' stop - 1,30 Euro in advance, 2,00 Euro on the bus" , " BUS 91 - after 8PM, evenings and weekends - Platform D2 - 'Via Carducci' stop - 1,30 Euro in advance, 2,00 Euro on the bus" , "TAXI to Via Carducci - 12,00 Euro weekdays and 15,00 Euro weekends","There is a nearby covered parking that charges 10 Euro per day", "We are outside the ZTL area"],
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
            images_url: ["images/Residenza_Carducci_letto_dietro.jpg","images/Residenza_Carducci_bedroom.jpg","images/Residenza_Carducci_kitchenette.jpg","images/Residenza_Carducci_Suite_Nord2.jpg","images/Residenza_Carducci_Cortile.jpg"],
            description: "This suite, approximately 45 m2 in size, consists of a living/dining area with fully-equipped kitchenette and a double bedroom with bath, furnished with antiques from the original inn. The apartment faces the internal courtyard; it can accomodate a maximum of 3 people, and we can provide a crib for infants." ,
            amenities: ["2 rooms", "Kitchenette", "Parking", "Air conditioning", "Laundry", "Free wifi"],
            pricing: "between 80 and 180 per night depending on the season or events",
            conditions: ["no smoking","check-in: btw 1PM and 9PM", "check-out: 11 AM","-","please contact us if you plan to arrive outside the regular check-in hours"],
            map:self.map1,
            directions:["AIRBUS to Stazione Porta Nuova - 6,00 Euro - then follow FROM THE STATION instructions" , "TAXI to Via Carducci - 29,00 Euro weekdays and 34,00 Euro weekends ", " MINIBUS 72 or 73 - weekdays - Platform B1 - 'Via Interrato dell'Acqua Morta' stop - 1,30 Euro in advance, 2,00 Euro on the bus" , " BUS 91 - after 8PM, evenings and weekends - Platform D2 - 'Via Carducci' stop - 1,30 Euro in advance, 2,00 Euro on the bus" , "TAXI to Via Carducci - 12,00 Euro weekdays and 15,00 Euro weekends","There is a nearby covered parking that charges 10 Euro per day", "We are outside the ZTL area"],
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
            images_url: ['images/Residenza_Verazzano_master_bedroom.jpg','images/Residenza_Verazzano_hallway.jpg','images/Residenza_Verazzano_Secondary_Bedroom.jpg',
                'images/Residenza_Verazzano_bagno.jpg',
                'images/Residenza_Verazzano_cucina.jpg',
                'images/Residenza_verazzano_scorcio_entrata.jpg',
                'images/Residenza_verazzano_salone.jpg',
                'images/Residenza_Verazzano_saletta.jpg'
            ],
            description: "This apartment, approximately 120 m2 in size, consists of a sunny living/dining area, with fully-equipped modern kitchen, a master bedroom, a double bedroom, a single bedroom and one bath, furnished with antiques. Guests with automobiles find ample parking next to the apartment and the nearby vicinity of the ring road. Guests without automobiles can easily move around using the city and provincial public transport system.",
            amenities: ["4 rooms", "1 bath", "Kitchen", "Parking", "Air conditioning", "Laundry", "Free wifi"],
            pricing: "between 60 and 160 euro per day depending on the season, the length of the stay and the number of guests",
            conditions: ["check-in: TBD","no smoking"],
            map: self.map2,
            directions:["AIRBUS to Stazione Porta Nuova - 6,00 Euro - then follow FROM THE STATION instructions", "TAXI to Via G. da Verazzano - 26,00 Euro weekdays and 30,00 Euro weekends", " BUS 61 - weekdays - platform D2 - Via Magellano stop - 1,30 Euro in advance, 2,00 Euro on the bus"," BUS 93 or 94 - after 8 PM, weekends and holidays - platform D2 - via Colombo stop - 1,30 Euro in advance, 2,00 Euro on the bus", "TAXI to Via G. da Verazzano - 12,00 Euro weekdays and 15,00 Euro weekends and holidays", "Free Parking is available in the area" ],
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
