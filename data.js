// ============================================================
//  DATA — filled in by hand from screenshots
// ============================================================
//  Each server has a list of dated snapshots (history).
//  A new scan = a new snapshot appended to the list — never
//  overwrite an old one, that's what powers the Δ columns.
//
//  snapshot:
//    date      : scan date "DD/MM/YYYY"
//    players   : top players   { rank, name, alliance, region, power }
//    alliances : top alliances { rank, tag, name, region, allies, cities, power }
//
//  power : raw number without spaces or commas (e.g. 28916813)
// ============================================================

const MY_SERVER = 445; // our server

const SERVERS = {

  440: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "VELDORA~",     alliance: "EYM", region: "Kingsland", power: 29749170 },
          { rank: 2, name: "ArmyBTS",      alliance: "WRE", region: "Kingsland", power: 28982194 },
          { rank: 3, name: "acknowlegme",  alliance: "N三Ø", region: "Kingsland", power: 23948681 },
          { rank: 4, name: "Davyjones483", alliance: "WAR", region: "Kingsland", power: 21848090 },
        ],
        alliances: [
          { rank: 1, tag: "WAR", name: "440Dragons",     region: "Gaul",     allies: 169, cities: 148, power: 1002827975 },
          { rank: 2, tag: "EYM", name: "ElysiumWarBand", region: "Eastland", allies: 162, cities: 125, power: 811860845 },
          { rank: 3, tag: "WRE", name: "WindRiseEmpire", region: "Olympia",  allies: 129, cities: 112, power: 512367096 },
          { rank: 4, tag: "N三Ø", name: "E",              region: "Tinir",    allies: 128, cities: 109, power: 402590423 },
        ],
      },
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "ArmyBTS",     alliance: "ROS", region: "Kingsland", power: 34140692 },
          { rank: 2, name: "VELDORA~",    alliance: "ROS", region: "Kingsland", power: 29268627 },
          { rank: 3, name: "Hahgwehdiyu", alliance: "N三Ø", region: "Kingsland", power: 25428177 },
          { rank: 4, name: "acknowlegme", alliance: "N三Ø", region: "Kingsland", power: 24246839 },
        ],
        alliances: [
          { rank: 1, tag: "WAR", name: "440Dragons",     region: "Gaul",     allies: 169, cities: 155, power: 1133133539 },
          { rank: 2, tag: "ROS", name: "RiseOfLegends™", region: "Eastland", allies: 162, cities: 132, power: 1114374286 },
          { rank: 3, tag: "N三Ø", name: "E",              region: "Tinir",    allies: 129, cities: 113, power: 450299138 },
          { rank: 4, tag: "WRE", name: "WindRiseEmpire", region: "Olympia",  allies: 74,  cities: 115, power: 200717945 },
        ],
      },
    ],
  },

  441: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "ᴺᵒᵗNightWolf", alliance: "NOT", region: "Kingsland", power: 48093414 },
          { rank: 2, name: "roman999",     alliance: "WCP", region: "Kingsland", power: 32738581 },
          { rank: 3, name: "OBIw",         alliance: null,  region: "Neilos",    power: 25228823 },
          { rank: 4, name: "ᴺᵒᵗGALAHAD",   alliance: "NOT", region: "Kingsland", power: 23614503 },
        ],
        alliances: [
          { rank: 1, tag: "NOT", name: "NOTALLIANCE", region: "Olympia", allies: 126, cities: 111, power: 700852726 },
          { rank: 2, tag: "WCP", name: "Warcorp",     region: "Tinir",   allies: 151, cities: 147, power: 629209576 },
          { rank: 3, tag: "RAV", name: "RavenClan",   region: "Gaul",    allies: 102, cities: 75,  power: 356472718 },
          { rank: 4, tag: "UTA", name: "Untouchable", region: "Neilos",  allies: 85,  cities: 82,  power: 313142783 },
        ],
      },
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "ᴺᵒᵗNightWolf", alliance: "NOT", region: "Kingsland", power: 50249936 },
          { rank: 2, name: "roman999",     alliance: "WCP", region: "Kingsland", power: 34463876 },
          { rank: 3, name: "OBIw",         alliance: null,  region: "Neilos",    power: 25228823 },
          { rank: 4, name: "ᴺᵒᵗGALAHAD",   alliance: "NOT", region: "Kingsland", power: 24226467 },
        ],
        alliances: [
          { rank: 1, tag: "NOT", name: "NOTALLIANCE", region: "Olympia", allies: 130, cities: 118, power: 806566943 },
          { rank: 2, tag: "WCP", name: "Warcorp",     region: "Tinir",   allies: 154, cities: 162, power: 714641995 },
          { rank: 3, tag: "RAV", name: "RavenClan",   region: "Gaul",    allies: 104, cities: 77,  power: 399004708 },
          { rank: 4, tag: "UTA", name: "Untouchable", region: "Neilos",  allies: 62,  cities: 88,  power: 292068834 },
        ],
      },
    ],
  },
  442: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "KociciTata",  alliance: "LGX", region: "Kingsland", power: 66307955 },
          { rank: 2, name: "Vestri",      alliance: "LGV", region: "Kingsland", power: 27337843 },
          { rank: 3, name: "Screach",     alliance: "LGV", region: "Kingsland", power: 25114435 },
          { rank: 4, name: "ᙎElTurcoᙎ",   alliance: "LGV", region: "Kingsland", power: 18353614 },
        ],
        alliances: [
          { rank: 1, tag: "LGV", name: "LegionVI",  region: "Olympia", allies: 163, cities: 132, power: 1065024699 },
          { rank: 2, tag: "RBN", name: "ReborN",    region: "Neilos",  allies: 124, cities: 73,  power: 238554002 },
          { rank: 3, tag: "LGX", name: "LegionX",   region: "Kyuno",   allies: 23,  cities: 116, power: 175102715 },
          { rank: 4, tag: "БОГ", name: "Мырусские", region: "Gaul",    allies: 59,  cities: 45,  power: 72639305 },
        ],
      },
    ],
  },
  443: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "GEHANAM",      alliance: "KOR", region: "Kingsland", power: 54497102 },
          { rank: 2, name: "민초맛커피빵",  alliance: "KOR", region: "Kingsland", power: 40023051 },
          { rank: 3, name: "Capashen",     alliance: "KOR", region: "Kingsland", power: 23170508 },
          { rank: 4, name: "PanStyx",      alliance: "JOB", region: "Kingsland", power: 22578080 },
        ],
        alliances: [
          { rank: 1, tag: "KOR", name: "★KOREA",      region: "Neilos",  allies: 128, cities: 76, power: 895102389 },
          { rank: 2, tag: "JOB", name: "Jobless",     region: "Kyuno",   allies: 146, cities: 86, power: 635206685 },
          { rank: 3, tag: "NRG", name: "NeverRegret", region: "Olympia", allies: 113, cities: 57, power: 349774130 },
          { rank: 4, tag: "mrn", name: "marion",      region: "Kyuno",   allies: 110, cities: 30, power: 81883770 },
        ],
      },
    ],
  },
  444: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "STONEBR0W", alliance: "LoW", region: "Kingsland", power: 48117804 },
          { rank: 2, name: "고려왕",     alliance: "LoW", region: "Kingsland", power: 37517571 },
          { rank: 3, name: "LeoNn",     alliance: "Arc", region: "Kingsland", power: 28373417 },
          { rank: 4, name: "Junnior",   alliance: "LoW", region: "Kingsland", power: 26731239 },
        ],
        alliances: [
          { rank: 1, tag: "LoW", name: "LegionOfWrath", region: "Kyuno",   allies: 170, cities: 98,  power: 1339709136 },
          { rank: 2, tag: "GUE", name: "GARUDAEMPIRE",  region: "Kyuno",   allies: 167, cities: 115, power: 776688867 },
          { rank: 3, tag: "Arc", name: "AnatolianArc",  region: "Neilos",  allies: 133, cities: 90,  power: 659180500 },
          { rank: 4, tag: "LOW", name: "LegionAcademy", region: "Olympia", allies: 127, cities: 39,  power: 395349403 },
        ],
      },
    ],
  },
  445: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "Ragnaroks10", alliance: "PHX", region: "Kingsland", power: 31819907 },
          { rank: 2, name: "Khelbin戦争",  alliance: "JUD", region: "Kingsland", power: 27750334 },
          { rank: 3, name: "Alohagrown",  alliance: "JUD", region: "Kingsland", power: 23652381 },
          { rank: 4, name: "Wonju",       alliance: "JUD", region: "Kingsland", power: 20522102 },
        ],
        alliances: [
          { rank: 1, tag: "JUD", name: "SolemnJudgment", region: "Gaul",   allies: 169, cities: 129, power: 1141548165 },
          { rank: 2, tag: "PHX", name: "PhoenixDynast",  region: "Neilos", allies: 154, cities: 96,  power: 681198170 },
          { rank: 3, tag: "MYT", name: "Mythos",         region: "Tinir",  allies: 131, cities: 99,  power: 575968846 },
          { rank: 4, tag: "ANT", name: "Antisocial",     region: "Neilos", allies: 124, cities: 31,  power: 159021847 },
        ],
      },
    ],
  },
  446: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "PPGW",    alliance: "STS", region: "Kingsland",       power: 38904224 },
          { rank: 2, name: "~Bug~",   alliance: "STS", region: "Kingsland",       power: 24419816 },
          { rank: 3, name: "출발",     alliance: "THO", region: "North Kingsland", power: 18574767 },
          { rank: 4, name: "LordGWW", alliance: "STS", region: "Kingsland",       power: 18197823 },
        ],
        alliances: [
          { rank: 1, tag: "STS", name: "SPARTANICUS", region: "Gaul",     allies: 162, cities: 114, power: 796897498 },
          { rank: 2, tag: "THO", name: "THEORDER",    region: "Kyuno",    allies: 161, cities: 117, power: 685523525 },
          { rank: 3, tag: "FAM", name: "ROYALF4MILY", region: "Eastland", allies: 86,  cities: 117, power: 315373205 },
          { rank: 4, tag: "NØM", name: "NØMERCY",     region: "Gaul",     allies: 81,  cities: 22,  power: 80676389 },
        ],
      },
    ],
  },
  447: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "Bigaktonaj", alliance: "HUN", region: "North Kingsland", power: 18560375 },
          { rank: 2, name: "Hakage",     alliance: "HUN", region: "Eastland",        power: 16598351 },
          { rank: 3, name: "61RTE61",    alliance: "HUN", region: "Kingsland",       power: 14663335 },
          { rank: 4, name: "Kassidyd",   alliance: "HUN", region: "North Kingsland", power: 13524945 },
        ],
        alliances: [
          { rank: 1, tag: "HUN", name: "BLODY°HUNTERS",  region: "Kyuno",    allies: 168, cities: 111, power: 739283668 },
          { rank: 2, tag: "GFT", name: "♣GoodFernet♣",   region: "Olympia",  allies: 150, cities: 124, power: 613156582 },
          { rank: 3, tag: "ELD", name: "ELDORA",         region: "Tinir",    allies: 110, cities: 56,  power: 133534823 },
          { rank: 4, tag: "ESM", name: "EmperorsMember", region: "Eastland", allies: 83,  cities: 46,  power: 115809134 },
        ],
      },
    ],
  },
  448: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "Halopopo", alliance: "RUN", region: "West Kingsland",  power: 36984559 },
          { rank: 2, name: "Thor008",  alliance: "T1S", region: "East Kingsland",  power: 25111950 },
          { rank: 3, name: "터비",      alliance: "RUN", region: "West Kingsland",  power: 17816790 },
          { rank: 4, name: "×Ren",     alliance: "NR¹", region: "North Kingsland", power: 16770947 },
        ],
        alliances: [
          { rank: 1, tag: "NR¹", name: "NightRaid¹",    region: "Kyuno",  allies: 170, cities: 126, power: 757606052 },
          { rank: 2, tag: "RUN", name: "RUNA88",        region: "Neilos", allies: 162, cities: 100, power: 609457771 },
          { rank: 3, tag: "SYN", name: "Syndicates",    region: "Gaul",   allies: 100, cities: 72,  power: 158460863 },
          { rank: 4, tag: "QEx", name: "0QuingEmpire0", region: "Neilos", allies: 75,  cities: 43,  power: 89790480 },
        ],
      },
    ],
  },
  449: {
    snapshots: [
      {
        date: "09/08/2026",
        players: [
          { rank: 1, name: "ekivoki",     alliance: "♛RI", region: "North Kingsland", power: 20201957 },
          { rank: 2, name: "無題Untitled", alliance: "HoV", region: "East Kingsland",  power: 13169141 },
          { rank: 3, name: "如意RUYI",     alliance: "HoV", region: "East Kingsland",  power: 12368448 },
          { rank: 4, name: "娜娜Nina",     alliance: "HoV", region: "East Kingsland",  power: 11965181 },
        ],
        alliances: [
          { rank: 1, tag: "♛RI", name: "♛Royalty",      region: "Kyuno",    allies: 163, cities: 122, power: 558485290 },
          { rank: 2, tag: "HoV", name: "HeroesOfValor", region: "Eastland", allies: 130, cities: 96,  power: 474816538 },
          { rank: 3, tag: "VIP", name: "Gangstar",      region: "Neilos",   allies: 82,  cities: 41,  power: 68562009 },
          { rank: 4, tag: "Try", name: "Truvaa",        region: "Neilos",   allies: 92,  cities: 39,  power: 55876706 },
        ],
      },
    ],
  },

};
