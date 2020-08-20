import { request } from './request';

const client = (endpoint, { body, ...options } = {}) => {
  const headers = { 'content-type': 'application/json' };

  const config = {
    method: body ? 'POST' : 'GET',
    ...options,
    headers: { ...headers, ...options.headers },
  };

  if (body) config.body = JSON.stringify(body);

  return request(
    `${process.env.REACT_APP_PROXY_URL}/${process.env.REACT_APP_API_URL}/${endpoint}`,
    config,
  );
};

const getApp = () => client('app.json');

const getPage = (page = 'page1') => client(`${page}.json`);

export { getApp, getPage };

export default client;
