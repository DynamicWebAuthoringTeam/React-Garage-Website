
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
        fullSpec: [
            "Type Roof Box",
            "Volume 470 Litres",
            "Weight 14.2kg",
            "Width across Roof 750mm",
            "Type of Opening Dual",
            "Locking Mechanism KeyLock",
            "Colour Black"
        ],
        featuredPart: "yes",
        wasPrice: 300,
    },
    {
        id: "7",
        price: "19.99",
        make : "Halfords",
        year: "1968–1998",
        name: "Steering Wheel Lock",
        model: "Double Bar",
        description: "Steering Wheel Lock for Standard Car",
        primaryImage: "/images/parts/7.jpg",
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
        name: "Number Plate Parking Sensor",
        model: "KX 0284",
        description: "Parking Sensor",
        primaryImage: "/images/parts/8.jpg",
        fullSpec: [
            "Type Parking Sensor",
            "Mounting Numberplate",
            "Number of Sensors 3",
            "Audio Warning Yes"
        ],
        featuredPart: "no",
        wasPrice: 74.99,
    },
    {
        id: "9",
        price: "30",
        make : "Shell",
        year: "N/A",
        name: "Helix 5W-30 Ultra Professional AF Ford Fully Syn M2C 913D",
        model: "Ford",
        description: "Parking Sensor",
        primaryImage: "/images/parts/9.jpg",
        fullSpec: [
            "Type Oil",
            "5 Ltrs",
        ],
        featuredPart: "no",
        wasPrice: 54,
        },
        {
        id: "10",
        price: "34.54",
        make : "Philips",
        year: "2016",
        name: "Philips 12V H7 Racing Vision GT200 +200% Brighter Upgrade - twin pack",
        model: "All",
        description: "Light Upgrades",
        primaryImage: "/images/parts/10.jpg",
        fullSpec: [
            "Type Car Bulbs",
            "twin pack",
            "GT200 +200% Brighter Upgrade",
            "Fully road legal for an enjoyable drive",
            "Extend your beam by 80 metres"
        ],
        featuredPart: "no",
        wasPrice: 37.88,
    },
    {
        id: "11",
        price: "49.03",
        make : "Pioneer",
        year: "2016",
        name: "Pioneer TS-G6930F Speaker Unit",
        model: "All",
        description: "Speaker Unit",
        primaryImage: "/images/parts/11.jpg",
        fullSpec: [
            "400 Watts Max. Power",
	    "Injected Molded Polypropylene (IMPP) composite Cone Woofer",
	    "Patented Pioneer P.F.S.S Spider",
        "2 Cone midrange and 3/8 Dome tweeter"
        ],
        featuredPart: "no",
        wasPrice: 55, 
    }
]