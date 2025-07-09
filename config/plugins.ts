module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary', // Path completo per v5
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        uploadStream: {
          folder: 'beverino-bike-festival',
          use_filename: true,
          unique_filename: false,
          overwrite: false,
          resource_type: 'auto',
          transformation: [
            {
              quality: 'auto:best',
              fetch_format: 'auto',
            }
          ],
          eager: [
            {
              width: 150,
              height: 150,
              crop: 'thumb',
              gravity: 'auto',
              quality: 'auto',
              fetch_format: 'auto'
            },
            {
              width: 500,
              crop: 'scale',
              quality: 'auto',
              fetch_format: 'auto'
            },
            {
              width: 1000,
              crop: 'scale', 
              quality: 'auto',
              fetch_format: 'auto'
            }
          ],
          tags: ['beverino-bike-festival', `year-${new Date().getFullYear()}`]
        },
        upload: {
          folder: 'beverino-bike-festival',
        },
        delete: {},
      },
    },
  },
});