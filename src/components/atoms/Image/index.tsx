import { Spinner } from "@components/atoms/Spinner";
import { useState } from "react";
import "./Image.scss";

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: boolean;
  error?: (error: Error) => void;
  lazyLoad?: boolean;
  objectFit?: "cover" | "contain" | "fill";
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = true,
  error,
  lazyLoad,
  objectFit = "cover",
}) => {
  const [isLoading, setIsLoading] = useState(loading);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    if (error) {
      error(new Error("Error loading image"));
    }
  };

  return (
    <div className="image_container" style={{ width, height }}>
      {isLoading && <Spinner />}
      {hasError && <div>Error loading image</div>}
      <img
        className={`image image__${objectFit}`}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazyLoad ? "lazy" : "eager"}
      />
    </div>
  );
};
