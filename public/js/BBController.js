//something
appBB.controller("BBController", BBController);



function BBController($state, $stateParams, $rootScope) {
    // var tb = document.getElementById('Apt2')
    // tb.addEventListener("click", function(event){
    //     console.log("pressed")
    // })



    console.log("here");

    var self = this;
    self.x = 1;

    self.active = $stateParams.id;

    self.myParams = parseInt($stateParams.id) - 1;


    self.apartments = [{

            name: "Suite Nord",
            images_url: ["images/33449159.jpg", 'images/33449161.jpg', 'images/33449162.jpg', 'images/33449164.jpg', 'images/33449174.jpg', 'images/33449176.jpg'],
            description: "This suite, approximately 45 m2 in size, consists of a living/dining area with fully-equipped kitchenette and a double bedroom with bath, furnished with antiques from the original inn.",
            amenities: ["2 rooms", "kitchenette", "Parking", "Air conditioning", "Laundry", "Free wifi"],
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
            amenities: ["2 rooms", "kitchenette", "Parking", "Air conditioning", "Laundry", "Free wifi"],
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
            images_url: ['images/22846608_v.jpg','images/22846564_v.jpg',
                'images/22846705_v.jpg',
                'images/30453111_v.jpg',
                'images/30453214_v.jpg',
                'images/30453265_v.jpg',
                'images/30453458_v.jpg',
            ],
            description: "This apartment, approximately 45 m2 in size, consists of a living/dining area with fully-equipped kitchenette and a double bedroom with bath, furnished with antiques from the original inn.",
            amenities: ["3 rooms", "1 bath", "kitchen", "Parking", "Air conditioning", "Laundry", "Free wifi"],
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
    //console.log(arrayOfImageObj)

    // self.currentIndex = 0;
    //
    // self.next = function() {
    //     console.log("clicked");
    //     self.currentIndex < myImages.length - 1 ? self.currentIndex++ : self.currentIndex = 0;
    // };
    //
    // self.prev = function() {
    //     self.currentIndex > 0 ? self.currentIndex-- : self.currentIndex = myImages.length - 1;
    // };


    // self.setImageON = function(array) {
    //     for (i = 0; i < array.length; i++) {
    //         array[i].visible = false;
    //         array[self.currentIndex].visible = true
    //     }
    // }
    //
    // self.setImageON(arrayOfImageObj);
    //
    // console.log(arrayOfImageObj);
    //
    console.log(self.arrayOfImageObj);

    $rootScope.$on(console.log("touched"))
    console.log($rootScope.$on)

    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            console.log("other state");
            // transitionTo() promise will be rejected with
            // a 'transition prevented' error
        });
}
