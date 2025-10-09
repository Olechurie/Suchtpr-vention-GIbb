const contentArray = [
  {
    title: "4-FA",
    content:
      "4-FA (4-Fluoramfetamin) ist eine synthetische Substanz aus der Gruppe der Amphetamine. Sie wirkt stimulierend und leicht empathogen, ähnlich wie MDMA, kann aber zu erhöhter Herzfrequenz und Neurotoxizität führen.",
    iconSvg: "fa-vial",
  },
  {
    title: "Anabole Androgene",
    content:
      "Anabole androgene Steroide (AAS) sind synthetisch hergestellte Wirkstoffe mit muskelaufbauender und vermännlichender Wirkung. Sie erhöhen die Muskelmasse, fördern Regeneration, bergen jedoch erhebliche gesundheitliche Risiken.",
    iconSvg: "fa-dumbbell",
  },
  {
    title: "Kokain",
    content:
      "Kokain ist ein starkes Stimulans, das Euphorie und Energie steigert. Es birgt ein hohes Abhängigkeitspotenzial und kann Herzrhythmusstörungen, Bluthochdruck und psychische Probleme verursachen.",
    iconSvg: "fa-snowflake",
  },
  {
    title: "LSD",
    content:
      "LSD (Lysergsäurediethylamid) ist ein psychedelisches Halluzinogen, das Wahrnehmung und Denken stark verändert. Es kann sowohl intensive Erlebnisse als auch Angstzustände hervorrufen.",
    iconSvg: "fa-eye",
  },
  {
    title: "Cannabis",
    content:
      "Cannabis enthält THC, das entspannend und stimmungsverändernd wirkt. Längerfristiger Konsum kann bei einigen Menschen psychische Störungen oder Motivationsverlust verursachen.",
    iconSvg: "fa-cannabis",
  },
  {
    title: "MDMA",
    content:
      "MDMA (Ecstasy) steigert das Empathieempfinden, die Stimmung und das Energielevel. Risiken sind Dehydrierung, Überhitzung und langfristige Schädigung des Serotoninsystems.",
    iconSvg: "fa-heart",
  },
  {
    title: "Benzodiazepine",
    content:
      "Benzodiazepine wirken angstlösend, schlaffördernd und muskelentspannend. Längerer Missbrauch kann starke Abhängigkeit und Entzugserscheinungen verursachen.",
    iconSvg: "fa-bed",
  },
  {
    title: "Nikotin",
    content:
      "Nikotin ist ein stark suchterzeugendes Stimulans in Tabakprodukten. Es erhöht Puls und Blutdruck und trägt maßgeblich zu Herz-, Lungen- und Krebserkrankungen bei.",
    iconSvg: "fa-smoking",
  },
  {
    title: "Alkohol",
    content:
      "Alkohol ist ein legales Sedativum, das enthemmend wirkt, aber Organe wie Leber, Herz und Gehirn schädigen kann. Chronischer Konsum führt zu Abhängigkeit.",
    iconSvg: "fa-wine-bottle",
  },
  {
    title: "Amphetamine",
    content:
      "Amphetamine steigern Konzentration und Wachheit, werden medizinisch bei ADHS genutzt, aber oft missbraucht. Überdosierung kann Herz-Kreislauf-Versagen auslösen.",
    iconSvg: "fa-bolt",
  },
  {
    title: "GHB",
    content:
      "GHB (Gamma-Hydroxybuttersäure) wirkt sedierend und euphorisierend. Überdosierung kann zu Bewusstlosigkeit, Atemstillstand und Abhängigkeit führen.",
    iconSvg: "fa-water",
  },
  {
    title: "Ketamin",
    content:
      "Ketamin ist ein dissoziatives Anästhetikum mit halluzinogenen Effekten. In der Medizin als Narkosemittel und zur Depressionsbehandlung eingesetzt, wird es oft missbraucht.",
    iconSvg: "fa-flask",
  },
  {
    title: "Psilocybin",
    content:
      "Psilocybin ist der psychoaktive Wirkstoff in sogenannten Zauberpilzen. Es verändert Wahrnehmung und Denken, kann aber auch Angst oder Verwirrung auslösen.",
    iconSvg: "fa-mushroom",
  },
  {
    title: "Heroin",
    content:
      "Heroin ist ein stark wirksames Opiat mit hohem Abhängigkeitspotenzial. Es führt zu Euphorie, aber auch zu Atemdepression und schweren Entzugserscheinungen.",
    iconSvg: "fa-syringe",
  },
  {
    title: "Methadon",
    content:
      "Methadon ist ein synthetisches Opioid, das in der Substitutionstherapie eingesetzt wird, um Heroinabhängige zu stabilisieren. Es wirkt schmerzlindernd und sedierend.",
    iconSvg: "fa-capsules",
  },
  {
    title: "Methamphetamin",
    content:
      "Methamphetamin („Crystal Meth“) ist ein stark stimulierendes Amphetamin-Derivat, das Euphorie, Wachheit und Selbstbewusstsein steigert, aber massiv neurotoxisch wirkt.",
    iconSvg: "fa-gem",
  },
  {
    title: "Koffein",
    content:
      "Koffein ist ein legales Stimulans, das die Wachheit erhöht und Müdigkeit reduziert. Übermäßiger Konsum kann Nervosität, Schlafstörungen und Herzrasen verursachen.",
    iconSvg: "fa-mug-hot",
  },
  {
    title: "Nitros",
    content:
      "Distickstoffmonoxid („Lachgas“) wirkt kurzzeitig euphorisierend und schmerzstillend. Häufiger Missbrauch kann Nervenschäden und Sauerstoffmangel verursachen.",
    iconSvg: "fa-cloud",
  },
  {
    title: "DXM",
    content:
      "Dextromethorphan ist ein Hustenmittel mit dissoziativen Eigenschaften. In hohen Dosen wirkt es halluzinogen, birgt aber neurologische Risiken.",
    iconSvg: "fa-capsules",
  },
  {
    title: "Barbiturate",
    content:
      "Barbiturate sind sedierende Medikamente, die früher als Schlafmittel genutzt wurden. Aufgrund des hohen Abhängigkeits- und Überdosierungsrisikos kaum noch verbreitet.",
    iconSvg: "fa-moon",
  },
  {
    title: "Opium",
    content:
      "Opium ist ein natürliches Alkaloidgemisch aus Schlafmohn und enthält Morphin. Es wirkt stark schmerzlindernd und sedierend, aber hoch suchterzeugend.",
    iconSvg: "fa-leaf",
  },
  {
    title: "Mephedron",
    content:
      "Mephedron („Meow Meow“) ist ein synthetisches Cathinon mit stimulierender und empathogener Wirkung, ähnlich MDMA. Es kann stark suchterzeugend wirken.",
    iconSvg: "fa-paw",
  },
];

export default contentArray;
