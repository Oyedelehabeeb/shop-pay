async function SearchPage({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } = await searchParams;
  return <div>Search page {query}</div>;
}

export default SearchPage;
