const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/estimated-salary',
  params: {
    job_title: 'nodejs developer',
    location: 'new york',
    location_type: 'ANY',
    years_of_experience: 'ALL'
  },
  headers: {
    'x-rapidapi-key': '400cec2538mshde9056e7fccf1fap189f50jsna92a663c75d0',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}

fetchData();