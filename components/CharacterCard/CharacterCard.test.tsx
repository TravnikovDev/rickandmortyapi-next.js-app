// components/CharacterCard/CharacterCard.test.tsx
import { render, screen } from "@testing-library/react";
import CharacterCard from "./index";
import { Character } from "../../generated/graphql";

describe("CharacterCard", () => {
  const character: Partial<Character> = {
    id: "1",
    name: "Rick Sanchez",
    status: "Alive",
    gender: "Male",
    species: "Human",
    type: "Normal",
    origin: { name: "Earth (C-137)", residents: [] },
    location: { name: "Earth (Replacement Dimension)", residents: [] },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  beforeEach(() => {
    render(<CharacterCard character={character} />);
  });

  it("renders character's name", () => {
    const nameElement = screen.getByText("Rick Sanchez");
    expect(nameElement).toBeInTheDocument();
  });

  it("renders character's status", () => {
    const statusElement = screen.getByText("Alive");
    expect(statusElement).toBeInTheDocument();
  });

  it("renders character's gender", () => {
    const genderElement = screen.getByText("Gender: Male");
    expect(genderElement).toBeInTheDocument();
  });

  it("renders character's species", () => {
    const speciesElement = screen.getByText("Species: Human");
    expect(speciesElement).toBeInTheDocument();
  });

  it("renders character's origin", () => {
    const originElement = screen.getByText("Origin: Earth (C-137)");
    expect(originElement).toBeInTheDocument();
  });

  it("renders character's location", () => {
    const locationElement = screen.getByText("Location: Earth (Replacement Dimension)");
    expect(locationElement).toBeInTheDocument();
  });

  it("renders character's type", () => {
    const typeElement = screen.getByText("Type: Normal");
    expect(typeElement).toBeInTheDocument();
  });

  it("renders character's image", () => {
    const imageElement = screen.getByAltText(
      "Rick Sanchez"
    ) as HTMLImageElement;
    expect(imageElement).toBeInTheDocument();
  });
});
