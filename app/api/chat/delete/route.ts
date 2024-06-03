import { prisma } from "@/lib/prisma/prisma-client"

export async function POST(req: Request) {
  const reqData = await req.json()
  const resData = await prisma.chat.delete({ where: { id: reqData.id } })
  await prisma.message.deleteMany({ where: { chat_id: reqData.id } })
  return new Response(JSON.stringify(resData))
}
