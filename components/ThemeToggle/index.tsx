'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
	const [icon, setIcon] = useState('🌙');
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		theme === 'dark' ? setIcon('🌞') : setIcon('🌙');
	}, [theme]);

	return (
		<div className="sx-header-themeToggle ms-1 header-item d-none d-sm-flex">
			<button
				type="button"
				className="btn btn-secondary btn-icon btn-topbar rounded-circle light-dark-mode"
				onClick={toggleTheme}
			>
				{/* <i className={`bx bx-${theme === "dark" ? "sun" : "moon"} fs-22`} /> */}
				{icon}
			</button>
		</div>
	);
};

export default ThemeToggle;
