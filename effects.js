// Past El Niño events [period, ONI peak, impacts]
const H=[["2023–24",2.0,"Panama Canal drought, Amazon river lows, record heat in India and Southeast Asia"],["2015–16",2.6,"India drought, Indonesian peat fires, coral bleaching, Ethiopia food crisis"],["1997–98",2.4,"Indonesia haze fires, Peru and Ecuador floods, Kenya floods"],["1982–83",2.2,"Australia drought and Ash Wednesday fires, Peru and Ecuador floods, southern Africa drought"],["1972–73",2.0,"Peruvian anchovy collapse, Sahel and India drought, global food price spike"],["1991–92",1.6,"Southern Africa drought, weak Indian monsoon"],["1986–88",1.6,"Weak Indian monsoon in 1987, drought in Australia and Indonesia"],["2009–10",1.3,"Weaker Indian monsoon, drought in southern Africa"]];
// Regional effects cards
const G=[["Peru & Ecuador","wet","Coastal floods","Fisheries collapse","Dec–Apr","Much wetter","Warmer sea","Lima, Guayaquil","High"],
["Amazon & Colombia","dry","Drought and fires","River levels drop","Aug–Feb","Drier","Hotter","Not tracked","High"],
["Indonesia & Philippines","dry","Haze and peat fires","Rice harvests hit","Jul–Nov","Drier","Hotter","5 cities","High"],
["Australia (north & east)","dry","Bushfire risk","Dry spring","Sep–Dec","Drier","Hotter","Darwin, Brisbane","Medium"],
["India","dry","Weak monsoon","Crop stress, long heat spells","Jun–Sep","Drier","Hotter","4 cities","High"],
["East Africa","wet","Short-rain floods","Roads and crops hit","Oct–Dec","Wetter","Mixed","Not tracked","Medium"],
["Southern Africa","dry","Summer drought","Crop failure","Dec–Mar","Drier","Hotter","Not tracked","Medium"],
["Southern South America","wet","Winter and spring rain","Floods in Uruguay and Argentina","Jun–Nov","Wetter","Mixed","Not tracked","Medium"]];
// Country -> region index, and per-country overrides
const REG={Peru:0,Ecuador:0,Colombia:1,Venezuela:1,Guyana:1,Suriname:1,Brazil:1,Bolivia:1,Indonesia:2,Philippines:2,'Papua New Guinea':2,Australia:3,India:4,Kenya:5,Tanzania:5,Uganda:5,Somalia:5,Ethiopia:5,'South Africa':6,Zimbabwe:6,Zambia:6,Mozambique:6,Botswana:6,Namibia:6,Malawi:6,Uruguay:7,Paraguay:7,Argentina:7,Chile:7};
const OV={Brazil:['mix','Drier north and Amazon, wetter south','Aug–Feb'],Ethiopia:['mix','Main rains weaken, short rains stronger','Jun–Dec']};
