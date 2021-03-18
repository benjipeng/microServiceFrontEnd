module.exports = {
    module: {
      rules: [
        {
          test: /\.m?js$/, 
        //   regex for mjs or js files 
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'], // convert react code and es6,es7
              plugins: ['@babel/plugin-transform-runtime'], // sync await
            },
          },
        },
      ],
    },
  };
  