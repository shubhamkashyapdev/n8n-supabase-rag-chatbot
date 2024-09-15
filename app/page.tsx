import dynamic from "next/dynamic";
const AiAgentChatbot = dynamic(() => import("@/components/ai-agent-chatbot"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Page() {
  return <AiAgentChatbot />;
}
