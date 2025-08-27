export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const fid = data.fid;
    const event = data.event;

    switch (event.event) {
      case "miniapp_added":
        if (event.notificationDetails) {
          await setUserNotificationDetails(fid, event.notificationDetails);
        }
        break;

      // 👉 dito pwede ka magdagdag ng iba pang cases
      // case "miniapp_removed":
      //   ...
      //   break;

      default:
        break;
    }

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
