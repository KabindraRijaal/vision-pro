import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "@/typings/plantsType";

const responseData: ResponseData = [
  {
    name: "Chinese Money",
    price: "$22",
    path: "/plant1.png",
  },
  {
    name: "Nepali Money",
    price: "$15",
    path: "/plant3.png",
  },
  {
    name: "Indian Money",
    price: "$56",
    path: "/plant4.png",
  },
  {
    name: "Russian Money",
    price: "$78",
    path: "/pngeggplant6.png",
  },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json(responseData);
}
