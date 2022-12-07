export default {
  searchZipCode: async zipCode => {
    try {
      const req = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = req.json();
      return json;
    } catch (error) {
      console.error('API::SEARCH_ZIPCODE::', error);
    }
  },
};
