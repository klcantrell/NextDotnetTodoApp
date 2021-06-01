import { useDarkMode } from '../context/dark-mode-state';

export default function DarkModeSettings() {
  const { darkModeEnabled, setDarkModeEnabled } = useDarkMode();

  return (
    <div>
      <p>Dark mode is {darkModeEnabled ? 'enabled' : 'disabled'}</p>
      <button onClick={() => setDarkModeEnabled(!darkModeEnabled)}>Toggle dark mode</button>
    </div>
  );
}
