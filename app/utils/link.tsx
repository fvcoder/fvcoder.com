import { LinkIcon } from "@heroicons/react/solid";
import { useEffect, useRef, useState } from "react";

interface APIResponse {
  title: string | null;
  description: string | null;
  image: string | null;
  siteName: string | null;
  hostname: string | null;
}

export function LinkExternal({ href }: { href: string }): JSX.Element | null {
  const proxyLink = "https://rlp-proxy.herokuapp.com/v2?url=";

  const _isMounted = useRef(true);
  const [imgError, setImgError] = useState(false);
  const [metadata, setMetadata] = useState<APIResponse | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    _isMounted.current = true;
    setLoading(true);

    fetch(proxyLink + href)
      .then((res) => res.json())
      .then((res) => {
        if (_isMounted.current) {
          setMetadata(res.metadata as unknown as APIResponse);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        console.error(err);
        console.error("No metadata could be found for the given URL.");
        if (_isMounted.current) {
          setMetadata(null);
          setLoading(false);
        }
      });

    return () => {
      _isMounted.current = false;
    };
  }, [href]);

  if (loading) {
    return (
      <a
        href={href}
        className="flex gap-2 w-full items-center"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <LinkIcon className="w-5 h-5" />
        </span>
        {href}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="flex items-center gap-4 border border-slate-300 p-2 rounded-lg"
      target="_blank"
      rel="noreferrer"
    >
      <div className="w-16 h-16 flex-none">
        {metadata?.image ? (
          imgError ? (
            <div className="w-full h-full flex items-center justify-center">
              <LinkIcon className="w-5 h-5" />
            </div>
          ) : (
            <img
              className="w-full h-full object-cover	m-0"
              src={metadata?.image || ""}
              onError={() => {
                setImgError(true);
              }}
              alt={""}
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <LinkIcon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="no-underline min-w-0 grow">
        <h4 className=" my-0 truncate">{metadata?.title}</h4>
        <p
          className="text-sm mb-0 text-slate-500 truncate"
          style={{ textDecoration: "none" }}
        >
          {metadata?.description || href}
        </p>
        <small
          className="text-xs mb-0 text-slate-500 truncate"
          style={{ textDecoration: "none" }}
        >
          {metadata?.siteName ? `${metadata?.siteName} |` : ""}{" "}
          {metadata?.hostname}
        </small>
      </div>
    </a>
  );
}
