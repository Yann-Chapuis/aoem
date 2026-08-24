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
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "ArmyBTS",     alliance: "ROS", region: "Kingsland", power: 36024551 },
          { rank: 2, name: "VELDORA~",    alliance: "ROS", region: "Kingsland", power: 30571221 },
          { rank: 3, name: "Hahgwehdiyu", alliance: "N三Ø", region: "Kingsland", power: 29243330 },
          { rank: 4, name: "acknowlegme", alliance: "N三Ø", region: "Kingsland", power: 26577717 },
        ],
        alliances: [
          { rank: 1, tag: "WAR", name: "440Dragons",     region: "Gaul",     allies: 170, cities: 161, power: 1230151684 },
          { rank: 2, tag: "ROS", name: "RiseOfLegends™", region: "Eastland", allies: 164, cities: 137, power: 1207015108 },
          { rank: 3, tag: "N三Ø", name: "E",              region: "Tinir",    allies: 126, cities: 115, power: 496548247 },
          { rank: 4, tag: "WRE", name: "WindRiseEmpire", region: "Olympia",  allies: 73,  cities: 115, power: 179076807 },
        ],
      },
      {
        date: "24/08/2026",
        players: [
          { rank: 1, name: "ArmyBTS",      alliance: "ROS", region: "Kingsland", power: 41996761 },
          { rank: 2, name: "VELDORA~",     alliance: "ROS", region: "Kingsland", power: 36095957 },
          { rank: 3, name: "Hahgwehdiyu",  alliance: "N三Ø", region: "Kingsland", power: 30347901 },
          { rank: 4, name: "QueenVisenya", alliance: "ROS", region: "Kingsland", power: 29866437 },
        ],
        alliances: [
          { rank: 1, tag: "ROS", name: "RiseOfLegends™", region: "Eastland", allies: 168, cities: 138, power: 1489944284 },
          { rank: 2, tag: "WAR", name: "440Dragons",     region: "Gaul",     allies: 167, cities: 173, power: 1436263468 },
          { rank: 3, tag: "N三Ø", name: "E",              region: "Tinir",    allies: 128, cities: 122, power: 590597624 },
          { rank: 4, tag: "WRE", name: "WindRiseEmpire", region: "Olympia",  allies: 75,  cities: 115, power: 179085166 },
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
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "ᴺᵒᵗNightWolf", alliance: "NOT", region: "Kingsland", power: 51241579 },
          { rank: 2, name: "roman999",     alliance: "WCP", region: "Kingsland", power: 35871524 },
          { rank: 3, name: "OBIw",         alliance: null,  region: "Neilos",    power: 25228823 },
          { rank: 4, name: "ᴺᵒᵗGALAHAD",   alliance: "NOT", region: "Kingsland", power: 25208442 },
        ],
        alliances: [
          { rank: 1, tag: "NOT", name: "NOTALLIANCE", region: "Olympia", allies: 142, cities: 121, power: 995873849 },
          { rank: 2, tag: "WCP", name: "Warcorp",     region: "Tinir",   allies: 162, cities: 172, power: 881362822 },
          { rank: 3, tag: "RAV", name: "RavenClan",   region: "Gaul",    allies: 70,  cities: 82,  power: 195137059 },
          { rank: 4, tag: "ICE", name: "RoyaltyICE",  region: "Kyuno",   allies: 53,  cities: 47,  power: 85018363 },
        ],
      },
      {
        date: "24/08/2026",
        players: [
          { rank: 1, name: "ᴺᵒᵗNightWolf", alliance: "NOT", region: "Kingsland", power: 54327119 },
          { rank: 2, name: "roman999",     alliance: "WCP", region: "Kingsland", power: 45516658 },
          { rank: 3, name: "ᴺᵒᵗGALAHAD",   alliance: "NOT", region: "Kingsland", power: 27864350 },
          { rank: 4, name: "ᴺᵒᵗAtilla",    alliance: "NOT", region: "Kingsland", power: 27185326 },
        ],
        alliances: [
          { rank: 1, tag: "NOT", name: "NOTALLIANCE", region: "Olympia", allies: 169, cities: 130, power: 1377805347 },
          { rank: 2, tag: "WCP", name: "Warcorp",     region: "Tinir",   allies: 165, cities: 187, power: 1082685966 },
          { rank: 3, tag: "RAV", name: "RavenClan",   region: "Gaul",    allies: 74,  cities: 81,  power: 137082007 },
          { rank: 4, tag: "ICE", name: "RoyaltyICE",  region: "Kyuno",   allies: 53,  cities: 48,  power: 88702923 },
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
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "KociciTata", alliance: "LGV", region: "Kingsland", power: 71578752 },
          { rank: 2, name: "Vestri",     alliance: "LGV", region: "Kingsland", power: 29249780 },
          { rank: 3, name: "Screach",    alliance: "LGV", region: "Kingsland", power: 26483301 },
          { rank: 4, name: "ᙎElTurcoᙎ",  alliance: "LGV", region: "Kingsland", power: 20186093 },
        ],
        alliances: [
          { rank: 1, tag: "LGV", name: "LegionVI",    region: "Olympia", allies: 170, cities: 146, power: 1299852365 },
          { rank: 2, tag: "RBN", name: "Reborn",      region: "Kyuno",   allies: 84,  cities: 120, power: 288507760 },
          { rank: 3, tag: "БОГ", name: "Мырусские",   region: "Gaul",    allies: 60,  cities: 45,  power: 63904566 },
          { rank: 4, tag: "OAs", name: "OceaniaApex", region: "Kyuno",   allies: 68,  cities: 37,  power: 54696689 },
        ],
      },
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "KociciTata",   alliance: "LGV", region: "Kingsland", power: 75121737 },
          { rank: 2, name: "Vestri",       alliance: "LGV", region: "Kingsland", power: 32153023 },
          { rank: 3, name: "Screach",      alliance: "LGV", region: "Kingsland", power: 28895381 },
          { rank: 4, name: "NabeeeeeeeeR", alliance: "LGV", region: "Kingsland", power: 23130983 },
        ],
        alliances: [
          { rank: 1, tag: "LGV", name: "LegionVI",    region: "Olympia", allies: 170, cities: 151, power: 1406381247 },
          { rank: 2, tag: "RBN", name: "Reborn",      region: "Kyuno",   allies: 102, cities: 125, power: 333830852 },
          { rank: 3, tag: "БОГ", name: "Мырусские",   region: "Gaul",    allies: 59,  cities: 45,  power: 59875727 },
          { rank: 4, tag: "OAs", name: "OceaniaApex", region: "Kyuno",   allies: 68,  cities: 37,  power: 56236573 },
        ],
      },
      {
        date: "24/08/2026",
        players: [
          { rank: 1, name: "KociciTata", alliance: "LGV", region: "Kingsland", power: 86565853 },
          { rank: 2, name: "Vestri",     alliance: "LGV", region: "Kingsland", power: 35471892 },
          { rank: 3, name: "Screach",    alliance: "LGV", region: "Kingsland", power: 30602838 },
          { rank: 4, name: "ᙎElTurcoᙎ",  alliance: "LGV", region: "Kingsland", power: 25336693 },
        ],
        alliances: [
          { rank: 1, tag: "LGV", name: "LegionVI",    region: "Olympia", allies: 158, cities: 161, power: 1470520184 },
          { rank: 2, tag: "RBN", name: "Reborn",      region: "Kyuno",   allies: 135, cities: 139, power: 436160959 },
          { rank: 3, tag: "OAs", name: "OceaniaApex", region: "Kyuno",   allies: 68,  cities: 37,  power: 60528764 },
          { rank: 4, tag: "Qln", name: "QueerLand",   region: "Olympia", allies: 96,  cities: 26,  power: 56310025 },
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
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "GEHANAM",     alliance: "KOR", region: "Kingsland", power: 57340199 },
          { rank: 2, name: "민초맛커피빵", alliance: "KOR", region: "Kingsland", power: 41702026 },
          { rank: 3, name: "Capashen",    alliance: "KOR", region: "Kingsland", power: 24516118 },
          { rank: 4, name: "PanStyx",     alliance: "JOB", region: "Kingsland", power: 23200054 },
        ],
        alliances: [
          { rank: 1, tag: "KOR", name: "★KOREA",      region: "Neilos",  allies: 120, cities: 93, power: 944796483 },
          { rank: 2, tag: "JOB", name: "Jobless",     region: "Kyuno",   allies: 143, cities: 92, power: 660727973 },
          { rank: 3, tag: "NRG", name: "NeverRegret", region: "Olympia", allies: 115, cities: 65, power: 394753344 },
          { rank: 4, tag: "mrn", name: "marion",      region: "Kyuno",   allies: 110, cities: 31, power: 89842478 },
        ],
      },
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "GEHANAM",     alliance: "KOR", region: "Kingsland", power: 60735606 },
          { rank: 2, name: "민초맛커피빵", alliance: "KOR", region: "Kingsland", power: 43430464 },
          { rank: 3, name: "Capashen",    alliance: "KOR", region: "Kingsland", power: 27962544 },
          { rank: 4, name: "彰Seanღ",     alliance: "KOR", region: "Kingsland", power: 23867447 },
        ],
        alliances: [
          { rank: 1, tag: "KOR", name: "★KOREA",      region: "Neilos",  allies: 122, cities: 106, power: 1034638106 },
          { rank: 2, tag: "JOB", name: "Jobless",     region: "Kyuno",   allies: 99,  cities: 94,  power: 572497937 },
          { rank: 3, tag: "NRG", name: "NeverRegret", region: "Olympia", allies: 118, cities: 69,  power: 426166553 },
          { rank: 4, tag: "mrn", name: "marion",      region: "Kyuno",   allies: 107, cities: 33,  power: 93046681 },
        ],
      },
      {
        date: "24/08/2026",
        players: [
          { rank: 1, name: "GEHANAM",     alliance: "KOR", region: "Kingsland", power: 62723503 },
          { rank: 2, name: "민초맛커피빵", alliance: "KOR", region: "Kingsland", power: 45050373 },
          { rank: 3, name: "Capashen",    alliance: "KOR", region: "Kingsland", power: 30190078 },
          { rank: 4, name: "彰Seanღ",     alliance: "KOR", region: "Kingsland", power: 25790239 },
        ],
        alliances: [
          { rank: 1, tag: "KOR", name: "★KOREA",      region: "Neilos",  allies: 169, cities: 120, power: 1451891917 },
          { rank: 2, tag: "NRG", name: "NeverRegret", region: "Olympia", allies: 119, cities: 82,  power: 593254857 },
          { rank: 3, tag: "mrn", name: "marion",      region: "Kyuno",   allies: 105, cities: 10,  power: 101579078 },
          { rank: 4, tag: "God", name: "SunOfGod",    region: "Neilos",  allies: 110, cities: 37,  power: 87414801 },
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
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "STONEBR0W", alliance: "LoW", region: "Kingsland", power: 49682409 },
          { rank: 2, name: "고려왕",     alliance: "LoW", region: "Kingsland", power: 39956993 },
          { rank: 3, name: "LeoNn",     alliance: "Arc", region: "Kingsland", power: 28247768 },
          { rank: 4, name: "Junnior",   alliance: "LoW", region: "Kingsland", power: 27327823 },
        ],
        alliances: [
          { rank: 1, tag: "LoW", name: "LegionOfWrath", region: "Kyuno",   allies: 169, cities: 116, power: 1409502508 },
          { rank: 2, tag: "GUE", name: "GARUDAEMPIRE",  region: "Kyuno",   allies: 162, cities: 122, power: 768645995 },
          { rank: 3, tag: "Arc", name: "AnatolianArc",  region: "Neilos",  allies: 143, cities: 105, power: 746083465 },
          { rank: 4, tag: "LOW", name: "LegionAcademy", region: "Olympia", allies: 128, cities: 48,  power: 475350897 },
        ],
      },
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "STONEBR0W", alliance: "LoW", region: "Kingsland", power: 50447057 },
          { rank: 2, name: "고려왕",     alliance: "LoW", region: "Kingsland", power: 42348306 },
          { rank: 3, name: "LeoNn",     alliance: "Arc", region: "Kingsland", power: 30024226 },
          { rank: 4, name: "Junnior",   alliance: "LoW", region: "Kingsland", power: 28062909 },
        ],
        alliances: [
          { rank: 1, tag: "LoW", name: "LegionOfWrath", region: "Kyuno",   allies: 168, cities: 121, power: 1484170891 },
          { rank: 2, tag: "Arc", name: "AnatolianArc",  region: "Neilos",  allies: 157, cities: 112, power: 855477104 },
          { rank: 3, tag: "GUE", name: "GARUDAEMPIRE",  region: "Kyuno",   allies: 166, cities: 123, power: 824978260 },
          { rank: 4, tag: "LOW", name: "LegionAcademy", region: "Olympia", allies: 140, cities: 45,  power: 533462018 },
        ],
      },
      {
        date: "24/08/2026",
        players: [
          { rank: 1, name: "STONEBR0W", alliance: "LoW", region: "Kingsland", power: 52416741 },
          { rank: 2, name: "푸른검신",   alliance: "LoW", region: "Kingsland", power: 49613098 },
          { rank: 3, name: "LeoNn",     alliance: "Arc", region: "Kingsland", power: 33997761 },
          { rank: 4, name: "Amanamu",   alliance: "GUE", region: "Kingsland", power: 30293723 },
        ],
        alliances: [
          { rank: 1, tag: "LoW", name: "LegionOfWrath", region: "Kyuno",   allies: 168, cities: 132, power: 1628718920 },
          { rank: 2, tag: "Arc", name: "AnatolianArc",  region: "Neilos",  allies: 163, cities: 127, power: 934997072 },
          { rank: 3, tag: "GUE", name: "GARUDAEMPIRE",  region: "Kyuno",   allies: 168, cities: 125, power: 933246817 },
          { rank: 4, tag: "LOW", name: "LegionAcademy", region: "Olympia", allies: 131, cities: 57,  power: 579262904 },
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
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "Ragnaroks10", alliance: "PHX", region: "Kingsland", power: 34615806 },
          { rank: 2, name: "Khelbin戦争",  alliance: "JUD", region: "Kingsland", power: 32436499 },
          { rank: 3, name: "Alohagrown",  alliance: "JUD", region: "Kingsland", power: 23935909 },
          { rank: 4, name: "Pytha",       alliance: "MYT", region: "Kingsland", power: 21697822 },
        ],
        alliances: [
          { rank: 1, tag: "JUD", name: "SolemnJudgment", region: "Gaul",   allies: 167, cities: 134, power: 1243922770 },
          { rank: 2, tag: "PHX", name: "PhoenixDynast",  region: "Neilos", allies: 161, cities: 116, power: 775870392 },
          { rank: 3, tag: "MYT", name: "Mythos",         region: "Tinir",  allies: 118, cities: 105, power: 599572028 },
          { rank: 4, tag: "RTP", name: "Velociraptor",   region: "Neilos", allies: 124, cities: 38,  power: 181640662 },
        ],
      },
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "Ragnaroks10", alliance: "PHX", region: "Kingsland",       power: 34964038 },
          { rank: 2, name: "Khelbin戦争",  alliance: "JUD", region: "North Kingsland", power: 33270718 },
          { rank: 3, name: "Alohagrown",  alliance: "JUD", region: "Kingsland",       power: 23733730 },
          { rank: 4, name: "Wonju",       alliance: "JUD", region: "Kingsland",       power: 22387982 },
          { rank: 5, name: "Pytha",       alliance: "MYT", region: "Kingsland",       power: 22320620 },
        ],
        alliances: [
          { rank: 1, tag: "JUD", name: "SolemnJudgment", region: "Gaul",   allies: 169, cities: 140, power: 1316374360 },
          { rank: 2, tag: "PHX", name: "PhoenixDynast",  region: "Neilos", allies: 166, cities: 126, power: 827276297 },
          { rank: 3, tag: "MYT", name: "Mythos",         region: "Tinir",  allies: 118, cities: 107, power: 630226597 },
          { rank: 4, tag: "RTP", name: "Velociraptor",   region: "Neilos", allies: 130, cities: 40,  power: 195123080 },
        ],
      },
      {
        date: "24/08/2026",
        players: [
          { rank: 1, name: "Ragnaroks10", alliance: "PHX", region: "Kingsland",       power: 37346999 },
          { rank: 2, name: "Khelbin戦争",  alliance: "JUD", region: "North Kingsland", power: 36268048 },
          { rank: 3, name: "Wonju",       alliance: "JUD", region: "Kingsland",       power: 28247087 },
          { rank: 4, name: "Pytha",       alliance: "MYT", region: "Kingsland",       power: 25491025 },
        ],
        alliances: [
          { rank: 1, tag: "JUD", name: "SolemnJudgment", region: "Gaul",   allies: 168, cities: 154, power: 1485186881 },
          { rank: 2, tag: "PHX", name: "PhoenixDynast",  region: "Neilos", allies: 159, cities: 137, power: 890515581 },
          { rank: 3, tag: "MYT", name: "Mythos",         region: "Tinir",  allies: 114, cities: 116, power: 687156967 },
          { rank: 4, tag: "RTP", name: "Velociraptor",   region: "Neilos", allies: 130, cities: 44,  power: 216089667 },
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
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "PPGW",     alliance: "STS", region: "Kingsland", power: 40244449 },
          { rank: 2, name: "~Bug~",    alliance: "STS", region: "Kingsland", power: 26757200 },
          { rank: 3, name: "LordGWW",  alliance: "STS", region: "Kingsland", power: 20013569 },
          { rank: 4, name: "Flamezor", alliance: "THO", region: "Kingsland", power: 19650645 },
        ],
        alliances: [
          { rank: 1, tag: "STS", name: "SPARTANICUS",  region: "Gaul",     allies: 158, cities: 115, power: 873012058 },
          { rank: 2, tag: "THO", name: "THEORDER",     region: "Kyuno",    allies: 165, cities: 124, power: 789424389 },
          { rank: 3, tag: "FAM", name: "ROYALF4MILY",  region: "Eastland", allies: 82,  cities: 122, power: 328164581 },
          { rank: 4, tag: "FRP", name: "FrostReapers", region: "Gaul",     allies: 110, cities: 36,  power: 80306128 },
        ],
      },
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "PPGW",     alliance: "STS", region: "Kingsland", power: 40329831 },
          { rank: 2, name: "~Bug~",    alliance: "STS", region: "Kingsland", power: 26541858 },
          { rank: 3, name: "LordGWW",  alliance: "STS", region: "Kingsland", power: 20959800 },
          { rank: 4, name: "Flamezor", alliance: "THO", region: "Kingsland", power: 19964295 },
        ],
        alliances: [
          { rank: 1, tag: "STS", name: "SPARTANICUS",  region: "Gaul",     allies: 152, cities: 115, power: 897588825 },
          { rank: 2, tag: "THO", name: "THEORDER",     region: "Kyuno",    allies: 165, cities: 127, power: 822748272 },
          { rank: 3, tag: "FAM", name: "ROYALF4MILY",  region: "Eastland", allies: 82,  cities: 124, power: 332748369 },
          { rank: 4, tag: "FRP", name: "FrostReapers", region: "Gaul",     allies: 110, cities: 39,  power: 83194441 },
        ],
      },
      {
        date: "24/08/2026",
        players: [
          { rank: 1, name: "PPGW",     alliance: "STS", region: "Kingsland", power: 46148109 },
          { rank: 2, name: "~Bug~",    alliance: "STS", region: "Kingsland", power: 29769687 },
          { rank: 3, name: "LordGWW",  alliance: "STS", region: "Kingsland", power: 24416270 },
          { rank: 4, name: "Flamezor", alliance: "THO", region: "Kingsland", power: 23222966 },
        ],
        alliances: [
          { rank: 1, tag: "STS", name: "SPARTANICUS",  region: "Gaul",     allies: 152, cities: 121, power: 1031118883 },
          { rank: 2, tag: "THO", name: "THEORDER",     region: "Kyuno",    allies: 164, cities: 135, power: 899126634 },
          { rank: 3, tag: "FAM", name: "ROYALF4MILY",  region: "Eastland", allies: 85,  cities: 126, power: 379777862 },
          { rank: 4, tag: "FRP", name: "FrostReapers", region: "Gaul",     allies: 110, cities: 39,  power: 89133660 },
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
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "Bigaktonaj", alliance: "HUN", region: "Kingsland", power: 19466152 },
          { rank: 2, name: "Hakage",     alliance: "HUN", region: "Kingsland", power: 17870731 },
          { rank: 3, name: "SABORGXXX",  alliance: "HUN", region: "Kingsland", power: 17662469 },
          { rank: 4, name: "61RTE61",    alliance: "HUN", region: "Kingsland", power: 15133760 },
        ],
        alliances: [
          { rank: 1, tag: "HUN", name: "BLODY°HUNTERS",  region: "Kyuno",    allies: 168, cities: 118, power: 828227198 },
          { rank: 2, tag: "GFT", name: "♣GoodFernet♣",   region: "Olympia",  allies: 156, cities: 134, power: 728128938 },
          { rank: 3, tag: "ELD", name: "ELDORA",         region: "Tinir",    allies: 96,  cities: 45,  power: 126899928 },
          { rank: 4, tag: "ESM", name: "EmperorsMember", region: "Eastland", allies: 66,  cities: 48,  power: 124231312 },
        ],
      },
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "Bigaktonaj", alliance: "HUN", region: "Kingsland", power: 19466152 },
          { rank: 2, name: "Hakage",     alliance: "HUN", region: "Kyuno",     power: 18560809 },
          { rank: 3, name: "SABORGXXX",  alliance: "HUN", region: "Kingsland", power: 18451864 },
          { rank: 4, name: "61RTE61",    alliance: "HUN", region: "Kingsland", power: 15594170 },
        ],
        alliances: [
          { rank: 1, tag: "HUN", name: "BLODY°HUNTERS",  region: "Kyuno",    allies: 167, cities: 125, power: 870259677 },
          { rank: 2, tag: "GFT", name: "♣GoodFernet♣",   region: "Olympia",  allies: 165, cities: 136, power: 806801197 },
          { rank: 3, tag: "ESM", name: "EmperorsMember", region: "Eastland", allies: 63,  cities: 50,  power: 124488572 },
          { rank: 4, tag: "ELD", name: "ELDORA",         region: "Tinir",    allies: 53,  cities: 42,  power: 80863354 },
        ],
      },
      {
        date: "24/08/2026",
        players: [
          { rank: 1, name: "Hakage",     alliance: "HUN", region: "Kingsland", power: 19726262 },
          { rank: 2, name: "Bigaktonaj", alliance: "HUN", region: "Kingsland", power: 19484360 },
          { rank: 3, name: "SABORGXXX",  alliance: "HUN", region: "Kingsland", power: 19225849 },
          { rank: 4, name: "donwick",    alliance: "GFT", region: "Kingsland", power: 17591753 },
        ],
        alliances: [
          { rank: 1, tag: "HUN", name: "BLODY°HUNTERS",  region: "Kyuno",    allies: 161, cities: 149, power: 950681002 },
          { rank: 2, tag: "GFT", name: "♣GoodFernet♣",   region: "Olympia",  allies: 162, cities: 149, power: 888984011 },
          { rank: 3, tag: "ESM", name: "EmperorsMember", region: "Eastland", allies: 63,  cities: 53,  power: 128277092 },
          { rank: 4, tag: "ELD", name: "ELDORA",         region: "Tinir",    allies: 52,  cities: 42,  power: 84159547 },
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
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "Halopopo",  alliance: "RUN", region: "Olympia",        power: 45489746 },
          { rank: 2, name: "Thor008",   alliance: "T1S", region: "East Kingsland", power: 25111950 },
          { rank: 3, name: "火爆小霸王", alliance: "NR¹", region: "Kingsland",      power: 24707070 },
          { rank: 4, name: "터비",       alliance: "RUN", region: "West Kingsland", power: 18911449 },
        ],
        alliances: [
          { rank: 1, tag: "NR¹", name: "NightRaid¹",    region: "Kyuno",  allies: 167, cities: 129, power: 904158546 },
          { rank: 2, tag: "RUN", name: "RUNA88",        region: "Neilos", allies: 154, cities: 113, power: 674919449 },
          { rank: 3, tag: "QEx", name: "0QuingEmpire0", region: "Neilos", allies: 89,  cities: 46,  power: 111599030 },
          { rank: 4, tag: "T1S", name: "Thanatos2",     region: "Tinir",  allies: 44,  cities: 75,  power: 68785388 },
        ],
      },
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "Halopopo",  alliance: "RUN", region: "Kingsland",      power: 46279013 },
          { rank: 2, name: "火爆小霸王", alliance: "NR¹", region: "Kingsland",      power: 26189365 },
          { rank: 3, name: "Thor008",   alliance: "T1S", region: "East Kingsland", power: 25111950 },
          { rank: 4, name: "터비",       alliance: "RUN", region: "Kingsland",      power: 19355622 },
        ],
        alliances: [
          { rank: 1, tag: "NR¹", name: "NightRaid¹",    region: "Kyuno",  allies: 167, cities: 134, power: 963827965 },
          { rank: 2, tag: "RUN", name: "RUNA88",        region: "Neilos", allies: 165, cities: 113, power: 744916780 },
          { rank: 3, tag: "QEx", name: "0QuingEmpire0", region: "Neilos", allies: 98,  cities: 48,  power: 134749801 },
          { rank: 4, tag: "T1S", name: "Thanatos2",     region: "Tinir",  allies: 46,  cities: 75,  power: 75979777 },
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
      {
        date: "14/08/2026",
        players: [
          { rank: 1, name: "ekivoki",     alliance: "♛RI", region: "North Kingsland", power: 21583183 },
          { rank: 2, name: "無題Untitled", alliance: "HoV", region: "Kingsland",       power: 14572817 },
          { rank: 3, name: "如意RUYI",     alliance: "HoV", region: "East Kingsland",  power: 12785755 },
          { rank: 4, name: "娜娜Nina",     alliance: "HoV", region: "Kingsland",       power: 12616950 },
        ],
        alliances: [
          { rank: 1, tag: "♛RI", name: "♛Royalty",      region: "Kyuno",    allies: 170, cities: 114, power: 645510821 },
          { rank: 2, tag: "HoV", name: "HeroesOfValor", region: "Eastland", allies: 127, cities: 102, power: 517848430 },
          { rank: 3, tag: "VIP", name: "Gangstar",      region: "Neilos",   allies: 70,  cities: 47,  power: 90630345 },
          { rank: 4, tag: "FVS", name: "FrostVanguard", region: "Tinir",    allies: 84,  cities: 36,  power: 52301205 },
        ],
      },
      {
        date: "17/08/2026",
        players: [
          { rank: 1, name: "ekivoki",     alliance: "♛RI", region: "Kingsland",      power: 27040127 },
          { rank: 2, name: "無題Untitled", alliance: "HoV", region: "Kingsland",      power: 17816534 },
          { rank: 3, name: "娜娜Nina",     alliance: "HoV", region: "Kingsland",      power: 15747394 },
          { rank: 4, name: "MagicD1",     alliance: "HoV", region: "East Kingsland", power: 13037571 },
        ],
        alliances: [
          { rank: 1, tag: "♛RI", name: "♛Royalty",      region: "Kyuno",    allies: 169, cities: 120, power: 729380065 },
          { rank: 2, tag: "HoV", name: "HeroesOfValor", region: "Eastland", allies: 131, cities: 89,  power: 573474814 },
          { rank: 3, tag: "VIP", name: "Gangstar",      region: "Neilos",   allies: 66,  cities: 52,  power: 81999487 },
          { rank: 4, tag: "FVS", name: "FrostVanguard", region: "Tinir",    allies: 83,  cities: 37,  power: 52779220 },
        ],
      },
    ],
  },

};
