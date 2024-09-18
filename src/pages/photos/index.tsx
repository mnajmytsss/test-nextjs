import useSWR from "swr";
import axios from "axios";
import Image from "next/image";

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  console.log(response);

  return response.data;
};

function Index() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/photos",
    fetcher,
    {
      revalidateOnFocus: false,
      // refreshInterval: 1,
    }
  );

  console.log("data", data);
  console.log("error", error);
  console.log("loading", isLoading);

  if (error) return <h1>Error bos</h1>;
  if (isLoading) return <h1>Loading dulu</h1>;

  return (
    <div>
      <h1>Image page</h1>
      <button onClick={() => mutate()}>fetch ulang</button>
      {data.map((item: any) => (
        <div>
          <h1>{item.title}</h1>
          {/* <img src={item.url} /> */}
          <Image
            src={item.url}
            alt={item.title}
            // loading="lazy"
            priority={true}
            width="500"
            height="500"
          />
        </div>
      ))}
    </div>
  );
}

export default Index;
