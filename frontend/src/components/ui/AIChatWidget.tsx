"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Bot, AlertCircle } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const quickReplies = [
  "What services do you offer?",
  "How much does a website cost?",
  "Can I book a free consultation?",
  "What is your process?",
];

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  const key = "heroy_chat_session_id";
  let sessionId = window.sessionStorage.getItem(key);
  if (!sessionId) {
    sessionId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    window.sessionStorage.setItem(key, sessionId);
  }
  return sessionId;
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi there! I am the HEROY assistant. Ask me anything about our services, pricing, team, or how to get started on your project.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>("");

  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    setError(null);

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
            sessionId: sessionIdRef.current,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "API error");
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setError(
        "Something went wrong. Please try again or contact us at hello@heroy.dev"
      );
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat assistant"
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-grad-primary flex items-center justify-center"
        style={{ boxShadow: "0 8px 32px rgba(124,92,255,0.5)" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} className="text-background" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} className="text-background" />
            </motion.div>
          )}
        </AnimatePresence>

        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent-pink animate-pulse" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-[100] w-[360px] max-w-[calc(100vw-3rem)] h-[500px] glass-strong rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-grad-primary p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Bot size={18} className="text-background" />
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-sm text-background">
                  HEROY Assistant
                </p>
                <p className="text-[10px] text-background/70 flex items-center gap-1">
                  <Sparkles size={10} /> Powered by Claude AI
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-grad-primary flex items-center justify-center shrink-0 mr-2 mt-1">
                      <Bot size={12} className="text-background" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-grad-primary text-background rounded-br-sm"
                        : "bg-white/5 text-white border border-border rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-grad-primary flex items-center justify-center shrink-0">
                    <Bot size={12} className="text-background" />
                  </div>
                  <div className="bg-white/5 border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <div className="flex items-start gap-2 text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-3 py-2.5">
                  <AlertCircle size={13} className="shrink-0 mt-0.5" />
                  {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => sendMessage(reply)}
                    disabled={isTyping}
                    className="text-xs bg-white/5 hover:bg-primary/20 border border-border text-muted hover:text-white px-3 py-1.5 rounded-full transition-colors disabled:opacity-50"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="p-3 border-t border-border flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                placeholder={isTyping ? "HEROY is typing..." : "Ask me anything..."}
                className="flex-1 bg-white/5 border border-border rounded-full px-4 py-2.5 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                aria-label="Send message"
                className="w-10 h-10 rounded-full bg-grad-primary flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                <Send size={16} className="text-background" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}