import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  basePath: "/website",
  assetPrefix: "/website",
  images: {
    domains: ["localhost", "localhost:3002", "api.botmother.uz"], // SALES_URL domeni
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
