module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        "magic-sdk": false,
        "@walletconnect/ethereum-provider": false,
        "@web3auth/web3auth": false,
      };
      return config;
    },
  },
};