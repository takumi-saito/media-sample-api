// api/hello.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    message: 'Hello world',
    cookies: req.cookies,
  })
}
// import { NowRequest, NowResponse } from "@vercel/node";

// export default function (req: NowRequest, res: NowResponse) {
//   const { name = "World" } = req.query;
//   res.send(`Hello ${name}!`);
// }