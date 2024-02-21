export const optionsDocs = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Projeto de estudo',
      description: 'APIs',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        // MainAccessToken: {
        //   type: 'http',
        //   scheme: 'bearer',
        //   bearerFormat: 'JWT',
        // },
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/server/docs/*doc.ts'],
};
