
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the import path as necessary

// Use '!' to assert that the element exists.
const container = document.getElementById('root')!;

// Assert 'container' is not null with TypeScript non-null assertion operator ('!')
const root = createRoot(container);

root.render(<App />);
