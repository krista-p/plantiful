const data = [
  {
    common_name: 'Swiss Cheese Plant',
    scientific_name: 'Monstera Deliciosa',
    origin: 'Tropical Americas',
    water_days: 14,
    light: 'Indirect bright to medium light',
    humidity: 'Average household humidity',
    temperature: {
      max: 30,
      min: 15,
    },
    pets: 'Toxic to cats and dogs if consumed',
    difficulty: 8,
    common_problems: [
      {
        symptom: 'Leaves turning brown and crispy at the edges',
        cause: 'Thirsty plant, underwatered or high salt build up',
      },
      {
        symptom: 'Wilting plant, dry potting mix',
        cause: 'Underwatered or pot-bound',
      },
      {
        symptom: 'Yellowing leaves or black stems, wet potting mix',
        cause: 'Overwatered',
      },
    ],
    repot: 'Every 2 years',
    feed: 'Every 5 weeks',
  },
  {
    common_name: 'Aloe Vera',
    scientific_name: 'Aloe Barbadensis Miller',
    origin: 'Egypt and Madagascar',
    water_days: 21,
    light: 'Direct or indirect bright light',
    humidity: 'Any',
    temperature: {
      max: 33,
      min: 15,
    },
    pets: 'Mildly toxic to cats and dogs if consumed',
    difficulty: 9,
    common_problems: [
      {
        symptom: 'Leaves wrinkling',
        cause: 'Underwatered',
      },
      {
        symptom: 'Blanched center',
        cause: 'Not enough sunlight',
      },
      {
        symptom: 'Blackened, mushy base',
        cause: 'Overwatered or root rot',
      },
    ],
    repot: 'Every year',
    feed: 'Once a year',
  },
  {
    common_name: 'Dragon Tree',
    scientific_name: 'Dracaena Marginata',
    origin: 'Madagascar',
    water_days: 14,
    light: 'Indirect bright to medium light',
    humidity: 'Average household humidity',
    temperature: {
      max: 33,
      min: 15,
    },
    pets: 'Toxic to cats and dogs if consumed',
    difficulty: 9,
    common_problems: [
      {
        symptom: 'Crispy or curling pale leaves, dry potting mix',
        cause: 'Thirsty plant, underwatered',
      },
      {
        symptom: 'Yellowing leaves, wet potting mix',
        cause: 'Root rot, overwatered',
      },
      {
        symptom: 'Yellowing leaves, dry potting mix',
        cause: 'Soil compaction (aerate soil), and/or nutrient deficincy',
      },
    ],
    repot: 'Every 2 years',
    feed: 'Every 10 weeks',
  },
  {
    common_name: 'Spider Plant',
    scientific_name: 'Chlorophytum Comosum',
    origin: 'Southern Africa',
    water_days: 14,
    light: 'Indirect bright to medium light',
    humidity: 'Average household humidity',
    temperature: {
      max: 33,
      min: 5,
    },
    pets: 'Pet-friendly',
    difficulty: 9,
    common_problems: [
      {
        symptom: 'Crispy leaf tips, dry potting mix',
        cause: 'Underwatered, low humidity',
      },
      {
        symptom: 'Yellowing leaves, wet potting mix',
        cause: 'Overwatered',
      },
    ],
    repot: 'Every year',
    feed: 'Every 6 weeks',
  },
  {
    common_name: 'Chinese Money Plant',
    scientific_name: 'Pilea peperomioides',
    origin: 'Southern China',
    water_days: 14,
    light: 'Indirect bright to medium light',
    humidity: 'Average household humidity',
    temperature: {
      max: 33,
      min: 13,
    },
    pets: 'Pet-friendly',
    difficulty: 10,
    common_problems: [
      {
        symptom: 'Wilting plant or curling leaves, dry potting mix',
        cause: 'Underwatered',
      },
      {
        symptom: 'Yellowing leaves',
        cause: 'Overwatered',
      },
    ],
    repot: 'Every year',
    feed: 'Every 6 weeks',
  },
  {
    common_name: 'Yucca',
    scientific_name: 'Yucca Elephantipes',
    origin: 'Arid Americas and Caribbean',
    water_days: 21,
    light: 'Indirect bright light',
    humidity: 'Average household humidity',
    temperature: {
      max: 33,
      min: 7,
    },
    pets: 'Mildly toxic to cats and dogs if consumed',
    difficulty: 9,
    common_problems: [
      {
        symptom: 'Crispy or curling leaves, dry potting mix',
        cause: 'Thirsty plant, underwatered',
      },
      {
        symptom: 'Yellowing leaves, wet potting mix',
        cause: 'Root rot, overwatered',
      },
    ],
    repot: 'Every 2 years',
    feed: 'Every 6 weeks',
  },
  {
    common_name: 'Radiator Plant',
    scientific_name: 'Peperomia',
    origin: 'Throughout the tropics',
    water_days: 14,
    light: 'Indirect bright to medium light',
    humidity: 'Slightly higher than average household humidity',
    temperature: {
      max: 33,
      min: 15,
    },
    pets: 'Pet-friendly',
    difficulty: 8,
    common_problems: [
      {
        _id: '603faaa1422f8d680d512869',
        symptom: 'Wilting plant, dry potting mix',
        cause: 'Underwatered',
      },
      {
        _id: '603faaa1422f8d680d51286a',
        symptom: 'Yellowing leaves, black stems',
        cause: 'Overwatered',
      },
    ],
    repot: 'Every 3 years',
    feed: 'Every 26 weeks',
  },
  {
    common_name: 'Cactus',
    scientific_name: 'Cactaceae',
    origin: 'The Americas',
    water_days: 21,
    light: 'Direct or indirect bright light',
    humidity: 'Any',
    temperature: {
      max: 35,
      min: 7,
    },
    pets: 'Pet-friendly',
    difficulty: 10,
    common_problems: [
      {
        symptom: 'Wrinkled, dry potting mix',
        cause: 'Thirsty plant, underwatered',
      },
      {
        symptom: 'Blanched center',
        cause: 'Needs more sunlight',
      },
      {
        symptom: 'Yellowing and mushy leaves, wet potting mix',
        cause: 'Overwatered or root rot',
      },
    ],
    repot: 'Every 3 years',
    feed: 'Every 26 weeks',
  },
  {
    common_name: 'Orchid',
    scientific_name: 'Orchidaceae',
    origin: 'India, China, Southeast Asia',
    water_days: 7,
    light: 'Indirect bright to medium light',
    humidity: 'Higher',
    temperature: {
      max: 25,
      min: 15,
    },
    pets: 'Pet-friendly',
    difficulty: 4,
    common_problems: [
      {
        symptom: 'Wilting, wrinkling leaves',
        cause: 'Underwatered',
      },
      {
        symptom: 'Yellowing leaves',
        cause: 'Overwatered, or too much sun',
      },
      {
        symptom: 'Wilting flowers',
        cause: 'Ending its yearly blooming cycle, storing up energy to re-bloom',
      },
    ],
    repot: 'Every year',
    feed: 'Every 2 weeks',
  },
  {
    common_name: 'String Of Pearls',
    scientific_name: 'Senecio Rowleyanus',
    origin: 'Southwestern Africa',
    water_days: 14,
    light: 'Indirect bright light',
    humidity: 'Higher',
    temperature: {
      max: 33,
      min: 15,
    },
    pets: 'Toxic to cats and dogs if consumed',
    difficulty: 9,
    common_problems: [
      {
        symptom: 'Wilting, wrinkling leaves',
        cause: 'Underwatered',
      },
      {
        symptom: 'Yellowing leaves',
        cause: 'Overwatered, or too much sun',
      },
    ],
    repot: 'Every year',
    feed: 'Every 6 weeks',
  },
  {
    common_name: 'Snake Plant',
    scientific_name: 'Dracaena trifasciata',
    origin: 'Africa, Madagascar, Asia',
    water_days: 21,
    light: 'Indirect bright to medium light',
    humidity: 'Any',
    temperature: {
      max: 33,
      min: 13,
    },
    pets: 'Mildly toxic to cats and dogs if consumed',
    difficulty: 9,
    common_problems: [
      {
        symptom: 'Wrinkled leaves, dry potting mix',
        cause: 'Thirsty plant, underwatered',
      },
      {
        symptom: 'Mushy leaves, wet potting mix',
        cause: 'Overwatered',
      },
    ],
    repot: 'Every 3 years',
    feed: 'Every 9 weeks',
  },
];

export default data;
