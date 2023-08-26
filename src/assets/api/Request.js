import {ToastAndroid} from 'react-native';


// getApi
const getData = async ({
  url,
  params,
  token = true,
  base_url,
  alertFlag = true,
}) => {
  try {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };
    if (token) {
      config.headers['apptoken'] = `${await getAppToken()}`;
    }
    var url_with_params = `${await SERVER_URL()}${url}`;

    if (base_url) {
      url_with_params = `${base_url}${url}`;
    }
    if (params) {
      var encoded_params = await serializeQuery(params);
      url_with_params += encoded_params;
    }
    console.log('url with params', url_with_params);

    const response = await fetch(url_with_params, config);
    const result = await response.json();

    if (result.error) {
      if (result.error.code == 525) {
        await RemoveAsyncData();
        ToastAndroid.showWithGravityAndOffset(
          `${'Token Expired'}`,
          ToastAndroid.TOP,
          ToastAndroid.LONG,
          10,
          10,
        );
       
      } else {
        if (alertFlag) {
         
        }
      }
    } else {
      if (result.statusCode == 200) {
        return result;
      } else if (result.statusCode == 500) {
       
        console.error(
          `Error in Api ${url} ==>Error message is : ${result.message}`,
        );
      } else {
        return result;
      }
    }
  } catch (err) {
    if (alertFlag) {
 
    }
    console.error(`Error in Api ${url} ==>Error is : ${err}`);
    return null;
  }
};

// postApi
/**
 * url = url of the api like 'api/loginwithmobile'
 * params = if any params required in Api please use this field
 * body = for body please use this field
 * token = if any query does not support token please use field token = false ,
 * if you will not pass this parameter default will be true
 * base_url = if you are passing base_url explicitly
 */
const postData = async ({url, params, body, token = true,}) => {
    const base_url='https://vega-uat-b39323c49627.herokuapp.com'
  console.log('url post API', url, params,base_url);
  try {
    var config = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };
    if (token) config.headers['apptoken'] = `${await getAppToken()}`;
    if (body) config['body'] = JSON.stringify(body);
    var url_with_params = '';
    if (base_url) {
      url_with_params = `${base_url}${url}`;
    } else {
      url_with_params = `${await SERVER_URL()}${url}`;
    }
    if (params) {
      var encoded_params = await serializeQuery(params);
      url_with_params += encoded_params;
    }
    console.error('url_with_params postData', url_with_params);
    const response = await fetch(url_with_params, config);
    const result = await response.json();
    if (result.error) {
      if (result.error.code == 525) {
        await RemoveAsyncData();
        ToastAndroid.showWithGravityAndOffset(
          `${'Token Expired'}`,
          ToastAndroid.TOP,
          ToastAndroid.LONG,
          10,
          10,
        );
     
      } else {
       
      }
    } else {
      if (result.statusCode == 200) {
        return result;
      } else if (result.statusCode == 500) {
      
        console.error(
          `Error in Api ${url} ==>Error message is : ${result.message}`,
        );
       
      } else {
        return result;
      }
    }
  } catch (err) {
    // AlertDanger(`Catch Error in ${url} : ` + err)
    console.error(`Error in Api ${url} ==> ${err}`);
    return null;
  }
};

// serializeQuery
const serializeQuery = async query => {
  return Object.keys(query)
    .map((key, index) => {
      if (index == 0) {
        return `?${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`;
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`;
      }
    })
    .join('&');
};

export {getData, postData};
