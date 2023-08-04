import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-dark">
			<ThemeToggle />

			<p className="text-black dark:text-white">Apenas um teste</p>
		</main>
	);
};