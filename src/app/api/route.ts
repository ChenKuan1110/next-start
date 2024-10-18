export async function GET(res: Request) {
  console.log('GET', res.method, res.url, res.body);
  return Response.json({
    message: "Hello World from next.js"
  })
}