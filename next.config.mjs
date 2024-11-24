/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:{},
    },
    images:{
        remotePatterns:[
            {hostname: 'books.google.com'},
        ]
    }
};

export default nextConfig;
