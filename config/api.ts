export default {
  rest: {
    defaultLimit: 200,
    maxLimit: 200,
    withCount: true,
  },
  // Configurazione specifica per le iscrizioni
  'api::iscrizioni.iscrizioni': {
    rest: {
      defaultLimit: 200,
      maxLimit: 200,
    },
  },
};
