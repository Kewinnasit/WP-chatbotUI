import { prisma } from "@/lib/prisma/prisma-client"

export async function POST(req: Request) {
  const reqData = await req.json()
  const resData = await prisma.message.update({
    where: { id: reqData.id },
    data: { content: reqData.content }
  })
  return new Response(JSON.stringify(resData))
}
