export default {
  objects: [
    {
      id: "interaktion",
      name: "Interaktionen von Akteuren oder Datenflüsse",
      description:
        "Sie möchten auf einfache Weise darstellen, wie Betroffene miteinander und mit Dritten agieren; oder welche Daten benötigt werden und wie diese fließen.",
      cluster: "schaubild",
      order: 1,
    },
    {
      id: "logik",
      name: "Entscheidungslogiken",
      description:
        "Im Mittelpunkt Ihrer Regelung stehen voneinander abhängige Entscheidungen, die Auswirkungen auf die Betroffenen haben.",
      cluster: "entscheidungsbaum",
      order: 2,
    },
    {
      id: "prozess",
      name: "Ganzer Prozess",
      description:
        "Sie möchten den gesamten oder einen großen Teil des Vollzugsprozesses Ihrer Regelung zeigen; vielleicht sogar der umliegenden Gesetzeslandschaft.",
      cluster: "flussdiagramm",
      order: 3,
    },
    {
      id: "unbekannt",
      name: "Weiß ich nicht",
      cluster: "schaubild",
      order: 4,
    },
    {
      id: "anderes",
      name: "Anderes",
      cluster: "schaubild",
      order: 5,
    },
  ],
  reasons: [
    {
      id: "austausch",
      name: "Für den Austausch mit anderen",
      description:
        "z. B. Kommunikation, gemeinsames Verständnis aufbauen, Ideen austauschen",
      order: 1,
    },
    {
      id: "selbst",
      name: "Für mich selbst",
      description:
        "z. B. Abhängigkeiten strukturieren; Erkennen von Logikbrüchen, Digitaltauglichkeit oder Medienbrüchen",
      order: 2,
    },
    {
      id: "dokumentation",
      name: "Zur Dokumentation",
      order: 3,
    },
    {
      id: "unbekannt",
      name: "Weiß ich nicht",
      order: 4,
    },
    {
      id: "anderes",
      name: "Anderes",
      order: 5,
    },
  ],
  clusters: [
    {
      id: "schaubild",
      name: "Schaubild",
      tools: [
        "papier-schaubild",
        "conceptboard-schaubild",
        "bundescloud-drawio-schaubild",
      ],
      notations: ["frei"],
      description:
        "Ein Schaubild zeigt eine Darstellung des Gesamtsystems, nicht unbedingt einen zeitlichen Ablauf. Visualisierungen von Daten- und Informationsflüssen decken Lücken in Systemen auf und helfen beim Austausch mit IT-Experten. Ein Schaubild muss nicht vollständig oder detailliert sein, und kann auch einen Ausschnitt eines Systems zeigen.",
      img: {
        src: "clusters/schaubild.jpg",
        alt: "Drei Beispiele für einfache, freie Schaubilder",
      },
    },
    {
      id: "entscheidungsbaum",
      name: "Entscheidungsbaum",
      tools: [
        "papier-entscheidungsbaum",
        "conceptboard-entscheidungsbaum",
        "logos",
        "bundescloud-drawio-entscheidungsbaum",
        "adonis",
      ],
      notations: ["rulemap", "dmn", "frei"],
      description:
        "Ein Entscheidungsbaum ordnet Entscheidungen und deren Auswirkungen in ein logisches Verhältnis. Somit fächert sich ein Baum ausgehend von einem Anfangspunkt immer weiter auf. Zusätzlich können logische Verknüpfungen wie ›Und‹, ›Oder‹, ›Exlusiv Oder‹ dabei helfen, Entscheidungsmöglichkeiten in einen Kontext zu setzen. So können Logikfehler identifiziert und eine Grundlage für Automatisierung geschaffen werden. Der strukturierte Inhalt eines Entscheidungsbaums kann als Basis für einen Regelungstext genutzt werden.",
      img: {
        src: "clusters/entscheidungsbaum.jpg",
        alt: "Ein beispielhafter Entscheidungsbaum ohne Text mit logischen Verknüpfungen",
      },
    },
    {
      id: "flussdiagramm",
      name: "Flussdiagramm",
      tools: [
        "papier-flussdiagramm",
        "conceptboard-flussdiagramm",
        "bundescloud-drawio-flussdiagramm",
        "modulo",
        "adonis",
        "bic",
        "aris",
        "aris-cloud",
        "msvisio",
      ],
      notations: ["bpmn", "fim", "frei"],
      description:
        "Ein Flussdiagramm stellt einen Vollzugsprozess oder Arbeitsablauf visuell dar. Mit Hilfe standardisierter Symbole wird der Prozess in einzelnen, chronologischen Schritten abgebildet. Flussdiagramme helfen dabei, fehlende Zwischenschritte, Medienbrüche und Möglichkeiten zum Vereinfachen von Prozessen zu erkennen.",
      img: {
        src: "clusters/flussdiagramm.jpg",
        alt: "Ein beispielhaftes Flussdiagramms ohne Text",
      },
    },
  ],
  notations: [
    { id: "frei", name: "Frei" },
    { id: "rulemap", name: "Rulemap" },
    { id: "dmn", name: "DMN" },
    { id: "bpmn", name: "BPMN" },
    { id: "fim", name: "FIM" },
  ],
  tools: [
    {
      id: "papier-schaubild",
      name: "Papier",
      description:
        "Die erste Version eines Schaubilds sollte mit Stift und Papier angefertigt werden. Dieses Vorgehen ist häufig schneller, um erste Gedanken zu skizzieren, als bereits initial mit einem digitalen Werkzeug zu arbeiten. Zudem ist die Hemmschwelle geringer, den ersten Ansatz zu verwerfen und noch einmal neu anzufangen. Dies ist aber bei den ersten Vorarbeiten völlig normal und oft hilfreich.",
      link: "",
      img: {
        src: "tools/papier.png",
        alt: "Eine Person, die mit einem Stift eine Abbildung auf ein Papier zeichnet",
      },
    },
    {
      id: "papier-entscheidungsbaum",
      name: "Papier",
      description:
        "Die erste Version eines Entscheidungsbaums sollte mit Stift und Papier angefertigt werden. Dieses Vorgehen ist häufig schneller, um erste Gedanken zu skizzieren, als bereits initial mit einem digitalen Werkzeug zu arbeiten. Zudem ist die Hemmschwelle geringer, den ersten Ansatz zu verwerfen und noch einmal neu anzufangen. Dies ist aber bei den ersten Vorarbeiten völlig normal und oft hilfreich.",
      link: "",
      img: {
        src: "tools/papier.png",
        alt: "Eine Person, die mit einem Stift eine Abbildung auf ein Papier zeichnet",
      },
    },
    {
      id: "papier-flussdiagramm",
      name: "Papier",
      description:
        "Die erste Version eines Flussdiagramms sollte mit Stift und Papier angefertigt werden. Dieses Vorgehen ist häufig schneller, um erste Gedanken zu skizzieren, als bereits initial mit einem digitalen Werkzeug zu arbeiten. Zudem ist die Hemmschwelle geringer, den ersten Ansatz zu verwerfen und noch einmal neu anzufangen. Dies ist aber bei den ersten Vorarbeiten völlig normal und oft hilfreich.",
      link: "",
      img: {
        src: "tools/papier.png",
        alt: "Eine Person, die mit einem Stift eine Abbildung auf ein Papier zeichnet",
      },
    },
    {
      id: "bundescloud-drawio-schaubild",
      name: "Bundescloud draw.io",
      description:
        "Als einfaches, digitales Werkzeug hilft Draw.io Ihnen dabei, Ihr Schaubild gut zu strukturieren und zu formatieren. Die große Arbeitsfläche ermöglicht die Darstellung einfacher und komplexer Inhalte und Abhängigkeiten. Das Programm verhält sich wie eine Magnetwand, so können schnell Elemente ersetzt oder verschoben werden.",
      access:
        "Für einen Zugang schreiben Sie einfach eine formlose E-Mail an die Ansprechperson in Ihrem Ressort.",
      link: "",
      img: {
        src: "tools/bundescloud-drawio-flussdiagramm.png",
        alt: "Die Benutzeroberfläche von Draw.io, die ein einfaches Schaubild darstellt",
      },
    },
    {
      id: "bundescloud-drawio-entscheidungsbaum",
      name: "Bundescloud draw.io",
      description:
        "Als einfaches, digitales Werkzeug hilft Draw.io Ihnen dabei, Ihren Entscheidungsbaum gut zu strukturieren und zu formatieren. Die große Arbeitsfläche ermöglicht die Darstellung komplexer Inhalte und Abhängigkeiten. Das Programm verhält sich wie eine Magnetwand, so können schnell Elemente ersetzt oder verschoben werden.",
      access:
        "Für einen Zugang schreiben Sie einfach eine formlose E-Mail an die Ansprechperson in Ihrem Ressort.",
      link: "",
      img: {
        src: "tools/bundescloud-drawio-entscheidungsbaum.png",
        alt: "Die Benutzeroberfläche von Draw.io, die einen einfachen Entscheidungsbaum darstellt",
      },
    },
    {
      id: "bundescloud-drawio-flussdiagramm",
      name: "Bundescloud draw.io",
      description:
        "Als einfaches, digitales Werkzeug hilft Draw.io Ihnen dabei, Ihr Flussdiagramm gut zu strukturieren und zu formatieren. Die große Arbeitsfläche ermöglicht die Darstellung komplexer Inhalte und Abhängigkeiten. Das Programm verhält sich wie eine Magnetwand, so können schnell Elemente ersetzt oder verschoben werden.",
      access:
        "Für einen Zugang schreiben Sie einfach eine formlose E-Mail an die Ansprechperson in Ihrem Ressort.",
      link: "",
      img: {
        src: "tools/bundescloud-drawio-flussdiagramm.png",
        alt: "Die Benutzeroberfläche von Draw.io, die ein einfaches Flussdiagramm darstellt",
      },
    },
    {
      id: "logos",
      name: "Logos",
      description:
        "Mit Logos können Sie eine Rulemap erstellen, eine Art Entscheidungsbaum, der spezifisch für den juristischen Kontext entwickelt wurde. Sie können Ihre gesamte Regelung abbilden und so verschiedene Tatbestände simulieren. Desweiteren ermöglicht das Format der Rulemap eine Logikprüfung.",
      access:
        "Für einen Zugang schreiben Sie einfach eine formlose E-Mail an die Ansprechperson in Ihrem Ressort.",
      link: "https://rulemapping.knowledgetools.de/rulemapping/#",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "adonis",
      name: "Adonis",
      description:
        "Adonis ist eine Spezialsoftware zum Modellieren von Prozessen; die richtige Nutzung braucht Übung. Adonis sollten Sie dann einsetzen, wenn Sie eine FIM-Modellierung anfertigen möchten oder in Zukunft öfter mit FIM-Modellierungen zu tun haben.",
      access:
        "Kontaktieren Sie uns gerne, so dass wir Sie auf Ihren hausinternen Ansprechpartner verweisen können.",
      link: "",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "bic",
      name: "BIC",
      description:
        "BIC Process Design ist eine Spezialsoftware zum Modellieren von Prozessen; die richtige Nutzung braucht Übung. BIC Process Design sollten Sie dann einsetzen, wenn Sie eine FIM-Modellierung anfertigen möchten oder in Zukunft öfter mit FIM-Modellierungen zu tun haben.",
      access:
        "Kontaktieren Sie uns gerne, so dass wir Sie auf Ihren hausinternen Ansprechpartner verweisen können.",
      link: "",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "conceptboard-schaubild",
      name: "Conceptboard",
      description:
        "Als einfaches, digitales Werkzeug hilft Conceptboard Ihnen dabei, Ihr Schaubild gut zu strukturieren und zu formatieren. Die große Arbeitsfläche ermöglicht die Darstellung einfacher und komplexer Inhalte und Abhängigkeiten. Das Programm verhält sich wie eine Magnetwand, so können schnell Elemente ersetzt oder verschoben werden.",
      access:
        "Für einen Zugang schreiben Sie einfach eine formlose E-Mail an die Ansprechperson in Ihrem Ressort.",
      link: "",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "conceptboard-entscheidungsbaum",
      name: "Conceptboard",
      description:
        "Als einfaches, digitales Werkzeug hilft Conceptboard Ihnen dabei, Ihren Entscheidungsbaum gut zu strukturieren und zu formatieren. Die große Arbeitsfläche ermöglicht die Darstellung komplexer Inhalte und Abhängigkeiten. Das Programm verhält sich wie eine Magnetwand, so können schnell Elemente ersetzt oder verschoben werden.",
      access:
        "Für einen Zugang schreiben Sie einfach eine formlose E-Mail an die Ansprechperson in Ihrem Ressort.",
      link: "",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "conceptboard-flussdiagramm",
      name: "Conceptboard",
      description:
        "Als einfaches, digitales Werkzeug hilft Conceptboard Ihnen dabei, Ihr Flussdiagramm gut zu strukturieren und zu formatieren. Die große Arbeitsfläche ermöglicht die Darstellung komplexer Inhalte und Abhängigkeiten. Das Programm verhält sich wie eine Magnetwand, so können schnell Elemente ersetzt oder verschoben werden.",
      access:
        "Für einen Zugang schreiben Sie einfach eine formlose E-Mail an die Ansprechperson in Ihrem Ressort.",
      link: "",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "msvisio",
      name: "MS Visio",
      description:
        "Microsoft Visio ist eine Spezialsoftware zur Modellierung von Prozessen. Die Benutzeroberfläche erinnert an die bekannten Office-Programme, trotzdem braucht die Nutzung Übung. Wir empfehlen den Einsatz dann, wenn Sie sich sicher sind, dass Sie in der Zukunft öfter modellieren werden.",
      access:
        "Kontaktieren Sie uns gerne, so dass wir Sie auf Ihren hausinternen Ansprechpartner verweisen können.",
      link: "",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "modulo",
      name: "Modulo",
      description:
        "Modulo ist ein analoges, kartenbasiertes Werkzeug, das für die öffentliche Verwaltung konzipiert wurde. Mit Hilfe von vordefinierten Magnetkarten können Sie einfache Prozesse der Leistungsverwaltung darstellen.",
      access:
        "Den Koffer mit den Magnetkarten finden Sie bei Ihrem hausinternen Ansprechpartner, kontaktieren Sie uns hierzu gerne direkt.",
      link: "https://shi-institut.de/produkte/modulo/",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "aris",
      name: "Aris",
      description:
        'ARIS ist eine Spezialsoftware zur Modellierung von Prozessen; die Nutzung braucht Übung. Die Software ermöglicht eine Modellierung in der "BPMN"-Notation, damit ist diese dem FIM-Prozess nah. Wir empfehlen den Einsatz dann, wenn Sie sich sicher sind, dass Sie in der Zukunft öfter modellieren werden.',
      access:
        "Kontaktieren Sie uns gerne, so dass wir Sie auf Ihren hausinternen Ansprechpartner verweisen können.",
      link: "",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "aris-cloud",
      name: "Aris Cloud",
      description:
        'ARIS ist eine Spezialsoftware zur Modellierung von Prozessen; die Nutzung braucht Übung. Die Software ermöglicht eine Modellierung in der "BPMN"-Notation, damit ist diese dem FIM-Prozess nah. Wir empfehlen den Einsatz dann, wenn Sie sich sicher sind, dass Sie in der Zukunft öfter modellieren werden.',
      access:
        "Kontaktieren Sie uns gerne, so dass wir Sie auf Ihren hausinternen Ansprechpartner verweisen können.",
      link: "",
      img: {
        src: "",
        alt: "",
      },
    },
    {
      id: "powerpoint",
      name: "Microsoft PowerPoint",
      description:
        "Microsoft PowerPoint ist ein Programm, um Präsentationen zu erstellen. Sie können Inhalte auf begrenztem Platz darstellen.",
      link: "",
      img: {
        src: "",
        alt: "",
      },
    },
  ],
  fidelities: [
    {
      id: "einfach",
      name: "Für den schnellen Start",
      order: 1,
      clusterRessortToolMap: {
        schaubild: [
          {
            ressorts: [
              "bmwk",
              "bmf",
              "bmi",
              "aa",
              "bmj",
              "bmas",
              "bmvg",
              "bmel",
              "bmfsfj",
              "bmg",
              "bmdv",
              "bmuv",
              "bmbf",
              "bmz",
              "bmwsb",
            ],
            primaryTool: "papier-schaubild",
          },
        ],
        entscheidungsbaum: [
          {
            ressorts: [
              "bmwk",
              "bmf",
              "bmi",
              "aa",
              "bmj",
              "bmas",
              "bmvg",
              "bmel",
              "bmfsfj",
              "bmg",
              "bmdv",
              "bmuv",
              "bmbf",
              "bmz",
              "bmwsb",
            ],
            primaryTool: "papier-entscheidungsbaum",
          },
        ],
        flussdiagramm: [
          {
            ressorts: [
              "bmwk",
              "bmf",
              "bmi",
              "aa",
              "bmj",
              "bmas",
              "bmvg",
              "bmel",
              "bmfsfj",
              "bmg",
              "bmdv",
              "bmuv",
              "bmbf",
              "bmz",
              "bmwsb",
            ],
            primaryTool: "papier-flussdiagramm",
          },
        ],
      },
    },
    {
      id: "digital",
      name: "Eine schnelle digitale Version",
      order: 2,
      clusterRessortToolMap: {
        schaubild: [
          {
            ressorts: ["bmi", "bmj"],
            primaryTool: "bundescloud-drawio-schaubild",
            alternativeTools: ["powerpoint"],
          },
          {
            ressorts: ["bmas"],
            primaryTool: "bundescloud-drawio-schaubild",
            alternativeTools: ["conceptboard-schaubild", "powerpoint"],
          },
          {
            ressorts: ["bmf"],
            primaryTool: "powerpoint",
          },
          {
            ressorts: [
              "bmwk",
              "aa",
              "bmvg",
              "bmel",
              "bmfsfj",
              "bmg",
              "bmdv",
              "bmuv",
              "bmbf",
              "bmz",
              "bmwsb",
            ],
            primaryTool: "bundescloud-drawio-schaubild",
            alternativeTools: ["powerpoint"],
          },
        ],
        entscheidungsbaum: [
          {
            ressorts: ["bmas"],
            primaryTool: "bundescloud-drawio-entscheidungsbaum",
            alternativeTools: ["conceptboard-entscheidungsbaum", "powerpoint"],
          },
          {
            ressorts: ["bmf"],
            primaryTool: "powerpoint",
          },
          {
            ressorts: [
              "bmwk",
              "bmi",
              "aa",
              "bmj",
              "bmvg",
              "bmel",
              "bmfsfj",
              "bmg",
              "bmdv",
              "bmuv",
              "bmbf",
              "bmz",
              "bmwsb",
            ],
            primaryTool: "bundescloud-drawio-schaubild",
            alternativeTools: ["powerpoint"],
          },
        ],
        flussdiagramm: [
          {
            ressorts: ["bmi", "bmj"],
            primaryTool: "bundescloud-drawio-flussdiagramm",
            alternativeTools: ["conceptboard-flussdiagramm"],
          },
          {
            ressorts: ["bmas"],
            primaryTool: "bundescloud-drawio-flussdiagramm",
            alternativeTools: [
              "conceptboard-flussdiagramm",
              "modulo",
              "powerpoint",
            ],
          },
          {
            ressorts: ["bmf"],
            primaryTool: "powerpoint",
          },
          {
            ressorts: [
              "bmwk",
              "aa",
              "bmvg",
              "bmel",
              "bmfsfj",
              "bmg",
              "bmdv",
              "bmuv",
              "bmbf",
              "bmz",
              "bmwsb",
            ],
            primaryTool: "bundescloud-drawio-flussdiagramm",
            alternativeTools: ["powerpoint"],
          },
        ],
      },
    },
    {
      id: "pro",
      name: "Eine Profi-Version",
      order: 3,
      clusterRessortToolMap: {
        entscheidungsbaum: [
          {
            ressorts: ["bmas", "bmi", "bmwk"],
            primaryTool: "logos",
            alternativeTools: ["adonis"],
          },
          {
            ressorts: [
              "bmf",
              "aa",
              "bmj",
              "bmvg",
              "bmel",
              "bmfsfj",
              "bmg",
              "bmdv",
              "bmuv",
              "bmbf",
              "bmz",
              "bmwsb",
            ],
            primaryTool: "logos",
          },
        ],
        flussdiagramm: [
          {
            ressorts: ["bmi"],
            primaryTool: "bic",
            alternativeTools: ["adonis"],
          },
          {
            ressorts: ["bmf"],
            primaryTool: "msvisio",
            alternativeTools: ["aris-cloud"],
          },
          {
            ressorts: ["bmbf", "bmdv"],
            primaryTool: "aris",
          },
          {
            ressorts: ["bmj", "bmfsfj", "bmg", "bmz"],
            primaryTool: "msvisio",
          },
          {
            ressorts: ["bmas", "bmwk"],
            primaryTool: "adonis",
          },
        ],
      },
    },
  ],
  ressorts: [
    {
      id: "bmwk",
      name: "BMWK",
    },
    {
      id: "bmf",
      name: "BMF",
    },
    {
      id: "bmi",
      name: "BMI",
    },
    {
      id: "aa",
      name: "AA",
    },
    {
      id: "bmj",
      name: "BMJ",
    },
    {
      id: "bmas",
      name: "BMAS",
    },
    {
      id: "bmvg",
      name: "BMVg",
    },
    {
      id: "bmel",
      name: "BMEL",
    },
    {
      id: "bmfsfj",
      name: "BMFSFJ",
    },
    {
      id: "bmg",
      name: "BMG",
    },
    {
      id: "bmdv",
      name: "BMDV",
    },
    {
      id: "bmuv",
      name: "BMUV",
    },
    {
      id: "bmbf",
      name: "BMBF",
    },
    {
      id: "bmz",
      name: "BMZ",
    },
    {
      id: "bmwsb",
      name: "BMWSB",
    },
  ],
} as const;
