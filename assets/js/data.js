/**
 * Wahlco Machine Tools — Master Data Model
 * Ahmedabad, Kathwada, Gujarat, India
 */

export const COMPANY = {
  name: "Wahlco Machine Tools",
  tagline: "Welding supply store & Engineering Works",
  established: 2008,
  yearsInOperation: "18+",
  proprietor: "Management Team & Works Director",
  gst: "24AAACG1092F1ZK",
  phoneDisplay: "+91 98474 69243",
  phoneRaw: "+919847469243",
  waNumber: "919847469243",
  email: "contact@wahlcomachinetools.in",
  address: "Shed no- 50, A5 B.N. Estate, nr. Kathwada GIDC, nr. Sardar Patel Ring Road, Odhav Industrial Estate, Nikol, Ahmedabad, Kathwada, Gujarat 382350, India",
  addressShort: "Ahmedabad, Kathwada, Gujarat",
  coordinates: "23.0225° N, 72.5714° E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "20+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "wahlco-machine-tools-fiber-laser",
    "code": "FL-01",
    "name": "CNC High-Power Fiber Laser Metal Sheet Cutting",
    "category": "Laser Processing",
    "spec": "Ultra-precise fiber laser profiling for stainless steel, mild steel, aluminum, brass, and copper with micro-burr smooth edges.",
    "specsList": [
      {
        "label": "Laser Source",
        "val": "2 kW to 12 kW Raycus / IPG Fiber"
      },
      {
        "label": "Working Table",
        "val": "1500 \u00d7 3000 mm / 2000 \u00d7 6000 mm Shuttle"
      },
      {
        "label": "Cutting Thickness",
        "val": "0.5 mm up to 30 mm MS / 25 mm SS"
      },
      {
        "label": "Repeatability",
        "val": "\u00b1 0.02 mm Precision"
      }
    ],
    "price": "\u20b91,85,000",
    "priceUnit": "/ project lot"
  },
  {
    "id": "wahlco-machine-tools-sheet-bending",
    "code": "SM-02",
    "name": "Multi-Axis CNC Hydraulic Press Brake Sheet Bending",
    "category": "Sheet Bending",
    "spec": "High-tonnage multi-axis CNC press brake bending ensuring accurate angle consistency across heavy production batches.",
    "specsList": [
      {
        "label": "Bending Capacity",
        "val": "100 Ton to 350 Ton"
      },
      {
        "label": "Max Bend Length",
        "val": "Up to 4000 mm Continuous"
      },
      {
        "label": "Backgauge Accuracy",
        "val": "\u00b1 0.01 mm CNC Servo Backgauge"
      },
      {
        "label": "Materials",
        "val": "CRCA, SS 304/316, Chequered, Aluminum"
      }
    ],
    "price": "\u20b948,000",
    "priceUnit": "/ batch"
  },
  {
    "id": "wahlco-machine-tools-welded-fabrication",
    "code": "WA-03",
    "name": "Heavy Industrial Structural Welding & Machine Enclosures",
    "category": "Heavy Fabrication",
    "spec": "ASME / AWS certified MIG/TIG welding for machine chassis, structural skid frames, hoppers, and custom industrial enclosures.",
    "specsList": [
      {
        "label": "Welding Quality",
        "val": "AWS D1.1 / ASME Sec IX Certified"
      },
      {
        "label": "Surface Finishing",
        "val": "Shot Blasting & Epoxy Powder Coating"
      },
      {
        "label": "Inspection",
        "val": "100% Dye Penetrant & Dimensional QA"
      },
      {
        "label": "Capacity",
        "val": "Light Assemblies up to 10-Ton Skids"
      }
    ],
    "price": "\u20b982,000",
    "priceUnit": "/ assembly"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
