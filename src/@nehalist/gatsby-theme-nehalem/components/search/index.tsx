import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  ResultLink,
  ResultsTitle,
  ResultTitle,
  SearchBox,
  SearchInput,
  SearchResult,
  SearchResults,
} from "./style";
import { NavMenuItem, ToggleSearchButton } from "../navigation/style";
import { navigate } from "gatsby";

interface SearchResult {
  title: string;
  content: string;
  tags: string[];
  excerpt: string;
  path: string;
}

export const Search: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultListRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const resultRefs: HTMLElement[] = [];

  // Responsible for closing the search dialog when clicked outside the search dialog
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  const handleClickOutside = event => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // The actual search functionality
  // See https://www.gatsbyjs.org/packages/gatsby-plugin-lunr/
  const search = event => {
    const input = event.target.value;
    if (!input || !(window as any).__LUNR__ || input === "") {
      setQuery(input);
      return setResults([]);
    }
    const lunrIndex = (window as any).__LUNR__["en"]; // tslint:disable-line
    setResults(
      lunrIndex.index.search(input + "*").map(({ ref }) => {
        return lunrIndex.store[ref]; // tslint:disable-line
      })
    );
    if (results.length > 0) {
      setSelected(0);
    }
    setQuery(input);
  };

  // Responsible for navigating to results on key presses
  const scrollToResult = selectIndex => {
    if (resultListRef.current && resultRefs[selectIndex]) {
      const current = resultRefs[selectIndex];
      resultListRef.current.scrollTop =
        current.offsetTop - resultListRef.current.offsetTop;
    }
  };

  // Key handling to enable key navigation (arrow keys, ...) within the search results
  const handleKey = event => {
    const currentSelection = results[selected];

    switch (event.key) {
      case "Escape":
        if (query === "") {
          return setIsOpen(false);
        }
        setSelected(0);
        setResults([]);
        return setQuery("");
      case "ArrowDown":
        event.preventDefault();
        scrollToResult(selected + 1);
        return setSelected(
          selected + 1 >= results.length ? selected : selected + 1
        );
      case "ArrowUp":
        event.preventDefault();
        scrollToResult(selected - 1);
        return setSelected(selected - 1 >= 0 ? selected - 1 : 0);
      case "PageDown":
        event.preventDefault();
        scrollToResult(
          selected + 5 <= results.length ? selected + 5 : selected
        );
        return setSelected(
          selected + 5 <= results.length ? selected + 5 : results.length - 1
        );
      case "PageUp":
        event.preventDefault();
        scrollToResult(selected - 5 > 0 ? selected - 5 : 0);
        return setSelected(selected - 5 > 0 ? selected - 5 : 0);
      case "Home":
        event.preventDefault();
        scrollToResult(0);
        return setSelected(0);
      case "End":
        event.preventDefault();
        scrollToResult(results.length - 1);
        return setSelected(results.length - 1);
      case "Enter":
        event.preventDefault();
        setIsOpen(false);
        navigate(`/${currentSelection.path}`);
        return;
    }
  };

  // Toggles the search dialog
  const toggleSearch = () => setIsOpen(!isOpen);

  return (
    <>
      <NavMenuItem>
        <ToggleSearchButton
          role={`button`}
          aria-label={`Toggle search`}
          onClick={toggleSearch}
        >
          <FaSearch />
        </ToggleSearchButton>
      </NavMenuItem>

      {isOpen && (
        <SearchBox open={isOpen} ref={searchRef}>
          <SearchInput
            placeholder={`Search...`}
            autoFocus={true}
            ref={inputRef}
            value={query}
            onChange={search}
            onKeyDown={handleKey}
          />
          <ResultsTitle>Results ({results.length})</ResultsTitle>
          <SearchResults ref={resultListRef}>
            {results.map((item, index) => (
              <SearchResult
                onMouseOver={() => setSelected(index)} // tslint:disable-line
                key={index}
                ref={ref => {
                  if (ref) {
                    resultRefs[index] = ref;
                  }
                }}
                selected={index === selected}
              >
                <ResultLink to={item.path}>
                  {item.tags && <small>{item.tags.join(", ")}</small>}
                  <ResultTitle>{item.title}</ResultTitle>
                  {item.excerpt}
                </ResultLink>
              </SearchResult>
            ))}
          </SearchResults>
        </SearchBox>
      )}
    </>
  );
};
