# SearchBar

The `SearchBar` component is a custom input component designed for searching characters in the Rick and Morty App. It provides a search input field with a search icon on the left and debounces user input for better performance.

## Props

| Prop          | Type       | Description                                                             |
| ------------- | ---------- | ----------------------------------------------------------------------- |
| setSearchQuery | (query: string) => void | Function called to update the search query when the user types in the search input. The function receives the search query as a parameter. |

## Usage

```jsx
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />
      {/* Other components */}
    </div>
  );
}

export default App;
