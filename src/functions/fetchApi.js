export const fetchApi = async (url, method, body = {}) => {
    try {
        const token = JSON.parse(localStorage.getItem('user'));
        const urlAPI = `${process.env.REACT_APP_API_URL}${url}`;
        const resp = await fetch(urlAPI, {
            credentials: 'include',
            method: method,
            mode: "cors",
            headers: { 
                "Authorization": `Bearer ${token.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return await resp.json();
    } catch (error) {
        console.log(error);
    }
};

export const fetchGet = async (url) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Authorization": `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });
          return await response.json();
      } catch (err) {
        console.error(err);
      }
};

export const fetchApiLogin = async (url, body) => {
    try {
        const urlAPI = `${process.env.REACT_APP_API_URL}${url}`;
        const resp = await fetch(urlAPI, {
            method: 'POST',
            mode: "cors",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return await resp.json();
    } catch (error) {
        console.log(error);
    }
};