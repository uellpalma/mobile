type GetAuthTokenType = () => {
  Authorization?: string;
};

export const getAuthToken: GetAuthTokenType = () => {
  const authToken = localStorage.getItem('authToken');

  if (authToken) {
    return { Authorization: `Bearer ${authToken}` };
  }

  return {};
};
