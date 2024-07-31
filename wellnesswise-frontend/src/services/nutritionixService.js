import axios from 'axios';

const nutritionix = {
    base_url: 'https://trackapi.nutritionix.com/v2/',
    header: {},
    init: function () {
        this.header = {
            'x-app-key': process.env.REACT_APP_NUTRITIONIX_APP_KEY,
            'x-app-id': process.env.REACT_APP_NUTRITIONIX_APP_ID,
            'User-Agent': 'Nutritionix API/1.0.0',
            'Accept':'*/*',
            'cache-control': 'no-cache',
        };
    },
    natural: {
        search: async function (query) {
            try {
                const response = await axios.post(`${nutritionix.base_url}natural/nutrients`,{ query: query },
                    {headers: nutritionix.header }
                );
                return  response.data;
            } catch (error) {
                return{ error: error.response?.data || error.message };
            }
        },
    },
utils: {
        nutrients: async function () {
          try {
            const response = await axios.get(
              `${nutritionix.base_url}utils/nutrients`,
              { headers: nutritionix.header }
            );
            return response.data;
          } catch (error) {
            return { error: error.response?.data || error.message };
          }
        },
      },
item: {
    byUpc: async function (upc) {
      try {
        const response = await axios.get(
          `${nutritionix.base_url}search/item?upc=${upc}`,
          { headers: nutritionix.header }
        );
        return response.data;
      } catch (error) {
        return { error: error.response?.data || error.message };
      }
    },
    byId: async function (nix_item_id) {
      try {
        const response = await axios.get(
          `${nutritionix.base_url}search/item?nix_item_id=${nix_item_id}`,
          { headers: nutritionix.header }
        );
        return response.data;
      } catch (error) {
        return { error: error.response?.data || error.message };
      }
    },
  },
};

export default nutritionix;