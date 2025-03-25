// src/components/ui/button.jsx
export function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
      >
        {children}
      </button>
    );
  }
  