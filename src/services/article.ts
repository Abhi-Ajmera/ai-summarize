import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
	reducerPath: 'articleApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://article-data-extraction-and-summarization.p.rapidapi.com/',
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key', rapidApiKey);
			headers.set('X-RapidAPI-Host', 'article-data-extraction-and-summarization.p.rapidapi.com');

			return headers;
		},
	}),
	endpoints: (builder) => ({
		article: builder.query({
			query: (params) => `/article?url=${encodeURIComponent(params.articleUrl)}&summarize=true`,
		}),
	}),
});

export const { useLazyArticleQuery } = articleApi;
