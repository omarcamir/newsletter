// app/api/news/route.ts

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const type = searchParams.get("type") || "everything";
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const country = searchParams.get("country") || "us";
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";

  const apiKey = process.env.NEWS_API_KEY;

  let url = "";

  if (type === "top-headlines") {
    url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
  } else {
    url = `https://newsapi.org/v2/everything?q=${q}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return Response.json(data);
}
