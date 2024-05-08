export const handleThemeChange = (
  mode: string,
  setMode: (mode: string) => void
) => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    setMode("dark");
    console.log("start");
    document.documentElement.classList.add("dark");
  } else {
    setMode("light");
    document.documentElement.classList.remove("dark");
  }
};
