export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '4443',
    endpoints: {
      allTravels: '/api/travels',
      randomPeople: '/api/travel/random',
      oneTravels: '/api/travel/:id'
    }
  }
};
