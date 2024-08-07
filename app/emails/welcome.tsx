'use client';

import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';

// interface WelcomeProps {
//   firstName: string;
// }

export const Welcome = () => {
	return (
		<Html>
			<Head />

			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto pt-[20px] w-[600px] px-16 pb-16">
						<Section className="mt-[32px]">
							<Img
								src="https://www.romancing-japan.com/_next/image?url=%2Fimages%2Flogo-nav-2.png&w=256&q=75"
								width="275"
								height="70"
								alt="Romancing Japan logo"
								className="my-2 mx-auto"
							/>
						</Section>
						<Section>
							<Heading className="font-shadows_into_light">
								Thanks for joining Romancing Japan!
							</Heading>
							<Text className="text-lg">
								Thanks for signing up to our blog site,
								Romancing Japan. Since you have signed up with
								us, we will send you bi-monthly messages to keep
								you up-to-date with our latest articles.
							</Text>
						</Section>
						<Section>
							<Text className="text-lg">
								We write and post regular content to our site to
								help people stay informed about the topics their
								interested in regarding Japan. We will be
								documenting our journey and documenting the
								progress and changes made to the site over time.
							</Text>
						</Section>
						<Section>
							<Button
								href="https://www.romancing-japan.com/"
								className="h-6 w-fit p-3 mt-6 bg-blue-700 text-white font-bold rounded-lg drop-shadow-md shadow-md shadow-slate-9"
							>
								Go to the homepage
							</Button>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default Welcome;
