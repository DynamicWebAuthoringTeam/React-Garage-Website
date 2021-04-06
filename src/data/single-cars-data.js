
// This Variable Represents all the Cars being sold by the website and their sellers data.
// This Variable will be used to render content dynamically on pages by mapping through the
// Elements with in the const Array.
// Is Mock a Database containing Car information
export const singleCarsData = [
    {
        id : "1",
        make : "Ford",
        model: "Fiesta WRC",
        year : "2020",
        price : 100000,
        miles : 2000,
        condition: "Perfect",
        // full spec Reference: https://en.wikipedia.org/wiki/Ford_Fiesta_RS_WRC
        // referenced info from wikipedia, we do not take credit for this data.
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ],
        primaryImage: "/images/cars/1.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        lat:"54.588632",
        long:"-5.924312",
        sellerName: "David Strong",
        sellerMobile: "0799239158",
        sellerEmail: "dstrong@gmail.com",
        sellerAddress: "123 Rally Cars street",
        sellerNotes: "Won in a raffle trying to sell it, its currently on the omeru road",
    },
    {
        id : "2",
        make : "Hyundai",
        model: "I20 WRC",
        year : "2020",
        price : 100000.99,
        miles : 2000,
        condition: "Perfect",
        // full spec Reference: https://en.wikipedia.org/wiki/Hyundai_i20_Coupe_WRC
        // referenced info from wikipedia, we do not take credit for this data.
        fullSpec:[
            "Suspension: MacPherson",
            "Length: 4,100 mm",
            "Width:	1,875 mm",
            "Axle track: 1,665 mm",
            "Wheelbase:	2,570 mm",
            "Engine: Gamma 1,600 cc (97.6 cu in) I4 turbo direct injection",
            "Transmission:	Sequential gearbox, six forward gears and one reverse with paddle shift",
            "Four-wheel drive",
            "Hydraulic in centre, mechanical with ramps in front and rear differential",
            "Weight:	1,190 kg",
            "Fuel:	Panta",
            "Lubricants:	Shell Helix Ultra",
            "Brakes:	Ventilated Brembo disc brakes (370mm on tarmac, 300mm on gravel). Air-cooled 4 piston callipers.",
            "Tyres:	Pirelli",
            "Clutch:	Cerametallic twin-disk"
        ],
        primaryImage: "/images/cars/2.jpg",
        otherImages: [
            "/images/cars/2-1.jpg",
            "/images/cars/2-2.png",
            "/images/cars/2-3.png",
        ],
        lat:"55.588632",
        long:"-6.924312",
        sellerName: "Michael Jordan",
        sellerMobile: "073949324",
        sellerEmail: "mj@gmail.com",
        sellerAddress: "123 orange hill road",
        sellerNotes: "ring the bell at the gate",
    },
    {
        id : "3",
        make : "Toyota",
        model: "Yaris",
        year : "2020",
        price : 80000.99,
        miles : 300,
        condition: "Perfect",
        // full spec Reference: https://en.wikipedia.org/wiki/Toyota_Yaris_WRC
        // referenced info from wikipedia, we do not take credit for this data.
        fullSpec:[
            "Suspension:	MacPherson",
            "Length:	4,085 mm",
            "Width:	1,875 mm",
            "Wheelbase:	2,511 mm",
            "Engine:	Toyota Gazoo Racing 1.6 L (98 cu in) I4, 16-valve turbocharged",
            "Transmission:	6-speed hydraulic shift",
            "all wheel drive, active centre and mechanical front and rear differentials",
            "Weight:	1,190 kg",
            "Fuel:	Panta (Official fuel supplier of WRC)",
            "Lubricants:	Mobil 1",
            "Brakes:	300mm gravel / 370mm asphalt",
            "Tyres:	Pirelli",
            "Clutch:	Double plate"
        ],
        primaryImage: "/images/cars/3.jpg",
        otherImages: [
            "/images/cars/3-1.jpg",
            "/images/cars/3-2.jpg",
            "/images/cars/3-3.jpg",
        ],
        lat:"54.588632",
        long:"-5.924312",
        sellerName: "Joseph Brown",
        sellerMobile: "903847283",
        sellerEmail: "JosephBrown@gmail.com",
        sellerAddress: "123 hillfort road",
        sellerNotes: "no notes given",
    },
    {
        id : "4",
        make : "Citroën",
        model: "C3",
        year : "2020",
        price : 120000.99,
        miles : 600,
        condition: "Perfect",
        // full spec Reference: https://en.wikipedia.org/wiki/Citro%C3%ABn_C3_WRC
        // referenced info from wikipedia, we do not take credit for this data.
        fullSpec:[
            "Suspension:	MacPherson",
            "Length:	4,128 mm",
            "Width:	1,875 mm",
            "Axle track:	1,670 mm",
            "Wheelbase:	2,540 mm",
            "Engine:	THP 1.6 L (98 cu in) I4 Turbocharger",
            "Transmission:	Six-speed sequential",
            "4-wheel drive, mechanical front and rear self-locking hydraulically-controlled central differential",
            "Weight:	1,190 kg",
            "Brakes	Front: Ventilated disks, 370 mm (tarmac) and 300 mm (gravel) Water-cooled four-piston callipers (tarmac)",
            "Rear: Ventilated disks, 330 mm (tarmac) and 300 mm (gravel) Four-piston callipers",
            "Tyres:	Michelin",
            "Clutch:	Cerametallic twin-disk"
        ],
        primaryImage: "/images/cars/4.png",
        otherImages: [
            "/images/cars/4-1.jpg",
            "/images/cars/4-2.jpg",
            "/images/cars/4-3.jpg",
        ],
        lat:"54.588632",
        long:"-5.924312",
        sellerName: "John Smith",
        sellerMobile: "069569123",
        sellerAddress: "123 Paris street",
        sellerNotes: "I live in the one with the red door",
    },
    {
        id : "5",
        make : "Subaru",
        model: "Impreza",
        year : "1990",
        price : 20000.00,
        miles : 3000,
        condition: "Perfect",
        // full spec Reference: https://en.wikipedia.org/wiki/Subaru_Impreza_WRC
        // referenced info from wikipedia, we do not take credit for this data.
        fullSpec:[
            "Length: 4,340 mm (170.9 in)",
            "Width:	1,690 mm (66.5 in)",
            "Height:	1,390 mm (54.7 in)",
            "Axle track:	1,465 mm (57.7 in)",
            "Wheelbase: 2,520 mm (99.2 in)",
            "Engine:	EJ207 1,994 cc (121.7 cu in) F4 turbocharged",
            "Front transverse longitudinal",
            "Transmission: Six-speed (Sequential after 1999) 4-wheel drive",
            "Weight:	1,200 kg (2,645.5 lb) (93–96)",
            "Tyres: BFGoodrich Michelin Pirelli"
        ],
        primaryImage: "/images/cars/5.jpg",
        otherImages: [
            "/images/cars/5-1.jpg",
            "/images/cars/5-2.jpg",
            "/images/cars/5-3.jpg",
        ],
        lat:"54.588632",
        long:"-5.924312",
        sellerName: "Colin McRae",
        sellerMobile: "555-1234",
        sellerAddress: "123 scotland street",
        sellerEmail: "ColinMcRae@gmail.com",
        sellerNotes: "I have too many of these."
    },
    {
        id : "6",
        make : "Skoda",
        model: "Fabia",
        year : "2019",
        price : 70000.00,
        miles : 5435,
        condition: "Perfect",
        // full spec Reference: https://en.wikipedia.org/wiki/%C5%A0koda_Fabia_WRC
        // referenced info from wikipedia, we do not take credit for this data.
        fullSpec:[
            "Length	4,002 mm (157.6 in)",
            "Width	1,770 mm (69.7 in)",
            "Height	1,429 mm (56.3 in)",
            "Wheelbase	2,462 mm (96.9 in)",
            "Engine	2,000 cc (122.0 cu in) I4 longitudinal turbo charge",
            "Front transverse",
            "Transmission	Six-speed sequential",
            "4-wheel drive",
            "Weight	1,230 kg (2,711.7 lb)",
            "Tyres	Michelin"
        ],
        primaryImage: "/images/cars/6.jpg",
        otherImages: [
            "/images/cars/6-1.jpg",
            "/images/cars/6-2.jpg",
            "/images/cars/6-3.jpg",
        ],
        lat:"54.588632",
        long:"-5.924312",
        sellerName: "Bob Wilson",
        sellerMobile: "0783482323",
        sellerAddress: "123 Fabia land",
        sellerEmail: "bw@gmail.com",
        sellerNotes: "Bought a new one"
    }
];