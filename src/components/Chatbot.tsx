import { useState, useRef, useEffect } from 'react';
import { properties } from '../data/properties';
import './Chatbot.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

// Build a knowledge string from property data so the AI knows our listings
const propertyKnowledge = properties
  .map(
    (p) =>
      `- ${p.title} | ${p.type} | ${p.city} | ${p.location} | ${p.price} | ${p.bedrooms > 0 ? p.bedrooms + ' BHK' : 'N/A'} | ${p.area} | ${p.facing} | ${p.age} | Amenities: ${p.amenities.join(', ')}`
  )
  .join('\n');

const SYSTEM_PROMPT = `You are Rajat — the AI assistant for Rajat Properties, a premium real estate consultancy in India. You help potential homebuyers find their dream property.

Your personality: Warm, professional, knowledgeable, and concise. Use a friendly tone. Keep responses short (2-4 sentences max unless listing properties). Use ₹ for prices.

You know about these properties:
${propertyKnowledge}

Your capabilities:
- Recommend properties based on budget, city, type, or BHK preferences
- Answer questions about specific properties (amenities, location, price, area, etc.)
- Provide general real estate buying advice
- Help with EMI estimates (use formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1), where r = annual rate/12/100, n = years × 12)
- Schedule property visits (collect name & phone, say the team will call back)

Rules:
- Only recommend properties from the list above
- If asked about a property not in the list, say "We don't currently have that listing, but I can help you find something similar!"
- Never make up properties or prices
- If someone wants to talk to a human, give the number: +91 99999 99999
- Always be helpful and guide toward scheduling a visit
- Keep responses SHORT and crisp — max 2-3 lines unless listing properties
- Use Hinglish (mix of Hindi and English) for a friendly Indian tone. Example: "Bhai, yeh property ekdum premium hai!" or "Aapka budget kitna hai? Main best options dikhata hoon."`;

const getTime = (): string => {
  return new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Hello! 👋 I\'m Rajat, your AI property assistant. I can help you find your dream home, answer questions about our listings, or estimate your EMI. How can I help you today?',
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: text.trim(),
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_CEREBRAS_API_KEY;

      if (!apiKey) {
        // Fallback: smart local responses if no API key
        const fallbackReply = getFallbackResponse(text.trim());
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: fallbackReply, time: getTime() },
          ]);
          setIsTyping(false);
        }, 1000);
        return;
      }

      // Build conversation history for context
      const conversationHistory = [
        { role: 'system' as const, content: SYSTEM_PROMPT },
        ...messages.map((m) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })),
        { role: 'user' as const, content: text.trim() },
      ];

      const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama3.1-8b',
          messages: conversationHistory,
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || 'Sorry, I couldn\'t process that. Please try again.';

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: reply, time: getTime() },
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I\'m having trouble connecting right now. Please try again or call us at +91 99999 99999.',
          time: getTime(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (text: string) => {
    sendMessage(text);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          className="chatbot-float"
          onClick={toggleChat}
          aria-label="Open AI Chatbot"
        >
          🤖
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">◆</div>
              <div className="chat-header-text">
                <h4>Rajat AI Assistant</h4>
                <p>● Online — Powered by AI</p>
              </div>
            </div>
            <button className="chat-close" onClick={toggleChat}>
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div className={`chat-msg ${msg.role === 'user' ? 'user' : 'bot'}`} key={index}>
                <div className="msg-bubble">{msg.content}</div>
                <span className="msg-time">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions (show only at start) */}
          {messages.length <= 1 && (
            <div className="quick-actions">
              <button className="quick-btn" onClick={() => handleQuickAction('Show me apartments under ₹1 Cr')}>
                Apartments under ₹1Cr
              </button>
              <button className="quick-btn" onClick={() => handleQuickAction('What villas do you have?')}>
                Available Villas
              </button>
              <button className="quick-btn" onClick={() => handleQuickAction('Properties in Pune')}>
                Properties in Pune
              </button>
              <button className="quick-btn" onClick={() => handleQuickAction('Calculate EMI for ₹80 Lakhs')}>
                EMI Calculator
              </button>
            </div>
          )}

          {/* Input */}
          <form className="chat-input-area" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Ask about properties..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button
              type="submit"
              className="chat-send"
              disabled={isTyping || !input.trim()}
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
};

