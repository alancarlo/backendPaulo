import { UrlRepository } from "../repositories/UrlRepository";

interface urlProps {
  url: string;
}

export class UrlService {
  async createUrl({ url }: urlProps) {
    const urlRepository = new UrlRepository
    if (!url) {
      throw new Error("url is required");
    }
@@ -33,24 +32,18 @@ export class UrlService {
        return data.urlEncurtada;
      });
      const urlResponse = await urlRepository.createShortUrl({ url, shortUrl })

      return urlResponse;
    }
  
    async findShortUrlService(short_url: string) {
      const urlRepository = new UrlRepository
      if (!short_url) {
        throw new Error("error uma short url tem que ser passada");
      }
      const shortUrlExist = await urlRepository.shortUrlExists(short_url)

      const url = shortUrlExist?.url;
  