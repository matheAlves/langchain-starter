import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        <span role="img" aria-label="robot">🤖</span> YoBot 
      </h1>
      <p>Olá, eu sou o YoBot. Me pergunte qualquer coisa sobre a Younner!</p>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emoji="🤖"
      titleText="YoBot"
      placeholder="Faça uma pergunta..."
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
