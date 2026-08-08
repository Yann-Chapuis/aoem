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
        date: "08/08/2026",
        players: [
          { rank: 1, name: "ArmyBTS",      alliance: "WRE", region: "Kingsland", power: 28916813 },
          { rank: 2, name: "VELDORA~",     alliance: "EYM", region: "Kingsland", power: 28907710 },
          { rank: 3, name: "acknowlegme",  alliance: "N三Ø", region: "Kingsland", power: 22495437 },
          { rank: 4, name: "Davyjones483", alliance: "WAR", region: "Kingsland", power: 21277556 },
        ],
        alliances: [
          { rank: 1, tag: "WAR", name: "440Dragons",     region: "Gaul",     allies: 169, cities: 149, power: 971940727 },
          { rank: 2, tag: "EYM", name: "ElysiumWarBand", region: "Eastland", allies: 162, cities: 124, power: 795198916 },
          { rank: 3, tag: "WRE", name: "WindRiseEmpire", region: "Olympia",  allies: 128, cities: 112, power: 499956720 },
          { rank: 4, tag: "N三Ø", name: "E",              region: "Tinir",    allies: 126, cities: 108, power: 387091001 },
        ],
      },
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
    ],
  },
  442: { snapshots: [] },
  443: { snapshots: [] },
  444: { snapshots: [] },
  445: { snapshots: [] },
  446: { snapshots: [] },
  447: { snapshots: [] },
  448: { snapshots: [] },
  449: { snapshots: [] },

};
