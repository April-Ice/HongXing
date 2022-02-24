// import { baseUrl } from '../config/index.config'

const request = (url = '', date = {}, type = 'GET', header = {
}) => {

  header['Accept'] = 'application/json, text/plain, */*'
  header['content-type'] = 'application/json'
  header['X-Requested-With'] = 'XMLHttpRequest'

  return new Promise((resolve, reject) => {
    uni.request({
      method: type,
      url: 'http://localhost:8083'+url,
      data: date,
      header: header,
      dataType: 'json',
    }).then((response) => {
      let [error, res] = response;
      resolve(res.data);
    }).catch(error => {
      let [err, res] = error;
      reject(err)
    })
  });
}
export default request