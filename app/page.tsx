'use client'

import Head from "next/head";
import styled from "styled-components";
import ThemeToggle from '@/components/ThemeToggle';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem /* 24px */;
`;

const SkeletonInner = styled.div`
  padding: 1rem /* 16px */;
  background-color: rgb(24 24 27 / 0.8);
  border-radius: 1rem /* 16px */;
`;

const SkeletonImg = styled.div`
  height: 3.5rem /* 56px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const SkeletonBtn = styled.div`
  margin-top: 0.75rem /* 12px */;
  width: 25%;
  height: 0.75rem /* 12px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(255 0 128 / 1);
`;

const SkeletonLineOne = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 0.75rem /* 12px */;
  width: 91.666667%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const SkeletonLineTwo = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 0.75rem /* 12px */;
  width: 66.666667%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const Skeleton = () => (
	<SkeletonInner>
		<SkeletonImg />
		<SkeletonBtn />
		<SkeletonLineOne />
		<SkeletonLineTwo />
	</SkeletonInner>
);

export default function Home() {
	return (
		<div>
			<Head>
				<title>Boilerplate - NextJS</title>
			</Head>

			<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-dark">
				<h1 className="text-black dark:text-white">
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<ThemeToggle />

				<p className="text-black dark:text-white">Apenas um teste</p>

				<div className="space-y-4">
					<h2 className="text-xl font-medium text-gray-400/80">
						Styled with Styled Components
					</h2>
					<Container>
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</Container>
				</div>
			</main>
		</div>
	);
};