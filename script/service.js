angular.module('dev-mt-in').service('friendService', function($http) {
  var friends = [
      {
        "_id": "589f3f1035703373e34e8c7c",
        "index": 0,
        "iSCurrent": false,
        "name": {
          "first": "Bette",
          "last": "Porter"
        },
        "company": "MUSANPOLY",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "bette.porter@musanpoly.name",
        "phone": "+1 (908) 595-2778",
        "address": "101 Main Street, Manitou, Minnesota, 8105",
        "about": "Eiusmod do ex enim enim cillum exercitation magna duis voluptate laboris deserunt ut sint sint. Et quis velit ex ut qui laborum excepteur do voluptate cupidatat dolore minim commodo do. Non consequat pariatur sunt ut adipisicing laboris.",
        "registered": "Wednesday, January 15, 2014 7:35 PM",
        "friends": [
          {
            "id": 0,
            "name": "Dorthy Shields"
          },
          {
            "id": 1,
            "name": "Fuentes Ferguson"
          },
          {
            "id": 2,
            "name": "Lana Barr"
          }
        ],
        "tagline": "non mollit anim nulla aute voluptate deserunt non mollit minim"
      },
      {
        "_id": "589f3f10a9cd2c59482bb70c",
        "index": 1,
        "iSCurrent": false,
        "name": {
          "first": "Warren",
          "last": "Henry"
        },
        "company": "MACRONAUT",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "warren.henry@macronaut.biz",
        "phone": "+1 (996) 433-2505",
        "address": "977 Elizabeth Place, Kylertown, West Virginia, 3156",
        "about": "Dolore incididunt ut enim sit commodo velit aliqua. Sunt minim ut exercitation duis ex magna nisi adipisicing id. Sunt fugiat aute nulla consectetur minim adipisicing consectetur Lorem eiusmod velit ea magna. Minim ullamco velit cupidatat reprehenderit nisi enim do tempor nostrud laborum aliqua minim. Minim exercitation in do exercitation dolor excepteur aliquip tempor sit consequat exercitation.",
        "registered": "Sunday, January 18, 2015 3:11 AM",
        "friends": [
          {
            "id": 0,
            "name": "Charles Mcdaniel"
          },
          {
            "id": 1,
            "name": "Willis Jefferson"
          },
          {
            "id": 2,
            "name": "Kirk Miles"
          }
        ],
        "tagline": "do esse pariatur qui laborum amet voluptate ad occaecat magna"
      },
      {
        "_id": "589f3f10608a6bf4d7fef368",
        "index": 2,
        "iSCurrent": false,
        "name": {
          "first": "Jacklyn",
          "last": "Medina"
        },
        "company": "GENMOM",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "jacklyn.medina@genmom.biz",
        "phone": "+1 (985) 541-3959",
        "address": "701 Roder Avenue, Tuskahoma, Georgia, 9594",
        "about": "Elit officia tempor quis est eiusmod duis eu excepteur qui irure aute minim nisi. Mollit consequat fugiat commodo commodo culpa nulla excepteur. Fugiat dolor est sunt dolore voluptate. Et consectetur incididunt ad veniam veniam labore voluptate sunt elit voluptate. Ut cupidatat ut minim pariatur occaecat cillum exercitation duis deserunt duis magna aliqua culpa. Anim labore voluptate officia laborum qui.",
        "registered": "Friday, August 5, 2016 2:15 PM",
        "friends": [
          {
            "id": 0,
            "name": "Solomon Edwards"
          },
          {
            "id": 1,
            "name": "Cecile Blackburn"
          },
          {
            "id": 2,
            "name": "Jan Sparks"
          }
        ],
        "tagline": "cupidatat sint officia irure pariatur minim dolor in id ipsum"
      },
      {
        "_id": "589f3f10899674ae34be8751",
        "index": 3,
        "iSCurrent": false,
        "name": {
          "first": "Bradford",
          "last": "Copeland"
        },
        "company": "EARGO",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "bradford.copeland@eargo.co.uk",
        "phone": "+1 (867) 586-2220",
        "address": "387 Broome Street, Enetai, Alabama, 354",
        "about": "Sunt est non dolor consectetur ea. Pariatur quis adipisicing cillum labore. Adipisicing exercitation deserunt ut veniam voluptate deserunt anim. In aliquip cupidatat deserunt ex aute. Magna nisi sint deserunt laborum.",
        "registered": "Wednesday, April 2, 2014 1:22 AM",
        "friends": [
          {
            "id": 0,
            "name": "Browning Barton"
          },
          {
            "id": 1,
            "name": "Bianca Davis"
          },
          {
            "id": 2,
            "name": "Ball Schroeder"
          }
        ],
        "tagline": "et deserunt excepteur nostrud aliqua velit ea cupidatat ullamco dolore"
      },
      {
        "_id": "589f3f10fcc197f1a9c71701",
        "index": 4,
        "iSCurrent": false,
        "name": {
          "first": "Bonnie",
          "last": "Solomon"
        },
        "company": "KLUGGER",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "bonnie.solomon@klugger.us",
        "phone": "+1 (890) 408-2036",
        "address": "623 Lawn Court, Retsof, South Carolina, 6398",
        "about": "Qui eiusmod amet nisi laborum cillum duis nulla labore aute ut velit. Laborum aliqua ad aliquip cillum sit nulla. Ut consequat fugiat laboris nulla anim reprehenderit cupidatat excepteur qui nulla sit cillum. Minim anim in in voluptate in et officia dolor cupidatat enim ea velit. Consectetur ex et aliqua minim minim quis qui culpa commodo pariatur quis. Fugiat nulla adipisicing exercitation amet consequat nisi labore dolore veniam.",
        "registered": "Saturday, June 7, 2014 1:49 PM",
        "friends": [
          {
            "id": 0,
            "name": "Rosalyn Perez"
          },
          {
            "id": 1,
            "name": "Atkins Pearson"
          },
          {
            "id": 2,
            "name": "Figueroa Berger"
          }
        ],
        "tagline": "velit cillum enim cillum ipsum ipsum Lorem veniam dolor cillum"
      },
      {
        "_id": "589f3f10310d77c362b2acf0",
        "index": 5,
        "iSCurrent": false,
        "name": {
          "first": "Sofia",
          "last": "Neal"
        },
        "company": "COMTREK",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "sofia.neal@comtrek.org",
        "phone": "+1 (927) 559-3945",
        "address": "283 Wogan Terrace, Vallonia, Connecticut, 4119",
        "about": "Aliquip commodo dolor elit voluptate aute ipsum velit mollit aute. Adipisicing sunt ipsum enim magna eiusmod culpa proident dolore duis. Cillum aute ea aute enim esse consequat ad laboris exercitation enim officia. Cupidatat quis qui ex adipisicing consequat et consequat commodo. Cillum amet voluptate officia quis.",
        "registered": "Tuesday, September 13, 2016 8:49 PM",
        "friends": [
          {
            "id": 0,
            "name": "Knowles Mcconnell"
          },
          {
            "id": 1,
            "name": "Stuart King"
          },
          {
            "id": 2,
            "name": "Lynch Huffman"
          }
        ],
        "tagline": "sit laborum veniam aute aliquip officia ex cillum Lorem labore"
      },
      {
        "_id": "589f3f1004a8fff40946b703",
        "index": 6,
        "iSCurrent": false,
        "name": {
          "first": "Hart",
          "last": "Dejesus"
        },
        "company": "XTH",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "hart.dejesus@xth.me",
        "phone": "+1 (904) 444-3932",
        "address": "633 Calder Place, Carrizo, Rhode Island, 9704",
        "about": "Sint veniam pariatur cillum cupidatat non amet quis cupidatat. Consectetur ut fugiat occaecat occaecat eu anim minim aliqua consectetur ullamco veniam sit occaecat. Culpa et laboris ullamco irure ex nostrud. Laboris velit veniam officia eu labore quis proident cupidatat nisi eu laborum laborum.",
        "registered": "Thursday, December 15, 2016 2:15 AM",
        "friends": [
          {
            "id": 0,
            "name": "Kim Acosta"
          },
          {
            "id": 1,
            "name": "Lindsey Hart"
          },
          {
            "id": 2,
            "name": "Mabel Lane"
          }
        ],
        "tagline": "adipisicing laboris est sint adipisicing magna cupidatat excepteur eu id"
      },
      {
        "_id": "589f3f10d4bef7a28efc442a",
        "index": 7,
        "iSCurrent": false,
        "name": {
          "first": "Ana",
          "last": "Flowers"
        },
        "company": "DANCERITY",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "ana.flowers@dancerity.info",
        "phone": "+1 (871) 470-3039",
        "address": "292 Eldert Street, Gorst, Puerto Rico, 3396",
        "about": "Dolore enim Lorem consectetur consectetur pariatur nisi consequat ipsum sit aliquip commodo. Labore ullamco in est veniam. Qui commodo culpa consectetur Lorem.",
        "registered": "Monday, October 10, 2016 4:32 AM",
        "friends": [
          {
            "id": 0,
            "name": "Dena Gould"
          },
          {
            "id": 1,
            "name": "Antoinette Fischer"
          },
          {
            "id": 2,
            "name": "Teri Knapp"
          }
        ],
        "tagline": "sint do duis deserunt deserunt sunt proident Lorem anim laboris"
      },
      {
        "_id": "589f3f10afb202d4c4761c03",
        "index": 8,
        "iSCurrent": false,
        "name": {
          "first": "Perkins",
          "last": "Nash"
        },
        "company": "AQUAMATE",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "perkins.nash@aquamate.com",
        "phone": "+1 (957) 554-2831",
        "address": "672 Varick Street, Bendon, Virgin Islands, 5282",
        "about": "In minim ut excepteur excepteur aliquip minim commodo aliquip duis in. Ea veniam sint veniam non fugiat sunt nisi excepteur pariatur eiusmod nulla Lorem et consectetur. Sint ipsum consequat dolore irure pariatur ipsum aute.",
        "registered": "Friday, July 18, 2014 5:20 AM",
        "friends": [
          {
            "id": 0,
            "name": "Stevenson Nunez"
          },
          {
            "id": 1,
            "name": "Tammi Briggs"
          },
          {
            "id": 2,
            "name": "Nannie Little"
          }
        ],
        "tagline": "velit quis minim occaecat irure commodo ex excepteur magna sit"
      },
      {
        "_id": "589f3f10ac97611babe33ee8",
        "index": 9,
        "iSCurrent": false,
        "name": {
          "first": "Gillespie",
          "last": "Larsen"
        },
        "company": "ACCRUEX",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "gillespie.larsen@accruex.tv",
        "phone": "+1 (852) 433-2829",
        "address": "972 Powers Street, Tooleville, Nebraska, 3777",
        "about": "In laborum esse labore mollit sit. Sint fugiat minim ipsum ex pariatur proident proident commodo officia. Pariatur tempor officia excepteur sunt sint sit consequat labore commodo ullamco.",
        "registered": "Tuesday, July 14, 2015 6:46 AM",
        "friends": [
          {
            "id": 0,
            "name": "Pena Sanchez"
          },
          {
            "id": 1,
            "name": "Rowena Holden"
          },
          {
            "id": 2,
            "name": "Stephenson Townsend"
          }
        ],
        "tagline": "id aute deserunt sunt mollit nostrud laboris eu magna consectetur"
      },
      {
        "_id": "589f3f1049a24f478dfdec38",
        "index": 10,
        "iSCurrent": false,
        "name": {
          "first": "Josefina",
          "last": "Craft"
        },
        "company": "MOLTONIC",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "josefina.craft@moltonic.io",
        "phone": "+1 (952) 496-2757",
        "address": "362 Delmonico Place, Evergreen, Missouri, 1962",
        "about": "Ullamco proident aliquip velit cupidatat occaecat Lorem proident id. Exercitation nostrud velit enim reprehenderit qui laboris do fugiat exercitation commodo. Minim aliquip veniam duis esse veniam est. Mollit in excepteur id aliquip in reprehenderit deserunt. Mollit in veniam elit mollit duis non voluptate non. Enim culpa enim est dolor fugiat. Id aute culpa officia proident proident tempor quis laborum fugiat id laboris laborum excepteur aliqua.",
        "registered": "Sunday, February 21, 2016 2:01 AM",
        "friends": [
          {
            "id": 0,
            "name": "Verna Chang"
          },
          {
            "id": 1,
            "name": "Maricela Robbins"
          },
          {
            "id": 2,
            "name": "Rutledge Farley"
          }
        ],
        "tagline": "sunt dolore eiusmod dolore aute excepteur occaecat officia tempor eu"
      },
      {
        "_id": "589f3f10925af44cdc3e6371",
        "index": 11,
        "iSCurrent": false,
        "name": {
          "first": "Bethany",
          "last": "Mcgee"
        },
        "company": "MOBILDATA",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "bethany.mcgee@mobildata.ca",
        "phone": "+1 (939) 566-2973",
        "address": "428 Gunther Place, Brandermill, Utah, 4629",
        "about": "Aliqua culpa sunt aute excepteur velit aliquip officia enim dolor fugiat aliqua cillum ea. Do ut id excepteur et nulla aliquip qui non. Reprehenderit ad ipsum qui reprehenderit velit veniam sunt ipsum quis. Commodo dolor cupidatat et culpa ut labore.",
        "registered": "Thursday, January 7, 2016 5:19 PM",
        "friends": [
          {
            "id": 0,
            "name": "Harper Stone"
          },
          {
            "id": 1,
            "name": "Forbes Quinn"
          },
          {
            "id": 2,
            "name": "Corinne Bond"
          }
        ],
        "tagline": "dolor consequat quis cupidatat sint officia exercitation minim esse duis"
      },
      {
        "_id": "589f3f10f3b92c3267ef5c86",
        "index": 12,
        "iSCurrent": false,
        "name": {
          "first": "Austin",
          "last": "Davenport"
        },
        "company": "SENMEI",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "austin.davenport@senmei.name",
        "phone": "+1 (916) 530-2267",
        "address": "961 Sackman Street, Roeville, Delaware, 1752",
        "about": "Ad veniam reprehenderit aliquip eu consectetur in cupidatat amet. Mollit officia fugiat irure dolor elit voluptate consectetur anim amet elit excepteur eiusmod amet id. Lorem consequat id qui veniam id. Aliqua anim dolor sint ullamco veniam exercitation. Tempor mollit veniam do enim ex elit et. Ex cupidatat pariatur duis aliqua ea nostrud in dolore nostrud ea labore aliquip Lorem ea. Id veniam quis culpa velit aliqua consectetur.",
        "registered": "Tuesday, March 22, 2016 8:37 PM",
        "friends": [
          {
            "id": 0,
            "name": "Hobbs Callahan"
          },
          {
            "id": 1,
            "name": "Madden Oneil"
          },
          {
            "id": 2,
            "name": "Rhonda Small"
          }
        ],
        "tagline": "tempor et consequat ad sint amet non Lorem minim Lorem"
      },
      {
        "_id": "589f3f1090e276d025976a42",
        "index": 13,
        "iSCurrent": false,
        "name": {
          "first": "Vonda",
          "last": "Buckley"
        },
        "company": "CORECOM",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "vonda.buckley@corecom.biz",
        "phone": "+1 (959) 505-2136",
        "address": "998 Woodbine Street, Sunnyside, Texas, 8779",
        "about": "Mollit ex tempor velit sint laboris id dolor eiusmod et proident ut commodo. Tempor commodo id minim dolor commodo ut pariatur est qui laborum. Ipsum ea cupidatat ullamco voluptate id nostrud ea. Aute duis et veniam veniam eiusmod tempor duis eu reprehenderit. Sit nulla ex officia enim amet.",
        "registered": "Tuesday, September 8, 2015 8:41 PM",
        "friends": [
          {
            "id": 0,
            "name": "Cardenas Schmidt"
          },
          {
            "id": 1,
            "name": "Frost Preston"
          },
          {
            "id": 2,
            "name": "Clark Chase"
          }
        ],
        "tagline": "do et non adipisicing commodo qui est commodo qui eiusmod"
      },
      {
        "_id": "589f3f104c9f266bfcf768cc",
        "index": 14,
        "iSCurrent": false,
        "name": {
          "first": "Hansen",
          "last": "Waller"
        },
        "company": "VORATAK",
        "picture": "http://lorempixel.com/200/200/people/",
        "email": "hansen.waller@voratak.biz",
        "phone": "+1 (823) 405-3177",
        "address": "258 Conduit Boulevard, Tetherow, Massachusetts, 2786",
        "about": "Occaecat minim ut laboris est veniam anim ipsum culpa anim irure aliquip nostrud. Ea labore minim ad pariatur ad. Ut ea consequat non non ut ex incididunt consequat id nulla aliquip commodo cillum. In et in commodo et reprehenderit amet. Cillum veniam aliqua est elit reprehenderit fugiat et labore ut cupidatat dolor ea officia cillum. Ad eu qui id minim aliqua do excepteur labore et anim. Aliqua Lorem cupidatat aliquip quis nostrud in officia exercitation.",
        "registered": "Wednesday, August 27, 2014 6:29 AM",
        "friends": [
          {
            "id": 0,
            "name": "Ford Bowen"
          },
          {
            "id": 1,
            "name": "Karin Banks"
          },
          {
            "id": 2,
            "name": "Allison Jacobs"
          }
        ],
        "tagline": "id nisi laboris incididunt do exercitation voluptate id id voluptate"
      }
    ];
  // this.getFriends = function() {
  //   $http.get('friends.json').
  //     then(function(res) {
  //       return res.data;
  //     })
  // };

  this.getFriends = function() {
    return friends;
  }
})
