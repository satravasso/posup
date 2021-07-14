export default {
  id: "BR1",
  name: "Brazil",
  locales: ["pt_BR"],
  maintenances: [],
  incidents: [
    {
      archive_at: null,
      titles: [
        {
          content: "Gifts",
          locale: "en_US",
        },
        {
          content: "Presentes",
          locale: "pt_BR",
        },
      ],
      updated_at: null,
      incident_severity: "info",
      platforms: ["windows", "macos"],
      updates: [
        {
          updated_at: "2021-05-12T22:03:00+00:00",
          translations: [
            {
              content:
                "Content gifts (champions, skins, etc) are temporarily unavailable while we work on a solution. RP gifts can be sent normally.\r",
              locale: "en_US",
            },
            {
              content:
                "Presentes de conteúdo (campeões, skins, etc) estão temporariamente indisponíveis enquanto trabalhamos na solução de um problema. Presentes de RP podem ser enviados normalmente.",
              locale: "pt_BR",
            },
          ],
          author: "Riot Games",
          publish: true,
          created_at: "2021-05-12T22:03:57.532358+00:00",
          id: 4831,
          publish_locations: ["game", "riotclient", "riotstatus"],
        },
      ],
      created_at: "2021-05-12T22:03:57.523453+00:00",
      id: 3148,
      maintenance_status: null,
    },
    {
      id: 3382,
      updated_at: null,
      titles: [
        {
          locale: "en_US",
          content: "Account Transfers Unavailable",
        },
        {
          locale: "pt_BR",
          content: "Transferências de conta indisponíveis",
        },
      ],
      created_at: "2021-06-30T22:55:27.267641+00:00",
      incident_severity: "info",
      maintenance_status: null,
      platforms: ["windows", "macos", "android", "ios"],
      updates: [
        {
          id: 5290,
          updated_at: "2021-06-30T22:55:00+00:00",
          author: "Riot Games",
          created_at: "2021-06-30T22:55:27.288627+00:00",
          publish: true,
          translations: [
            {
              locale: "en_US",
              content:
                "Account transfers are currently unavailable while we work on a reported issue.",
            },
            {
              locale: "pt_BR",
              content:
                "As transferências de conta estão indisponíveis enquanto trabalhamos na solução de um problema.",
            },
          ],
          publish_locations: ["game", "riotclient", "riotstatus"],
        },
      ],
      archive_at: null,
    },
  ],
};
