//name, tagline, company, picture, email, phone, address, about
function Friend(name, tagline, company, picture, email, phone, address, about) {
  this._id = '0';
  this.name = name;
  this.tagline = tagline;
  this.company = company;
  this.picture = picture;
  this.email = email;
  this.phone = phone;
  this.address =address;
  this.about = about;
  this.friends = [];
}

angular.module('dev-mt-in').service('friendService', function($http) {
  var friends = [];

  this.getFriends = function() {
    return friends;
  };

  this.populateStorage = function() {
      var JSONReadyTasks = JSON.stringify(friends);
      localStorage.setItem("dev-mt-in", JSONReadyTasks);
  };

  this.loadData = function() {
      var list = JSON.parse(localStorage["dev-mt-in"]);
      for(var i = 0; i < list.length; i++) {
        var friend = list[i];
        friends.push(friend);
      }
  };

  var samplefriends = [
  {
    _id: "589fa56cdcca3138a28a6f31",
    name: "Hartman Serrano",
    tagline: "reprehenderit ullamco aliqua do dolor ullamco sunt eu deserunt Lorem",
    company: "AQUOAVO",
    picture: "http://lorempixel.com/200/200/people/",
    email: "hartman.serrano@aquoavo.info",
    phone: "+1 (928) 568-2425",
    address: "532 Perry Terrace, Dola, New Hampshire, 6390",
    about: "Elit laborum sit nisi irure sint labore cillum officia. Cillum sint et laboris veniam in nulla incididunt proident dolore labore sit nostrud. Commodo ex anim labore consectetur nostrud non.",
    friends: []
  },
  {
    _id: "589fa56c7b8c1147685d3f3f",
    name: "Evangelina Savage",
    tagline: "exercitation eiusmod eiusmod ex Lorem qui qui velit labore velit",
    company: "KNEEDLES",
    picture: "http://lorempixel.com/200/200/people/",
    email: "evangelina.savage@kneedles.tv",
    phone: "+1 (811) 540-2390",
    address: "858 Conduit Boulevard, Why, Wisconsin, 8433",
    about: "Esse ea enim deserunt non amet in ullamco duis nulla ipsum dolore. Adipisicing ex ipsum Lorem in proident sint. Nulla magna do laborum aliquip ullamco qui tempor et sit. Lorem amet laboris culpa dolor et quis excepteur velit.",
    friends: []
  },
  {
    _id: "589fa56c733183ccdba481e4",
    name: "Pennington Ellison",
    tagline: "mollit excepteur eiusmod adipisicing dolor est dolor id ad ullamco",
    company: "NEPTIDE",
    picture: "http://lorempixel.com/200/200/people/",
    email: "pennington.ellison@neptide.io",
    phone: "+1 (816) 564-3782",
    address: "968 Hillel Place, Norris, New Jersey, 2109",
    about: "Est et sunt ad sint sint. Cupidatat nostrud nisi deserunt nisi deserunt ex non sint deserunt proident consectetur est dolore. Ea pariatur Lorem elit sit culpa sint amet id cupidatat. Sint sint ullamco aute anim aute exercitation cupidatat minim exercitation incididunt quis adipisicing.",
    friends: []
  },
  {
    _id: "589fa56ced357f05dbd30921",
    name: "Wade Rivera",
    tagline: "ipsum laboris amet eiusmod velit voluptate ut aliqua velit esse",
    company: "BIOTICA",
    picture: "http://lorempixel.com/200/200/people/",
    email: "wade.rivera@biotica.me",
    phone: "+1 (866) 411-3026",
    address: "209 Oceanic Avenue, Naomi, Marshall Islands, 7470",
    about: "Cillum non sit occaecat quis irure cillum in voluptate. Et qui elit ullamco est dolor magna eiusmod cupidatat mollit. Enim officia in sunt elit non deserunt nulla cillum enim pariatur nostrud ea. Consectetur laboris et ullamco est exercitation non sunt tempor. Veniam in cillum duis nisi laboris cupidatat amet incididunt ullamco eiusmod.",
    friends: []
  },
  {
    _id: "589fa56ce5235c0326483da7",
    name: "Matthews Anderson",
    tagline: "non esse ex elit cupidatat occaecat esse laboris deserunt ipsum",
    company: "HELIXO",
    picture: "http://lorempixel.com/200/200/people/",
    email: "matthews.anderson@helixo.net",
    phone: "+1 (945) 520-3461",
    address: "605 Lawrence Street, Herald, Texas, 1418",
    about: "Magna est cillum ut id est amet ut commodo exercitation magna adipisicing est. Aliqua aliquip proident quis quis aute velit nostrud aute fugiat non veniam. In enim proident id aliquip eiusmod veniam id sunt laboris non magna pariatur elit. Cillum nulla incididunt commodo dolore aliqua ullamco. Tempor ex irure ad id fugiat incididunt. Deserunt officia ut nostrud ipsum. Exercitation irure proident id in ullamco ullamco ullamco id eiusmod Lorem.",
    friends: []
  },
  {
    _id: "589fa56ccd45db1702bb1092",
    name: "Gill Le",
    tagline: "qui nisi sit nostrud consectetur exercitation officia ullamco eu mollit",
    company: "DAIDO",
    picture: "http://lorempixel.com/200/200/people/",
    email: "gill.le@daido.com",
    phone: "+1 (901) 410-2692",
    address: "721 Cumberland Street, Vincent, Missouri, 9622",
    about: "Veniam eiusmod consectetur exercitation enim reprehenderit do laborum nostrud laborum cillum esse aliqua occaecat aliquip. Enim nulla laboris veniam veniam ut nostrud aliquip ex id nostrud labore dolor. Tempor proident minim adipisicing est ullamco do aute nisi occaecat ea. Nisi in ut culpa qui reprehenderit consectetur amet eu reprehenderit voluptate laboris nisi laboris. Sint ea consectetur veniam qui ea labore tempor cupidatat excepteur sit velit. Nulla fugiat cupidatat anim aliquip Lorem id quis pariatur mollit. Voluptate eiusmod laboris ut sint sint nostrud.",
    friends: []
  },
  {
    _id: "589fa56c4df6ba14a1e03d66",
    name: "Nichols Cline",
    tagline: "ut ut ex voluptate incididunt non velit esse velit id",
    company: "SENMAO",
    picture: "http://lorempixel.com/200/200/people/",
    email: "nichols.cline@senmao.org",
    phone: "+1 (801) 452-3567",
    address: "485 Wyona Street, Harrodsburg, Idaho, 2060",
    about: "Duis proident qui aliquip proident ea exercitation. Velit aliqua eiusmod aute labore est cillum. Voluptate dolor velit laboris reprehenderit culpa eiusmod consequat exercitation laborum cillum. Elit tempor consequat aliqua anim. Cupidatat incididunt ex duis culpa consequat consequat esse nostrud consequat sunt ut sit.",
    friends: []
  },
  {
    _id: "589fa56ce5b1d91597366bde",
    name: "Yesenia Mathis",
    tagline: "adipisicing velit reprehenderit quis incididunt velit laboris tempor reprehenderit ea",
    company: "BARKARAMA",
    picture: "http://lorempixel.com/200/200/people/",
    email: "yesenia.mathis@barkarama.us",
    phone: "+1 (873) 578-2750",
    address: "850 Bush Street, Sattley, Northern Mariana Islands, 3918",
    about: "Ex esse pariatur duis sunt ea Lorem adipisicing cupidatat id velit ipsum quis ipsum consequat. Ut commodo reprehenderit ea irure anim Lorem tempor qui est cupidatat amet est irure. Commodo irure irure nostrud ipsum mollit Lorem nostrud magna tempor magna eu consectetur elit occaecat.",
    friends: []
  },
  {
    _id: "589fa56c17ebc2599458d58e",
    name: "Herman Sandoval",
    tagline: "commodo veniam culpa cillum minim fugiat incididunt minim eu commodo",
    company: "AUTOMON",
    picture: "http://lorempixel.com/200/200/people/",
    email: "herman.sandoval@automon.co.uk",
    phone: "+1 (870) 462-2461",
    address: "263 Schenck Street, Fowlerville, Delaware, 5527",
    about: "Lorem minim nulla voluptate occaecat irure sint duis in culpa deserunt consequat aliqua quis. Reprehenderit ipsum reprehenderit sint dolor quis. Elit culpa consectetur nisi mollit exercitation ipsum adipisicing ea minim.",
    friends: []
  },
  {
    _id: "589fa56c7250526faf080f33",
    name: "Tanisha Logan",
    tagline: "et laboris ullamco eiusmod ullamco laborum elit irure eu ex",
    company: "EVENTEX",
    picture: "http://lorempixel.com/200/200/people/",
    email: "tanisha.logan@eventex.biz",
    phone: "+1 (888) 543-2678",
    address: "404 George Street, Tyro, South Dakota, 524",
    about: "Sit velit aliqua magna irure officia nostrud aliqua fugiat magna nostrud. Magna fugiat velit in nulla ut laborum nulla non esse est minim in minim. Mollit irure fugiat sint fugiat magna ad consequat dolor enim non. Cupidatat enim id aute ea commodo ipsum nisi minim eu laboris do ea voluptate. Minim cillum laboris nostrud nisi nostrud minim esse consectetur enim aute ullamco dolore ex. Sint anim adipisicing culpa adipisicing ea dolor excepteur laboris occaecat do nulla tempor. Eu cupidatat do ea proident irure.",
    friends: []
  },
  {
    _id: "589fa56c590e4d3a7ad859e0",
    name: "Pearson Carr",
    tagline: "non Lorem eu duis ea cillum cillum et cupidatat laborum",
    company: "VERAQ",
    picture: "http://lorempixel.com/200/200/people/",
    email: "pearson.carr@veraq.biz",
    phone: "+1 (855) 574-2003",
    address: "583 Ridge Court, Brutus, Arkansas, 1184",
    about: "Et est ut fugiat nostrud est ipsum quis reprehenderit laborum et nulla culpa. Tempor ex cillum est ex cupidatat occaecat esse tempor. Culpa deserunt aliqua id anim ea anim ad reprehenderit consequat laborum magna. Labore quis sunt aliqua in officia. Culpa aliqua et amet ex consectetur labore voluptate consequat eu cupidatat officia. Voluptate est occaecat reprehenderit in tempor anim ut ipsum. Exercitation Lorem adipisicing laborum pariatur quis.",
    friends: []
  },
  {
    _id: "589fa56cef6584133665eb9a",
    name: "Elma Larson",
    tagline: "reprehenderit laboris officia id eiusmod ex fugiat ut tempor excepteur",
    company: "LUNCHPOD",
    picture: "http://lorempixel.com/200/200/people/",
    email: "elma.larson@lunchpod.name",
    phone: "+1 (804) 600-3746",
    address: "353 McClancy Place, Barrelville, Federated States Of Micronesia, 5189",
    about: "Magna ad in sit fugiat sunt ullamco. Irure in cillum tempor duis qui. Aute et ut occaecat laborum do laborum nulla veniam ea.",
    friends: []
  },
  {
    _id: "589fa56c8b21d136f7e652ad",
    name: "Mallory Cooper",
    tagline: "ut ad aliquip sint incididunt voluptate culpa occaecat esse est",
    company: "HYPLEX",
    picture: "http://lorempixel.com/200/200/people/",
    email: "mallory.cooper@hyplex.info",
    phone: "+1 (919) 457-2341",
    address: "457 Lafayette Walk, Mooresburg, Kentucky, 8715",
    about: "Laborum anim mollit sit fugiat esse ipsum do eu qui incididunt id nostrud. Deserunt voluptate ad laborum reprehenderit enim do et cillum Lorem do veniam. Elit Lorem adipisicing esse incididunt proident qui. Quis in reprehenderit est esse.",
    friends: []
  },
  {
    _id: "589fa56c0495ddc8da7b3258",
    name: "Tami Vance",
    tagline: "exercitation proident commodo excepteur minim incididunt et adipisicing nulla ex",
    company: "XANIDE",
    picture: "http://lorempixel.com/200/200/people/",
    email: "tami.vance@xanide.tv",
    phone: "+1 (907) 429-3039",
    address: "284 Boerum Place, Boyd, New Mexico, 9509",
    about: "Nulla incididunt culpa fugiat incididunt. Aliquip consectetur aute qui et exercitation. Cupidatat velit adipisicing dolor eu aute esse ipsum reprehenderit commodo nostrud. Culpa veniam id consequat id. Fugiat adipisicing dolore eu nulla do qui. Occaecat sit in dolor proident culpa pariatur cupidatat incididunt deserunt tempor ex exercitation.",
    friends: []
  },
  {
    _id: "589fa56c6ad7f44c44fd9051",
    name: "Kerri Wilcox",
    tagline: "minim nostrud cupidatat commodo ex deserunt reprehenderit aliqua sunt elit",
    company: "SPRINGBEE",
    picture: "http://lorempixel.com/200/200/people/",
    email: "kerri.wilcox@springbee.io",
    phone: "+1 (815) 484-3308",
    address: "289 Clark Street, Freelandville, Iowa, 9997",
    about: "Cillum quis sunt ea eu id ea est eu deserunt. Reprehenderit consectetur sunt proident laboris duis ut pariatur anim duis deserunt. Enim ea Lorem non enim. Eu aliqua sint est occaecat eiusmod adipisicing mollit enim non laboris esse sint irure. Fugiat duis Lorem fugiat enim duis nostrud dolore sit non laborum dolor nulla amet. Et laboris excepteur non enim ea mollit. Voluptate do anim pariatur veniam eiusmod Lorem laboris nostrud et cupidatat commodo sit.",
    friends: []
  },
  {
    _id: "589fa56c270b914c524f7eef",
    name: "Kirby Sherman",
    tagline: "culpa dolor enim quis est sit anim do aute ea",
    company: "NEWCUBE",
    picture: "http://lorempixel.com/200/200/people/",
    email: "kirby.sherman@newcube.me",
    phone: "+1 (918) 520-3948",
    address: "925 Auburn Place, Itmann, Kansas, 6183",
    about: "Lorem excepteur eu dolore reprehenderit. Commodo voluptate incididunt fugiat exercitation aute id laborum nulla eiusmod voluptate cillum et excepteur. Culpa elit eu duis ullamco aliquip mollit est ad sit deserunt incididunt ullamco. Qui in laborum quis cupidatat qui deserunt minim id mollit cupidatat incididunt eu.",
    friends: []
  },
  {
    _id: "589fa56c78c04791bd3f46c2",
    name: "Sykes Haney",
    tagline: "aute in laboris culpa mollit minim pariatur mollit adipisicing nulla",
    company: "PULZE",
    picture: "http://lorempixel.com/200/200/people/",
    email: "sykes.haney@pulze.net",
    phone: "+1 (908) 569-2816",
    address: "147 Lexington Avenue, Ola, Mississippi, 5326",
    about: "Officia incididunt fugiat commodo nostrud enim. Qui do nostrud mollit eiusmod fugiat aliqua aute mollit Lorem excepteur qui. Commodo proident sint culpa laboris qui nostrud commodo irure esse velit eiusmod ea anim et. Et voluptate nulla magna nostrud enim duis culpa quis eiusmod Lorem nisi adipisicing exercitation. Ullamco irure est enim est magna sit esse ad commodo irure ad. Ullamco est quis dolor consequat esse nostrud irure est et deserunt proident sunt pariatur.",
    friends: []
  },
  {
    _id: "589fa56cd5d4d759194296f4",
    name: "Francis Lewis",
    tagline: "proident cupidatat ad officia laborum laborum adipisicing duis ad ipsum",
    company: "SYNKGEN",
    picture: "http://lorempixel.com/200/200/people/",
    email: "francis.lewis@synkgen.com",
    phone: "+1 (861) 599-3154",
    address: "438 Ditmars Street, Norvelt, Wyoming, 2248",
    about: "Adipisicing sint nostrud et dolore fugiat esse nostrud deserunt consequat minim mollit minim commodo labore. Est esse amet aliquip dolore minim dolor elit eiusmod anim nostrud consectetur labore officia reprehenderit. Dolor cillum non sint adipisicing culpa aute ut mollit esse cupidatat. Reprehenderit cillum adipisicing laboris nisi duis et. Velit tempor proident aliqua nulla Lorem eu culpa occaecat anim ullamco incididunt aliquip excepteur commodo. Velit mollit magna veniam voluptate duis deserunt. Est excepteur Lorem laboris commodo eiusmod pariatur eu cupidatat magna eu non ipsum magna sunt.",
    friends: []
  },
  {
    _id: "589fa56cf1ef1d3e0aa1f8e3",
    name: "Wolfe Newman",
    tagline: "ea irure laboris dolor est ut sit anim commodo nulla",
    company: "LINGOAGE",
    picture: "http://lorempixel.com/200/200/people/",
    email: "wolfe.newman@lingoage.org",
    phone: "+1 (835) 547-3742",
    address: "298 Duffield Street, Waikele, Michigan, 7115",
    about: "Nulla aute officia eu esse duis proident aute aliquip duis Lorem labore labore aliquip. Deserunt duis dolor ad do aliquip proident eu sunt. Nulla commodo adipisicing quis ipsum occaecat ex Lorem eu consequat consectetur est.",
    friends: []
  },
  {
    _id: "589fa56c966bee4fa5b53943",
    name: "Cathy Craig",
    tagline: "aliqua exercitation labore ipsum aliquip sunt adipisicing Lorem esse amet",
    company: "GRACKER",
    picture: "http://lorempixel.com/200/200/people/",
    email: "cathy.craig@gracker.us",
    phone: "+1 (808) 487-2539",
    address: "590 Louise Terrace, Wedgewood, Montana, 7621",
    about: "Non adipisicing sunt nisi veniam. Dolore veniam enim laborum adipisicing consequat id. Commodo culpa amet reprehenderit elit dolore velit eiusmod adipisicing laborum ex fugiat magna ex. Esse exercitation nostrud velit ea adipisicing deserunt ex in excepteur ullamco laborum occaecat. Nostrud incididunt reprehenderit cupidatat elit occaecat anim aute duis Lorem consequat in commodo. Ad aute ipsum dolore sit cillum magna do aliqua culpa tempor minim officia ex. Mollit pariatur velit incididunt reprehenderit fugiat ipsum amet et incididunt.",
    friends: []
  },
  {
    _id: "589fa56c2d721d099e029e8b",
    name: "Compton Cruz",
    tagline: "esse reprehenderit excepteur sit laboris consequat tempor consectetur irure adipisicing",
    company: "PROVIDCO",
    picture: "http://lorempixel.com/200/200/people/",
    email: "compton.cruz@providco.co.uk",
    phone: "+1 (866) 574-3729",
    address: "842 Jefferson Avenue, Hoagland, Connecticut, 6735",
    about: "Culpa enim Lorem in commodo est proident esse et. Voluptate exercitation ullamco laboris sit sint. Reprehenderit ipsum pariatur do cillum magna et culpa proident exercitation. Eiusmod elit culpa excepteur nostrud aliqua sint mollit veniam minim nulla proident fugiat aliqua veniam. Sint velit consequat Lorem ad laboris. Elit ex proident non incididunt ullamco nostrud anim esse deserunt esse.",
    friends: []
  },
  {
    _id: "589fa56d656acdd0d409793d",
    name: "Goodwin Mcbride",
    tagline: "laborum reprehenderit adipisicing ullamco culpa aliquip Lorem culpa incididunt duis",
    company: "VIAGRAND",
    picture: "http://lorempixel.com/200/200/people/",
    email: "goodwin.mcbride@viagrand.biz",
    phone: "+1 (957) 499-2128",
    address: "442 Etna Street, Jackpot, Vermont, 3816",
    about: "Laboris incididunt amet magna velit ut ex. Cillum laborum est voluptate aliqua ut ullamco officia elit occaecat. Nostrud irure Lorem amet consequat exercitation commodo nostrud ullamco eiusmod occaecat in pariatur ut consectetur. Ex officia nisi consectetur enim voluptate tempor anim. Do proident nulla tempor minim cillum aliqua consequat labore qui elit ex. Sunt quis non excepteur pariatur velit.",
    friends: []
  },
  {
    _id: "589fa56df53eb81cb00de417",
    name: "Skinner Bell",
    tagline: "deserunt pariatur ut elit dolore eu nisi fugiat eiusmod mollit",
    company: "MEDCOM",
    picture: "http://lorempixel.com/200/200/people/",
    email: "skinner.bell@medcom.biz",
    phone: "+1 (950) 586-3691",
    address: "691 Georgia Avenue, Bawcomville, Nebraska, 5483",
    about: "Exercitation enim nostrud reprehenderit id ut ea Lorem consectetur aliquip consequat nisi elit nostrud cupidatat. Pariatur irure elit voluptate adipisicing cupidatat elit consequat laboris. Id deserunt incididunt consectetur cupidatat qui dolor adipisicing.",
    friends: []
  },
  {
    _id: "589fa56d78925054a43fe6fa",
    name: "Travis Atkinson",
    tagline: "enim consectetur labore tempor dolore occaecat consectetur est in incididunt",
    company: "ORBOID",
    picture: "http://lorempixel.com/200/200/people/",
    email: "travis.atkinson@orboid.name",
    phone: "+1 (896) 461-3207",
    address: "671 Bedell Lane, Newkirk, Virginia, 1713",
    about: "Esse eiusmod elit enim quis nostrud. Aliqua labore veniam ad consequat do anim ex id. Aliqua elit ipsum mollit aliqua in excepteur anim reprehenderit id pariatur aliqua eu. Commodo ipsum minim culpa nisi do. Dolore nulla deserunt deserunt exercitation ipsum reprehenderit ut incididunt.",
    friends: []
  },
  {
    _id: "589fa56d66dc4e50ede4d766",
    name: "Sophia Tillman",
    tagline: "consectetur sint culpa excepteur quis exercitation laboris non qui eu",
    company: "TETAK",
    picture: "http://lorempixel.com/200/200/people/",
    email: "sophia.tillman@tetak.info",
    phone: "+1 (993) 431-2985",
    address: "131 McKibbin Street, Caron, Maryland, 6662",
    about: "Esse ad ut deserunt ipsum labore proident aliquip adipisicing laboris amet minim mollit ut commodo. Qui non et irure commodo duis Lorem mollit commodo et exercitation proident ex voluptate ut. Occaecat nisi culpa cupidatat est. Deserunt irure officia mollit nostrud dolor nisi in nostrud in sint culpa ullamco.",
    friends: []
  },
  {
    _id: "589fa56d25e15b2e2ff9d8ff",
    name: "Lenore Crawford",
    tagline: "ea excepteur esse proident laboris excepteur mollit amet consequat aliquip",
    company: "ELPRO",
    picture: "http://lorempixel.com/200/200/people/",
    email: "lenore.crawford@elpro.tv",
    phone: "+1 (842) 564-2695",
    address: "202 Vernon Avenue, Ernstville, North Dakota, 7315",
    about: "Amet culpa pariatur laborum officia eiusmod et minim laborum. Aliquip voluptate velit dolor eu irure non id proident quis dolor dolore minim reprehenderit. Sunt ut ut qui duis veniam eu nulla sint esse. Commodo veniam amet mollit sunt.",
    friends: []
  },
  {
    _id: "589fa56df7be24cfaacf4e74",
    name: "Galloway Frazier",
    tagline: "ad ullamco cupidatat exercitation ut sunt tempor mollit duis dolore",
    company: "QUINTITY",
    picture: "http://lorempixel.com/200/200/people/",
    email: "galloway.frazier@quintity.io",
    phone: "+1 (861) 576-3380",
    address: "338 Cobek Court, Riner, North Carolina, 2363",
    about: "Eiusmod cupidatat culpa ea aute non Lorem ipsum pariatur veniam aute sit. Amet excepteur ullamco labore proident nisi. Aliqua pariatur nisi aute esse dolore sit Lorem minim. Adipisicing excepteur et do aliqua occaecat adipisicing id culpa reprehenderit dolor nulla ea non. Mollit eu velit mollit ex id eiusmod Lorem in qui fugiat elit.",
    friends: []
  },
  {
    _id: "589fa56dd9c162c2318e1606",
    name: "Hilary Church",
    tagline: "Lorem mollit elit duis commodo nostrud ea commodo consectetur ad",
    company: "MINGA",
    picture: "http://lorempixel.com/200/200/people/",
    email: "hilary.church@minga.me",
    phone: "+1 (801) 439-3954",
    address: "906 Stryker Street, Marshall, Nevada, 4393",
    about: "Enim ut pariatur sit ullamco Lorem dolor in in sunt dolor ad. Proident ex sint amet ad occaecat consectetur pariatur dolor sunt est consectetur. Laborum quis aliquip id cillum laborum ex sint. Nostrud culpa ipsum elit enim elit. Aliquip ad ullamco tempor occaecat. In culpa sint qui ex labore. Nostrud ex aliqua esse ullamco dolore dolor.",
    friends: []
  },
  {
    _id: "589fa56d8be2f1f459ce4129",
    name: "Audra Bennett",
    tagline: "labore elit eiusmod ut cupidatat cupidatat excepteur exercitation ex eiusmod",
    company: "QUANTALIA",
    picture: "http://lorempixel.com/200/200/people/",
    email: "audra.bennett@quantalia.net",
    phone: "+1 (998) 546-3767",
    address: "739 Livingston Street, Draper, Maine, 1301",
    about: "Cupidatat consequat labore eu ea dolore qui ullamco sunt minim. Aute esse et fugiat sit. Adipisicing ullamco tempor sint aliquip consequat enim nostrud do quis. Qui ad cupidatat irure eu nulla eiusmod esse cillum anim fugiat excepteur reprehenderit cillum irure. Magna deserunt voluptate aliqua commodo est cillum esse aliquip ea laborum consectetur irure non. Reprehenderit tempor occaecat reprehenderit nulla pariatur ut esse.",
    friends: []
  },
  {
    _id: "589fa56dd049bf9deb26e889",
    name: "Jannie Sutton",
    tagline: "exercitation labore minim anim occaecat dolor id nostrud qui elit",
    company: "ZIPAK",
    picture: "http://lorempixel.com/200/200/people/",
    email: "jannie.sutton@zipak.com",
    phone: "+1 (935) 600-3342",
    address: "454 Hale Avenue, Boykin, Alaska, 346",
    about: "Duis elit sint ea dolor ex officia esse nisi culpa deserunt commodo. Laboris anim est velit aliqua nostrud dolore deserunt amet nostrud excepteur irure aliquip sunt. Consectetur minim laborum nulla aliquip incididunt laboris laborum aliquip excepteur. Quis irure sunt nisi nisi occaecat dolore labore nostrud occaecat deserunt magna duis et Lorem.",
    friends: []
  }
];

  // this.getFriends = function() {
  //   $http.get('friends.json').
  //     then(function(res) {
  //       return res.data;
  //     })
  // };


  this.loadSample = function() {
    friends = clone(sampleFriends);
    populateStorage();
  };

})
