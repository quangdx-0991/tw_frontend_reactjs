import axios from 'axios';

const server_url = ""; 

const resource_url = ""; 


const httpClient = axios.create();
httpClient.defaults.timeout = 50000;
String.prototype.absoluteUrl =
    String.prototype.absolute ||
    function (defaultValue) {
        var _this = this.toString();
        if (_this == "")
            if (defaultValue != undefined) return defaultValue;
            else return _this;

        if (_this.indexOf("http") == 0 || _this.indexOf("blob") == 0 || this.indexOf("data:image") == 0) {
            return _this;
        }
        let _this2 = _this.toLowerCase();
        if (
            _this2.endsWith(".jpg") ||
            _this2.endsWith(".jpeg") ||
            _this2.endsWith(".png") ||
            _this2.endsWith(".gif")
        ) {
            let image = resource_url + encodeURIComponent(_this + "") + "?alt=media";
            // console.log(image);
            return image;
        }
        if (
            !_this2.endsWith(".jpg") ||
            !_this2.endsWith(".jpeg") ||
            !_this2.endsWith(".png") ||
            !_this2.endsWith(".gif")
        ) {
            return defaultValue;
        }
        // if(this.startsWith("user"))

        //     return
        return server_url + _this + "";
    };

String.prototype.getServiceUrl =
    String.prototype.absolute ||
    function (defaultValue) {
        let _this = this ? this.toString() : "";
        if (_this == "")
            if (defaultValue != undefined)
                return defaultValue;
            else
                return _this;
        if (_this.indexOf("http") == 0 || _this.indexOf("blob") == 0) {
            return _this;
        }
        return server_url + _this;
    };

export default {
    // auth: "eyJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiaXNvZmhDYXJlIiwiY3JlYXRlZCI6MTU1MzA3MDc0Mzc4NiwidHlwZSI6MCwidXNlcklkIjo1NX0.k8B3Cm5M-22ckpKk3W1fhgHoHq7LGVdKIjhLZUl0abKES5nSCC5RhupsRXctTK6skQMvCZ8f-TuZGbDcNgdlsb_Kc0ogFmaPmGI4ao7MKrCb9nCr4fxztUN0ABWUERA1wnQNFljgVR9FIrNKnf2hx_aTHIrwS9Ol1JOaKJVnj83cK5vg2ExvN7ralb1yoyuHEZoODlDBVHCIxeG5X3oaJE6-BKfcafXau_cmYz-Ovg31VtZpu1lCffaOj2uLSefPBvqfL2d2U1sswiUrV95rankTjOomr31lP4xiCN71-7YX_6Hx7EraRFhmclmaOjGUWM83VB0fvY8hIEHiE8yB8w",
    auth: "",
    serverApi: server_url,
    uploadFile(url, file) {
        const formData = new FormData();
        formData.append('file', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': this.auth,
                // 'MobileMode':'vendorPortal'
            }
        }
        return axios.post(url.getServiceUrl(), formData, config)
    },
    requestApi(methodType, url, body) {
        return new Promise((resolve, reject) => {
            console.log("Request url " + url + " with token: " + this.auth);
            if (!body)
                body = {};
            let dataBody = JSON.stringify(body);
            this.requestFetch(methodType, url && url.indexOf('http') == 0 ? url : (url),
                {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': this.auth,
                    'MobileMode': 'user',
                    // 'deviceType': "mobile"
                }, dataBody).then(s => {
                    if (s.data)
                        resolve(s.data);
                    reject(s);
                }).catch(e => {
                    reject(e);
                });
        });
    },
    requestApi2(methodType, url, body) {
        return new Promise((resolve, reject) => {
            console.log("Request url " + url + " with token: " + this.auth);
            if (!body)
                body = {};
            let dataBody = JSON.stringify(body);
            this.requestFetch(methodType, url && url.indexOf('http') == 0 ? url : (url),
                {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': this.auth,
                    // 'MobileMode': 'user',
                    // 'deviceType': "mobile"
                }, dataBody).then(s => {
                    if (s.data)
                        resolve(s.data);
                    reject(s);
                }).catch(e => {
                    reject(e);
                });
        });
    },
    requestApiVi(methodType, url, body) {
        return new Promise((resolve, reject) => {
            console.log("Request url " + url + " with token: " + this.auth);
            if (!body)
                body = {};
            let dataBody = JSON.stringify(body);
            this.requestFetch(methodType, url && url.indexOf('http') == 0 ? url : (url),
                {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.auth,
                    // 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJjcmVhdGVkIjoxNTUzNTcwMjQ1ODkzLCJpc3MiOiJpc29maENhcmUiLCJ2ZW5kb3JJZCI6MTMsInR5cGUiOjAsInVzZXJJZCI6MzY5OX0.Iddf9emNz2YkTt2J9Bfxi-0__St_8y3ndTQpMi3khCt58O0Zh71OP7ij7npl2unD-uXljxmDs8ywDoPUg7tQ8xsSYQNoYVT3esIudP6wKW2qoHV1euKopG9Ra3qH8_9WplmONucPGmzgauVXtdlPxlxdVc-ZZyPp9Ggvv6HxmZ5rcO3PootqG9CbawZjroKp4z2avobmmxKihC3UjJlMCeFSjRrSvZX5XWNhJdtJ2cX3xHyXdvLsR89UkokCckyLX4-I3nFQWsxNMx7RyHx7ymNcyWbaehZRBmZ6ksnnJaPp-YlHNDq9v1JwKqBTkEbiRXJbaOVhB0d4xrYFeJa7Fg',
                    // 'MobileMode':'vendorPortal'
                }, dataBody).then(s => {
                    s.json().then(val => {
                        resolve(val);
                    }).catch(e => { reject(e) });
                }).catch(e => {
                    reject(e);
                });
        });
    },
    requestFetch(methodType, url, headers, body) {
        let data = {
            methodType,
            url: url.getServiceUrl(),
            headers,
            body
        };
        console.log(JSON.stringify(data));
        return new Promise((resolve, reject) => {
            let promise = null;
            switch (methodType) {
                case "post":
                    promise = httpClient.post(url.getServiceUrl().toString(), body, {
                        headers
                    });
                    break;
                case "get":
                    promise = httpClient.get(url.getServiceUrl().toString(), {
                        headers
                    });
                    break;
                case "put":
                    promise = httpClient.put(url.getServiceUrl().toString(), body, {
                        headers
                    });
                    break;
                case "delete":
                    promise = httpClient.delete(url.getServiceUrl().toString(), {
                        headers
                    });
                    break;
            }

            promise
                .then(json => {
                    console.log(json);
                    if (json.status != 200) {
                        reject(json);
                    } else resolve(json);
                })
                .catch(e => {
                    console.log(e);
                    reject(e);
                });
        });
    }

}
