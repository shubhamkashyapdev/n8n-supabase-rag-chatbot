"use server";

type Chat = {
  userId: string | undefined;
  inputMessage: string;
};

export const chat = async ({ userId, inputMessage }: Chat) => {
  try {
    const body = {
      sessionId: userId,
      chatInput: inputMessage,
    };

    const response = await fetch(
      "https://n8n.envisiontech.agency/webhook/invoke_agent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "12345678",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error("Response was not ok");
    }

    const data = await response.json();
    console.log({ data });
    return data;
  } catch (err) {
    console.log({ err });
    throw new Error("Invalid response");
  }
};
