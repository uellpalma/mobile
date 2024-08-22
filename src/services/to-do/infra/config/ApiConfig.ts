import { API_ENDPOINT, API_VERSION } from '../constants/api';

class ApiConfig {
  baseUrl?: string;
  endPoint: string;
  apiVersion: string;

  constructor() {
    this.baseUrl = 'https://backend-gratitude-engenharia.onrender.com/api';
    this.endPoint = API_ENDPOINT;
    this.apiVersion = API_VERSION;
  }

  getApiUrl(): string {
    const { baseUrl, apiVersion, endPoint } = this;

    if (!baseUrl) {
      throw new Error('Base URL is not defined');
    }

    return `${baseUrl}/${apiVersion}/${endPoint}/`;
  }
}

export default ApiConfig;
