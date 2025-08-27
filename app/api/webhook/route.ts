// app/api/webhook/route.ts

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const fid = data.fid;

    // sample log
    console.log("Received FID:", fid);

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("Webhook error:", error);

    return Response.json({
      success: false,
      error: error.message,
      status: 500,
    });
  }
}
