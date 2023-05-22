import Link from "next/link";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className="">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="fs-3"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
      <div>Dheerakj</div>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <article className="m-4">
      <div className="">
        <div className="">
          <img
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4">{itemTextCol}</article>
  );

  return content;
}
