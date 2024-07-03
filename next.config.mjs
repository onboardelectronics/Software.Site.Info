const isProduction = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: isProduction ? "https://link.onboard.ind.br/" : undefined
}

export default nextConfig
