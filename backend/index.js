const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

const BASE_PATH = "/api/v1";
const PORT = 3001;

app.get(`${BASE_PATH}/list`, function (req, res) {
  res.send([
    {
      name: "Fleur Harper",
      phone: "(318) 106-9681",
      email: "quisque.fringilla@google.couk",
      country: "Ireland",
      online: false,
    },
    {
      name: "Timon Frost",
      phone: "(625) 517-4875",
      email: "mi.aliquam@google.ca",
      country: "Indonesia",
      online: true,
    },
    {
      name: "Uriah Shields",
      phone: "1-887-777-7148",
      email: "mi.lacinia.mattis@protonmail.edu",
      country: "Vietnam",
      online: true,
    },
    {
      name: "Germane Montgomery",
      phone: "(122) 401-5642",
      email: "aliquam.erat@aol.couk",
      country: "Italy",
      online: true,
    },
    {
      name: "Erich Kidd",
      phone: "1-865-237-5313",
      email: "a.ultricies.adipiscing@icloud.net",
      country: "Chile",
      online: false,
    },
    {
      name: "Nelle Carter",
      phone: "(472) 665-1423",
      email: "non.quam@aol.couk",
      country: "Vietnam",
      online: true,
    },
    {
      name: "Charles Bush",
      phone: "(233) 396-6251",
      email: "nam@protonmail.com",
      country: "Spain",
      online: true,
    },
    {
      name: "Hoyt Russell",
      phone: "(296) 602-1838",
      email: "orci.lobortis@aol.edu",
      country: "Vietnam",
      online: true,
    },
    {
      name: "Nayda Evans",
      phone: "1-405-756-2666",
      email: "nisl.maecenas@hotmail.couk",
      country: "Turkey",
      online: false,
    },
    {
      name: "Fritz Guthrie",
      phone: "1-687-349-1385",
      email: "phasellus@hotmail.couk",
      country: "Ukraine",
      online: false,
    },
    {
      name: "Tanya Romero",
      phone: "(607) 610-1554",
      email: "cum.sociis@icloud.couk",
      country: "Ukraine",
      online: true,
    },
    {
      name: "Zoe Reese",
      phone: "1-777-913-6302",
      email: "nulla@protonmail.couk",
      country: "Canada",
      online: true,
    },
    {
      name: "MacKenzie Ware",
      phone: "1-633-345-7381",
      email: "lectus.convallis.est@hotmail.edu",
      country: "Sweden",
      online: true,
    },
    {
      name: "Dane Donovan",
      phone: "1-428-121-5483",
      email: "luctus.felis@google.edu",
      country: "Germany",
      online: false,
    },
    {
      name: "Ishmael Gill",
      phone: "1-506-286-2936",
      email: "vestibulum.ante@google.net",
      country: "South Korea",
      online: true,
    },
    {
      name: "Asher Forbes",
      phone: "(272) 344-5372",
      email: "tincidunt.tempus.risus@outlook.edu",
      country: "Peru",
      online: false,
    },
    {
      name: "Talon Curry",
      phone: "(711) 715-2851",
      email: "tincidunt.congue@protonmail.couk",
      country: "Vietnam",
      online: true,
    },
    {
      name: "Phelan Stokes",
      phone: "1-142-683-7264",
      email: "ante.ipsum@yahoo.ca",
      country: "South Korea",
      online: false,
    },
    {
      name: "Dale Kelly",
      phone: "(443) 847-4158",
      email: "sapien.cras@google.com",
      country: "Sweden",
      online: false,
    },
    {
      name: "Victoria Gross",
      phone: "1-268-366-1183",
      email: "nisl.nulla@icloud.edu",
      country: "Ireland",
      online: false,
    },
    {
      name: "Cruz Bauer",
      phone: "1-775-776-2671",
      email: "diam.lorem.auctor@google.net",
      country: "South Africa",
      online: true,
    },
    {
      name: "Isabelle Bates",
      phone: "(432) 247-3182",
      email: "dignissim.lacus.aliquam@aol.couk",
      country: "Ukraine",
      online: false,
    },
    {
      name: "Lionel Mcneil",
      phone: "1-491-881-7826",
      email: "nunc@google.edu",
      country: "United Kingdom",
      online: false,
    },
    {
      name: "Hector Gay",
      phone: "(430) 861-4412",
      email: "auctor.vitae.aliquet@yahoo.net",
      country: "Colombia",
      online: false,
    },
    {
      name: "Ahmed Black",
      phone: "(877) 458-6581",
      email: "at.pretium.aliquet@outlook.com",
      country: "Colombia",
      online: true,
    },
    {
      name: "Axel Estes",
      phone: "1-421-836-2642",
      email: "nisi.nibh@protonmail.ca",
      country: "Sweden",
      online: false,
    },
    {
      name: "Holmes Casey",
      phone: "1-433-618-1113",
      email: "pellentesque@aol.net",
      country: "Canada",
      online: true,
    },
    {
      name: "Lesley Hogan",
      phone: "(816) 843-1225",
      email: "enim.curabitur@protonmail.com",
      country: "Poland",
      online: false,
    },
    {
      name: "Melvin Sweeney",
      phone: "(382) 836-8602",
      email: "in.consequat.enim@hotmail.couk",
      country: "Russian Federation",
      online: true,
    },
    {
      name: "Josiah Cervantes",
      phone: "1-685-651-1946",
      email: "facilisis.lorem@protonmail.ca",
      country: "Russian Federation",
      online: true,
    },
    {
      name: "Aretha Burt",
      phone: "1-678-643-9413",
      email: "nam.tempor.diam@outlook.net",
      country: "Norway",
      online: true,
    },
    {
      name: "Noelle Hamilton",
      phone: "(303) 216-2638",
      email: "malesuada.ut@outlook.ca",
      country: "Singapore",
      online: true,
    },
    {
      name: "Quyn Lancaster",
      phone: "1-214-708-2337",
      email: "vitae.purus.gravida@google.couk",
      country: "Italy",
      online: true,
    },
    {
      name: "Nadine Hendricks",
      phone: "(472) 769-6154",
      email: "gravida.mauris.ut@protonmail.net",
      country: "Ukraine",
      online: true,
    },
    {
      name: "Brenna Kirby",
      phone: "1-717-438-2477",
      email: "mauris@yahoo.couk",
      country: "Chile",
      online: true,
    },
    {
      name: "Carol Hogan",
      phone: "1-767-489-8062",
      email: "dictum.eu@icloud.org",
      country: "Costa Rica",
      online: true,
    },
    {
      name: "Wilma Noble",
      phone: "1-286-623-1766",
      email: "cras@icloud.org",
      country: "Mexico",
      online: false,
    },
    {
      name: "Ramona Erickson",
      phone: "(753) 891-6915",
      email: "nulla.integer.vulputate@google.org",
      country: "Nigeria",
      online: true,
    },
    {
      name: "Cara Booker",
      phone: "1-478-565-7854",
      email: "ut@icloud.edu",
      country: "Philippines",
      online: false,
    },
    {
      name: "Maryam Gardner",
      phone: "1-718-449-2629",
      email: "purus.maecenas@icloud.couk",
      country: "France",
      online: true,
    },
    {
      name: "Yardley Gardner",
      phone: "(712) 137-1236",
      email: "a.tortor.nunc@protonmail.org",
      country: "Ireland",
      online: true,
    },
    {
      name: "Velma Ingram",
      phone: "1-826-386-1857",
      email: "pede@yahoo.ca",
      country: "New Zealand",
      online: false,
    },
    {
      name: "Emerald Walters",
      phone: "(625) 721-0542",
      email: "ut@yahoo.com",
      country: "Colombia",
      online: true,
    },
    {
      name: "Dennis Rios",
      phone: "1-636-682-1851",
      email: "dui.fusce.aliquam@icloud.net",
      country: "China",
      online: true,
    },
    {
      name: "Deacon Curry",
      phone: "(543) 485-3006",
      email: "vehicula.pellentesque@yahoo.org",
      country: "China",
      online: true,
    },
    {
      name: "Darrel Goodman",
      phone: "(257) 224-8134",
      email: "ut.lacus@aol.com",
      country: "Pakistan",
      online: true,
    },
    {
      name: "Richard Alston",
      phone: "(599) 682-2038",
      email: "diam.luctus@protonmail.couk",
      country: "Sweden",
      online: false,
    },
    {
      name: "Emmanuel Acevedo",
      phone: "(595) 819-7468",
      email: "venenatis.lacus.etiam@outlook.net",
      country: "Italy",
      online: true,
    },
    {
      name: "Jakeem Trujillo",
      phone: "1-272-321-2822",
      email: "consectetuer@yahoo.com",
      country: "Norway",
      online: false,
    },
    {
      name: "Farrah Huffman",
      phone: "1-248-978-5941",
      email: "lorem@aol.couk",
      country: "New Zealand",
      online: false,
    },
    {
      name: "Brenda Long",
      phone: "(297) 522-7683",
      email: "nonummy.ac.feugiat@icloud.couk",
      country: "Costa Rica",
      online: false,
    },
    {
      name: "Elliott Rowe",
      phone: "1-715-875-9477",
      email: "duis@aol.com",
      country: "Colombia",
      online: true,
    },
    {
      name: "Christian Grant",
      phone: "1-588-566-6665",
      email: "duis.gravida.praesent@outlook.net",
      country: "Vietnam",
      online: true,
    },
    {
      name: "Christine Rhodes",
      phone: "(581) 706-5396",
      email: "mauris.blandit@outlook.couk",
      country: "Turkey",
      online: false,
    },
    {
      name: "Reagan Garner",
      phone: "1-859-194-5117",
      email: "interdum@aol.ca",
      country: "South Korea",
      online: false,
    },
    {
      name: "Yardley Fry",
      phone: "1-422-512-4336",
      email: "et.ultrices@aol.edu",
      country: "Singapore",
      online: false,
    },
    {
      name: "Melanie Chavez",
      phone: "(338) 215-5223",
      email: "rutrum@protonmail.couk",
      country: "Costa Rica",
      online: true,
    },
    {
      name: "Thomas Montgomery",
      phone: "(336) 643-0576",
      email: "dignissim.maecenas@google.net",
      country: "Indonesia",
      online: true,
    },
    {
      name: "Logan Bray",
      phone: "1-916-438-7397",
      email: "nulla.magna@icloud.ca",
      country: "Peru",
      online: false,
    },
    {
      name: "Kimberley Leblanc",
      phone: "1-765-351-5628",
      email: "ut.dolor.dapibus@google.org",
      country: "Canada",
      online: true,
    },
    {
      name: "Xaviera Bowen",
      phone: "1-331-536-7583",
      email: "nulla.facilisi@aol.net",
      country: "Sweden",
      online: false,
    },
    {
      name: "Nicole Greene",
      phone: "(545) 618-6132",
      email: "justo@icloud.net",
      country: "Belgium",
      online: false,
    },
    {
      name: "Ocean Glover",
      phone: "1-780-683-0777",
      email: "fermentum@protonmail.ca",
      country: "Philippines",
      online: true,
    },
    {
      name: "Ocean Logan",
      phone: "(450) 722-6772",
      email: "donec.felis@aol.ca",
      country: "France",
      online: false,
    },
    {
      name: "Montana Santiago",
      phone: "1-562-705-0513",
      email: "leo.elementum@icloud.edu",
      country: "Russian Federation",
      online: true,
    },
    {
      name: "Adam Kelly",
      phone: "1-665-132-3236",
      email: "ac.nulla@outlook.couk",
      country: "Singapore",
      online: true,
    },
    {
      name: "Uta Campbell",
      phone: "1-644-435-5920",
      email: "aliquam.eu.accumsan@protonmail.org",
      country: "Pakistan",
      online: true,
    },
    {
      name: "Guy Sampson",
      phone: "1-109-718-2241",
      email: "lorem.vehicula@hotmail.edu",
      country: "Vietnam",
      online: false,
    },
    {
      name: "Harding Branch",
      phone: "(706) 373-7543",
      email: "enim.consequat@yahoo.com",
      country: "Mexico",
      online: true,
    },
    {
      name: "Devin Davidson",
      phone: "(424) 186-8033",
      email: "at.risus.nunc@yahoo.ca",
      country: "Costa Rica",
      online: true,
    },
    {
      name: "Ray Nguyen",
      phone: "1-539-604-7642",
      email: "mauris.nulla.integer@yahoo.edu",
      country: "Poland",
      online: true,
    },
    {
      name: "Meghan Lawson",
      phone: "1-203-468-3356",
      email: "sed.nec@icloud.com",
      country: "France",
      online: false,
    },
    {
      name: "Deborah Holder",
      phone: "1-436-134-5843",
      email: "neque.venenatis@google.couk",
      country: "Nigeria",
      online: true,
    },
    {
      name: "Finn Lucas",
      phone: "1-419-581-4648",
      email: "nisi.dictum@google.ca",
      country: "Norway",
      online: false,
    },
    {
      name: "Tucker Allen",
      phone: "1-561-434-1179",
      email: "quisque.porttitor@outlook.ca",
      country: "Peru",
      online: true,
    },
    {
      name: "Aaron Kemp",
      phone: "(527) 462-4437",
      email: "lobortis.quam.a@outlook.couk",
      country: "Ireland",
      online: true,
    },
    {
      name: "Wylie Thompson",
      phone: "1-718-308-9710",
      email: "nec.urna@yahoo.edu",
      country: "Mexico",
      online: false,
    },
    {
      name: "Yoko Gay",
      phone: "(522) 594-1698",
      email: "est.nunc@outlook.org",
      country: "China",
      online: true,
    },
    {
      name: "Jeanette Martin",
      phone: "1-668-661-5154",
      email: "dui.cras@protonmail.net",
      country: "Peru",
      online: true,
    },
    {
      name: "Hilda Cobb",
      phone: "(427) 314-8572",
      email: "sem.mollis@hotmail.net",
      country: "Canada",
      online: true,
    },
    {
      name: "Dana Sampson",
      phone: "(987) 502-3653",
      email: "odio.phasellus.at@google.com",
      country: "France",
      online: true,
    },
    {
      name: "Aladdin Miranda",
      phone: "(385) 368-1837",
      email: "risus.duis@aol.com",
      country: "Brazil",
      online: false,
    },
    {
      name: "Lars Mccoy",
      phone: "1-873-331-6923",
      email: "velit@protonmail.org",
      country: "Singapore",
      online: false,
    },
    {
      name: "Ivor Lopez",
      phone: "(533) 333-2808",
      email: "eu@protonmail.org",
      country: "India",
      online: true,
    },
    {
      name: "Alfreda Fry",
      phone: "(127) 681-7787",
      email: "lobortis.tellus@outlook.org",
      country: "Sweden",
      online: true,
    },
    {
      name: "Rashad Mccray",
      phone: "1-355-128-8888",
      email: "a.feugiat@hotmail.edu",
      country: "Chile",
      online: false,
    },
    {
      name: "Ishmael David",
      phone: "1-363-698-8163",
      email: "eleifend.vitae@hotmail.org",
      country: "Germany",
      online: false,
    },
    {
      name: "Daria Sosa",
      phone: "1-332-273-6434",
      email: "a@google.couk",
      country: "Norway",
      online: true,
    },
    {
      name: "Laurel Crane",
      phone: "(405) 752-7208",
      email: "quisque.purus.sapien@yahoo.ca",
      country: "Philippines",
      online: false,
    },
    {
      name: "Hyacinth Marsh",
      phone: "(741) 826-9743",
      email: "mauris.blandit@protonmail.edu",
      country: "New Zealand",
      online: true,
    },
    {
      name: "Cheryl Harper",
      phone: "1-428-945-6647",
      email: "est@yahoo.ca",
      country: "New Zealand",
      online: true,
    },
    {
      name: "Sierra Harrison",
      phone: "1-975-451-7741",
      email: "non.hendrerit@icloud.org",
      country: "Philippines",
      online: false,
    },
    {
      name: "Wayne Fischer",
      phone: "(884) 274-8370",
      email: "suspendisse.tristique.neque@aol.org",
      country: "Canada",
      online: true,
    },
    {
      name: "Lyle Zamora",
      phone: "(178) 236-9531",
      email: "convallis@yahoo.net",
      country: "Singapore",
      online: false,
    },
    {
      name: "Quinlan Petersen",
      phone: "(711) 198-4323",
      email: "eget.varius@protonmail.edu",
      country: "Ireland",
      online: true,
    },
    {
      name: "Graham Duffy",
      phone: "(672) 371-5525",
      email: "sed.nec@outlook.couk",
      country: "South Korea",
      online: false,
    },
    {
      name: "Karina Park",
      phone: "(424) 636-5824",
      email: "integer@aol.ca",
      country: "China",
      online: false,
    },
    {
      name: "Samantha Crawford",
      phone: "(863) 545-5666",
      email: "placerat.eget@google.edu",
      country: "Canada",
      online: true,
    },
    {
      name: "Azalia Brady",
      phone: "(436) 904-5863",
      email: "consectetuer@yahoo.net",
      country: "Australia",
      online: true,
    },
    {
      name: "Beatrice Fisher",
      phone: "(585) 377-7257",
      email: "nullam.velit.dui@outlook.ca",
      country: "Chile",
      online: true,
    },
  ]);
});

app.listen(PORT);