// Fallback responses when no API key is configured
function getFallbackResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes('apartment') && (lower.includes('under') || lower.includes('budget') || lower.includes('1 cr') || lower.includes('cheap'))) {
    const apts = properties.filter(p => p.type === 'Apartment' && p.priceValue <= 10000000);
    if (apts.length > 0) {
      return `Here are apartments under ₹1 Cr:\n\n${apts.map(p => `🏠 ${p.title} — ${p.price} (${p.bedrooms} BHK, ${p.area}, ${p.city})`).join('\n')}\n\nWould you like details on any of these?`;
    }
    return 'We currently don\'t have apartments in that range. Would you like to explore other options?';
  }

  if (lower.includes('villa')) {
    const villas = properties.filter(p => p.type === 'Villa');
    return `We have ${villas.length} stunning villas:\n\n${villas.map(p => `🏡 ${p.title} — ${p.price} (${p.bedrooms} BHK, ${p.area}, ${p.city})`).join('\n')}\n\nWant me to share more about any of these?`;
  }

  if (lower.includes('pune') || lower.includes('mumbai') || lower.includes('bangalore') || lower.includes('hyderabad') || lower.includes('ahmedabad')) {
    const city = lower.includes('pune') ? 'Pune' : lower.includes('mumbai') ? 'Mumbai' : lower.includes('bangalore') ? 'Bangalore' : lower.includes('hyderabad') ? 'Hyderabad' : 'Ahmedabad';
    const cityProps = properties.filter(p => p.city === city);
    if (cityProps.length > 0) {
      return `Here are our properties in ${city}:\n\n${cityProps.map(p => `🏠 ${p.title} — ${p.price} (${p.type}, ${p.area})`).join('\n')}\n\nWant details on any of these?`;
    }
    return `We don't have listings in ${city} right now. Try another city!`;
  }

  if (lower.includes('emi') || lower.includes('loan') || lower.includes('calculate')) {
    return '💰 For a ₹80 Lakh loan at 8.5% for 20 years, your monthly EMI would be approximately ₹69,400.\n\nYou can use our EMI calculator on any property detail page for exact figures! Would you like me to recommend a property?';
  }

  if (lower.includes('plot') || lower.includes('land')) {
    const plots = properties.filter(p => p.type === 'Plot');
    return `We have ${plots.length} premium plots:\n\n${plots.map(p => `🌿 ${p.title} — ${p.price} (${p.area}, ${p.city})`).join('\n')}\n\nInterested in any of these?`;
  }

  if (lower.includes('commercial') || lower.includes('office') || lower.includes('shop')) {
    const commercial = properties.filter(p => p.type === 'Commercial');
    return `Here are our commercial properties:\n\n${commercial.map(p => `🏢 ${p.title} — ${p.price} (${p.area}, ${p.city})`).join('\n')}\n\nWant more details?`;
  }

  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
    return 'Hey there! 👋 Welcome to Rajat Properties. I can help you find apartments, villas, plots, or commercial spaces across 5 major cities. What are you looking for?';
  }

  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
    return 'Our properties range from ₹35 Lakhs to ₹4.20 Cr. What\'s your budget? I can recommend the best options for you!';
  }

  if (lower.includes('call') || lower.includes('human') || lower.includes('agent') || lower.includes('talk')) {
    return '📞 You can reach our team at **+91 99999 99999** (Mon–Sat, 10AM–7PM). Or share your name & number and we\'ll call you back!';
  }

  if (lower.includes('visit') || lower.includes('schedule') || lower.includes('see')) {
    return '🗓 I\'d love to schedule a property visit for you! Please share:\n\n1. Your name\n2. Phone number\n3. Which property interests you\n\nOur team will confirm the visit within 2 hours.';
  }

  return 'I can help you with:\n\n🏠 Finding properties by city, type, or budget\n💰 EMI calculations\n📋 Property details & amenities\n🗓 Scheduling visits\n\nWhat would you like to know?';
}

export default Chatbot;
