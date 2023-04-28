# CharacterCard Component

The `CharacterCard` component is a visual representation of a single character from the Rick and Morty API. It displays important details about the character, such as their name, status, gender, species, origin, location, and type. The component is designed using Chakra UI and includes responsive styling for different color modes.

## Props

The `CharacterCard` component accepts the following props:

| Prop       | Type              | Description                                              |
| ---------- | ----------------- | -------------------------------------------------------- |
| character  | Partial<Character> | An object containing the details of a single character. |

## Usage

To use the `CharacterCard` component, you simply need to import it and pass in the required `character` prop:

```jsx
import CharacterCard from "./components/CharacterCard";

// ...

<CharacterCard character={character} />
```

The character prop should be an object containing the following keys: id, name, status, gender, species, origin, location, type, and image.

## Styles

The component's styles are defined within the component file, making use of Chakra UI's useTheme and useColorModeValue hooks to ensure proper theming and color mode support.

Hovering over the CharacterCard component will apply a slight box shadow, indicating that it is clickable.

## Accessibility

The component makes use of proper semantic elements and includes an alt attribute for the character's image, ensuring good accessibility for screen readers and other assistive technologies.
