//Common Api configuration file

export function apiInvoke(requestType, requestUrl, requestBody) {
    console.log('API invoke called');
	//let token = localStorage.getItem('token').replace(/"/g,"");
	if (requestType === 'POST') {
		const requestOptions = {
			method: requestType,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		};
		return window.fetch(requestUrl, requestOptions)
			.then(handleResponse)
			.then(res => {
				return res;
			});
	}
	else if (requestType === 'GET') {
		const requestOptions = {
			method: requestType,
			headers: {
				'Content-Type': 'application/json'
			},
		};
		return window.fetch(requestUrl, requestOptions)
			.then(handleResponse)
			.then(res => {
				return res;
			});
	}
	else if (requestType === 'PUT') {
		const requestOptions = {
			method: requestType,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		};
		return window.fetch(requestUrl, requestOptions)
			.then(handleResponse)
			.then(res => {
				return res;
			});
	}
}

function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				//location.reload(true);
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}