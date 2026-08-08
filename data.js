// ============================================================
//  DONNÉES — à remplir à la main depuis les screenshots
// ============================================================
//  Pour chaque serveur :
//    date      : date du scan au format "JJ/MM/AAAA" (ou "" si pas encore scanné)
//    players   : top joueurs   { rank, name, alliance, region, power }
//    alliances : top alliances { rank, tag, name, region, allies, cities, power }
//
//  power : le chiffre brut sans espaces ni virgules (ex: 28916813)
// ============================================================

const MY_SERVER = 445; // notre serveur

const SERVERS = {

  440: {
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

  441: { date: "", players: [], alliances: [] },
  442: { date: "", players: [], alliances: [] },
  443: { date: "", players: [], alliances: [] },
  444: { date: "", players: [], alliances: [] },
  445: { date: "", players: [], alliances: [] },
  446: { date: "", players: [], alliances: [] },
  447: { date: "", players: [], alliances: [] },
  448: { date: "", players: [], alliances: [] },
  449: { date: "", players: [], alliances: [] },

};
