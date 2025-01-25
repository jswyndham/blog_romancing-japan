import { Post, Category, Author, AboutUs } from '../typings';
import { createClient, groq } from 'next-sanity';
import { readClient } from './config/client-config';

type Props = {
	params: { slug: string };
	commentsOrder?: string;
};

// Medium post cards on home page
export async function getLatestPostOne(): Promise<Post> {
	return createClient(readClient)
		.fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary[]{
    ...,
  },
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->,
  tag[]->,  
  }[0]`);
}

export async function getLatestPostTwo(): Promise<Post> {
	return createClient(readClient)
		.fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary[]{
    ...,
  },
  summaryShort,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->,
  tag[]->,  
  }[1]`);
}

export async function getLatestPostThree(): Promise<Post> {
	return createClient(readClient)
		.fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary[]{
    ...,
  },
  summaryShort,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->,
  tag[]->,  
  }[2]`);
}

export async function getLatestPostFour(): Promise<Post> {
	return createClient(readClient)
		.fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary[]{
    ...,
  },
  summaryShort,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->,
  tag[]->,  
  }[3]`);
}

// Small post cards on home page
export async function getPostsSmallCard(): Promise<Post[]> {
	return createClient(readClient)
		.fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..150], "") + "...",
  summary,
  summaryShort,
  author[]->,
  category[]->,
  tag[]->,  
  }[3..5]`);
}

export async function getPostsArchive(): Promise<Post[]> {
	return createClient(readClient)
		.fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary,
  summaryShort,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..150], "") + "...",
  author[]->,
  category[]->,
  tag[]->,
  }`);
}

// Medium post cards on home page

export async function getLatestPostMini(): Promise<Post[]> {
	return createClient(readClient).fetch(groq`
    *[_type == "post"] | order(_createdAt desc)[0..4] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      summary[]{
        ...,
      },
      summaryShort,
      "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
      author[]->,
      category[]->,
      tag[]->,  
    }
  `);
}

export async function getCategories(): Promise<Category[]> {
	return createClient(readClient)
		.fetch(groq`*[_type == "category"] | order(_createdAt desc){
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  description 
  }`);
}

export async function getTags(): Promise<Post[]> {
	return createClient(readClient)
		.fetch(groq`*[_type == "tag"] | order(_createdAt desc){
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  description 
  }`);
}

export async function getAuthor(): Promise<Author[]> {
	return createClient(readClient)
		.fetch(groq`*[_type == "author"] | order(_createdAt desc){
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  description 
  }`);
}

export async function createArticle({
	params: { slug },
	commentsOrder = 'desc',
}: Props): Promise<Post> {
	const revalidate = 20; //Time interval
	const query = groq`*[_type=="post" && slug.current == $slug][0]
    {
  _id,
  _createdAt,
  name,
 
  "slug": slug.current,
  image{...},
  "caption": image.caption,
  url,
  content[]{
  ...,
  _type == 'image' => {
    ...,
    caption, 
    asset->,
  },
  markDefs[]{
    ...,
    _type == "internalLink" => {
      "reference": @.reference->{
        "slug": slug.current
      }
    }
  }
},
content2[]{
  ...,
  _type == 'image' => {
    ...,
    caption, 
    asset->,
  },
  markDefs[]{
    ...,
    _type == "internalLink" => {
      "reference": @.reference->{
        "slug": slug.current
      }
    }
  }
},
      affiliateBanners[]->{
        _id,
        title,
        description,
        "imageUrl": imageUrl,
        altText,
        link
      },
      affiliateMiddleBanners[]->{
    _id,
    title,
		description,
    "imageUrl": imageUrl,
    altText,
    link
  },
   affiliateMobileBanners[]->{
  _id,
  title,
  description,
  "imageUrl": imageUrl,
  altText,
  link,
  trackingPixel
},
      faqs[]->{
        _id,
        question,
        answer
      },

  "comments": *[_type == "comment" && post._ref == ^._id] | order(_createdAt ${commentsOrder}){
			name,
			comment,
      isPinned,
			_createdAt,
		},
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->{title, "slug": slug.current,},
  tag[]->{title, "slug": slug.current,},
  }`;

	const data = await createClient(readClient).fetch(query, {
		slug,
		revalidate,
	});

	return data;
}

// Fetch the About Us Page
export async function getAboutPage(): Promise<AboutUs> {
	return createClient(readClient).fetch(
		groq`
      *[_type == "aboutUs"][0] {
        _id,
        _createdAt,

        // Primary Content Section
        content[]{
          ...,
          _type == 'image' => {
            "url": asset->url,
            caption,
            altText
          },
          markDefs[]{
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current
            }
          }
        },

        // Second Content Section
        content2[]{
          ...,
          _type == 'image' => {
            "url": asset->url,
            caption,
            altText
          },
          markDefs[]{
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current
            }
          }
        },

        // Third Content Section
        content3[]{
          ...,
          _type == 'image' => {
            "url": asset->url,
            caption,
            altText
          },
          markDefs[]{
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current
            }
          }
        },

        // Fourth Content Section
        content4[]{
          ...,
          _type == 'image' => {
            "url": asset->url,
            caption,
            altText
          },
          markDefs[]{
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug.current
            }
          }
        },

        // Primary Image
        "image": {
          "url": image.asset->url,
          "altText": image.alt,
          "caption": image.caption
        },

        // Secondary Image
        "image2": {
          "url": image2.asset->url,
          "altText": image2.alt,
          "caption": image2.caption
        },

        // Third Image
        "image3": {
          "url": image3.asset->url,
          "altText": image3.alt,
          "caption": image3.caption
        }
      }
    `
	);
}

// Fetch most popular posts
export async function getMostPopularPostMini(): Promise<Post[]> {
	return createClient(readClient).fetch(groq`
    *[_type == "post" && defined(views)] | order(views desc)[0..5] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      summary[]{
        ...,
      },
      summaryShort,
      "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
      views,
      author[]->,
      category[]->,
      tag[]->,
    }
  `);
}
// Fetch most popular posts
export async function getMostPopularMobile(): Promise<Post[]> {
	return createClient(readClient).fetch(groq`
    *[_type == "post" && defined(views)] | order(views desc)[0..5] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      summary[]{
        ...,
      },
      summaryShort,
      "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
      views,
      author[]->,
      category[]->,
      tag[]->,
    }
  `);
}
