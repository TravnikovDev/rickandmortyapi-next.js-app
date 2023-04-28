# Filters

This folder contains the `Filters` component and its child component `CustomSelectFilter`. These components are used to filter the characters displayed in the character list.

## Usage

To use the `Filters` component, import it and pass a `setFilters` function as a prop:

```jsx
import Filters from "components/Filters";

function ParentComponent() {
  const handleSetFilters = (newFilters) => {
    // Do something with the new filters
  };

  return <Filters setFilters={handleSetFilters} />;
}
```

Components
Filters
The Filters component renders a set of input fields and custom select filters that allow users to filter the characters based on their species, type, status, and gender. The component debounces user input and updates the filters using the provided setFilters function.

CustomSelectFilter
The CustomSelectFilter component is a custom dropdown menu used in the Filters component for the Status and Gender filters. It is based on the Chakra UI Menu component and is styled using Rick and Morty colors.

Props
Filters
Prop Type Description
setFilters (newFilters: object) => void A function to handle filter updates. Called with an object containing the new filters.
CustomSelectFilter
Prop Type Description
takeAction (event: object) => void A function to handle filter updates. Called with an object containing the event target's name and value.
name string The display name of the filter.
options string[] An array of string options for the filter.
selectedValue string | undefined The currently selected value for the filter.
Tests
Tests for the Filters and CustomSelectFilter components are provided in the Filters.test.tsx file. To run the tests, execute the following command:

```bash
npm test
```

This README file provides an overview of the `Filters` and `CustomSelectFilter` components, their usage, props, and tests. You can customize this file further to add more details or include additional information as needed.
