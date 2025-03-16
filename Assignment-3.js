import { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState("");
  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg shadow-xl w-96 text-center">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-400 p-3 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-blue-600 transition-all" 
        placeholder="Type something..."
      />
      <p className="mt-4 text-lg text-gray-800 font-semibold bg-white p-2 rounded-lg shadow-md">{text}</p>
    </div>
  );
}

// 2. Form Submission Component
function SimpleForm() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gradient-to-br from-purple-100 to-purple-300 rounded-lg shadow-xl w-96 text-center">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        className="border border-gray-400 p-3 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-purple-600 transition-all"
        placeholder="Enter text" 
      />
      <button type="submit" className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-800 transition-all shadow-md">
        Submit
      </button>
    </form>
  );
}

// 3. UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl w-96 text-center border border-gray-300 hover:shadow-2xl transition-all">
      <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
      <p className="text-gray-600 mt-2 text-lg">{email}</p>
    </div>
  );
}

// 4. Button Component
function CustomButton() {
  const handleClick = () => console.log("Button clicked!");
  return (
    <button onClick={handleClick} className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-all shadow-lg text-lg font-semibold">
      Click Me
    </button>
  );
}

// 5. LoginForm Component
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gradient-to-br from-green-100 to-green-300 rounded-lg shadow-xl w-96 text-center space-y-4">
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="border border-gray-400 p-3 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-green-600 transition-all"
        placeholder="Enter email" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="border border-gray-400 p-3 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-green-600 transition-all"
        placeholder="Enter password" 
      />
      <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-800 transition-all shadow-md font-semibold">
        Login
      </button>
    </form>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="flex flex-col items-center gap-8 p-10 bg-gray-100 min-h-screen">
      <TextUpdater />
      <SimpleForm />
      <UserCard name="John Doe" email="johndoe@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}
