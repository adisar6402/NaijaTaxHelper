export interface VatFreeItem {
  name: string;
  description: string;
  category: "food" | "baby" | "education" | "healthcare" | "utilities";
}

export const vatFreeItems: VatFreeItem[] = [
  // Food & Beverages
  {
    name: "Rice (Local & Imported)",
    description: "All varieties of rice including local and imported",
    category: "food"
  },
  {
    name: "Bread",
    description: "All types of bread and flour-based products",
    category: "food"
  },
  {
    name: "Fish (Fresh & Frozen)",
    description: "Fresh and frozen fish of all varieties",
    category: "food"
  },
  {
    name: "Meat (Beef, Chicken, Goat)",
    description: "Fresh and frozen meat products",
    category: "food"
  },
  {
    name: "Fruits & Vegetables",
    description: "Fresh fruits and vegetables",
    category: "food"
  },
  {
    name: "Milk & Dairy Products",
    description: "Fresh milk, yogurt, and basic dairy products",
    category: "food"
  },
  {
    name: "Beans & Lentils",
    description: "All varieties of beans and legumes",
    category: "food"
  },
  {
    name: "Palm Oil",
    description: "Local palm oil and cooking oils",
    category: "food"
  },
  {
    name: "Salt",
    description: "Table salt and cooking salt",
    category: "food"
  },
  {
    name: "Garri & Cassava Products",
    description: "Garri, cassava flour, and related products",
    category: "food"
  },
  {
    name: "Yam & Plantain",
    description: "Fresh yam, plantain, and tubers",
    category: "food"
  },
  {
    name: "Maize/Corn",
    description: "Fresh and dried corn/maize",
    category: "food"
  },

  // Baby Items
  {
    name: "Baby Diapers",
    description: "All sizes and brands of baby diapers",
    category: "baby"
  },
  {
    name: "Baby Formula",
    description: "Infant formula and baby milk powder",
    category: "baby"
  },
  {
    name: "Baby Food",
    description: "Packaged baby food and cereals",
    category: "baby"
  },
  {
    name: "Baby Wipes",
    description: "Baby cleaning wipes and wet tissues",
    category: "baby"
  },
  {
    name: "Baby Bottles",
    description: "Feeding bottles and accessories",
    category: "baby"
  },
  {
    name: "Baby Clothing",
    description: "Basic baby clothing items (0-24 months)",
    category: "baby"
  },
  {
    name: "Baby Soap & Shampoo",
    description: "Baby-specific hygiene products",
    category: "baby"
  },

  // Education
  {
    name: "Educational Books",
    description: "Textbooks, workbooks, and educational materials",
    category: "education"
  },
  {
    name: "Exercise Books",
    description: "School exercise books and notebooks",
    category: "education"
  },
  {
    name: "Pencils & Pens",
    description: "Writing materials for students",
    category: "education"
  },
  {
    name: "School Uniforms",
    description: "Basic school uniform materials",
    category: "education"
  },
  {
    name: "Educational Software",
    description: "Learning software and educational apps",
    category: "education"
  },
  {
    name: "Scientific Calculators",
    description: "Basic scientific calculators for students",
    category: "education"
  },
  {
    name: "Art Supplies",
    description: "Basic art materials for schools",
    category: "education"
  },

  // Healthcare
  {
    name: "Essential Medicines",
    description: "WHO essential drugs list medications",
    category: "healthcare"
  },
  {
    name: "Paracetamol & Basic Painkillers",
    description: "Over-the-counter pain relief medications",
    category: "healthcare"
  },
  {
    name: "Antibiotics (Prescribed)",
    description: "Basic prescribed antibiotic medications",
    category: "healthcare"
  },
  {
    name: "Antimalarial Drugs",
    description: "Malaria prevention and treatment drugs",
    category: "healthcare"
  },
  {
    name: "Vitamins & Supplements",
    description: "Basic vitamin and mineral supplements",
    category: "healthcare"
  },
  {
    name: "Medical Devices",
    description: "Basic medical equipment and devices",
    category: "healthcare"
  },
  {
    name: "First Aid Supplies",
    description: "Bandages, antiseptics, and first aid items",
    category: "healthcare"
  },
  {
    name: "Blood Pressure Monitors",
    description: "Home blood pressure monitoring devices",
    category: "healthcare"
  },

  // Utilities
  {
    name: "Electricity",
    description: "Residential electricity consumption",
    category: "utilities"
  },
  {
    name: "Water Supply",
    description: "Public water supply services",
    category: "utilities"
  },
  {
    name: "Public Transportation",
    description: "BRT, public buses, and mass transit",
    category: "utilities"
  },
  {
    name: "Domestic Gas (Cooking Gas)",
    description: "LPG for household cooking purposes",
    category: "utilities"
  },
  {
    name: "Kerosene",
    description: "Household kerosene for cooking/lighting",
    category: "utilities"
  },
  {
    name: "Solar Panels (Residential)",
    description: "Home solar power systems and components",
    category: "utilities"
  }
];
