export interface Translation {
  nav: {
    home: string;
    checker: string;
    calculator: string;
    vatFree: string;
    remoteGuide: string;
    letters: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    checkEligibility: string;
    calculateSavings: string;
  };
  eligibility: {
    title: string;
    subtitle: string;
    annualIncome: string;
    annualRent: string;
    employmentType: string;
    employee: string;
    businessOwner: string;
    freelancer: string;
    checkEligibility: string;
    payeExempt: string;
    stampDutyExempt: string;
    estimatedSavings: string;
    congratulations: string;
    notEligible: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    monthlySalary: string;
    additionalIncome: string;
    currentTaxRate: string;
    calculate: string;
    results: string;
    annualIncome: string;
    currentTax: string;
    newTax: string;
    annualSavings: string;
    monthlySavings: string;
  };
  letters: {
    title: string;
    subtitle: string;
    employerLetter: string;
    landlordLetter: string;
    employeeName: string;
    companyName: string;
    generate: string;
    tenantName: string;
    landlordName: string;
    propertyAddress: string;
  };
  vatFree: {
    title: string;
    subtitle: string;
    search: string;
    categories: {
      all: string;
      food: string;
      baby: string;
      education: string;
      healthcare: string;
      utilities: string;
    };
  };
  remoteGuide: {
    title: string;
    subtitle: string;
    keyBenefits: string;
    requirements: string;
    howToApply: string;
  };
  footer: {
    description: string;
    builtBy: string;
    quickLinks: string;
    resources: string;
    languageSupport: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      checker: "Eligibility Checker",
      calculator: "PAYE Calculator", 
      vatFree: "VAT-Free Items",
      remoteGuide: "Remote Work Guide",
      letters: "Download Letters"
    },
    hero: {
      title1: "Navigate Nigeria's",
      title2: "2025 Tax Reforms",
      subtitle: "Free tools to check your tax exemptions, calculate savings, and generate official letters. Built for everyday Nigerians.",
      checkEligibility: "Check My Eligibility",
      calculateSavings: "Calculate Savings"
    },
    eligibility: {
      title: "Tax Eligibility Checker",
      subtitle: "Find out if you qualify for PAYE exemptions and stamp duty relief under Nigeria's 2025 tax reforms",
      annualIncome: "Annual Income (₦)",
      annualRent: "Annual Rent (₦)",
      employmentType: "Employment Type",
      employee: "Employee",
      businessOwner: "Business Owner", 
      freelancer: "Freelancer",
      checkEligibility: "Check My Eligibility",
      payeExempt: "PAYE Exempt",
      stampDutyExempt: "Stamp Duty Exempt",
      estimatedSavings: "Estimated Savings",
      congratulations: "Congratulations! You qualify for tax exemptions.",
      notEligible: "Based on your income, you may not qualify for these specific exemptions."
    },
    calculator: {
      title: "PAYE Tax Calculator",
      subtitle: "Calculate your potential tax savings under the new PAYE structure",
      monthlySalary: "Monthly Salary (₦)",
      additionalIncome: "Additional Monthly Income (₦)",
      currentTaxRate: "Current Tax Rate (%)",
      calculate: "Calculate Savings",
      results: "Your Tax Calculation Results",
      annualIncome: "Annual Income",
      currentTax: "Current Annual Tax",
      newTax: "New Annual Tax",
      annualSavings: "Annual Savings",
      monthlySavings: "Monthly Savings"
    },
    letters: {
      title: "Letter Generator",
      subtitle: "Generate official exemption letters for your employer or landlord",
      employerLetter: "Employer Exemption Letter",
      landlordLetter: "Landlord Exemption Letter", 
      employeeName: "Employee Name",
      companyName: "Company Name",
      generate: "Generate Letter",
      tenantName: "Tenant Name",
      landlordName: "Landlord Name",
      propertyAddress: "Property Address"
    },
    vatFree: {
      title: "VAT-Free Items Directory",
      subtitle: "Comprehensive list of items exempt from VAT under Nigeria's tax reforms",
      search: "Search items...",
      categories: {
        all: "All Categories",
        food: "Food & Beverages",
        baby: "Baby Products",
        education: "Education",
        healthcare: "Healthcare",
        utilities: "Utilities"
      }
    },
    remoteGuide: {
      title: "Remote Worker Tax Guide",
      subtitle: "Essential tax information for digital nomads and remote workers in Nigeria",
      keyBenefits: "Key Benefits for Remote Workers",
      requirements: "Requirements & Documentation",
      howToApply: "How to Apply for Exemptions"
    },
    footer: {
      description: "Free tools to help Nigerians understand and benefit from the 2025 tax reforms. Built with 💚 for the Nigerian people.",
      builtBy: "Built by Abdulrahman Adisa Amuda 🇳🇬",
      quickLinks: "Quick Links", 
      resources: "Resources",
      languageSupport: "Now supporting 5 languages: English, Yoruba, Hausa, Igbo, and Pidgin."
    }
  },
  yo: {
    nav: {
      home: "Ile",
      checker: "Ayewo Yato",
      calculator: "Iṣiro PAYE",
      vatFree: "Awọn Ohun VAT-Free", 
      remoteGuide: "Itọsọna Iṣẹ Latọna",
      letters: "Gba Awọn Lẹta"
    },
    hero: {
      title1: "Rin ina Naijiria",
      title2: "Awọn Atunṣe Owo-ori 2025",
      subtitle: "Awọn irinṣẹ ọfẹ lati ṣayẹwo awọn ifagbara owo-ori rẹ, ṣe iṣiro awọn ifowopamọ, ati ṣe awọn lẹta osise. Ti a kọ fun awọn ara Naijiria lojoojumọ.",
      checkEligibility: "Ṣayẹwo Yato Mi",
      calculateSavings: "Ṣe Iṣiro Awọn Ifowopamọ"
    },
    eligibility: {
      title: "Ayewo Yato Owo-ori",
      subtitle: "Wa boya o yato fun awọn ifagbara PAYE ati iderun owo-ori asẹ labẹ awọn atunṣe owo-ori Naijiria 2025",
      annualIncome: "Owo-wọle Odun (₦)",
      annualRent: "Owo Iyalo Odun (₦)",
      employmentType: "Iru Iṣẹ",
      employee: "Oṣiṣẹ",
      businessOwner: "Onile Iṣowo",
      freelancer: "Oṣiṣẹ Ominira",
      checkEligibility: "Ṣayẹwo Yato Mi",
      payeExempt: "PAYE Yato",
      stampDutyExempt: "Stamp Duty Yato", 
      estimatedSavings: "Awọn Ifowopamọ Ti a Pinnu",
      congratulations: "Eku oriire! O yato fun awọn ifagbara owo-ori.",
      notEligible: "Da lori owo-wọle rẹ, o le ma yato fun awọn ifagbara pato wọnyi."
    },
    calculator: {
      title: "Iṣiro Owo-ori PAYE",
      subtitle: "Ṣe iṣiro awọn ifowopamọ owo-ori rẹ labẹ eto PAYE tuntun",
      monthlySalary: "Owo-iṣẹ Oṣu (₦)",
      additionalIncome: "Owo-wọle Afikun Oṣu (₦)",
      currentTaxRate: "Iwọn Owo-ori Lọwọlọwọ (%)",
      calculate: "Ṣe Iṣiro Awọn Ifowopamọ",
      results: "Awọn Abajade Iṣiro Owo-ori Rẹ",
      annualIncome: "Owo-wọle Odun",
      currentTax: "Owo-ori Odun Lọwọlọwọ",
      newTax: "Owo-ori Odun Tuntun",
      annualSavings: "Awọn Ifowopamọ Odun",
      monthlySavings: "Awọn Ifowopamọ Oṣu"
    },
    letters: {
      title: "Olupilẹṣẹ Lẹta",
      subtitle: "Ṣe awọn lẹta ifagbara osise fun agbanisiṣẹ tabi onile rẹ",
      employerLetter: "Lẹta Ifagbara Agbanisiṣẹ",
      landlordLetter: "Lẹta Ifagbara Onile",
      employeeName: "Orukọ Oṣiṣẹ",
      companyName: "Orukọ Ile-iṣẹ",
      generate: "Ṣe Lẹta",
      tenantName: "Orukọ Ayalegbe",
      landlordName: "Orukọ Onile", 
      propertyAddress: "Adirẹsi Ohun-ini"
    },
    vatFree: {
      title: "Atokọ Awọn Ohun VAT-Free",
      subtitle: "Atokọ pipe ti awọn ohun ti ko ni VAT labẹ awọn atunṣe owo-ori Naijiria",
      search: "Wa awọn ohun...",
      categories: {
        all: "Gbogbo Awọn Ika",
        food: "Ounjẹ ati Awọn Ohun Mimu",
        baby: "Awọn Ohun Ọmọ",
        education: "Ẹkọ",
        healthcare: "Itọju Ilera",
        utilities: "Awọn Ohun Elo"
      }
    },
    remoteGuide: {
      title: "Itọsọna Owo-ori Oṣiṣẹ Latọna",
      subtitle: "Alaye owo-ori pataki fun awọn digital nomads ati awọn oṣiṣẹ latọna ni Naijiria",
      keyBenefits: "Awọn Anfani Pataki fun Awọn Oṣiṣẹ Latọna",
      requirements: "Awọn Ibeere ati Iwe",
      howToApply: "Bi o ṣe le ṣe Ibeere fun Awọn Ifagbara"
    },
    footer: {
      description: "Awọn irinṣẹ ọfẹ lati ran awọn ara Naijiria lọwọ lati loye ati ni anfani lati awọn atunṣe owo-ori 2025. Ti a kọ pẹlu 💚 fun awọn eniyan Naijiria.",
      builtBy: "Ti Abdulrahman Adisa Amuda kọ 🇳🇬",
      quickLinks: "Awọn Ọna Iyara",
      resources: "Awọn Ohun Elo",
      languageSupport: "Ni bayi n ṣe atilẹyin awọn ede 5: Gẹẹsi, Yoruba, Hausa, Igbo, ati Pidgin."
    }
  },
  ha: {
    nav: {
      home: "Gida",
      checker: "Mai Bincika Cancanta",
      calculator: "Mai Ƙididdiga PAYE",
      vatFree: "Abubuwan Ba Tare da VAT",
      remoteGuide: "Jagoran Aiki Daga Nesa",
      letters: "Sauke Wasiƙu"
    },
    hero: {
      title1: "Bi Hanyar Najeriya",
      title2: "Gyare-gyaren Haraji 2025",
      subtitle: "Kayan aiki kyauta don bincika ƙarancin haraji ku, ƙididdiga ajiye, da samar da wasiƙu na hukuma. An gina don 'yan Najeriya na yau da kullun.",
      checkEligibility: "Bincika Cancantana",
      calculateSavings: "Ƙididdiga Ajiye"
    },
    eligibility: {
      title: "Mai Bincika Cancanta Haraji",
      subtitle: "Gano ko kuna da cancanta don ƙarancin PAYE da taimako a haraji na hatimi a ƙarƙashin gyare-gyaren haraji na Najeriya 2025",
      annualIncome: "Kudin Shiga Shekara-shekara (₦)",
      annualRent: "Kudin Haya Shekara-shekara (₦)",
      employmentType: "Nau'in Aiki",
      employee: "Ma'aikaci",
      businessOwner: "Mai Kasuwanci",
      freelancer: "Mai Aiki Kyauta",
      checkEligibility: "Bincika Cancantana",
      payeExempt: "PAYE Keɓanta",
      stampDutyExempt: "Stamp Duty Keɓanta",
      estimatedSavings: "Ajiye da Aka Ƙididdigigi",
      congratulations: "Barka da cancanta! Kuna da cancanta don ƙarancin haraji.",
      notEligible: "Dangane da kudin shiga ku, ba za ku iya samun cancanta don waɗannan takamaiman ƙarancin ba."
    },
    calculator: {
      title: "Mai Ƙididdiga Haraji PAYE",
      subtitle: "Ƙididdiga ajiye haraji ku mai yiwuwa a ƙarƙashin sabon tsarin PAYE",
      monthlySalary: "Albashin Wata (₦)",
      additionalIncome: "Ƙarin Kudin Shiga na Wata (₦)",
      currentTaxRate: "Adadin Haraji na Yanzu (%)",
      calculate: "Ƙididdiga Ajiye",
      results: "Sakamakon Ƙididdiga Haraji Ku",
      annualIncome: "Kudin Shiga Shekara-shekara",
      currentTax: "Haraji Shekara-shekara na Yanzu",
      newTax: "Sabon Haraji Shekara-shekara",
      annualSavings: "Ajiye Shekara-shekara",
      monthlySavings: "Ajiye Wata-wata"
    },
    letters: {
      title: "Mai Samar da Wasiƙa",
      subtitle: "Samar da wasiƙun ƙarancin hukuma don mai daukar ku ko mai gida",
      employerLetter: "Wasiƙar Ƙarancin Mai Dauka",
      landlordLetter: "Wasiƙar Ƙarancin Mai Gida",
      employeeName: "Sunan Ma'aikaci",
      companyName: "Sunan Kamfani",
      generate: "Samar da Wasiƙa",
      tenantName: "Sunan Mai Haya",
      landlordName: "Sunan Mai Gida",
      propertyAddress: "Adireshin Dukiya"
    },
    vatFree: {
      title: "Jerin Abubuwan Ba Tare da VAT",
      subtitle: "Cikakken jerin abubuwan da ba su da VAT a ƙarƙashin gyare-gyaren haraji na Najeriya",
      search: "Nema abubuwa...",
      categories: {
        all: "Duk Nau'ikan",
        food: "Abinci da Abubuwan Sha",
        baby: "Kayan Jarirai",
        education: "Ilimi",
        healthcare: "Kiwon Lafiya",
        utilities: "Ayyukan Jama'a"
      }
    },
    remoteGuide: {
      title: "Jagoran Haraji Mai Aiki Daga Nesa",
      subtitle: "Bayani mai mahimmanci game da haraji don 'yan duniya na dijital da ma'aikata daga nesa a Najeriya",
      keyBenefits: "Manyan Fa'idodi don Ma'aikata Daga Nesa",
      requirements: "Buƙatu da Takaddun Shaida",
      howToApply: "Yadda Za Ku Nemi Ƙarancin"
    },
    footer: {
      description: "Kayan aiki kyauta don taimaka wa 'yan Najeriya su fahimci kuma su amfana daga gyare-gyaren haraji na 2025. An gina da 💚 don mutanen Najeriya.",
      builtBy: "An gina ta Abdulrahman Adisa Amuda 🇳🇬",
      quickLinks: "Hanyoyin Gaggawa",
      resources: "Albarkatu",
      languageSupport: "Yanzu yana goyan bayan harsuna 5: Turanci, Yoruba, Hausa, Igbo, da Pidgin."
    }
  },
  ig: {
    nav: {
      home: "Ụlọ",
      checker: "Onye Nyocha Iru",
      calculator: "Onye Ngụkọ PAYE",
      vatFree: "Ihe Ndị Enweghị VAT",
      remoteGuide: "Ndu Ọrụ Site n'Ebe Dị Anya",
      letters: "Budata Akwụkwọ Ozi"
    },
    hero: {
      title1: "Duzie Naịjirịa",
      title2: "Mgbanwe Ụtụ Isi 2025",
      subtitle: "Ngwa efu iji chọpụta nkwụghachi ụtụ isi gị, gbakọọ nchekwa, ma mepụta akwụkwọ ozi gọọmentị. Ewuru maka ndị Naịjirịa nkịtị.",
      checkEligibility: "Chọpụta Iru M",
      calculateSavings: "Gbakọọ Nchekwa"
    },
    eligibility: {
      title: "Onye Nyocha Iru Ụtụ Isi",
      subtitle: "Chọpụta ma ị ruru eru maka nkwụghachi PAYE na enyemaka ụtụ isi stampụ n'okpuru mgbanwe ụtụ isi Naịjirịa 2025",
      annualIncome: "Ego Mbata Kwa Afọ (₦)",
      annualRent: "Ego Mgbazị Kwa Afọ (₦)",
      employmentType: "Ụdị Ọrụ",
      employee: "Onye Ọrụ",
      businessOwner: "Onye Nwe Azụmahịa",
      freelancer: "Onye Ọrụ Nweere Onwe Ya",
      checkEligibility: "Chọpụta Iru M",
      payeExempt: "PAYE Ewepụrụ",
      stampDutyExempt: "Stamp Duty Ewepụrụ",
      estimatedSavings: "Nchekwa A Gbakọrọ",
      congratulations: "Ekele! Ị ruru eru maka nkwụghachi ụtụ isi.",
      notEligible: "Dabere na ego mbata gị, ị nwere ike ọ gaghị eru eru maka nkwụghachi ndị a."
    },
    calculator: {
      title: "Onye Ngụkọ Ụtụ Isi PAYE",
      subtitle: "Gbakọọ nchekwa ụtụ isi gị nwere ike n'okpuru usoro PAYE ọhụrụ",
      monthlySalary: "Ụgwọ Ọnwa (₦)",
      additionalIncome: "Ego Mbata Ọzọ Kwa Ọnwa (₦)",
      currentTaxRate: "Ọnụego Ụtụ Isi Ugbu A (%)",
      calculate: "Gbakọọ Nchekwa",
      results: "Nsonaazụ Ngụkọ Ụtụ Isi Gị",
      annualIncome: "Ego Mbata Kwa Afọ",
      currentTax: "Ụtụ Isi Kwa Afọ Ugbu A",
      newTax: "Ụtụ Isi Kwa Afọ Ọhụrụ",
      annualSavings: "Nchekwa Kwa Afọ",
      monthlySavings: "Nchekwa Kwa Ọnwa"
    },
    letters: {
      title: "Onye Mepụta Akwụkwọ Ozi",
      subtitle: "Mepụta akwụkwọ ozi nkwụghachi gọọmentị maka onye na-were gị ọrụ ma ọ bụ onye nwe ụlọ",
      employerLetter: "Akwụkwọ Ozi Nkwụghachi Onye Na-ewere Ọrụ",
      landlordLetter: "Akwụkwọ Ozi Nkwụghachi Onye Nwe Ụlọ",
      employeeName: "Aha Onye Ọrụ",
      companyName: "Aha Ụlọ Ọrụ",
      generate: "Mepụta Akwụkwọ Ozi",
      tenantName: "Aha Onye Mgbazị",
      landlordName: "Aha Onye Nwe Ụlọ",
      propertyAddress: "Adres Ihe Onwunwe"
    },
    vatFree: {
      title: "Ndepụta Ihe Ndị Enweghị VAT",
      subtitle: "Ndepụta zuru oke nke ihe ndị enweghị VAT n'okpuru mgbanwe ụtụ isi Naịjirịa",
      search: "Chọọ ihe...",
      categories: {
        all: "Ụdị Niile",
        food: "Nri na Ihe Ọṅụṅụ",
        baby: "Ihe Ụmụaka",
        education: "Agụmakwụkwọ",
        healthcare: "Nlekọta Ahụike",
        utilities: "Ọrụ Ọha"
      }
    },
    remoteGuide: {
      title: "Ndu Ụtụ Isi Onye Ọrụ Site n'Ebe Dị Anya",
      subtitle: "Ozi ụtụ isi dị mkpa maka ndị nomads dijitalụ na ndị ọrụ site n'ebe dị anya na Naịjirịa",
      keyBenefits: "Uru Bụ Isi Maka Ndị Ọrụ Site n'Ebe Dị Anya",
      requirements: "Ihe Achọrọ na Akwụkwọ",
      howToApply: "Otu Esi Achọ Nkwụghachi"
    },
    footer: {
      description: "Ngwa efu iji nyere ndị Naịjirịa aka ịghọta ma rite uru na mgbanwe ụtụ isi 2025. Ewuru ya na 💚 maka ndị Naịjirịa.",
      builtBy: "Abdulrahman Adisa Amuda wuru ya 🇳🇬",
      quickLinks: "Njikọ Ngwa Ngwa",
      resources: "Akụ",
      languageSupport: "Ugbu a na-akwado asụsụ 5: Bekee, Yoruba, Hausa, Igbo, na Pidgin."
    }
  },
  pcm: {
    nav: {
      home: "House",
      checker: "Check Weda You Qualify",
      calculator: "PAYE Calculator",
      vatFree: "Things Wey No Get VAT",
      remoteGuide: "Remote Work Guide",
      letters: "Download Letters"
    },
    hero: {
      title1: "Navigate Nigeria",
      title2: "Tax Reform for 2025",
      subtitle: "Free tools wey go help you check if you qualify for tax exemption, calculate your savings, and generate official letters. We build am for everyday Naija people.",
      checkEligibility: "Check If I Qualify",
      calculateSavings: "Calculate My Savings"
    },
    eligibility: {
      title: "Tax Eligibility Checker",
      subtitle: "Find out if you qualify for PAYE exemption and stamp duty relief under Nigeria 2025 tax reforms",
      annualIncome: "How Much You Dey Make Per Year (₦)",
      annualRent: "How Much You Dey Pay House Rent Per Year (₦)",
      employmentType: "Wetin Be Your Work Type",
      employee: "I Dey Work for Person",
      businessOwner: "I Get My Own Business",
      freelancer: "I Dey Do Freelance Work",
      checkEligibility: "Check If I Qualify",
      payeExempt: "PAYE Exempt",
      stampDutyExempt: "Stamp Duty Exempt",
      estimatedSavings: "How Much You Go Save",
      congratulations: "Congratulations! You qualify for tax exemptions.",
      notEligible: "Based on your income, you no qualify for these particular exemptions."
    },
    calculator: {
      title: "PAYE Tax Calculator",
      subtitle: "Calculate how much tax you go save under the new PAYE structure",
      monthlySalary: "How Much You Dey Collect Per Month (₦)",
      additionalIncome: "Any Other Money You Dey Make Per Month (₦)",
      currentTaxRate: "Current Tax Rate (%)",
      calculate: "Calculate My Savings",
      results: "Your Tax Calculation Results",
      annualIncome: "Total Money Per Year",
      currentTax: "Current Tax Per Year",
      newTax: "New Tax Per Year",
      annualSavings: "Total Savings Per Year",
      monthlySavings: "Savings Per Month"
    },
    letters: {
      title: "Letter Generator",
      subtitle: "Generate official exemption letters for your employer or landlord",
      employerLetter: "Letter for Your Boss",
      landlordLetter: "Letter for Your Landlord",
      employeeName: "Your Name",
      companyName: "Company Name",
      generate: "Generate Letter",
      tenantName: "Tenant Name",
      landlordName: "Landlord Name",
      propertyAddress: "House Address"
    },
    vatFree: {
      title: "Things Wey No Get VAT",
      subtitle: "Complete list of items wey no get VAT under Nigeria tax reforms",
      search: "Search for items...",
      categories: {
        all: "All Categories",
        food: "Food and Drinks",
        baby: "Baby Things",
        education: "Education",
        healthcare: "Health Care",
        utilities: "Utilities"
      }
    },
    remoteGuide: {
      title: "Remote Worker Tax Guide",
      subtitle: "Important tax information for digital nomads and remote workers for Nigeria",
      keyBenefits: "Main Benefits for Remote Workers",
      requirements: "Requirements & Documentation",
      howToApply: "How to Apply for Exemptions"
    },
    footer: {
      description: "Free tools to help Naija people understand and benefit from the 2025 tax reforms. We build am with 💚 for Naija people.",
      builtBy: "Abdulrahman Adisa Amuda build am 🇳🇬",
      quickLinks: "Quick Links",
      resources: "Resources",
      languageSupport: "Now we dey support 5 languages: English, Yoruba, Hausa, Igbo, and Pidgin."
    }
  }
};

export const getTranslation = (language: string): Translation => {
  return translations[language] || translations.en;
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
  { code: 'pcm', name: 'Pidgin', flag: '🇳🇬' }
];