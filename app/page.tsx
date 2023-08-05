import Head from "next/head";
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
	return (
		<>
			<Head>
				<title>Boilerplate - NextJS</title>
			</Head>

			<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-dark">
				<h1 className="text-black dark:text-white">
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<ThemeToggle />

				<p className="text-black dark:text-white">Apenas um teste</p>
			</main>
		</>
	);
};