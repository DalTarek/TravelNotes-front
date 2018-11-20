export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '4443',
    endpoints: {
      allPeople: '/api/travels',
      onePeople: '/api/travels/:id'
    }
  }
};
