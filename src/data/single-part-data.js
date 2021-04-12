
// This Variable Represents all the Parts being sold by the website.
// This Variable will be used to render content dynamically on pages by mapping through the
// Elements with in the const Array.
// Is Mock a Database containing part information
export const allPartsData = [
    {
        id: "1",
        price: "100",
        make: "Ford Motor Company",
        year: "1968–1998",
        name: "Mustang Boss 429 engine",
        model: "TMC 1000",
        description: "Mustang Boss 429 engine",
        primaryImage: "/images/parts/1.jpg",
        fullSpec: [],
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        featuredPart: "yes",
        wasPrice: 111,
    },
    {
        id: "2",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Kenwood Axle Shaft",
        model: "ABC 8080",
        description: "An Axle Shaft for a Kenwood automatic transmission",
        fullSpec:[
            "No further information is given"
        ],
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        primaryImage: "/images/parts/2.png",
        featuredPart: "yes",
        wasPrice: 1050,    
    },
    {
        id: "3",
        make : "Goodwood",
        price: "3000",
        year: "2010",
        name: "Standard Rim and tires, set of 4",
        model: "XPR 123d",
        description: "Tires for a standard IEE123 wheel fit",
        fullSpec:[
            "No further information is given"
        ],
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        primaryImage: "/images/parts/3.jpg",
        featuredPart: "yes",
        wasPrice: 4000,
    },
    {
        id: "4",
        price: "1000",
        make : "Ford",
        year: "1998",
        name: "Rear door",
        model: "ABC 8080",
        description: "Ford Escort Door right side rear",
        primaryImage: "/images/parts/4.jpg",
        fullSpec: [
            "No further information is given"
        ],
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        featuredPart: "no",
        wasPrice: 1200,
    },
    {
        id: "5",
        price: "160",
        make : "Halfords",
        year: "1968–1998",
        name: "Halfords 12V Battery",
        model: "096AGM",
        description: "Halfords 12V Battery 70Ah",
        primaryImage: "/images/parts/5.jpg",
        fullSpec: [
            "Engine Starts Number 360000",
            "Guarantee Number 5",
            "Type Start-Stop (AGM)",
            "Startup Power 760 amps",
            "Capacity 70Ah",
            "Recommended Charge Rate (Amps) 4A",
            "Dimensions (LxDxH) 278x175x190mm",
            "Weight (kg) 20.5"
        ],
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        featuredPart: "yes",
        wasPrice: 200,
    },
    {
        id: "6",
        price: "263",
        make : "Halfords",
        year: "1968–1998",
        name: "470L Black Roof Box",
        model: "AX928",
        description: "Halfords 470L Black Roof Box",
        primaryImage: "/images/parts/6.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    {
        id: "7",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/1.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        featuredPart: "yes",
        wasPrice: 300,
    },
    {
        id: "8",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/2.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    {
        id: "9",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/3.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    {
        id: "10",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/4.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    {
        id: "11",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/5.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    {
        id: "12",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/6.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    {
        id: "13",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/1.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    ,
    {
        id: "14",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/2.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    ,
    {
        id: "15",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/3.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    {
        id: "16",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/4.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    {
        id: "17",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/5.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Type Steering Wheel Lock"
        ],
        featuredPart: "yes",
        wasPrice: 24.99,
    },
    {
        id: "8",
        price: "49.99",
        make : "Veba",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/1.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        fullSpec: [
            "Chassis: Reinforced body with welded, multi-point roll cage",
            "Length: 3,963 mm (156.0 in)",
            "Width: 1,820 mm (72 in)",
            "Wheelbase: 2,480 mm (98 in)",
            "Engine: Ford EcoBoost engine 1.6 L (98 cu in) 4-cylinder, 16-valve turbocharged",
            "Transmission: 6-speed M-Sport / X-Trac six-speed semi-automatic transmission gearbox with hydraulic shift",
            "Weight: 1,200 kg (2,646 lb)",
            "Types: Michelin"
        ]
    },
    {
        id: "20",
        price: "1000",
        make : "Kenwood",
        year: "1968–1998",
        name: "Ford Mustang Boss 429 engine",
        model: "ABC 8080",
        description: "",
        primaryImage: "/images/parts/2.jpg",
        otherImages: [
            "/images/cars/1-1.jpg",
            "/images/cars/1-2.jpg",
            "/images/cars/1-3.jpg",
        ],
        featuredPart: "no",
        wasPrice: 74.99,
    }
]