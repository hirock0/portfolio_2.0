import { memoryCache } from "@/lib/cache/memoryCache";
// import { getDistricts, getImagesByType } from "@/actions/crud.action";
import { safeJsonParse } from "@/utils/safeJsonParse";

const CACHE_KEY = "homepage_data";
const CACHE_TTL = 60000;

export async function getPageData(): Promise<any> {
  const cachedData = memoryCache.get<any>(CACHE_KEY);
  if (cachedData) {
    // console.log("✅ Cache hit for homepage data");
    return cachedData;
  }

  //   console.log("🔄 Cache miss - fetching from MongoDB");

  try {
    // const [imagesResponse, districtsResponse] = await Promise.all([
    //   getImagesByType("review"),
    //   getDistricts(),
    // ]);

    // const reviews = safeJsonParse(imagesResponse?.images, []);
    // const districts = safeJsonParse(districtsResponse?.districts, []);

    // const result = JSON.stringify({
    //   reviews,
    //   districts,
    // });

    // // Store in cache
    // memoryCache.set(CACHE_KEY, result, CACHE_TTL);

    // return result;
  } catch (error) {
    return {};
  }
}