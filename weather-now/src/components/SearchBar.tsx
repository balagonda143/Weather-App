
import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
  <input
    type="text"
    placeholder="🔍 Enter city name..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button type="submit">Search</button>
</form>

  );
}
